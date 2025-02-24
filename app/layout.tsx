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
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActivitiesPage = pathname === "/activities"
  const isHomePage = pathname === "/"

  return (
    <html lang="ja" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <div className="flex-grow flex flex-col sm:flex-row overflow-hidden pt-[88px]">
          <div className="hidden xl:block min-w-[120px] max-w-[320px] w-[14%] flex-shrink-0">
            {isActivitiesPage && <LeftSidebar />}
          </div>
          <main className="flex-grow p-4">{children}</main>
          <div className="hidden xl:block min-w-[120px] max-w-[320px] w-[14%] flex-shrink-0">
            {isHomePage && <RightSidebar />}
          </div>
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

