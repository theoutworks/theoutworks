"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "On average, branding projects take 4-6 weeks, while web design and development projects can range from 8-12 weeks. We provide a detailed timeline and keep you informed throughout the project.",
  },
  {
    q: "What is the cost of working with you?",
    a: "Our pricing varies based on project scope and requirements. We offer competitive rates and provide detailed proposals after understanding your needs during an initial consultation.",
  },
  {
    q: "How involved will I be in the process?",
    a: "We believe in a collaborative approach. You'll be involved in key milestones, reviews, and decisions throughout the project. Regular check-ins ensure we stay aligned with your vision.",
  },
  {
    q: "Can you work with my existing brand?",
    a: "Absolutely! We can work with your existing brand guidelines or help refresh and evolve your brand identity while maintaining consistency with your established presence.",
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
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Your questions, answered
          </h2>
          <p className="text-muted leading-relaxed">
            Whether you&apos;re a new client or a long-time partner, we&apos;re
            here to help. Below are answers to the most common questions.
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
              className="border-dark-border overflow-hidden rounded-xl border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="hover:bg-dark-card flex w-full items-center justify-between p-5 text-left transition"
              >
                <span className="pr-4 font-medium">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-muted px-5 pb-5 text-sm leading-relaxed">
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
