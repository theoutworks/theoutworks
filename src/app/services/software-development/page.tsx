import Link from "next/link"
import {
  ArrowRight,
  Blocks,
  Code,
  Cpu,
  GitBranch,
  MonitorSmartphone,
  TestTube,
} from "lucide-react"

export const metadata = { title: "Software Development | The Outworks" }

const features = [
  {
    icon: <Code className="text-accent h-6 w-6" />,
    title: "Custom Applications",
    description:
      "Built for your exact requirements, not an off-the-shelf tool with workarounds taped on top.",
  },
  {
    icon: <Cpu className="text-accent h-6 w-6" />,
    title: "System Architecture",
    description:
      "We design systems that grow with you. Clean architecture now saves you from expensive rewrites later.",
  },
  {
    icon: <Blocks className="text-accent h-6 w-6" />,
    title: "Microservices & APIs",
    description:
      "Loosely coupled services that talk to each other cleanly. Easy to extend, easy to debug, easy to maintain.",
  },
  {
    icon: <MonitorSmartphone className="text-accent h-6 w-6" />,
    title: "Cross-Platform",
    description:
      "Desktop, mobile, web, or CLI. We build for wherever your users are, with a consistent experience across platforms.",
  },
  {
    icon: <TestTube className="text-accent h-6 w-6" />,
    title: "Quality Assurance",
    description:
      "Unit tests, integration tests, end-to-end tests. Bugs get caught in CI, not by your users.",
  },
  {
    icon: <GitBranch className="text-accent h-6 w-6" />,
    title: "CI/CD & DevOps",
    description:
      "Automated build, test, and deploy pipelines. Push to main, ship to production. With confidence.",
  },
]

const techStack = [
  "TypeScript / JavaScript",
  "Python / Go / Rust",
  "React / Next.js / Vue",
  "Node.js / Express / FastAPI",
  "PostgreSQL / MongoDB / Redis",
  "AWS / GCP / Azure / Docker",
]

export default function SoftwareDevelopmentPage() {
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
            Software <span className="text-accent">Development</span>
          </h1>
          <p className="text-muted mb-8 text-lg leading-relaxed">
            When off-the-shelf tools don&apos;t cut it, we build custom software
            that does exactly what you need. APIs, internal tools, integrations,
            CLI apps. Production-ready and built to last.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dim inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition"
          >
            Describe your problem <ArrowRight size={16} />
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

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="mb-10 text-3xl font-bold">Our tech stack</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="bg-dark-card border-dark-border flex items-center gap-3 rounded-xl border p-5"
              >
                <div className="bg-accent h-2 w-2 flex-shrink-0 rounded-full" />
                <p className="text-sm font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border-dark-border rounded-3xl border p-6 text-center sm:p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Got a problem that needs custom software?
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-xl">
            Tell us what you&apos;re trying to solve and we&apos;ll figure out
            the right architecture.
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
