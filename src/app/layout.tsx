import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

import "./globals.css"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "The Outworks | Outsource Your Work",
  description:
    "Stop doing everything yourself. The Outworks helps businesses outsource software development, automation, and digital operations — so you can focus on growth.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
