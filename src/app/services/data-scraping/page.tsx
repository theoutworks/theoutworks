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
      "We build scrapers that pull exactly the fields you care about, structured, deduplicated, and ready for your database or spreadsheet.",
  },
  {
    icon: <Gauge className="text-accent h-6 w-6" />,
    title: "High Volume & Speed",
    description:
      "Distributed architecture that handles millions of pages without breaking. We scale up when you need volume.",
  },
  {
    icon: <Filter className="text-accent h-6 w-6" />,
    title: "Data Cleaning & Formatting",
    description:
      "Raw HTML becomes clean CSV, JSON, or database rows. We handle the parsing, deduplication, and normalization.",
  },
  {
    icon: <RefreshCw className="text-accent h-6 w-6" />,
    title: "Scheduled & Real-Time",
    description:
      "Run scrapes on a schedule (hourly, daily, weekly) or get real-time feeds as pages change. Your data stays fresh without manual effort.",
  },
  {
    icon: <ShieldCheck className="text-accent h-6 w-6" />,
    title: "Compliance & Ethics",
    description:
      "We respect robots.txt and terms of service. You get the data you need without legal headaches.",
  },
  {
    icon: <Database className="text-accent h-6 w-6" />,
    title: "Custom Pipelines",
    description:
      "Full pipelines that scrape, transform, store, and deliver data to your tools. Airtable, Google Sheets, your database, wherever you need it.",
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
            Need pricing data from competitors? Property listings across 50
            sites? Market intelligence updated daily? We build scrapers that
            pull exactly what you need, cleaned, structured, and delivered to
            your pipeline.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dim inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition"
          >
            Tell us what data you need <ArrowRight size={16} />
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
