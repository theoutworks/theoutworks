import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Momentumly",
  description:
    "Your brand deserves more than just a website — it needs a digital experience that stands out. We craft sleek, responsive, and high-performing websites designed to captivate users and maximize conversions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
