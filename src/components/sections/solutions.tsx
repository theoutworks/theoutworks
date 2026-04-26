"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Lightbulb, Settings, Users } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const solutions = [
  {
    icon: <Settings className="text-accent h-6 w-6" />,
    title: "Tailored to your stack",
    description:
      "No cookie-cutter solutions. We learn your tools, constraints, and goals — then build exactly what fits.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
  {
    icon: <Lightbulb className="text-accent h-6 w-6" />,
    title: "Forward-thinking engineering",
    description:
      "We push boundaries with modern architectures, AI-first workflows, and tech that keeps you ahead of the curve.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
  {
    icon: <Users className="text-accent h-6 w-6" />,
    title: "Seamless collaboration",
    description:
      "We integrate into your workflow — same tools, same cadence, same standards. It feels like hiring, without the overhead.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
]

export function Solutions() {
  return (
    <section className="bg-dark relative overflow-hidden py-24">
      <MouseGlow />
      <div className="relative z-[2] mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-accent mb-3 text-xs font-medium tracking-widest uppercase">
            How we work
          </p>
          <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
            Impactful solutions
          </h2>
          <p className="text-muted mx-auto max-w-2xl leading-relaxed">
            We don&apos;t just deliver code — we deliver outcomes. Each project
            is designed to move your business forward.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glow bg-dark-card border-dark-border group overflow-hidden rounded-2xl border transition"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                   fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-dark-card absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
              <div className="p-8 text-center">
                <div className="bg-accent/10 border-dark-border bg-dark-card group-hover:border-accent/30 relative z-10 mx-auto -mt-12 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display mb-3 text-lg font-bold">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
