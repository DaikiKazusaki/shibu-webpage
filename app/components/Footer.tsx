import Link from "next/link"
import { X, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              江坂学生支部
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">SNS・メディア</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/upcoming_event" className="text-sm text-gray-400 hover:text-white">
                    今後のイベント
                  </Link>
                </li>
                <li>
                  <a href="https://note.com/shogi_gakusei" className="text-sm text-gray-400 hover:text-white">
                    ブログ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">リンク</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/books" className="text-sm text-gray-400 hover:text-white">
                    電子書籍
                  </Link>
                </li>
                <li>
                  <a href="https://www.kansai-shogi.info/" className="text-sm text-gray-400 hover:text-white">
                    関西将棋会館ホームページ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">お問い合わせ</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="mailto:shogi.esakagakusei@gmail.com" className="text-sm text-gray-400 hover:text-white">
                    お仕事依頼
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <a
              href="https://x.com/0karashogi"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@0karashogi"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center">
            <div className="flex gap-4 text-sm text-gray-400">
              <p>&copy; 2025 江坂学生支部.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

