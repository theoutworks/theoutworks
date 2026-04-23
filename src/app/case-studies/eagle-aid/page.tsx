import Link from "next/link";
import { ArrowRight, ShoppingCart, Users, TrendingUp, Zap, Target, Globe } from "lucide-react";

export const metadata = { title: "Eagle Aid Case Study | Momentumly" };

const stats = [
  { label: "Sales Growth", value: "220%" },
  { label: "Conversion Rate", value: "4.8%" },
  { label: "Global Markets", value: "12+" },
  { label: "Page Load Time", value: "<1.5s" },
];

export default function EagleAidPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/case-studies" className="text-sm text-muted hover:text-accent transition mb-4 inline-block">&larr; All Case Studies</Link>

        <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">Software Development</span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">Eagle Aid</h1>
        <p className="text-muted text-lg leading-relaxed mb-4">
          Built a high-converting e-commerce platform and product experience for a golf training aid startup, driving sales and global brand awareness.
        </p>
        <a href="https://www.eagle-aid.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-12">
          Visit eagle-aid.com <Globe className="w-3.5 h-3.5" />
        </a>

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
              <Target className="w-6 h-6 text-accent" /> The Challenge
            </h2>
            <p className="text-muted leading-relaxed">
              Eagle Aid is a golf putting training aid designed to help golfers of all levels master their putting technique. The founder had a strong physical product but lacked a digital presence to match. They needed an e-commerce platform that could effectively communicate the product&apos;s value, handle direct-to-consumer sales, and compete in the crowded golf training aids market alongside Amazon listings. SEO, conversion optimization, and a premium brand feel were critical.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" /> Our Approach
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We built Eagle Aid&apos;s entire digital storefront from the ground up, focusing on performance, SEO, and conversion:
            </p>
            <ul className="space-y-3">
              {[
                "Custom Next.js e-commerce platform with blazing-fast page loads under 1.5 seconds",
                "Product showcase with rich media — videos, 360-degree views, and lifestyle imagery",
                "SEO-optimized content strategy targeting keywords like \"putting training aids\", \"how to putt\", and \"golf swing trainer\"",
                "Integrated checkout flow with Stripe payments, order management, and shipping logistics",
                "Mobile-first responsive design ensuring seamless experience across all devices",
                "Amazon marketplace integration to sync inventory and reviews across channels",
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
              Within 6 months of launch, Eagle Aid saw a 220% increase in direct sales through their website. The conversion rate hit 4.8% — well above the e-commerce average. The SEO strategy pushed them to page one for key golf training aid keywords, and the brand expanded into 12+ international markets. The premium digital experience elevated the product perception and helped Eagle Aid establish itself as a serious contender in the golf training space.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" /> Client Testimonial
            </h2>
            <blockquote className="bg-dark-card border border-dark-border rounded-2xl p-8">
              <p className="text-light leading-relaxed italic mb-4">
                &ldquo;Their team took the time to truly understand our vision and delivered a brand identity that exceeded our expectations. The feedback from our customers has been incredibly positive.&rdquo;
              </p>
              <p className="font-semibold">Omeed Karimi</p>
              <p className="text-sm text-muted">Founder, Eagle Aid</p>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-dark-card border border-dark-border rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a product that needs a digital home?</h2>
          <p className="text-muted mb-8">Let&apos;s build a platform that sells for you.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
