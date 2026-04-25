import Link from "next/link"
import { ArrowRight, Globe, TrendingUp, Users, Zap } from "lucide-react"

export const metadata = { title: "EchoWave Tech Case Study | The Outworks" }

const stats = [
  { label: "Engagement Increase", value: "150%" },
  { label: "Load Time Reduction", value: "3.2s" },
  { label: "New User Signups", value: "+80%" },
  { label: "Bounce Rate Drop", value: "-45%" },
]

export default function EchoWavePage() {
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
          Full Stack Web Development
        </span>
        <h1 className="mt-4 mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          EchoWave Tech
        </h1>
        <p className="text-muted mb-12 text-lg leading-relaxed">
          A complete platform rebuild using modern web technologies that helped
          EchoWave Tech increase online engagement by 150%.
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
              <Globe className="text-accent h-6 w-6" /> The Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              EchoWave Tech had an outdated web platform built on legacy
              technology. Page load times were slow, the UI felt clunky, and
              user engagement was declining. They needed a modern, fast, and
              scalable platform that could support their growing user base and
              integrate with their expanding suite of developer tools.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Zap className="text-accent h-6 w-6" /> Our Approach
            </h2>
            <p className="text-muted mb-4 leading-relaxed">
              We conducted a full technical audit and rebuilt the platform from
              the ground up using Next.js, TypeScript, and a modern API layer.
              Our approach included:
            </p>
            <ul className="space-y-3">
              {[
                "Complete UI/UX redesign with a focus on developer experience",
                "Migration from monolithic backend to microservices architecture",
                "Implementation of server-side rendering for optimal performance",
                "Real-time features using WebSockets for live collaboration",
                "Comprehensive testing suite with 95%+ code coverage",
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
              The new platform launched on time and immediately showed impact.
              Online engagement increased by 150%, page load times dropped by
              over 3 seconds, and new user signups surged by 80%. The bounce
              rate fell by 45%, and EchoWave Tech was able to scale their
              product confidently on the new architecture.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Users className="text-accent h-6 w-6" /> Client Testimonial
            </h2>
            <blockquote className="bg-dark-card border-dark-border rounded-2xl border p-8">
              <p className="text-light mb-4 leading-relaxed italic">
                &ldquo;They&apos;re a true partner in our growth. Their work has
                been instrumental in helping us reach new heights, and we look
                forward to continuing our commercial relationship.&rdquo;
              </p>
              <p className="font-semibold">Farhan Ahmed</p>
              <p className="text-muted text-sm">EchoWave Tech</p>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border-dark-border mt-16 rounded-3xl border p-6 text-center sm:p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold">Want results like these?</h2>
          <p className="text-muted mb-8">
            Let&apos;s discuss how we can transform your platform.
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
