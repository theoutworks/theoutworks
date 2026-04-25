"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ClipboardList,
  FolderOpen,
  Heart,
  Lightbulb,
  Phone,
  Rocket,
  TrendingUp,
} from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const steps = [
  {
    number: "01",
    icon: <Phone className="h-5 w-5" />,
    title: "Discovery Call",
    description:
      "We learn your business, goals, and current stack. No pitching — just understanding what you need and whether we're the right fit.",
  },
  {
    number: "02",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Operations Audit",
    description:
      "We map your workflows, find bottlenecks, and identify where outsourcing the work will have the biggest impact.",
  },
  {
    number: "03",
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Strategic Roadmap",
    description:
      "You get a clear, actionable plan: what to build, what to skip, and in what order — tailored to your budget and timeline.",
  },
  {
    number: "04",
    icon: <Rocket className="h-5 w-5" />,
    title: "Build & Launch",
    description:
      "We execute — designing, developing, and deploying. You stay in the loop at every milestone until we go live.",
  },
]

const stats = [
  {
    icon: <FolderOpen className="text-accent h-5 w-5" />,
    title: "200+ projects shipped",
    description:
      "A portfolio of impactful client work across industries — from startups to enterprises.",
    link: "/case-studies",
    linkText: "See our latest work",
  },
  {
    icon: <TrendingUp className="text-accent h-5 w-5" />,
    title: "Rapidly growing",
    description:
      "Our commitment to excellence and delivery keeps clients coming back and referring others.",
    link: "/about#our-mission",
    linkText: "Read our story",
  },
  {
    icon: <Heart className="text-accent h-5 w-5" />,
    title: "Passion-driven team",
    description:
      "Engineers and strategists who genuinely care about your outcomes — not just closing tickets.",
    link: "/about#meet-the-team",
    linkText: "Meet the team",
  },
]

export function WorkProcess() {
  return (
    <section className="bg-dark relative overflow-hidden py-24">
      <MouseGlow />
      <div className="relative z-[2] mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-accent mb-3 block text-xs font-medium tracking-widest uppercase">
            Our Process
          </span>
          <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
            How we bring your project to life
          </h2>
          <p className="text-muted mx-auto max-w-2xl leading-relaxed">
            Clarity before code. We follow a proven process so every dollar you
            invest goes toward what actually matters.
          </p>
        </motion.div>

        {/* Horizontal timeline on desktop, vertical on mobile */}
        <div className="mb-24">
          {/* Desktop: horizontal */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="group relative"
                >
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="bg-dark-border absolute top-6 left-[calc(50%+28px)] h-px w-[calc(100%-28px)]">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
                        className="bg-accent/30 h-full w-full origin-left"
                      />
                    </div>
                  )}

                  <div className="flex flex-col items-center text-center">
                    {/* Number circle */}
                    <div className="bg-dark border-dark-border group-hover:border-accent relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors">
                      <span className="text-accent text-sm font-bold">
                        {step.number}
                      </span>
                    </div>

                    <div className="card-glow bg-dark-card border-dark-border rounded-2xl border p-6 transition">
                      <div className="text-accent mb-3">{step.icon}</div>
                      <h3 className="font-display mb-2 text-lg font-bold">
                        {step.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="relative mx-auto max-w-3xl md:hidden">
            <div className="bg-dark-border absolute top-0 bottom-0 left-6 w-px" />

            <div className="space-y-2">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="group relative flex gap-6"
                >
                  <div className="bg-dark border-dark-border group-hover:border-accent relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors">
                    <span className="text-accent text-sm font-bold">
                      {step.number}
                    </span>
                  </div>

                  <div className="bg-dark-card border-dark-border mb-4 flex-1 rounded-2xl border p-6 transition">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="text-accent">{step.icon}</div>
                      <h3 className="font-display text-lg font-bold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="absolute -bottom-2 left-6 flex w-px justify-center">
              <div className="bg-accent h-3 w-3 -translate-x-[5px] rounded-full" />
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glow bg-dark-card border-dark-border group flex flex-col justify-between rounded-2xl border p-6 transition"
            >
              <div>
                <div className="mb-4">{stat.icon}</div>
                <h4 className="font-display mb-2 text-lg font-bold">
                  {stat.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
              <Link
                href={stat.link}
                className="text-accent mt-4 inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
              >
                {stat.linkText} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
