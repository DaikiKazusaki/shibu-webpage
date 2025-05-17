"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LeftSidebar from "./components/LeftSidebar"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type React from "react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActivityDetailPage =
    pathname === "/activities/camp" || pathname === "/activities/school" || pathname === "/activities/tournament"

  return (
    <html lang="ja" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <div className="top-0 left-0 right-0 z-50">
          <Header />
        </div>

        {/* メインレイアウト */}
        <div className="flex-grow flex justify-center">
          <div className={`w-full ${isActivityDetailPage ? "max-w-7xl" : "max-w-6xl"} mx-auto flex`}>
            {/* 左サイドバー - アクティビティ詳細ページのみ表示 */}
            {isActivityDetailPage && (
              <div className="hidden xl:block min-w-[120px] max-w-[320px] w-[14%] flex-shrink-0">
                <LeftSidebar />
              </div>
            )}

            {/* メインコンテンツ */}
            <main className="flex-grow p-4">
              <Suspense>{children}</Suspense>
            </main>
          </div>
        </div>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
