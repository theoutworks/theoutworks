"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const faqs = [
  {
    q: "How does outsourcing to The Outworks actually work?",
    a: "After a discovery call, we audit your operations, create a roadmap, and start executing. You stay in the loop via weekly syncs, shared project boards, and milestone reviews. It's like adding a senior engineering team — without the hiring overhead.",
  },
  {
    q: "How long does a typical project take?",
    a: "Branding and design projects take 4-6 weeks. Web and software development ranges from 6-12 weeks depending on complexity. We provide detailed timelines upfront and keep you informed at every step.",
  },
  {
    q: "What does it cost to work with you?",
    a: "Pricing depends on project scope. We offer competitive, transparent rates with no hidden fees. After an initial consultation, you'll receive a detailed proposal with clear deliverables and milestones.",
  },
  {
    q: "How involved do I need to be?",
    a: "As much or as little as you want. We handle the heavy lifting, but involve you at key milestones for feedback and approvals. Most clients spend 1-2 hours per week on check-ins.",
  },
  {
    q: "Can you work with our existing codebase and tools?",
    a: "Absolutely. We integrate with your existing tech stack, workflows, and tools. Whether it's your repo, CI/CD pipeline, or project management tool — we adapt to how your team already works.",
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
