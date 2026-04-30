"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const testimonials = [
  {
    text: "We handed them a messy codebase and a tight deadline. They cleaned it up, shipped the feature, and somehow made it look easy. We've kept working with them since.",
    name: "Client",
    company: "SaaS Startup",
    role: "CTO",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "They automated a process that used to eat up two full days every week. Now it runs in the background and we barely think about it. Genuinely wish we'd done this sooner.",
    name: "Client",
    company: "Property Management",
    role: "Operations Lead",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "Most agencies talk a big game and then deliver something generic. These guys actually listened, asked hard questions, and built exactly what we needed. No fluff.",
    name: "Client",
    company: "Engineering Firm",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    text: "We didn't have the budget to hire a full dev team, so we outsourced to The Outworks instead. Best call we made. Shipped our product three months ahead of schedule.",
    name: "Client",
    company: "Early-Stage Startup",
    role: "CEO",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
]

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const paginate = useCallback((dir: number) => {
    setDirection(dir)
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }, [])

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [paginate])

  const t = testimonials[index]

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
            Testimonials
          </p>
          <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
            What our <span className="text-accent">clients say</span>
          </h2>
          <p className="text-muted mx-auto max-w-2xl leading-relaxed">
            Real feedback from teams who outsourced their engineering and
            automation work to us.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="card-glow bg-dark-card border-dark-border rounded-2xl border p-10 md:p-12"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Quote className="text-accent/30 h-8 w-8" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-light mb-8 text-lg leading-relaxed md:text-xl">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="border-dark-border h-12 w-12 rounded-full border-2 object-cover"
                  />
                  <div>
                    <p className="font-display font-semibold">{t.name}</p>
                    <p className="text-muted text-sm">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            className="bg-dark-card border-dark-border text-muted hover:border-accent/50 hover:text-accent absolute top-1/2 left-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition md:-left-14"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="bg-dark-card border-dark-border text-muted hover:border-accent/50 hover:text-accent absolute top-1/2 right-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition md:-right-14"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1)
                  setIndex(i)
                }}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "bg-accent w-7"
                    : "bg-dark-border hover:bg-muted w-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
