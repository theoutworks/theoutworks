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
      "We build both sides of your application using modern frameworks like React, Next.js, Node.js, and more — ensuring seamless integration.",
  },
  {
    icon: <Zap className="text-accent h-6 w-6" />,
    title: "High Performance",
    description:
      "Every line of code is optimized for speed. We deliver lightning-fast load times and smooth interactions that keep users engaged.",
  },
  {
    icon: <Smartphone className="text-accent h-6 w-6" />,
    title: "Responsive Design",
    description:
      "Pixel-perfect on every device. From mobile to ultrawide, your application looks and works flawlessly everywhere.",
  },
  {
    icon: <Server className="text-accent h-6 w-6" />,
    title: "Scalable Infrastructure",
    description:
      "Built to grow with you. Our architectures handle traffic spikes and scale horizontally without breaking a sweat.",
  },
  {
    icon: <Shield className="text-accent h-6 w-6" />,
    title: "Security First",
    description:
      "Authentication, encryption, and best practices baked in from day one — not bolted on as an afterthought.",
  },
  {
    icon: <Globe className="text-accent h-6 w-6" />,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for reliability, documentation, and easy integration with third-party services.",
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
            We build robust, scalable web applications from front to back.
            Modern frameworks, performant APIs, and seamless user experiences —
            all tailored to your business needs.
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
            Ready to build something great?
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-xl">
            Let&apos;s discuss your project and find the perfect technical
            solution for your business.
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
