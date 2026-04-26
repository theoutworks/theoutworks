"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { OutworksLogo } from "./logo"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 border-dark-border"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display flex items-center gap-2.5 text-xl font-bold tracking-tight"
        >
          <OutworksLogo className="h-8 w-8" />
          the outworks
        </Link>

        <div className="text-muted hidden items-center gap-8 text-sm md:flex">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/services" className="transition hover:text-white">
            Services
          </Link>
          <Link href="/projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link
            href="/contact"
            className="btn-press bg-accent hover:bg-accent-dim rounded-full px-5 py-2 font-medium text-black transition"
          >
            Book a discovery call
          </Link>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-dark border-dark-border overflow-hidden border-t md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 pt-4 pb-6 text-sm">
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="text-muted py-2 transition hover:text-white"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="text-muted py-2 transition hover:text-white"
              >
                Services
              </Link>
              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className="text-muted py-2 transition hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-accent rounded-full px-4 py-2 text-center font-medium text-black"
              >
                Book a discovery call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
