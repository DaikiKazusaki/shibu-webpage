"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/about", label: "支部について" },
    { href: "/members", label: "メンバー" },
    { href: "/activities", label: "活動" },
    { href: "/sns", label: "SNS" },
    { href: "/apply", label: "申し込み" },
  ]

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Title Section */}
        <div className="py-0">
          <Link href="/" className="block">
            <h1 className="text-2xl md:text-3xl font-bold">全国大学生支部</h1>
            <p className="text-gray-400 mt-1">全国の大学生による将棋団体</p>
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="flex items-center">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="text-sm">{isMenuOpen ? "閉じる" : "メニュー"}</span>
          </button>

          {/* Navigation Links */}
          <ul
            className={`
            md:flex md:space-x-6 
            ${isMenuOpen ? "absolute top-full left-0 right-0 bg-gray-900 p-4" : "hidden"}
            md:static md:bg-transparent md:p-0 md:flex
          `}
          >
            {navItems.map((item) => (
              <li key={item.href} className="md:inline-block">
                <Link href={item.href} className="hover:text-gray-300 text-sm block py-2 md:py-0">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

