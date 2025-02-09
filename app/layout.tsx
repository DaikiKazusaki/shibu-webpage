"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const showLeftSidebar = pathname === "/activity"

  return (
    <html lang="ja" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <Header />
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
          {showLeftSidebar && <LeftSidebar />}
          <main className="flex-grow p-4">{children}</main>
          <div className="hidden md:block">
            <RightSidebar />
          </div>
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

