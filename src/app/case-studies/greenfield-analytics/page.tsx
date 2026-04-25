import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Database,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

export const metadata = {
  title: "GreenField Analytics Case Study | The Outworks",
}

const stats = [
  { label: "Data Points / Day", value: "2M+" },
  { label: "Actionable Insights", value: "3x" },
  { label: "Time to Insight", value: "-80%" },
  { label: "Data Sources", value: "50+" },
]

export default function GreenFieldPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/case-studies"
          className="text-muted hover:text-accent mb-4 inline-block text-sm transition"
        >
          &larr; All Case Studies
        </Link>

        <span className="text-accent bg-accent/10 rounded-full px-3 py-1 text-xs">
          Data Scraping
        </span>
        <h1 className="mt-4 mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          GreenField Analytics
        </h1>
        <p className="text-muted mb-12 text-lg leading-relaxed">
          Built a comprehensive data extraction pipeline that enabled real-time
          market intelligence and tripled actionable insights for strategic
          decision-making.
        </p>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-dark-card border-dark-border rounded-2xl border p-5 text-center"
            >
              <p className="text-accent text-2xl font-bold">{s.value}</p>
              <p className="text-muted mt-1 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Target className="text-accent h-6 w-6" /> The Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              GreenField Analytics needed to monitor pricing, trends, and
              competitor activity across dozens of markets in real-time. Their
              analysts were spending hours manually collecting data from
              scattered sources, leading to delayed insights and missed
              opportunities. They needed an automated, scalable solution that
              could handle millions of data points daily and deliver clean,
              structured data to their analytics tools.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Zap className="text-accent h-6 w-6" /> Our Approach
            </h2>
            <p className="text-muted mb-4 leading-relaxed">
              We designed and built an end-to-end data scraping and processing
              infrastructure:
            </p>
            <ul className="space-y-3">
              {[
                "Distributed scraping architecture capable of processing 2M+ data points per day",
                "50+ data source integrations across e-commerce, financial, and public data platforms",
                "Intelligent rate limiting and proxy rotation for reliable, ethical data collection",
                "Real-time data cleaning, deduplication, and normalization pipelines",
                "Automated delivery to their data warehouse with scheduled and on-demand refresh",
                "Custom dashboards and alerting for market anomalies and competitor price changes",
              ].map((item) => (
                <li
                  key={item}
                  className="text-muted flex items-start gap-3 text-sm"
                >
                  <div className="bg-accent mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <TrendingUp className="text-accent h-6 w-6" /> The Results
            </h2>
            <p className="text-muted leading-relaxed">
              The pipeline went live within 6 weeks and immediately transformed
              GreenField&apos;s operations. Time-to-insight dropped by 80%,
              allowing analysts to focus on strategy instead of data gathering.
              Actionable insights tripled as the volume and freshness of data
              improved dramatically. The system now runs autonomously with 99.5%
              uptime, feeding real-time intelligence into their decision-making
              processes.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Users className="text-accent h-6 w-6" /> Client Testimonial
            </h2>
            <blockquote className="bg-dark-card border-dark-border rounded-2xl border p-8">
              <p className="text-light mb-4 leading-relaxed italic">
                &ldquo;The Outworks brought our ideas to life in ways we never
                imagined. Their innovative approach and attention to detail made
                our project a huge success. Highly recommended.&rdquo;
              </p>
              <p className="font-semibold">Aarush Goyal</p>
              <p className="text-muted text-sm">GreenField Analytics</p>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border-dark-border mt-16 rounded-3xl border p-6 text-center sm:p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold">Need data at scale?</h2>
          <p className="text-muted mb-8">
            Let&apos;s build a pipeline that feeds your business intelligence.
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
