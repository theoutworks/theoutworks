import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Handshake, Lightbulb } from "lucide-react"

export const metadata = { title: "About Us | The Outworks" }

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero banner */}
      <div className="relative h-72 overflow-hidden md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
          alt="Team working together"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="from-dark via-dark/70 to-dark/30 absolute inset-0 bg-gradient-to-t" />
      </div>

      <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-6">
        <h1 className="mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          About <span className="text-accent">The Outworks</span>
        </h1>
        <p className="text-muted mb-16 max-w-2xl text-lg leading-relaxed">
          We&apos;re a small, senior team of engineers and builders. Companies
          hire us when they need real work done (software, automation, data
          pipelines) without the overhead of growing their own team.
        </p>

        <div id="what-we-believe" className="mb-20 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Code className="text-accent h-6 w-6" />,
              title: "Ship Real Work",
              text: "We don't do decks and workshops. We write code, deploy systems, and hand you something that works. Every engagement ends with production-ready output.",
            },
            {
              icon: <Handshake className="text-accent h-6 w-6" />,
              title: "No Surprises",
              text: "Fixed scopes, clear timelines, weekly updates. You always know what we're working on, what's next, and what it costs. No scope creep, no mystery invoices.",
            },
            {
              icon: <Lightbulb className="text-accent h-6 w-6" />,
              title: "Your Stack, Your Way",
              text: "We work in your repo, your tools, your workflows. When the project's done, you own everything. No vendor lock-in, no proprietary frameworks to maintain.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-dark-card border-dark-border rounded-2xl border p-8"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div id="how-we-work" className="mb-20 items-center gap-12 md:flex">
          <div className="md:flex-1">
            <h2 className="mb-6 text-3xl font-bold">How We Work</h2>
            <p className="text-muted leading-relaxed">
              We keep things simple. You tell us what you need, we figure out
              the best way to build it, and then we go build it. Along the way
              you get milestone demos, access to our shared project board, and a
              direct line to the people doing the work. No account manager
              reading from a script.
            </p>
          </div>
          <div className="relative mt-8 h-48 flex-shrink-0 overflow-hidden rounded-2xl sm:h-64 md:mt-0 md:w-96">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
              alt="Creative workspace"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </div>

        <div id="the-team" className="mb-8">
          <h2 className="mb-6 text-3xl font-bold">The Team</h2>
          <div className="items-center gap-12 md:flex">
            <div className="relative mt-0 mb-8 h-48 flex-shrink-0 overflow-hidden rounded-2xl sm:h-64 md:mb-0 md:w-96">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Team collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
              />
            </div>
            <div className="md:flex-1">
              <p className="text-muted mb-8 leading-relaxed">
                We&apos;re engineers who got tired of watching projects stall
                because teams were stretched too thin. So we built the kind of
                outsourcing partner we&apos;d want to hire ourselves: senior
                people, clear communication, and work that actually ships.
              </p>
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dim inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-black transition"
              >
                Book a discovery call <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
