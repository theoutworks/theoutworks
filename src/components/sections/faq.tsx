"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const faqs = [
  {
    q: "How does working with you actually work?",
    a: "We start with a discovery call to understand what you need. From there, we scope the work, give you a clear timeline, and get going. You'll get weekly updates, a shared project board, and milestone check-ins. Think of it as adding a senior engineering team without the hiring process.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on what we're building. A marketing site usually takes 4-6 weeks. Software and automation projects run 6-12 weeks depending on complexity. We'll give you a detailed timeline upfront so there are no surprises.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is based on project scope. No hourly billing, no surprise invoices. After our initial call, you'll get a proposal with clear deliverables, milestones, and a fixed price. You'll know exactly what you're paying for before we start.",
  },
  {
    q: "How much of my time will this take?",
    a: "Not much. We handle the day-to-day work and only loop you in for feedback at key milestones. Most clients spend about 1-2 hours a week on check-ins. You set the level of involvement that works for you.",
  },
  {
    q: "Can you work with our existing codebase and tools?",
    a: "Yes. We'll work in your repo, your CI/CD pipeline, your project management tool, whatever your team already uses. No forced migrations, no new platforms to learn.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-dark relative overflow-hidden py-24">
      <MouseGlow />
      <div className="relative z-[2] mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-accent mb-3 text-xs font-medium tracking-widest uppercase">
            FAQ
          </p>
          <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
            Your questions, answered
          </h2>
          <p className="text-muted leading-relaxed">
            Everything you need to know about outsourcing your work to us.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`border-dark-border overflow-hidden rounded-xl border transition-colors ${
                openIndex === i ? "border-accent/20" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="hover:bg-dark-card flex w-full items-center justify-between gap-4 p-5 text-left transition"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle
                    size={16}
                    className={`flex-shrink-0 transition-colors ${
                      openIndex === i ? "text-accent" : "text-muted"
                    }`}
                  />
                  <span className="font-display font-medium">{faq.q}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-muted flex-shrink-0 transition-transform ${
                    openIndex === i ? "text-accent rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <p className="text-muted px-5 pb-5 pl-12 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
