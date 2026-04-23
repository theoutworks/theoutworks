"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { MouseGlow } from "@/components/mouse-glow";

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
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const t = testimonials[index];

  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      <MouseGlow />
      <div className="max-w-7xl mx-auto px-6 relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by industry leaders and{" "}
            <span className="text-accent">loved by clients</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            At Momentumly, our clients&apos; success stories are our greatest
            achievement. Hear what our partners have to say.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
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
                className="bg-dark-card border border-dark-border rounded-2xl p-10 md:p-12"
              >
                <Quote className="w-10 h-10 text-accent/20 mb-6" />
                <p className="text-lg md:text-xl text-light leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-dark-border"
                  />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-14 w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-muted hover:text-white hover:border-muted transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-14 w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-muted hover:text-white hover:border-muted transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
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
  );
}
