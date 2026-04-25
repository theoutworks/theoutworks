import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

export const metadata = { title: "Case Studies | The Outworks" }

const studies = [
  {
    slug: "echowave-tech",
    title: "EchoWave Tech",
    category: "Full Stack Web Development",
    description:
      "A complete platform rebuild using modern web technologies that helped EchoWave Tech increase online engagement by 150%.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "eagle-aid",
    title: "Eagle Aid",
    category: "Software Development",
    description:
      "Built a high-converting e-commerce platform and product experience for a golf training aid startup, driving sales and global brand awareness.",
    image:
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
  },
  {
    slug: "prosper-labs",
    title: "Prosper Labs Ltd",
    category: "AI & Automation",
    description:
      "Implemented intelligent automation workflows that reduced manual processes by 60% and improved operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    slug: "greenfield-analytics",
    title: "GreenField Analytics",
    category: "Data Scraping",
    description:
      "Built a comprehensive data extraction pipeline that enabled real-time market intelligence and tripled actionable insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          Case <span className="text-accent">Studies</span>
        </h1>
        <p className="text-muted mb-16 max-w-2xl text-lg leading-relaxed">
          Explore our portfolio of impactful projects that have helped
          businesses grow, innovate, and stand out.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="bg-dark-card border-dark-border hover:border-muted/50 group block overflow-hidden rounded-2xl border transition"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-dark-card via-dark-card/30 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-accent bg-accent/10 rounded-full px-3 py-1 text-xs">
                    {study.category}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-muted transition group-hover:text-white"
                  />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{study.title}</h3>
                <p className="text-muted mb-4 text-sm leading-relaxed">
                  {study.description}
                </p>
                <span className="text-accent inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
                  Read case study <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dim inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition"
          >
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
