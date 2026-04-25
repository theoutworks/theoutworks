import Link from "next/link"

import { OutworksLogo } from "./logo"

export function Footer() {
  return (
    <footer className="border-dark-border bg-dark border-t">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4 md:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <OutworksLogo className="h-8 w-8" />
              <h3 className="text-xl font-bold">the outworks</h3>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Crafting unforgettable digital experiences for your brand through
              innovative design, strategy, marketing and storytelling.
            </p>
          </div>

          <div>
            <h4 className="text-muted mb-4 text-sm font-semibold tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="text-muted space-y-2 text-sm">
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
                  href="/case-studies"
                  className="transition hover:text-white"
                >
                  Case Studies
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
            <ul className="text-muted space-y-2 text-sm">
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
              Open for projects
            </h4>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dim inline-block rounded-full px-5 py-2.5 text-sm font-medium text-black transition"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="border-dark-border text-muted mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} The Outworks. All rights reserved.
          </p>
          <p>Crafted with passion and precision.</p>
        </div>
      </div>
    </footer>
  )
}
