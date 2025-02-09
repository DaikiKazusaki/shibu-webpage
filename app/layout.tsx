import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LeftSidebar from "./components/LeftSidebar"
// import { Sidebar } from "./components/RightSidebar"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "江坂学生支部",
  description: "江坂学生支部の公式ウェブサイト",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <Header />
        <div className="flex-grow flex flex-col md:flex-row">
          <LeftSidebar />
          <main className="flex-grow p-4">{children}</main>
          <Analytics />
          <SpeedInsights />
          {/* <RightSideBar> */}
        </div>
        <Footer />
      </body>
    </html>
  )
}

