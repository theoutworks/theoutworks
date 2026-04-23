"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { MouseGlow } from "@/components/mouse-glow"

const testimonials = [
  {
    text: "They're a true partner in our growth. Their work has been instrumental in helping us reach new heights, and we look forward to continuing our commercial relationship.",
    name: "Farhan Ahmed",
    company: "EchoWave Tech",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Their team took the time to truly understand our vision and delivered a brand identity that exceeded our expectations. The feedback from our customers has been positive.",
    name: "Omeed Karimi",
    company: "Eagle Aid",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "Momentumly brought our ideas to life in ways we never imagined. Their innovative approach and attention to detail made our project a huge success. Highly recommended.",
    name: "Aarush Goyal",
    company: "Automation Company",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    text: "We came with a challenge, and they delivered beyond our expectations. Their team was not only creative but also strategic, helping us navigate the digital landscape with ease.",
    name: "Liam Copping",
    company: "Prosper Labs Ltd",
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
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Trusted by industry leaders and{" "}
            <span className="text-accent">loved by clients</span>
          </h2>
          <p className="text-muted mx-auto max-w-2xl leading-relaxed">
            At Momentumly, our clients&apos; success stories are our greatest
            achievement. Hear what our partners have to say.
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
                className="bg-dark-card border-dark-border rounded-2xl border p-10 md:p-12"
              >
                <Quote className="text-accent/20 mb-6 h-10 w-10" />
                <p className="text-light mb-8 text-lg leading-relaxed md:text-xl">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="border-dark-border h-12 w-12 rounded-full border-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-muted text-sm">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            className="bg-dark-card border-dark-border text-muted hover:border-muted absolute top-1/2 left-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition hover:text-white md:-left-14"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="bg-dark-card border-dark-border text-muted hover:border-muted absolute top-1/2 right-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition hover:text-white md:-right-14"
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
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index
                    ? "bg-accent w-7"
                    : "bg-dark-border hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
