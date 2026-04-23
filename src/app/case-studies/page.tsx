import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata = { title: "Case Studies | Momentumly" };

const studies = [
  {
    slug: "echowave-tech",
    title: "EchoWave Tech",
    category: "Full Stack Web Development",
    description:
      "A complete platform rebuild using modern web technologies that helped EchoWave Tech increase online engagement by 150%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "eagle-aid",
    title: "Eagle Aid",
    category: "Software Development",
    description:
      "Built a high-converting e-commerce platform and product experience for a golf training aid startup, driving sales and global brand awareness.",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
  },
  {
    slug: "prosper-labs",
    title: "Prosper Labs Ltd",
    category: "AI & Automation",
    description:
      "Implemented intelligent automation workflows that reduced manual processes by 60% and improved operational efficiency.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    slug: "greenfield-analytics",
    title: "GreenField Analytics",
    category: "Data Scraping",
    description:
      "Built a comprehensive data extraction pipeline that enabled real-time market intelligence and tripled actionable insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
          Case <span className="text-accent">Studies</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-16">
          Explore our portfolio of impactful projects that have helped businesses
          grow, innovate, and stand out.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-muted/50 transition group block"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-muted group-hover:text-white transition"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {study.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all">
                  Read case study <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition"
          >
            Start your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
