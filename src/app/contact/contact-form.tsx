"use client"

import { useActionState } from "react"
import { Loader2, Send } from "lucide-react"

import { submitContact } from "./action"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null)

  return (
    <div id="contact-form">
      {state?.success ? (
        <div className="bg-dark-card border-dark-border rounded-2xl border p-12 text-center">
          <div className="bg-accent/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
            <Send className="text-accent h-7 w-7" />
          </div>
          <h3 className="font-display mb-3 text-2xl font-bold">
            Message sent!
          </h3>
          <p className="text-muted">
            We&apos;ll get back to you within 24 hours to schedule your
            discovery call.
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="bg-dark-card border-dark-border placeholder:text-muted focus:border-accent w-full rounded-xl border px-4 py-3 text-white transition focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="bg-dark-card border-dark-border placeholder:text-muted focus:border-accent w-full rounded-xl border px-4 py-3 text-white transition focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="bg-dark-card border-dark-border placeholder:text-muted focus:border-accent w-full resize-none rounded-xl border px-4 py-3 text-white transition focus:outline-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {state?.error && <p className="text-error text-sm">{state.error}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="btn-press bg-accent hover:bg-accent-dim flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-semibold text-black transition disabled:opacity-60"
          >
            {isPending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send message <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
