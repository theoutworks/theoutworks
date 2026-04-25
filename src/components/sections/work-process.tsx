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
    icon: <Phone className="h-6 w-6" />,
    title: "Discovery Call",
    description:
      "A deep dive into your business, goals, and current tech stack. We learn your tools, your team, your constraints. No pitching — just diagnosing.",
  },
  {
    number: "02",
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Operations Audit",
    description:
      "We map your workflows across all operations. We identify bottlenecks, manual processes, and gaps — then assess where improvements actually move the needle.",
  },
  {
    number: "03",
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Strategic Roadmap Delivery",
    description:
      "You receive a clear, actionable roadmap outlining what to build, what to skip, and in what order — tailored specifically to your business.",
  },
  {
    number: "04",
    icon: <Rocket className="h-6 w-6" />,
    title: "Build & Launch",
    description:
      "We execute the roadmap — designing, developing, and deploying your solution. You stay in the loop at every milestone until we go live.",
  },
]

const stats = [
  {
    icon: <FolderOpen className="text-accent h-5 w-5" />,
    title: "More than 10 projects",
    description:
      "Our portfolio showcases a selection of our most impactful client projects we worked on throughout our journey.",
    link: "/case-studies",
    linkText: "See our latest case studies",
  },
  {
    icon: <TrendingUp className="text-accent h-5 w-5" />,
    title: "Rapidly Growing",
    description:
      "Our commitment to excellence and creativity drives every project we deliver.",
    link: "/about#our-mission",
    linkText: "Read about our story",
  },
  {
    icon: <Heart className="text-accent h-5 w-5" />,
    title: "Driven by passion",
    description:
      "Our team lives and breathes creativity, bringing genuine passion to every project we contribute on.",
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
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            How we bring your project to life
          </h2>
          <p className="text-muted mx-auto max-w-2xl leading-relaxed">
            Clarity before code. We follow a proven process so every dollar you
            invest goes toward what actually matters.
          </p>
        </motion.div>

        {/* Timeline / Roadmap */}
        <div className="relative mx-auto mb-24 max-w-3xl">
          {/* Vertical line */}
          <div className="bg-dark-border absolute top-0 bottom-0 left-6 w-px md:left-8" />

          <div className="space-y-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative flex gap-6 md:gap-8"
              >
                {/* Step number circle */}
                <div className="bg-dark border-dark-border group-hover:border-accent relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors md:h-16 md:w-16">
                  <span className="text-accent text-sm font-bold md:text-base">
                    {step.number}
                  </span>
                </div>

                {/* Content card */}
                <div className="bg-dark-card border-dark-border group-hover:border-muted/50 mb-4 flex-1 rounded-2xl border p-6 transition md:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="text-accent">{step.icon}</div>
                    <h3 className="text-lg font-bold md:text-xl">
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

          {/* Terminal dot */}
          <div className="absolute -bottom-2 left-6 flex w-px justify-center md:left-8">
            <div className="bg-accent h-3 w-3 -translate-x-[5px] rounded-full md:-translate-x-[5px]" />
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
              className="bg-dark-card border-dark-border hover:border-muted/50 group flex flex-col justify-between rounded-2xl border p-6 transition"
            >
              <div>
                <div className="mb-4">{stat.icon}</div>
                <h4 className="mb-2 text-lg font-bold">{stat.title}</h4>
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
