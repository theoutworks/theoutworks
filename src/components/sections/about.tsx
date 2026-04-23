"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Sparkles } from "lucide-react";
import { MouseGlow } from "@/components/mouse-glow";

const cards = [
  {
    icon: <Palette className="w-6 h-6 text-accent" />,
    title: "Engineering software that drives growth",
    description:
      "We build high-performance web applications, APIs, and platforms that scale with your business. Clean architecture, modern stacks, and code that lasts.",
    link: "/services",
    linkText: "Explore services",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-accent" />,
    title: "Automating operations for maximum efficiency",
    description:
      "Our team identifies bottlenecks in your workflows and deploys intelligent automation — from AI agents to data pipelines — so your team can focus on what matters.",
    link: "/case-studies",
    linkText: "View case studies",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
];

export function About() {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      <MouseGlow />
      <div className="max-w-7xl mx-auto px-6 relative z-[2]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted mb-4 uppercase tracking-wider"
        >
          Trusted by local businesses around you!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-muted/50 transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-muted leading-relaxed">{card.description}</p>
                </div>
                <Link
                  href={card.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all"
                >
                  {card.linkText} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-dark-card border border-dark-border rounded-2xl overflow-hidden md:flex"
        >
          <div className="p-8 md:flex-1">
            <h3 className="text-2xl font-bold mb-4">
              At Momentumly, our priority is to deliver{" "}
              <span className="text-accent">real results</span>
            </h3>
            <p className="text-muted leading-relaxed max-w-xl">
              We&apos;re committed to exceeding your expectations, delivering
              projects on time, within budget, and to a high standard.
            </p>
          </div>
          <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-card via-transparent to-transparent hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent md:hidden" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
