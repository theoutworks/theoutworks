"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

export function CTA() {
  return (
    <section className="bg-dark relative overflow-hidden py-24">
      <MouseGlow />
      <div className="relative z-[2] mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-card border-dark-border relative overflow-hidden rounded-3xl border"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80"
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
            <div className="from-dark-card via-dark-card/80 to-dark-card/60 absolute inset-0 bg-gradient-to-t" />
          </div>

          <div className="relative z-10 p-6 text-center sm:p-12 md:p-20">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-6xl">
              Let&apos;s bring your vision to life
            </h2>
            <p className="text-muted mx-auto mb-8 max-w-xl leading-relaxed">
              Ready to build something extraordinary? Let&apos;s talk about your
              project and find the perfect solution.
            </p>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dim inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-black transition"
            >
              Book a discovery call <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
