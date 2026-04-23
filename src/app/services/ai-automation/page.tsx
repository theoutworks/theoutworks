import Link from "next/link";
import { ArrowRight, Bot, Brain, Workflow, Clock, BarChart3, Plug } from "lucide-react";

export const metadata = { title: "AI & Automation | Momentumly" };

const features = [
  {
    icon: <Brain className="w-6 h-6 text-accent" />,
    title: "Intelligent Workflows",
    description: "We design AI-powered workflows that think, adapt, and execute — replacing hours of manual work with smart automation.",
  },
  {
    icon: <Bot className="w-6 h-6 text-accent" />,
    title: "Custom AI Agents",
    description: "Purpose-built AI agents that handle customer support, data processing, content generation, and more — 24/7.",
  },
  {
    icon: <Plug className="w-6 h-6 text-accent" />,
    title: "Seamless Integration",
    description: "We plug into your existing tools — CRMs, ERPs, communication platforms — without forcing migrations or new software.",
  },
  {
    icon: <Clock className="w-6 h-6 text-accent" />,
    title: "Time Savings",
    description: "Automate repetitive tasks and free up your team to focus on high-value work that actually moves the needle.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-accent" />,
    title: "Data-Driven Decisions",
    description: "AI models that analyze your data in real-time, surfacing insights and recommendations you can act on immediately.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-accent" />,
    title: "Process Optimization",
    description: "We audit your operations, identify bottlenecks, and deploy automation where it delivers the highest ROI.",
  },
];

const useCases = [
  "Automated lead qualification and routing",
  "AI-powered customer support chatbots",
  "Intelligent document processing and extraction",
  "Automated reporting and analytics dashboards",
  "Email and communication automation",
  "Predictive inventory and demand forecasting",
];

export default function AIAutomationPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <Link href="/services" className="text-sm text-muted hover:text-accent transition mb-4 inline-block">&larr; All Services</Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            AI & <span className="text-accent">Automation</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Leverage the power of artificial intelligence and automation to streamline your workflows, reduce costs, and scale your business efficiently.
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

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Common use cases</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((uc) => (
              <div key={uc} className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="text-sm font-medium">{uc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border border-dark-border rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to automate your operations?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">Let&apos;s identify the highest-impact automation opportunities in your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
