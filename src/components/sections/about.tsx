"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Code2, Cpu, Zap } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const cards = [
  {
    icon: <Code2 className="text-accent h-6 w-6" />,
    title: "Engineering that scales with you",
    description:
      "From MVPs to enterprise platforms — we build high-performance web apps, APIs, and systems using modern stacks. You focus on the product; we handle the code.",
    link: "/services",
    linkText: "Explore services",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    icon: <Cpu className="text-accent h-6 w-6" />,
    title: "Automation that frees your team",
    description:
      "We identify bottlenecks and deploy intelligent automation — AI agents, data pipelines, workflow engines — so your team stops drowning in repetitive tasks.",
    link: "/case-studies",
    linkText: "View case studies",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
]

const metrics = [
  { value: "200+", label: "Projects Delivered" },
  { value: "96%", label: "Client Retention" },
  { value: "4-8 wk", label: "Avg. Delivery" },
  { value: "15+", label: "Expert Engineers" },
]

export function About() {
  return (
    <section className="bg-dark relative overflow-hidden py-24">
      <MouseGlow />
      <div className="relative z-[2] mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-accent mb-3 text-xs font-medium tracking-widest uppercase">
            Why outsource to us
          </p>
          <h2 className="font-display mb-4 max-w-2xl text-3xl font-bold md:text-5xl">
            Your team shouldn&apos;t do{" "}
            <span className="text-accent">everything</span>
          </h2>
          <p className="text-muted max-w-2xl leading-relaxed">
            We become an extension of your team — handling the technical work so
            you can focus on strategy, customers, and growth.
          </p>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-card border-dark-border mb-8 grid grid-cols-2 gap-6 rounded-2xl border p-6 md:grid-cols-4 md:gap-8 md:p-8"
        >
          {metrics.map((m, i) => (
            <div key={m.label} className="text-center">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="font-display text-accent text-3xl font-bold md:text-4xl"
              >
                {m.value}
              </motion.p>
              <p className="text-muted mt-1 text-sm">{m.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-glow bg-dark-card border-dark-border group overflow-hidden rounded-2xl border transition"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                   fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-dark-card via-dark-card/40 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
              <div className="flex flex-col justify-between p-8">
                <div>
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="font-display mb-4 text-2xl font-bold">
                    {card.title}
                  </h3>
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
          className="card-glow bg-dark-card border-dark-border mt-6 overflow-hidden rounded-2xl border md:flex"
        >
          <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
            <div className="bg-accent/10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl">
              <Zap className="text-accent h-5 w-5" />
            </div>
            <h3 className="font-display mb-4 text-2xl font-bold">
              Built for results,{" "}
              <span className="text-accent">not billable hours</span>
            </h3>
            <p className="text-muted max-w-xl leading-relaxed">
              We&apos;re outcome-driven. Every project ships on time, within
              budget, and measured by the impact it creates for your business —
              not the hours we log.
            </p>
            <div className="mt-6 flex gap-6">
              {[
                { icon: <BarChart3 size={14} />, text: "ROI-focused delivery" },
                { icon: <Zap size={14} />, text: "Rapid iteration cycles" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="text-muted flex items-center gap-2 text-sm"
                >
                  <span className="text-accent">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-48 overflow-hidden md:h-auto md:w-80">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="Team collaboration"
                             fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
            <div className="from-dark-card absolute inset-0 hidden bg-gradient-to-r via-transparent to-transparent md:block" />
            <div className="from-dark-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent md:hidden" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
