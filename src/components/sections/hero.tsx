"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { MouseGlow } from "@/components/mouse-glow";

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
        className="absolute -top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[80px]"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-dark)_60%)]" />
    </div>
  );
}

const PARTICLE_POSITIONS = [
  { left: 15, top: 35 }, { left: 72, top: 27 }, { left: 43, top: 45 },
  { left: 82, top: 67 }, { left: 26, top: 63 }, { left: 91, top: 81 },
  { left: 57, top: 12 }, { left: 8, top: 73 }, { left: 64, top: 52 },
  { left: 37, top: 88 }, { left: 95, top: 22 }, { left: 19, top: 94 },
  { left: 48, top: 38 }, { left: 76, top: 76 }, { left: 5, top: 18 },
  { left: 53, top: 59 }, { left: 88, top: 42 }, { left: 31, top: 8 },
  { left: 69, top: 91 }, { left: 14, top: 54 },
];

const PARTICLE_ANIM = [
  { y: -45, dur: 5.2, delay: 0.3 }, { y: -62, dur: 7.1, delay: 1.8 },
  { y: -38, dur: 4.5, delay: 3.2 }, { y: -55, dur: 6.3, delay: 0.7 },
  { y: -70, dur: 5.8, delay: 2.5 }, { y: -42, dur: 7.5, delay: 4.1 },
  { y: -58, dur: 4.8, delay: 1.2 }, { y: -48, dur: 6.7, delay: 3.8 },
  { y: -65, dur: 5.5, delay: 0.5 }, { y: -40, dur: 7.3, delay: 2.0 },
  { y: -52, dur: 4.3, delay: 4.5 }, { y: -60, dur: 6.1, delay: 1.5 },
  { y: -35, dur: 5.0, delay: 3.5 }, { y: -68, dur: 7.8, delay: 0.9 },
  { y: -44, dur: 4.6, delay: 2.8 }, { y: -57, dur: 6.5, delay: 4.3 },
  { y: -50, dur: 5.3, delay: 1.0 }, { y: -63, dur: 7.0, delay: 3.0 },
  { y: -46, dur: 4.9, delay: 2.2 }, { y: -55, dur: 6.8, delay: 0.1 },
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLE_POSITIONS.map((pos, i) => {
        const anim = PARTICLE_ANIM[i];
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/20"
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
        );
      })}
    </div>
  );
}

function MouseGlowHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      el.style.opacity = "1";
    };

    const leave = () => {
      el.style.opacity = "0";
    };

    const parent = el.parentElement;
    parent?.addEventListener("mousemove", handler);
    parent?.addEventListener("mouseleave", leave);
    return () => {
      parent?.removeEventListener("mousemove", handler);
      parent?.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
      style={{
        background:
          "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(200,255,0,0.04), transparent 60%)",
      }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/75" />
      </div>

      <GridBackground />
      <FloatingParticles />
      <MouseGlowHero />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-dark-border rounded-full px-2 py-1.5 pr-4 text-xs text-muted mb-8"
        >
          {/* Overlapping avatar stack */}
          <div className="flex -space-x-2">
            {[
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/68.jpg",
              "https://randomuser.me/api/portraits/men/75.jpg",
              "https://randomuser.me/api/portraits/women/90.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-7 h-7 rounded-full border-2 border-dark object-cover"
              />
            ))}
          </div>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Trusted by 200+ clients
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          Elevate your brand with{" "}
          <span className="text-accent">digital marketing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting unforgettable digital experiences for your brand through
          innovative design, strategy, marketing and storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition flex items-center gap-2"
          >
            Book a discovery call <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="border border-dark-border px-7 py-3.5 rounded-full font-medium text-white hover:border-muted transition"
          >
            Explore services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
