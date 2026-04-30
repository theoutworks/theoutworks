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
          A multi-page corporate website for an offshore engineering company
          with 20+ years of experience in pipelay, cable lay, subsea tools, and
          project delivery — their first-ever web presence.
        </p>

        {/* Content */}
        <div className="space-y-12">
          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Globe className="text-accent h-6 w-6" /> The Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              Future Offshore had over two decades of industry experience but no
              web presence. They needed a professional, modern website that
              communicated their expertise across 8 service areas, established
              credibility with potential clients, and provided a working contact
              pipeline — all designed, built, and deployed from scratch.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Zap className="text-accent h-6 w-6" /> Our Approach
            </h2>
            <p className="text-muted mb-4 leading-relaxed">
              We handled the full project end-to-end — design, development, and
              deployment:
            </p>
            <ul className="space-y-3">
              {[
                "Multi-page marketing site with home, about, 8 dynamic service pages, and contact",
                "Animated UI with Framer Motion transitions, custom local fonts, and responsive design",
                "Server-side contact form with Zod validation and SMTP delivery via Azure Communication Services",
                "Edge-deployed on Cloudflare Workers via OpenNext for global low-latency performance",
                "Full CI/CD pipeline with GitHub Actions — format check, lint, build, and deploy with Infisical secrets management",
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
                "First-ever corporate web presence for an established offshore engineering firm",
                "Global edge deployment — low-latency performance without a traditional server",
                "Working contact pipeline connecting potential clients directly to the team",
                "Production CI/CD delivering automated, repeatable deployments on every push to main",
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
