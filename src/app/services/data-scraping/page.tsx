import Link from "next/link";
import { ArrowRight, Database, Search, Filter, RefreshCw, ShieldCheck, Gauge } from "lucide-react";

export const metadata = { title: "Data Scraping | Momentumly" };

const features = [
  {
    icon: <Search className="w-6 h-6 text-accent" />,
    title: "Targeted Extraction",
    description: "We build scrapers that pull exactly the data you need — structured, clean, and ready for analysis.",
  },
  {
    icon: <Gauge className="w-6 h-6 text-accent" />,
    title: "High Volume & Speed",
    description: "Capable of processing millions of records efficiently with distributed scraping architecture.",
  },
  {
    icon: <Filter className="w-6 h-6 text-accent" />,
    title: "Data Cleaning & Formatting",
    description: "Raw data is transformed into structured formats — CSV, JSON, databases — ready for your pipeline.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-accent" />,
    title: "Scheduled & Real-Time",
    description: "Set it and forget it. Automated schedules keep your data fresh, or get real-time feeds as pages update.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-accent" />,
    title: "Compliance & Ethics",
    description: "We operate within legal boundaries, respecting robots.txt and terms of service while getting you the data you need.",
  },
  {
    icon: <Database className="w-6 h-6 text-accent" />,
    title: "Custom Pipelines",
    description: "End-to-end data pipelines that scrape, process, store, and deliver insights directly to your tools.",
  },
];

const dataSources = [
  "E-commerce product listings & pricing",
  "Job boards and recruitment platforms",
  "Real estate and property listings",
  "Social media profiles and engagement data",
  "Financial data and market trends",
  "Government and public records",
];

export default function DataScrapingPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <Link href="/services" className="text-sm text-muted hover:text-accent transition mb-4 inline-block">&larr; All Services</Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Data <span className="text-accent">Scraping</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Extract valuable data from the web with our reliable, scalable scraping solutions. Get the insights you need to make data-driven decisions.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Start your project <ArrowRight size={16} />
          </Link>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10">What we deliver</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-muted/50 transition">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sources */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Data sources we work with</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {dataSources.map((ds) => (
              <div key={ds} className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="text-sm font-medium">{ds}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border border-dark-border rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need data at scale?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">Tell us what data you need and we&apos;ll build a reliable pipeline to deliver it.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
