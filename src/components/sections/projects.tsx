"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const projects = [
  {
    slug: "alto-automation",
    title: "Alto Automation",
    client: "Skylets",
    category: "Automation & Scraping",
    description:
      "End-to-end scraping and upload pipeline for the Alto property platform — eliminating days of manual work across hundreds of properties in 15+ UK cities.",
  },
  {
    slug: "future-offshore",
    title: "Future Offshore",
    client: "Future Offshore",
    category: "Web Development",
    description:
      "Full corporate web presence for an offshore engineering firm — designed, built, and deployed to the edge on Cloudflare Workers.",
  },
]

export function Projects() {
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
            Our work
          </p>
          <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
            Recent projects
          </h2>
          <p className="text-muted mx-auto max-w-xl leading-relaxed">
            Real work we&apos;ve delivered for real clients.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="bg-dark-card border-dark-border hover:border-muted/50 group block rounded-2xl border p-8 transition"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-accent bg-accent/10 rounded-full px-3 py-1 text-xs">
                    {project.category}
                  </span>
                  <span className="text-muted text-xs">{project.client}</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                <p className="text-muted mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <span className="text-accent inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
                  View project <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="text-accent hover:text-accent-dim inline-flex items-center gap-2 text-sm font-medium transition"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
