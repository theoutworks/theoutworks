import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bot, Code, Database, Globe } from "lucide-react"

export const metadata = { title: "Services | The Outworks" }

const services = [
  {
    id: "web-development",
    icon: <Globe className="text-accent h-8 w-8" />,
    title: "Full Stack Web Development",
    description:
      "Marketing sites, web apps, dashboards. We build the whole thing from front to back. You get clean code, fast load times, and something your users actually enjoy using.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    id: "ai-automation",
    icon: <Bot className="text-accent h-8 w-8" />,
    title: "AI & Automation",
    description:
      "Got a process that eats up hours every week? We turn it into something that runs itself. AI agents, workflow automation, and integrations that plug into the tools you already use.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "data-scraping",
    icon: <Database className="text-accent h-8 w-8" />,
    title: "Data Scraping",
    description:
      "Need pricing data, property listings, or market intelligence? We build scrapers that pull exactly what you need, cleaned, structured, and delivered to your pipeline on a schedule.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "software-development",
    icon: <Code className="text-accent h-8 w-8" />,
    title: "Software Development",
    description:
      "When off-the-shelf tools don't cut it, we build custom software that does exactly what you need. APIs, internal tools, integrations. Production-ready and built to last.",
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
          Here&apos;s what we do. Each engagement is scoped, priced, and
          delivered as a complete project. No retainers, no open-ended
          timelines.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-dark-card border-dark-border hover:border-muted/50 group overflow-hidden rounded-2xl border transition"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
