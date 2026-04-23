"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { MomentlyLogo } from "./logo"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-dark/80 border-dark-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight"
        >
          <MomentlyLogo className="h-8 w-8" />
          momentumly
        </Link>

        <div className="text-muted hidden items-center gap-8 text-sm md:flex">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/services" className="transition hover:text-white">
            Services
          </Link>
          <Link href="/case-studies" className="transition hover:text-white">
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dim rounded-full px-4 py-2 font-medium text-black transition"
          >
            Contact us
          </Link>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="bg-dark border-dark-border flex flex-col gap-4 border-t px-6 pb-6 text-sm md:hidden">
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-muted py-2 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="text-muted py-2 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            onClick={() => setOpen(false)}
            className="text-muted py-2 hover:text-white"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-accent rounded-full px-4 py-2 text-center font-medium text-black"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  )
}
