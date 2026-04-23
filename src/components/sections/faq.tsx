"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MouseGlow } from "@/components/mouse-glow";

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
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      <MouseGlow />
      <div className="max-w-3xl mx-auto px-6 relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
              className="border border-dark-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-card transition"
              >
                <span className="font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-muted transition-transform ${
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
                    <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
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
  );
}
