"use server"

import { z } from "zod"

import { env } from "@/env"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
})

export type ContactState = {
  success: boolean
  error?: string
} | null

/**
 * Build the HMAC-SHA256 signature required by Azure Communication Services REST API.
 * Uses Web Crypto API for Cloudflare Workers compatibility.
 */
async function signRequest(
  method: string,
  url: string,
  body: string,
  accessKey: string,
) {
  const parsedUrl = new URL(url)
  const pathAndQuery = parsedUrl.pathname + parsedUrl.search
  const utcNow = new Date().toUTCString()

  // SHA-256 hash of the body
  const bodyBuffer = new TextEncoder().encode(body)
  const hashBuffer = await crypto.subtle.digest("SHA-256", bodyBuffer)
  const contentHash = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)))

  const stringToSign = `${method}\n${pathAndQuery}\n${utcNow};${parsedUrl.host};${contentHash}`

  // HMAC-SHA256 signature
  const keyBuffer = Uint8Array.from(atob(accessKey), (c) => c.charCodeAt(0))
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyBuffer,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const sigBuffer = await crypto.subtle.sign(
    "HMAC",
    cryptoKey,
    new TextEncoder().encode(stringToSign),
  )
  const signature = btoa(String.fromCharCode(...new Uint8Array(sigBuffer)))

  return {
    date: utcNow,
    contentHash,
    authorization: `HMAC-SHA256 SignedHeaders=x-ms-date;host;x-ms-content-sha256&Signature=${signature}`,
  }
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  }

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message }
  }

  const { name, email, message } = parsed.data

  try {
    const endpoint = env.AZURE_ACS_ENDPOINT
    const url = `${endpoint}/emails:send?api-version=2023-03-31`

    const emailPayload = JSON.stringify({
      senderAddress: env.ACS_FROM,
      content: {
        subject: `New inquiry from ${name}`,
        plainText: [
          `Name: ${name}`,
          `Email: ${email}`,
          "",
          "Message:",
          message,
        ].join("\n"),
        html: `
          <h2>New Discovery Call Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      },
      recipients: {
        to: [{ address: env.ACS_TO }],
      },
      replyTo: [{ address: email }],
    })

    const { date, contentHash, authorization } = await signRequest(
      "POST",
      url,
      emailPayload,
      env.AZURE_ACS_ACCESS_KEY,
    )

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ms-date": date,
        "x-ms-content-sha256": contentHash,
        Authorization: authorization,
      },
      body: emailPayload,
    })

    if (!response.ok) {
      const errBody = await response.text()
      console.error("Azure Email API error:", response.status, errBody)
      return {
        success: false,
        error: "Failed to send message. Please try again.",
      }
    }

    return { success: true }
  } catch (err) {
    console.error("Failed to send email:", err)
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    }
  }
}
