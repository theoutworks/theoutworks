import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Clock,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

export const metadata = { title: "Prosper Labs Case Study | The Outworks" }

const stats = [
  { label: "Manual Work Reduced", value: "60%" },
  { label: "Response Time", value: "-75%" },
  { label: "Revenue Impact", value: "+$120K" },
  { label: "Workflows Deployed", value: "24" },
]

export default function ProsperLabsPage() {
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
          AI & Automation
        </span>
        <h1 className="mt-4 mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          Prosper Labs Ltd
        </h1>
        <p className="text-muted mb-12 text-lg leading-relaxed">
          Implemented intelligent automation workflows that reduced manual
          processes by 60% and improved operational efficiency across the entire
          organization.
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
              Prosper Labs was scaling rapidly, but their operations
              couldn&apos;t keep up. Lead handling, client onboarding, campaign
              reporting, and internal communication were all manual processes
              eating into delivery time. The team was spending more time on
              admin than on actual client work, and errors from manual data
              entry were causing friction.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Zap className="text-accent h-6 w-6" /> Our Approach
            </h2>
            <p className="text-muted mb-4 leading-relaxed">
              We audited their entire operation and deployed targeted AI and
              automation solutions:
            </p>
            <ul className="space-y-3">
              {[
                "Full operational audit identifying 30+ manual bottlenecks across departments",
                "AI-powered lead scoring and automated routing to the right sales reps",
                "Automated client onboarding sequences with smart document generation",
                "Real-time campaign reporting dashboards replacing manual spreadsheet updates",
                "AI chatbot for internal knowledge base, reducing repetitive support queries by 70%",
                "Custom integrations connecting their CRM, project management, and billing tools",
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
              Within 3 months, manual work dropped by 60%. Client response times
              improved by 75%, directly contributing to higher retention rates.
              The automations generated an estimated $120K in additional revenue
              through faster lead conversion and reduced churn. The team now
              spends their time on strategic, high-value work instead of
              administrative tasks.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Users className="text-accent h-6 w-6" /> Client Testimonial
            </h2>
            <blockquote className="bg-dark-card border-dark-border rounded-2xl border p-8">
              <p className="text-light mb-4 leading-relaxed italic">
                &ldquo;We came with a challenge, and they delivered beyond our
                expectations. Their team was not only creative but also
                strategic, helping us navigate the digital landscape with
                ease.&rdquo;
              </p>
              <p className="font-semibold">Liam Copping</p>
              <p className="text-muted text-sm">Prosper Labs Ltd</p>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border-dark-border mt-16 rounded-3xl border p-6 text-center sm:p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to automate your operations?
          </h2>
          <p className="text-muted mb-8">
            Let&apos;s find the biggest efficiency wins in your business.
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
