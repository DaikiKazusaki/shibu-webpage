"use client"; // useStateを使うために必要

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            江坂学生支部
          </Link>
          <p className="text-sm mt-1">全国の大学生による将棋団体</p>
        </div>
        <ul className={`md:flex md:space-x-4 ${isMenuOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
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
            <Link href="/apply" className="block py-2 md:py-0">
              申し込み
            </Link>
          </li>
        </ul>
        <button className="md:hidden absolute top-4 right-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

