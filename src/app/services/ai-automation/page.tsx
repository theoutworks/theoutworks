import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Clock,
  Plug,
  Workflow,
} from "lucide-react"

export const metadata = { title: "AI & Automation | The Outworks" }

const features = [
  {
    icon: <Brain className="text-accent h-6 w-6" />,
    title: "Intelligent Workflows",
    description:
      "We design AI-powered workflows that think, adapt, and execute — replacing hours of manual work with smart automation.",
  },
  {
    icon: <Bot className="text-accent h-6 w-6" />,
    title: "Custom AI Agents",
    description:
      "Purpose-built AI agents that handle customer support, data processing, content generation, and more — 24/7.",
  },
  {
    icon: <Plug className="text-accent h-6 w-6" />,
    title: "Seamless Integration",
    description:
      "We plug into your existing tools — CRMs, ERPs, communication platforms — without forcing migrations or new software.",
  },
  {
    icon: <Clock className="text-accent h-6 w-6" />,
    title: "Time Savings",
    description:
      "Automate repetitive tasks and free up your team to focus on high-value work that actually moves the needle.",
  },
  {
    icon: <BarChart3 className="text-accent h-6 w-6" />,
    title: "Data-Driven Decisions",
    description:
      "AI models that analyze your data in real-time, surfacing insights and recommendations you can act on immediately.",
  },
  {
    icon: <Workflow className="text-accent h-6 w-6" />,
    title: "Process Optimization",
    description:
      "We audit your operations, identify bottlenecks, and deploy automation where it delivers the highest ROI.",
  },
]

const useCases = [
  "Automated lead qualification and routing",
  "AI-powered customer support chatbots",
  "Intelligent document processing and extraction",
  "Automated reporting and analytics dashboards",
  "Email and communication automation",
  "Predictive inventory and demand forecasting",
]

export default function AIAutomationPage() {
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
            AI & <span className="text-accent">Automation</span>
          </h1>
          <p className="text-muted mb-8 text-lg leading-relaxed">
            Leverage the power of artificial intelligence and automation to
            streamline your workflows, reduce costs, and scale your business
            efficiently.
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

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="mb-10 text-3xl font-bold">Common use cases</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((uc) => (
              <div
                key={uc}
                className="bg-dark-card border-dark-border flex items-center gap-3 rounded-xl border p-5"
              >
                <div className="bg-accent h-2 w-2 flex-shrink-0 rounded-full" />
                <p className="text-sm font-medium">{uc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border-dark-border rounded-3xl border p-6 text-center sm:p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to automate your operations?
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-xl">
            Let&apos;s identify the highest-impact automation opportunities in
            your business.
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
