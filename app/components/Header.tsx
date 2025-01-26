import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            全国大学生支部
          </Link>
          <p className="text-sm mt-1">全国の大学生による将棋団体</p>
        </div>
        <ul className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 space-y-2`}>
          <li>
            <Link href="/" className="block py-2">
              ホーム
            </Link>
          </li>
          <li>
            <Link href="/about" className="block py-2">
              支部について
            </Link>
          </li>
          <li>
            <Link href="/members" className="block py-2">
              メンバー
            </Link>
          </li>
          <li>
            <Link href="/activities" className="block py-2">
              活動
            </Link>
          </li>
          <li>
            <Link href="/sns" className="block py-2">
              SNS
            </Link>
          </li>
          <li>
            <Link href="/apply" className="block py-2">
              申し込み
            </Link>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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

