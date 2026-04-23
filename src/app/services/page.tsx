import Link from "next/link";
import { ArrowRight, Globe, Bot, Database, Code } from "lucide-react";

export const metadata = { title: "Services | Momentumly" };

const services = [
  {
    id: "web-development",
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "Full Stack Web Development",
    description:
      "We build robust, scalable web applications from front to back. Modern frameworks, performant APIs, and seamless user experiences — all tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    id: "ai-automation",
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: "AI & Automation",
    description:
      "Leverage the power of artificial intelligence and automation to streamline your workflows, reduce costs, and scale your business efficiently.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "data-scraping",
    icon: <Database className="w-8 h-8 text-accent" />,
    title: "Data Scraping",
    description:
      "Extract valuable data from the web with our reliable, scalable scraping solutions. Get the insights you need to make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "software-development",
    icon: <Code className="w-8 h-8 text-accent" />,
    title: "Software Development",
    description:
      "Custom software solutions engineered for performance and reliability. From desktop apps to complex systems, we deliver production-ready code that scales.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
          Our <span className="text-accent">Services</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-16">
          We offer a comprehensive range of digital services designed to help
          your brand stand out and succeed in the digital landscape.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-muted/50 transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
              </div>
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
