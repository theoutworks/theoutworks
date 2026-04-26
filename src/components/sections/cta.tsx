"use client"

import Image from "next/image"
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
          className="card-glow bg-dark-card border-dark-border relative overflow-hidden rounded-3xl border"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80"
              alt=""
              fill
               sizes="(max-width: 1280px) 100vw, 1280px"
               loading="eager"
               className="object-cover opacity-15"
            />
            <div className="from-dark-card via-dark-card/80 to-dark-card/60 absolute inset-0 bg-gradient-to-t" />
          </div>

          <div className="relative z-10 p-6 text-center sm:p-12 md:p-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent mb-4 text-sm font-medium tracking-widest uppercase"
            >
              Ready to delegate?
            </motion.p>
            <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl md:text-6xl">
              Stop doing everything yourself
            </h2>
            <p className="text-muted mx-auto mb-8 max-w-xl leading-relaxed">
              Hand off the heavy lifting to our team. We&apos;ll build,
              automate, and optimize — while you focus on running your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-press bg-accent hover:bg-accent-dim inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-black transition"
              >
                Book a discovery call <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="btn-press border-dark-border hover:border-muted inline-flex items-center gap-2 rounded-full border px-8 py-4 text-lg font-medium text-white transition"
              >
                See our work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
