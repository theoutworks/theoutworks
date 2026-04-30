import Link from "next/link"
import { ArrowRight, Code, Globe, TrendingUp, Zap } from "lucide-react"

export const metadata = { title: "Future Offshore | The Outworks" }

export default function FutureOffshorePage() {
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
          Web Development
        </span>
        <h1 className="mt-4 mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          Future Offshore
        </h1>
        <p className="text-muted mb-4 text-sm">
          Client: <span className="text-white">Future Offshore</span>
        </p>
        <p className="text-muted mb-12 text-lg leading-relaxed">
          An offshore engineering company with 20+ years of experience in
          pipelay, cable lay, and subsea tools had never had a website. We
          designed, built, and deployed their entire corporate web presence from
          scratch.
        </p>

        {/* Content */}
        <div className="space-y-12">
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Globe className="text-accent h-6 w-6" /> The Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              Future Offshore had two decades of industry credibility but zero
              online presence. They needed a site that communicated their
              expertise across 8 service areas, looked professional enough to
              land enterprise clients, and had a working contact pipeline, all
              built from nothing.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Zap className="text-accent h-6 w-6" /> Our Approach
            </h2>
            <p className="text-muted mb-4 leading-relaxed">
              We owned the full project, design through deployment:
            </p>
            <ul className="space-y-3">
              {[
                "Multi-page site covering home, about, 8 service pages, and contact, each tailored to a different audience",
                "Polished UI with Framer Motion animations, custom fonts, and responsive design that works on every device",
                "Server-side contact form with Zod validation and email delivery via Azure Communication Services. Leads go straight to the team",
                "Deployed to the edge on Cloudflare Workers via OpenNext for fast load times globally, no server to manage",
                "Full CI/CD through GitHub Actions: format, lint, build, and deploy on every push, with secrets managed through Infisical",
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
                "A company with 20+ years of experience finally has a web presence that matches their reputation",
                "Potential clients can now find them, learn about their services, and get in touch, all in one place",
                "Edge deployment means the site loads fast from anywhere in the world without a traditional server",
                "Automated CI/CD means the team can update content and ship changes without calling a developer",
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
              <Code className="text-accent h-6 w-6" /> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js 16",
                "React 19",
                "TypeScript",
                "Tailwind CSS v4",
                "shadcn/ui",
                "Framer Motion",
                "Cloudflare Workers",
                "OpenNext",
                "Infisical",
                "nodemailer",
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
            Need a web presence for your business?
          </h2>
          <p className="text-muted mb-8">
            Let&apos;s talk about what we can build for you.
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
