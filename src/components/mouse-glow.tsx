"use client"

import { useEffect, useRef } from "react"

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      el.style.setProperty("--my", `${e.clientY - rect.top}px`)
      el.style.opacity = "1"
    }

    const leave = () => {
      el.style.opacity = "0"
    }

    const parent = el.parentElement
    parent?.addEventListener("mousemove", handler)
    parent?.addEventListener("mouseleave", leave)
    return () => {
      parent?.removeEventListener("mousemove", handler)
      parent?.removeEventListener("mouseleave", leave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(200,255,0,0.04), transparent 60%)",
      }}
    />
  )
}
