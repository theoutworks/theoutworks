import Link from "next/link"
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

export const metadata = { title: "Eagle Aid Case Study | Momentumly" }

const stats = [
  { label: "Sales Growth", value: "220%" },
  { label: "Conversion Rate", value: "4.8%" },
  { label: "Global Markets", value: "12+" },
  { label: "Page Load Time", value: "<1.5s" },
]

export default function EagleAidPage() {
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
          Software Development
        </span>
        <h1 className="mt-4 mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
          Eagle Aid
        </h1>
        <p className="text-muted mb-4 text-lg leading-relaxed">
          Built a high-converting e-commerce platform and product experience for
          a golf training aid startup, driving sales and global brand awareness.
        </p>
        <a
          href="https://www.eagle-aid.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent mb-12 inline-flex items-center gap-1 text-sm hover:underline"
        >
          Visit eagle-aid.com <Globe className="h-3.5 w-3.5" />
        </a>

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
              <Target className="text-accent h-6 w-6" /> The Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              Eagle Aid is a golf putting training aid designed to help golfers
              of all levels master their putting technique. The founder had a
              strong physical product but lacked a digital presence to match.
              They needed an e-commerce platform that could effectively
              communicate the product&apos;s value, handle direct-to-consumer
              sales, and compete in the crowded golf training aids market
              alongside Amazon listings. SEO, conversion optimization, and a
              premium brand feel were critical.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Zap className="text-accent h-6 w-6" /> Our Approach
            </h2>
            <p className="text-muted mb-4 leading-relaxed">
              We built Eagle Aid&apos;s entire digital storefront from the
              ground up, focusing on performance, SEO, and conversion:
            </p>
            <ul className="space-y-3">
              {[
                "Custom Next.js e-commerce platform with blazing-fast page loads under 1.5 seconds",
                "Product showcase with rich media — videos, 360-degree views, and lifestyle imagery",
                'SEO-optimized content strategy targeting keywords like "putting training aids", "how to putt", and "golf swing trainer"',
                "Integrated checkout flow with Stripe payments, order management, and shipping logistics",
                "Mobile-first responsive design ensuring seamless experience across all devices",
                "Amazon marketplace integration to sync inventory and reviews across channels",
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
              Within 6 months of launch, Eagle Aid saw a 220% increase in direct
              sales through their website. The conversion rate hit 4.8% — well
              above the e-commerce average. The SEO strategy pushed them to page
              one for key golf training aid keywords, and the brand expanded
              into 12+ international markets. The premium digital experience
              elevated the product perception and helped Eagle Aid establish
              itself as a serious contender in the golf training space.
            </p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
              <Users className="text-accent h-6 w-6" /> Client Testimonial
            </h2>
            <blockquote className="bg-dark-card border-dark-border rounded-2xl border p-8">
              <p className="text-light mb-4 leading-relaxed italic">
                &ldquo;Their team took the time to truly understand our vision
                and delivered a brand identity that exceeded our expectations.
                The feedback from our customers has been incredibly
                positive.&rdquo;
              </p>
              <p className="font-semibold">Omeed Karimi</p>
              <p className="text-muted text-sm">Founder, Eagle Aid</p>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border-dark-border mt-16 rounded-3xl border p-6 text-center sm:p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold">
            Have a product that needs a digital home?
          </h2>
          <p className="text-muted mb-8">
            Let&apos;s build a platform that sells for you.
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
