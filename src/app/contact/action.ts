"use server"

import nodemailer from "nodemailer"
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
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: {
        user: env.SMTP_USERNAME,
        pass: env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: env.SMTP_FROM,
      to: env.SMTP_TO,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, ``, `Message:`, message].join(
        "\n",
      ),
      html: `
        <h2>New Discovery Call Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return { success: true }
  } catch (err) {
    console.error("Failed to send email:", err)
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    }
  }
}
