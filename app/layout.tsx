import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "全国大学生支部",
  description: "全国大学生支部の公式ウェブサイト",
  icons: [
    {
      rel: "icon",
      url: "/favicon_shogi.ico",
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
          <Sidebar />
          <main className="flex-grow p-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

