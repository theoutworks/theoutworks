import Link from "next/link"
import { ExternalLink, Globe, Mail } from "lucide-react"

import { OutworksLogo } from "./logo"

const socialLinks = [
  { icon: <Globe size={16} />, href: "#", label: "Website" },
  { icon: <ExternalLink size={16} />, href: "#", label: "LinkedIn" },
  { icon: <Mail size={16} />, href: "#", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-dark-border bg-dark border-t">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4 md:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <OutworksLogo className="h-8 w-8" />
              <h3 className="font-display text-xl font-bold">the outworks</h3>
            </div>
            <p className="text-muted mb-6 text-sm leading-relaxed">
              Outsource your work. We handle engineering, automation, and
              digital operations — so you can focus on what matters.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-dark-card border-dark-border text-muted hover:border-accent/50 hover:text-accent flex h-9 w-9 items-center justify-center rounded-full border transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-muted mb-4 text-sm font-semibold tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="text-muted space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-muted mb-4 text-sm font-semibold tracking-wider uppercase">
              Services
            </h4>
            <ul className="text-muted space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#web-development"
                  className="transition hover:text-white"
                >
                  Full Stack Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-automation"
                  className="transition hover:text-white"
                >
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#data-scraping"
                  className="transition hover:text-white"
                >
                  Data Scraping
                </Link>
              </li>
              <li>
                <Link
                  href="/services#software-development"
                  className="transition hover:text-white"
                >
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-muted mb-4 text-sm font-semibold tracking-wider uppercase">
              Ready to outsource?
            </h4>
            <p className="text-muted mb-4 text-sm leading-relaxed">
              Let&apos;s talk about what we can take off your plate.
            </p>
            <Link
              href="/contact"
              className="btn-press bg-accent hover:bg-accent-dim inline-block rounded-full px-5 py-2.5 text-sm font-medium text-black transition"
            >
              Book a discovery call
            </Link>
          </div>
        </div>

        <div className="border-dark-border text-muted mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} The Outworks. All rights reserved.
          </p>
          <p className="text-muted/60">
            Outsource your work. Scale your business.
          </p>
        </div>
      </div>
    </footer>
  )
}
