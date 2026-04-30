import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Eye, Target, Users } from "lucide-react"

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
          We are a team of engineers, designers, and strategists working in
          harmony to deliver digital experiences that resonate with your
          audience.
        </p>

        <div id="our-mission" className="mb-20 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Target className="text-accent h-6 w-6" />,
              title: "Our Mission",
              text: "To empower brands with innovative digital solutions that drive real, measurable growth.",
            },
            {
              icon: <Eye className="text-accent h-6 w-6" />,
              title: "Our Vision",
              text: "To be the go-to digital partner for businesses seeking creative excellence and strategic impact.",
            },
            {
              icon: <Users className="text-accent h-6 w-6" />,
              title: "Our Values",
              text: "Creativity, transparency, collaboration, and a relentless pursuit of quality in everything we do.",
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

        <div id="our-passion" className="mb-20 items-center gap-12 md:flex">
          <div className="md:flex-1">
            <h2 className="mb-6 text-3xl font-bold">Our Passion</h2>
            <p className="text-muted leading-relaxed">
              Every project we take on is fuelled by a genuine passion for
              digital craft. We don&apos;t just build websites &mdash; we create
              experiences that leave lasting impressions. Our process blends
              creative intuition with data-driven strategy to ensure every pixel
              serves a purpose.
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

        <div id="meet-the-team" className="mb-8">
          <h2 className="mb-6 text-3xl font-bold">Meet the Team</h2>
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
                Our diverse team brings together expertise in design,
                development, marketing, and strategy. Together, we turn
                ambitious ideas into digital realities.
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
