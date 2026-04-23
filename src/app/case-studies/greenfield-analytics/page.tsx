import Link from "next/link";
import { ArrowRight, Users, TrendingUp, Zap, Target, Database, BarChart3 } from "lucide-react";

export const metadata = { title: "GreenField Analytics Case Study | Momentumly" };

const stats = [
  { label: "Data Points / Day", value: "2M+" },
  { label: "Actionable Insights", value: "3x" },
  { label: "Time to Insight", value: "-80%" },
  { label: "Data Sources", value: "50+" },
];

export default function GreenFieldPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/case-studies" className="text-sm text-muted hover:text-accent transition mb-4 inline-block">&larr; All Case Studies</Link>

        <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">Data Scraping</span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">GreenField Analytics</h1>
        <p className="text-muted text-lg leading-relaxed mb-12">
          Built a comprehensive data extraction pipeline that enabled real-time market intelligence and tripled actionable insights for strategic decision-making.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-dark-card border border-dark-border rounded-2xl p-5 text-center">
              <p className="text-2xl font-bold text-accent">{s.value}</p>
              <p className="text-xs text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-accent" /> The Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              GreenField Analytics needed to monitor pricing, trends, and competitor activity across dozens of markets in real-time. Their analysts were spending hours manually collecting data from scattered sources, leading to delayed insights and missed opportunities. They needed an automated, scalable solution that could handle millions of data points daily and deliver clean, structured data to their analytics tools.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" /> Our Approach
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We designed and built an end-to-end data scraping and processing infrastructure:
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
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-accent" /> The Results
            </h2>
            <p className="text-muted leading-relaxed">
              The pipeline went live within 6 weeks and immediately transformed GreenField&apos;s operations. Time-to-insight dropped by 80%, allowing analysts to focus on strategy instead of data gathering. Actionable insights tripled as the volume and freshness of data improved dramatically. The system now runs autonomously with 99.5% uptime, feeding real-time intelligence into their decision-making processes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" /> Client Testimonial
            </h2>
            <blockquote className="bg-dark-card border border-dark-border rounded-2xl p-8">
              <p className="text-light leading-relaxed italic mb-4">
                &ldquo;Momentumly brought our ideas to life in ways we never imagined. Their innovative approach and attention to detail made our project a huge success. Highly recommended.&rdquo;
              </p>
              <p className="font-semibold">Aarush Goyal</p>
              <p className="text-sm text-muted">GreenField Analytics</p>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-dark-card border border-dark-border rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need data at scale?</h2>
          <p className="text-muted mb-8">Let&apos;s build a pipeline that feeds your business intelligence.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
