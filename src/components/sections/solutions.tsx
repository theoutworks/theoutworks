"use client";

import { motion } from "framer-motion";
import { Settings, Lightbulb, Users } from "lucide-react";
import { MouseGlow } from "@/components/mouse-glow";

const solutions = [
  {
    icon: <Settings className="w-6 h-6 text-accent" />,
    title: "Tailored solutions",
    description:
      "We take the time to understand your specific needs, challenges, and goals.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-accent" />,
    title: "Innovative thinking",
    description:
      "We thrive on pushing boundaries, exploring ideas, and staying ahead of trends.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
  {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: "Collaborative approach",
    description:
      "From the initial concept to the final delivery, we work closely with you.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
];

export function Solutions() {
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
            Impactful solutions
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            We focus on more than just delivering a service; we create solutions
            that make a difference. Each project is crafted to align with your
            goals, bringing impact to the forefront.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-muted/50 transition group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
              </div>
              <div className="p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 -mt-12 relative z-10 border border-dark-border bg-dark-card">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
