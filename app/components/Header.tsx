"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white py-3 px-4">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            江坂学生支部
          </Link>
          <p className="text-sm mt-1">全国の大学生による将棋団体</p>
        </div>
        {/* デスクトップメニュー */}
        <ul className="hidden md:flex md:space-x-4">
          <li>
            <Link href="/" className="block py-2 md:py-0">
              ホーム
            </Link>
          </li>
          <li>
            <Link href="/about" className="block py-2 md:py-0">
              支部について
            </Link>
          </li>
          <li>
            <Link href="/members" className="block py-2 md:py-0">
              メンバー
            </Link>
          </li>
          <li>
            <Link href="/activities" className="block py-2 md:py-0">
              活動
            </Link>
          </li>
          <li>
            <Link href="/upcoming_event" className="block py-2 md:py-0">
              今後のイベント
            </Link>
          </li>
          <li>
            <Link href="/sponser" className="block py-2 md:py-0">
              スポンサー
            </Link>
          </li>
        </ul>
        {/* モバイルメニューボタン */}
        <button className="md:hidden absolute top-3 right-4 z-50 p-2 bg-gray-800 rounded flex items-center justify-center w-10 h-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
        {/* モバイルメニュー */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-gray-800 z-40"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="flex flex-col items-center space-y-8 text-white text-xl">
                  <li>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                      ホーム
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                      支部について
                    </Link>
                  </li>
                  <li>
                    <Link href="/members" onClick={() => setIsMenuOpen(false)}>
                      メンバー
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities" onClick={() => setIsMenuOpen(false)}>
                      活動
                    </Link>
                  </li>
                  <li>
                    <Link href="/upcoming_event" onClick={() => setIsMenuOpen(false)}>
                      今後のイベント
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
