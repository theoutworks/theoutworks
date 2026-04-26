import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Testimonials } from "@/components/sections/testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
