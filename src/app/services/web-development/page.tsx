import Link from "next/link"
import {
  ArrowRight,
  Globe,
  Layers,
  Server,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react"

export const metadata = { title: "Full Stack Web Development | The Outworks" }

const features = [
  {
    icon: <Layers className="text-accent h-6 w-6" />,
    title: "Frontend & Backend",
    description:
      "We build both sides of your application. React, Next.js, Node.js, whatever fits best. One team, one codebase, no integration headaches.",
  },
  {
    icon: <Zap className="text-accent h-6 w-6" />,
    title: "High Performance",
    description:
      "Fast pages keep users around. We optimize every route for speed: server rendering, code splitting, lazy loading. Nothing feels sluggish.",
  },
  {
    icon: <Smartphone className="text-accent h-6 w-6" />,
    title: "Responsive Design",
    description:
      "Your app works on phones, tablets, and desktops without compromise. We test across devices so you don't have to.",
  },
  {
    icon: <Server className="text-accent h-6 w-6" />,
    title: "Scalable Infrastructure",
    description:
      "We architect for growth. Whether you're serving 100 users or 100,000, the infrastructure handles it without a rewrite.",
  },
  {
    icon: <Shield className="text-accent h-6 w-6" />,
    title: "Security First",
    description:
      "Auth, encryption, input validation, and security headers are built in from day one. Not patched in after an incident.",
  },
  {
    icon: <Globe className="text-accent h-6 w-6" />,
    title: "API Development",
    description:
      "Clean REST or GraphQL APIs with solid documentation. Easy for your team (or third parties) to integrate with.",
  },
]

const process = [
  {
    step: "01",
    title: "Requirements & Architecture",
    description:
      "We define your technical requirements and design a robust system architecture tailored to your goals.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description:
      "Interactive prototypes and polished designs ensure every user journey is intuitive and engaging.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Agile sprints with continuous integration, code reviews, and automated testing at every stage.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "We handle deployment, monitoring, and ongoing maintenance so you can focus on your business.",
  },
]

export default function WebDevelopmentPage() {
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
            Full Stack <span className="text-accent">Web Development</span>
          </h1>
          <p className="text-muted mb-8 text-lg leading-relaxed">
            From marketing sites to complex web apps, we handle the full stack:
            frontend, backend, APIs, and deployment. You get a fast, polished
            product that works on every device and scales when you need it to.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dim inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-black transition"
          >
            Talk to us about your project <ArrowRight size={16} />
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

        {/* Process */}
        <div className="mb-20">
          <h2 className="mb-10 text-3xl font-bold">Our process</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="bg-dark-card border-dark-border relative rounded-2xl border p-6"
              >
                <span className="text-accent/20 text-3xl font-bold">
                  {p.step}
                </span>
                <h3 className="mt-2 mb-2 text-base font-bold">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border-dark-border rounded-3xl border p-6 text-center sm:p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Got something you need built?
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-xl">
            Let&apos;s talk through what you need and figure out the best way to
            build it.
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
