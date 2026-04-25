"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Sparkles } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const cards = [
  {
    icon: <Palette className="text-accent h-6 w-6" />,
    title: "Engineering software that drives growth",
    description:
      "We build high-performance web applications, APIs, and platforms that scale with your business. Clean architecture, modern stacks, and code that lasts.",
    link: "/services",
    linkText: "Explore services",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    icon: <Sparkles className="text-accent h-6 w-6" />,
    title: "Automating operations for maximum efficiency",
    description:
      "Our team identifies bottlenecks in your workflows and deploys intelligent automation — from AI agents to data pipelines — so your team can focus on what matters.",
    link: "/case-studies",
    linkText: "View case studies",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
]

export function About() {
  return (
    <section className="bg-dark relative overflow-hidden py-24">
      <MouseGlow />
      <div className="relative z-[2] mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted mb-4 text-sm tracking-wider uppercase"
        >
          Trusted by local businesses around you!
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-dark-card border-dark-border hover:border-muted/50 group overflow-hidden rounded-2xl border transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-dark-card via-dark-card/40 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
              <div className="flex flex-col justify-between p-8">
                <div>
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold">{card.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <Link
                  href={card.link}
                  className="text-accent mt-6 inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                >
                  {card.linkText} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-dark-card border-dark-border mt-6 overflow-hidden rounded-2xl border md:flex"
        >
          <div className="p-8 md:flex-1">
            <h3 className="mb-4 text-2xl font-bold">
              At The Outworks, our priority is to deliver{" "}
              <span className="text-accent">real results</span>
            </h3>
            <p className="text-muted max-w-xl leading-relaxed">
              We&apos;re committed to exceeding your expectations, delivering
              projects on time, within budget, and to a high standard.
            </p>
          </div>
          <div className="relative h-48 overflow-hidden md:h-auto md:w-80">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="Team collaboration"
              className="h-full w-full object-cover"
            />
            <div className="from-dark-card absolute inset-0 hidden bg-gradient-to-r via-transparent to-transparent md:block" />
            <div className="from-dark-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent md:hidden" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
