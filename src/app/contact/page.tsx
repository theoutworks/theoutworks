import { Mail, MapPin } from "lucide-react"

import { env } from "@/env"

import { ContactForm } from "./contact-form"

export default function ContactPage() {
  const contactEmail = env.ACS_TO

  return (
    <main className="pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="font-display mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          Let&apos;s <span className="text-accent">talk</span>
        </h1>
        <p className="text-muted mb-16 max-w-2xl text-lg leading-relaxed">
          Tell us what you&apos;re working on and we&apos;ll get back to you
          within 24 hours to set up a call.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="text-accent h-5 w-5" />,
                label: "Email",
                value: contactEmail,
              },
              {
                icon: <MapPin className="text-accent h-5 w-5" />,
                label: "Location",
                value: "Available worldwide, remotely",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card-glow bg-dark-card border-dark-border flex items-center gap-4 rounded-2xl border p-6"
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
