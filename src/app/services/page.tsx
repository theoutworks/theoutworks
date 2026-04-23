import Link from "next/link"
import { ArrowRight, Bot, Code, Database, Globe } from "lucide-react"

export const metadata = { title: "Services | Momentumly" }

const services = [
  {
    id: "web-development",
    icon: <Globe className="text-accent h-8 w-8" />,
    title: "Full Stack Web Development",
    description:
      "We build robust, scalable web applications from front to back. Modern frameworks, performant APIs, and seamless user experiences — all tailored to your business needs.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    id: "ai-automation",
    icon: <Bot className="text-accent h-8 w-8" />,
    title: "AI & Automation",
    description:
      "Leverage the power of artificial intelligence and automation to streamline your workflows, reduce costs, and scale your business efficiently.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "data-scraping",
    icon: <Database className="text-accent h-8 w-8" />,
    title: "Data Scraping",
    description:
      "Extract valuable data from the web with our reliable, scalable scraping solutions. Get the insights you need to make data-driven decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "software-development",
    icon: <Code className="text-accent h-8 w-8" />,
    title: "Software Development",
    description:
      "Custom software solutions engineered for performance and reliability. From desktop apps to complex systems, we deliver production-ready code that scales.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80",
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          Our <span className="text-accent">Services</span>
        </h1>
        <p className="text-muted mb-16 max-w-2xl text-lg leading-relaxed">
          We offer a comprehensive range of digital services designed to help
          your brand stand out and succeed in the digital landscape.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-dark-card border-dark-border hover:border-muted/50 group overflow-hidden rounded-2xl border transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-dark-card via-dark-card/40 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="text-accent inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
