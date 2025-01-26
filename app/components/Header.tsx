"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/about", label: "支部について" },
    { href: "/members", label: "メンバー" },
    { href: "/activities", label: "活動" },
    { href: "/sns", label: "SNS" },
    { href: "/apply", label: "申し込み" },
  ];

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
        <nav className="relative">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`absolute left-0 right-0 top-full bg-gray-900 p-4 space-y-2 transition-all duration-300 ease-in-out transform ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } md:static md:flex md:space-x-6 md:space-y-0 md:translate-y-0 md:bg-transparent md:p-0 md:items-center`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-gray-300 text-base block py-2 md:py-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
