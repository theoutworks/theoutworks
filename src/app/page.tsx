import { About } from "@/components/sections/about"
import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Solutions } from "@/components/sections/solutions"
import { Testimonials } from "@/components/sections/testimonials"
import { WorkProcess } from "@/components/sections/work-process"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WorkProcess />
      <Solutions />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
