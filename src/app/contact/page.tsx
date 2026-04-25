"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          Let&apos;s <span className="text-accent">talk</span>
        </h1>
        <p className="text-muted mb-16 max-w-2xl text-lg leading-relaxed">
          Ready to bring your vision to life? Get in touch and let&apos;s
          discuss your next project.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div id="contact-form">
            {submitted ? (
              <div className="bg-dark-card border-dark-border rounded-2xl border p-12 text-center">
                <div className="bg-accent/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <Send className="text-accent h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Message sent!</h3>
                <p className="text-muted">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-5"
              >
                <div>
                  <label className="mb-2 block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    required
                    className="bg-dark-card border-dark-border placeholder:text-muted focus:border-accent w-full rounded-xl border px-4 py-3 text-white transition focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="bg-dark-card border-dark-border placeholder:text-muted focus:border-accent w-full rounded-xl border px-4 py-3 text-white transition focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="bg-dark-card border-dark-border placeholder:text-muted focus:border-accent w-full resize-none rounded-xl border px-4 py-3 text-white transition focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-dim flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-semibold text-black transition"
                >
                  Send message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="text-accent h-5 w-5" />,
                label: "Email",
                value: "hello@theoutworks.com",
              },
              {
                icon: <Phone className="text-accent h-5 w-5" />,
                label: "Phone",
                value: "+1 (555) 123-4567",
              },
              {
                icon: <MapPin className="text-accent h-5 w-5" />,
                label: "Location",
                value: "Available worldwide, remotely",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-dark-card border-dark-border flex items-center gap-4 rounded-2xl border p-6"
              >
                <div className="bg-accent/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-muted text-xs tracking-wider uppercase">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
