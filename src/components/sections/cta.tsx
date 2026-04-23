"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MouseGlow } from "@/components/mouse-glow";

export function CTA() {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      <MouseGlow />
      <div className="max-w-7xl mx-auto px-6 relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-dark-card border border-dark-border rounded-3xl overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/80 to-dark-card/60" />
          </div>

          <div className="relative z-10 p-6 sm:p-12 md:p-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              Let&apos;s bring your vision to life
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Ready to build something extraordinary? Let&apos;s talk about your project and find the perfect solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-dim transition"
            >
              Book a discovery call <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
