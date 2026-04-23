"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MomentlyLogo } from "./logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
          <MomentlyLogo className="w-8 h-8" />
          momentumly
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-white transition">
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="bg-accent text-black px-4 py-2 rounded-full font-medium hover:bg-accent-dim transition"
          >
            Contact us
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark border-t border-dark-border px-6 pb-6 flex flex-col gap-4 text-sm">
          <Link href="/about" onClick={() => setOpen(false)} className="py-2 text-muted hover:text-white">About</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="py-2 text-muted hover:text-white">Services</Link>
          <Link href="/case-studies" onClick={() => setOpen(false)} className="py-2 text-muted hover:text-white">Case Studies</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="bg-accent text-black px-4 py-2 rounded-full font-medium text-center">Contact us</Link>
        </div>
      )}
    </nav>
  );
}
