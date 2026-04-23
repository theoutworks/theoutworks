"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FolderOpen, TrendingUp, Heart, Phone, ClipboardList, Lightbulb, Rocket } from "lucide-react";
import { MouseGlow } from "@/components/mouse-glow";

const steps = [
  {
    number: "01",
    icon: <Phone className="w-6 h-6" />,
    title: "Discovery Call",
    description:
      "A deep dive into your business, goals, and current tech stack. We learn your tools, your team, your constraints. No pitching — just diagnosing.",
  },
  {
    number: "02",
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Operations Audit",
    description:
      "We map your workflows across all operations. We identify bottlenecks, manual processes, and gaps — then assess where improvements actually move the needle.",
  },
  {
    number: "03",
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Strategic Roadmap Delivery",
    description:
      "You receive a clear, actionable roadmap outlining what to build, what to skip, and in what order — tailored specifically to your business.",
  },
  {
    number: "04",
    icon: <Rocket className="w-6 h-6" />,
    title: "Build & Launch",
    description:
      "We execute the roadmap — designing, developing, and deploying your solution. You stay in the loop at every milestone until we go live.",
  },
];

const stats = [
  {
    icon: <FolderOpen className="w-5 h-5 text-accent" />,
    title: "More than 10 projects",
    description:
      "Our portfolio showcases a selection of our most impactful client projects we worked on throughout our journey.",
    link: "/case-studies",
    linkText: "See our latest case studies",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-accent" />,
    title: "Rapidly Growing",
    description:
      "Our commitment to excellence and creativity drives every project we deliver.",
    link: "/about#our-mission",
    linkText: "Read about our story",
  },
  {
    icon: <Heart className="w-5 h-5 text-accent" />,
    title: "Driven by passion",
    description:
      "Our team lives and breathes creativity, bringing genuine passion to every project we contribute on.",
    link: "/about#meet-the-team",
    linkText: "Meet the team",
  },
];

export function WorkProcess() {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      <MouseGlow />
      <div className="max-w-7xl mx-auto px-6 relative z-[2]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-accent uppercase tracking-widest font-medium mb-3 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How we bring your project to life
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Clarity before code. We follow a proven process so every dollar you
            invest goes toward what actually matters.
          </p>
        </motion.div>

        {/* Timeline / Roadmap */}
        <div className="relative max-w-3xl mx-auto mb-24">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-dark-border" />

          <div className="space-y-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative flex gap-6 md:gap-8 group"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-dark border-2 border-dark-border group-hover:border-accent transition-colors flex items-center justify-center">
                  <span className="text-sm md:text-base font-bold text-accent">
                    {step.number}
                  </span>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 mb-4 group-hover:border-muted/50 transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-accent">{step.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal dot */}
          <div className="absolute left-6 md:left-8 -bottom-2 w-px flex justify-center">
            <div className="w-3 h-3 rounded-full bg-accent -translate-x-[5px] md:-translate-x-[5px]" />
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col justify-between hover:border-muted/50 transition group"
            >
              <div>
                <div className="mb-4">{stat.icon}</div>
                <h4 className="text-lg font-bold mb-2">{stat.title}</h4>
                <p className="text-sm text-muted leading-relaxed">
                  {stat.description}
                </p>
              </div>
              <Link
                href={stat.link}
                className="mt-4 inline-flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all"
              >
                {stat.linkText} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
