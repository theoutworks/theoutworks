import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe, Users, TrendingUp, Zap } from "lucide-react";

export const metadata = { title: "EchoWave Tech Case Study | Momentumly" };

const stats = [
  { label: "Engagement Increase", value: "150%" },
  { label: "Load Time Reduction", value: "3.2s" },
  { label: "New User Signups", value: "+80%" },
  { label: "Bounce Rate Drop", value: "-45%" },
];

export default function EchoWavePage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/case-studies" className="text-sm text-muted hover:text-accent transition mb-4 inline-block">&larr; All Case Studies</Link>

        <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">Full Stack Web Development</span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">EchoWave Tech</h1>
        <p className="text-muted text-lg leading-relaxed mb-12">
          A complete platform rebuild using modern web technologies that helped EchoWave Tech increase online engagement by 150%.
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
              <Globe className="w-6 h-6 text-accent" /> The Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              EchoWave Tech had an outdated web platform built on legacy technology. Page load times were slow, the UI felt clunky, and user engagement was declining. They needed a modern, fast, and scalable platform that could support their growing user base and integrate with their expanding suite of developer tools.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" /> Our Approach
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We conducted a full technical audit and rebuilt the platform from the ground up using Next.js, TypeScript, and a modern API layer. Our approach included:
            </p>
            <ul className="space-y-3">
              {[
                "Complete UI/UX redesign with a focus on developer experience",
                "Migration from monolithic backend to microservices architecture",
                "Implementation of server-side rendering for optimal performance",
                "Real-time features using WebSockets for live collaboration",
                "Comprehensive testing suite with 95%+ code coverage",
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
              The new platform launched on time and immediately showed impact. Online engagement increased by 150%, page load times dropped by over 3 seconds, and new user signups surged by 80%. The bounce rate fell by 45%, and EchoWave Tech was able to scale their product confidently on the new architecture.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" /> Client Testimonial
            </h2>
            <blockquote className="bg-dark-card border border-dark-border rounded-2xl p-8">
              <p className="text-light leading-relaxed italic mb-4">
                &ldquo;They&apos;re a true partner in our growth. Their work has been instrumental in helping us reach new heights, and we look forward to continuing our commercial relationship.&rdquo;
              </p>
              <p className="font-semibold">Farhan Ahmed</p>
              <p className="text-sm text-muted">EchoWave Tech</p>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-dark-card border border-dark-border rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want results like these?</h2>
          <p className="text-muted mb-8">Let&apos;s discuss how we can transform your platform.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
