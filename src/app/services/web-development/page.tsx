import Link from "next/link";
import { ArrowRight, Globe, Layers, Zap, Shield, Smartphone, Server } from "lucide-react";

export const metadata = { title: "Full Stack Web Development | Momentumly" };

const features = [
  {
    icon: <Layers className="w-6 h-6 text-accent" />,
    title: "Frontend & Backend",
    description: "We build both sides of your application using modern frameworks like React, Next.js, Node.js, and more — ensuring seamless integration.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    title: "High Performance",
    description: "Every line of code is optimized for speed. We deliver lightning-fast load times and smooth interactions that keep users engaged.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-accent" />,
    title: "Responsive Design",
    description: "Pixel-perfect on every device. From mobile to ultrawide, your application looks and works flawlessly everywhere.",
  },
  {
    icon: <Server className="w-6 h-6 text-accent" />,
    title: "Scalable Infrastructure",
    description: "Built to grow with you. Our architectures handle traffic spikes and scale horizontally without breaking a sweat.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" />,
    title: "Security First",
    description: "Authentication, encryption, and best practices baked in from day one — not bolted on as an afterthought.",
  },
  {
    icon: <Globe className="w-6 h-6 text-accent" />,
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for reliability, documentation, and easy integration with third-party services.",
  },
];

const process = [
  { step: "01", title: "Requirements & Architecture", description: "We define your technical requirements and design a robust system architecture tailored to your goals." },
  { step: "02", title: "UI/UX Design", description: "Interactive prototypes and polished designs ensure every user journey is intuitive and engaging." },
  { step: "03", title: "Development & Testing", description: "Agile sprints with continuous integration, code reviews, and automated testing at every stage." },
  { step: "04", title: "Deployment & Support", description: "We handle deployment, monitoring, and ongoing maintenance so you can focus on your business." },
];

export default function WebDevelopmentPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <Link href="/services" className="text-sm text-muted hover:text-accent transition mb-4 inline-block">&larr; All Services</Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Full Stack <span className="text-accent">Web Development</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8">
            We build robust, scalable web applications from front to back. Modern frameworks, performant APIs, and seamless user experiences — all tailored to your business needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Start your project <ArrowRight size={16} />
          </Link>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10">What we deliver</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-muted/50 transition">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Our process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {process.map((p) => (
              <div key={p.step} className="relative bg-dark-card border border-dark-border rounded-2xl p-6">
                <span className="text-3xl font-bold text-accent/20">{p.step}</span>
                <h3 className="text-base font-bold mt-2 mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card border border-dark-border rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build something great?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">Let&apos;s discuss your project and find the perfect technical solution for your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dim transition">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
