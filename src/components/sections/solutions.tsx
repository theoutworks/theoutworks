"use client"

import { motion } from "framer-motion"
import { Lightbulb, Settings, Users } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const solutions = [
  {
    icon: <Settings className="text-accent h-6 w-6" />,
    title: "Tailored solutions",
    description:
      "We take the time to understand your specific needs, challenges, and goals.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
  {
    icon: <Lightbulb className="text-accent h-6 w-6" />,
    title: "Innovative thinking",
    description:
      "We thrive on pushing boundaries, exploring ideas, and staying ahead of trends.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
  {
    icon: <Users className="text-accent h-6 w-6" />,
    title: "Collaborative approach",
    description:
      "From the initial concept to the final delivery, we work closely with you.",
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
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Impactful solutions
          </h2>
          <p className="text-muted mx-auto max-w-2xl leading-relaxed">
            We focus on more than just delivering a service; we create solutions
            that make a difference. Each project is crafted to align with your
            goals, bringing impact to the forefront.
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
              className="bg-dark-card border-dark-border hover:border-muted/50 group overflow-hidden rounded-2xl border transition"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-dark-card absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
              <div className="p-8 text-center">
                <div className="bg-accent/10 border-dark-border bg-dark-card relative z-10 mx-auto -mt-12 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
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
