import Link from "next/link";
import { ArrowRight, Users, TrendingUp, Zap, Target, Bot, Clock } from "lucide-react";

export const metadata = { title: "Prosper Labs Case Study | Momentumly" };

const stats = [
  { label: "Manual Work Reduced", value: "60%" },
  { label: "Response Time", value: "-75%" },
  { label: "Revenue Impact", value: "+$120K" },
  { label: "Workflows Deployed", value: "24" },
];

export default function ProsperLabsPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/case-studies" className="text-sm text-muted hover:text-accent transition mb-4 inline-block">&larr; All Case Studies</Link>

        <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">AI & Automation</span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">Prosper Labs Ltd</h1>
        <p className="text-muted text-lg leading-relaxed mb-12">
          Implemented intelligent automation workflows that reduced manual processes by 60% and improved operational efficiency across the entire organization.
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
              Prosper Labs was scaling rapidly, but their operations couldn&apos;t keep up. Lead handling, client onboarding, campaign reporting, and internal communication were all manual processes eating into delivery time. The team was spending more time on admin than on actual client work, and errors from manual data entry were causing friction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" /> Our Approach
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We audited their entire operation and deployed targeted AI and automation solutions:
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
              Within 3 months, manual work dropped by 60%. Client response times improved by 75%, directly contributing to higher retention rates. The automations generated an estimated $120K in additional revenue through faster lead conversion and reduced churn. The team now spends their time on strategic, high-value work instead of administrative tasks.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" /> Client Testimonial
            </h2>
            <blockquote className="bg-dark-card border border-dark-border rounded-2xl p-8">
              <p className="text-light leading-relaxed italic mb-4">
                &ldquo;We came with a challenge, and they delivered beyond our expectations. Their team was not only creative but also strategic, helping us navigate the digital landscape with ease.&rdquo;
              </p>
              <p className="font-semibold">Liam Copping</p>
              <p className="text-sm text-muted">Prosper Labs Ltd</p>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-dark-card border border-dark-border rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to automate your operations?</h2>
          <p className="text-muted mb-8">Let&apos;s find the biggest efficiency wins in your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
