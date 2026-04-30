import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = { title: "Projects | The Outworks" }

const projects = [
  {
    slug: "alto-automation",
    title: "Alto Automation",
    client: "Skylets",
    category: "Automation & Scraping",
    description:
      "End-to-end scraping and upload pipeline for the Alto property platform, eliminating days of manual work across hundreds of properties in 15+ UK cities.",
  },
  {
    slug: "future-offshore",
    title: "Future Offshore",
    client: "Future Offshore",
    category: "Web Development",
    description:
      "Full corporate web presence for an offshore engineering firm. Designed, built, and deployed to the edge on Cloudflare Workers.",
  },
]

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          Our <span className="text-accent">Projects</span>
        </h1>
        <p className="text-muted mb-16 max-w-2xl text-lg leading-relaxed">
          Here&apos;s what we&apos;ve built for clients, from automation
          pipelines that save days of manual work to full web platforms deployed
          to the edge.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="bg-dark-card border-dark-border hover:border-muted/50 group block rounded-2xl border p-8 transition"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="text-accent bg-accent/10 rounded-full px-3 py-1 text-xs">
                  {project.category}
                </span>
                <span className="text-muted text-xs">{project.client}</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
              <p className="text-muted mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <span className="text-accent inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
                View project <ArrowRight size={14} />
              </span>
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
