import Link from "next/link";
import { ArrowRight, Target, Eye, Users } from "lucide-react";

export const metadata = { title: "About Us | Momentumly" };

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
          alt="Team working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
      </div>

      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-accent">Momentumly</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-16">
          We are a team of engineers, designers, and strategists working in
          harmony to deliver digital experiences that resonate with your
          audience.
        </p>

        <div id="our-mission" className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Target className="w-6 h-6 text-accent" />,
              title: "Our Mission",
              text: "To empower brands with innovative digital solutions that drive real, measurable growth.",
            },
            {
              icon: <Eye className="w-6 h-6 text-accent" />,
              title: "Our Vision",
              text: "To be the go-to digital partner for businesses seeking creative excellence and strategic impact.",
            },
            {
              icon: <Users className="w-6 h-6 text-accent" />,
              title: "Our Values",
              text: "Creativity, transparency, collaboration, and a relentless pursuit of quality in everything we do.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-dark-card border border-dark-border rounded-2xl p-8"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div id="our-passion" className="mb-20 md:flex gap-12 items-center">
          <div className="md:flex-1">
            <h2 className="text-3xl font-bold mb-6">Our Passion</h2>
            <p className="text-muted leading-relaxed">
              Every project we take on is fuelled by a genuine passion for digital
              craft. We don&apos;t just build websites &mdash; we create
              experiences that leave lasting impressions. Our process blends
              creative intuition with data-driven strategy to ensure every pixel
              serves a purpose.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-96 h-48 sm:h-64 rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div id="meet-the-team" className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <div className="md:flex gap-12 items-center">
            <div className="mt-0 md:w-96 h-48 sm:h-64 rounded-2xl overflow-hidden flex-shrink-0 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:flex-1">
              <p className="text-muted leading-relaxed mb-8">
                Our diverse team brings together expertise in design, development,
                marketing, and strategy. Together, we turn ambitious ideas into
                digital realities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-full font-semibold hover:bg-accent-dim transition"
              >
                Work with us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
