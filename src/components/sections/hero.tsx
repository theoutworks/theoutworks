"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="bg-accent/[0.06] absolute -top-1/4 left-1/4 h-[600px] w-[600px] rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="bg-accent/[0.04] absolute -top-1/3 right-1/4 h-[500px] w-[500px] rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="bg-accent/[0.03] absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-dark)_70%)]" />
    </div>
  )
}

const PARTICLE_POSITIONS = [
  { left: 15, top: 35 },
  { left: 72, top: 27 },
  { left: 43, top: 45 },
  { left: 82, top: 67 },
  { left: 26, top: 63 },
  { left: 91, top: 81 },
  { left: 57, top: 12 },
  { left: 8, top: 73 },
  { left: 64, top: 52 },
  { left: 37, top: 88 },
  { left: 95, top: 22 },
  { left: 19, top: 94 },
  { left: 48, top: 38 },
  { left: 76, top: 76 },
  { left: 5, top: 18 },
  { left: 53, top: 59 },
  { left: 88, top: 42 },
  { left: 31, top: 8 },
  { left: 69, top: 91 },
  { left: 14, top: 54 },
]

const PARTICLE_ANIM = [
  { y: -45, dur: 5.2, delay: 0.3 },
  { y: -62, dur: 7.1, delay: 1.8 },
  { y: -38, dur: 4.5, delay: 3.2 },
  { y: -55, dur: 6.3, delay: 0.7 },
  { y: -70, dur: 5.8, delay: 2.5 },
  { y: -42, dur: 7.5, delay: 4.1 },
  { y: -58, dur: 4.8, delay: 1.2 },
  { y: -48, dur: 6.7, delay: 3.8 },
  { y: -65, dur: 5.5, delay: 0.5 },
  { y: -40, dur: 7.3, delay: 2.0 },
  { y: -52, dur: 4.3, delay: 4.5 },
  { y: -60, dur: 6.1, delay: 1.5 },
  { y: -35, dur: 5.0, delay: 3.5 },
  { y: -68, dur: 7.8, delay: 0.9 },
  { y: -44, dur: 4.6, delay: 2.8 },
  { y: -57, dur: 6.5, delay: 4.3 },
  { y: -50, dur: 5.3, delay: 1.0 },
  { y: -63, dur: 7.0, delay: 3.0 },
  { y: -46, dur: 4.9, delay: 2.2 },
  { y: -55, dur: 6.8, delay: 0.1 },
]

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLE_POSITIONS.map((pos, i) => {
        const anim = PARTICLE_ANIM[i]
        return (
          <motion.div
            key={i}
            className="bg-accent/20 absolute h-1 w-1 rounded-full"
            style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
            animate={{
              y: [0, anim.y, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: anim.dur,
              repeat: Infinity,
              delay: anim.delay,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}

function MouseGlowHero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      el.style.setProperty("--my", `${e.clientY - rect.top}px`)
      el.style.opacity = "1"
    }

    const leave = () => {
      el.style.opacity = "0"
    }

    const parent = el.parentElement
    parent?.addEventListener("mousemove", handler)
    parent?.addEventListener("mouseleave", leave)
    return () => {
      parent?.removeEventListener("mousemove", handler)
      parent?.removeEventListener("mouseleave", leave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(200,255,0,0.04), transparent 60%)",
      }}
    />
  )
}

const VALUE_PROPS = [
  "Software Development",
  "AI & Automation",
  "Operations & Strategy",
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
          alt=""
          fill
           sizes="100vw"
           className="object-cover"
        />
        <div className="bg-dark/80 absolute inset-0" />
      </div>

      <GridBackground />
      <FloatingParticles />
      <MouseGlowHero />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mb-6 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-7xl"
        >
          Outsource <span className="text-accent">your work.</span>
          <br />
          <span className="text-muted-light text-2xl font-medium tracking-normal sm:text-3xl md:text-4xl">
            Focus on what matters.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted mx-auto mb-8 max-w-xl text-lg leading-relaxed"
        >
          We handle the engineering, automation, and digital operations — so
          your team can focus on strategy, customers, and growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="btn-press bg-accent hover:bg-accent-dim flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition"
          >
            Book a discovery call <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="btn-press border-dark-border hover:border-muted rounded-full border px-7 py-3.5 font-medium text-white transition"
          >
            Explore services
          </Link>
        </motion.div>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {VALUE_PROPS.map((prop) => (
            <div
              key={prop}
              className="text-muted flex items-center gap-2 text-sm"
            >
              <CheckCircle size={14} className="text-accent" />
              {prop}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
