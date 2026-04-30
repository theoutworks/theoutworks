import Link from "next/link"
import { ArrowRight, Bot, Globe, TrendingUp, Zap } from "lucide-react"

export const metadata = { title: "Alto Automation | The Outworks" }

export default function AltoAutomationPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/projects"
          className="text-muted hover:text-accent mb-4 inline-block text-sm transition"
        >
          &larr; All Projects
        </Link>

        <span className="text-accent bg-accent/10 rounded-full px-3 py-1 text-xs">
          Automation & Scraping
        </span>
        <h1 className="mt-4 mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          Alto Automation
        </h1>
        <p className="text-muted mb-4 text-sm">
          Client: <span className="text-white">Skylets</span>
        </p>
        <p className="text-muted mb-12 text-lg leading-relaxed">
          A property management company was spending days manually uploading
          hundreds of listings. We built a scraper and an automated uploader
          that turned the whole process into a single command.
        </p>

        {/* Content */}
        <div className="space-y-12">
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Globe className="text-accent h-6 w-6" /> The Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              Operators were uploading each property listing and its images
              one-by-one through the Alto web UI. With hundreds of properties
              across 15+ UK cities, every batch update consumed days of
              repetitive copy-paste work.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Zap className="text-accent h-6 w-6" /> Our Approach
            </h2>
            <p className="text-muted mb-4 leading-relaxed">
              We built two complementary tools that handle the full workflow:
            </p>
            <ul className="space-y-3">
              {[
                "Selenium-driven scraper that crawls a 4-level hierarchy (cities, properties, rooms, images) with parallel headless browsers. Handles thousands of pages without manual intervention",
                "Site-agnostic architecture: adding a new accommodation website means writing one config file, not rebuilding the scraper",
                "Python CLI uploader that reads Excel spreadsheets, validates everything, then automates the full Alto upload workflow end-to-end",
                "Fuzzy matching to map image folders to spreadsheet entries, catching mismatches before any browser automation runs so bad data never makes it to production",
                "Incremental JSON persistence: if a run gets interrupted, it picks up where it left off instead of starting over",
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
              <TrendingUp className="text-accent h-6 w-6" /> What It Achieved
            </h2>
            <ul className="space-y-3">
              {[
                "Turned days of manual uploading into a single CLI command. The team now runs batch updates in minutes instead of spending the better part of a week on them",
                "Scraped and organized thousands of images across multiple accommodation websites into a structured catalog by city, property, and room",
                "Caught data quality issues (missing images, misnamed folders, duplicate entries) automatically before anything touched the live platform",
                "Built for extensibility: adding a new source website takes one Python file, not a project",
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
              <Bot className="text-accent h-6 w-6" /> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Python 3.11+",
                "Selenium",
                "lxml",
                "openpyxl",
                "Pydantic",
                "rapidfuzz",
                "Headless Chromium",
                "argparse CLI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-dark-card border-dark-border rounded-full border px-3 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border-dark-border mt-16 rounded-3xl border p-6 text-center sm:p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold">
            Have a process that needs automating?
          </h2>
          <p className="text-muted mb-8">
            Let&apos;s talk about what&apos;s eating up your team&apos;s time.
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
