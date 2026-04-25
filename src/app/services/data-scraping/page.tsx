import Link from "next/link"
import {
  ArrowRight,
  Database,
  Filter,
  Gauge,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react"

export const metadata = { title: "Data Scraping | The Outworks" }

const features = [
  {
    icon: <Search className="text-accent h-6 w-6" />,
    title: "Targeted Extraction",
    description:
      "We build scrapers that pull exactly the data you need — structured, clean, and ready for analysis.",
  },
  {
    icon: <Gauge className="text-accent h-6 w-6" />,
    title: "High Volume & Speed",
    description:
      "Capable of processing millions of records efficiently with distributed scraping architecture.",
  },
  {
    icon: <Filter className="text-accent h-6 w-6" />,
    title: "Data Cleaning & Formatting",
    description:
      "Raw data is transformed into structured formats — CSV, JSON, databases — ready for your pipeline.",
  },
  {
    icon: <RefreshCw className="text-accent h-6 w-6" />,
    title: "Scheduled & Real-Time",
    description:
      "Set it and forget it. Automated schedules keep your data fresh, or get real-time feeds as pages update.",
  },
  {
    icon: <ShieldCheck className="text-accent h-6 w-6" />,
    title: "Compliance & Ethics",
    description:
      "We operate within legal boundaries, respecting robots.txt and terms of service while getting you the data you need.",
  },
  {
    icon: <Database className="text-accent h-6 w-6" />,
    title: "Custom Pipelines",
    description:
      "End-to-end data pipelines that scrape, process, store, and deliver insights directly to your tools.",
  },
]

const dataSources = [
  "E-commerce product listings & pricing",
  "Job boards and recruitment platforms",
  "Real estate and property listings",
  "Social media profiles and engagement data",
  "Financial data and market trends",
  "Government and public records",
]

export default function DataScrapingPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <div className="mb-20 max-w-3xl">
          <Link
            href="/services"
            className="text-muted hover:text-accent mb-4 inline-block text-sm transition"
          >
            &larr; All Services
          </Link>
          <h1 className="mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
            Data <span className="text-accent">Scraping</span>
          </h1>
          <p className="text-muted mb-8 text-lg leading-relaxed">
            Extract valuable data from the web with our reliable, scalable
            scraping solutions. Get the insights you need to make data-driven
            decisions.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dim inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition"
          >
            Start your project <ArrowRight size={16} />
          </Link>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="mb-10 text-3xl font-bold">What we deliver</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-dark-card border-dark-border hover:border-muted/50 rounded-2xl border p-6 transition"
              >
                <div className="bg-accent/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sources */}
        <div className="mb-20">
          <h2 className="mb-10 text-3xl font-bold">
            Data sources we work with
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {dataSources.map((ds) => (
              <div
                key={ds}
                className="bg-dark-card border-dark-border flex items-center gap-3 rounded-xl border p-5"
              >
                <div className="bg-accent h-2 w-2 flex-shrink-0 rounded-full" />
                <p className="text-sm font-medium">{ds}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border-dark-border rounded-3xl border p-6 text-center sm:p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Need data at scale?
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-xl">
            Tell us what data you need and we&apos;ll build a reliable pipeline
            to deliver it.
          </p>
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
