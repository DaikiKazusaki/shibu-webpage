"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <div className="top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <div className="flex-grow flex flex-col sm:flex-row overflow-hidden">
          <main className="flex-grow p-4">{children}</main>
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
