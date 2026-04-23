import Link from "next/link";
import { ArrowRight, Code, Cpu, GitBranch, TestTube, Blocks, MonitorSmartphone } from "lucide-react";

export const metadata = { title: "Software Development | Momentumly" };

const features = [
  {
    icon: <Code className="w-6 h-6 text-accent" />,
    title: "Custom Applications",
    description: "Purpose-built software tailored to your exact business requirements — no off-the-shelf compromises.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-accent" />,
    title: "System Architecture",
    description: "Scalable, maintainable architectures designed for long-term growth and performance under load.",
  },
  {
    icon: <Blocks className="w-6 h-6 text-accent" />,
    title: "Microservices & APIs",
    description: "Modular, decoupled services that communicate cleanly — making your system flexible and easy to extend.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-accent" />,
    title: "Cross-Platform",
    description: "Desktop, mobile, or cloud — we build for the platforms your users are on with consistent experiences.",
  },
  {
    icon: <TestTube className="w-6 h-6 text-accent" />,
    title: "Quality Assurance",
    description: "Rigorous testing at every stage — unit, integration, end-to-end — so bugs are caught before users ever see them.",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-accent" />,
    title: "CI/CD & DevOps",
    description: "Automated pipelines for continuous delivery. Ship features fast and with confidence.",
  },
];

const techStack = [
  "TypeScript / JavaScript",
  "Python / Go / Rust",
  "React / Next.js / Vue",
  "Node.js / Express / FastAPI",
  "PostgreSQL / MongoDB / Redis",
  "AWS / GCP / Azure / Docker",
];

export default function SoftwareDevelopmentPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <Link href="/services" className="text-sm text-muted hover:text-accent transition mb-4 inline-block">&larr; All Services</Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Software <span className="text-accent">Development</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Custom software solutions engineered for performance and reliability. From desktop apps to complex systems, we deliver production-ready code that scales.
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

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Our tech stack</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="text-sm font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border border-dark-border rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a complex problem to solve?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">Let&apos;s talk architecture and build software that gives you a competitive edge.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
