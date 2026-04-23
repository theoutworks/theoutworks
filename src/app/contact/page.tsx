"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
          Let&apos;s <span className="text-accent">talk</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-16">
          Ready to bring your vision to life? Get in touch and let&apos;s
          discuss your next project.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div id="contact-form">
            {submitted ? (
              <div className="bg-dark-card border border-dark-border rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message sent!</h3>
                <p className="text-muted">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-black py-3.5 rounded-full font-semibold hover:bg-accent-dim transition flex items-center justify-center gap-2"
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
                icon: <Mail className="w-5 h-5 text-accent" />,
                label: "Email",
                value: "hello@momentumly.agency",
              },
              {
                icon: <Phone className="w-5 h-5 text-accent" />,
                label: "Phone",
                value: "+1 (555) 123-4567",
              },
              {
                icon: <MapPin className="w-5 h-5 text-accent" />,
                label: "Location",
                value: "Available worldwide, remotely",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">
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
  );
}
