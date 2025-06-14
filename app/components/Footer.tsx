import Link from "next/link"
import { BsTwitterX } from "react-icons/bs"
import { TbBrandYoutubeFilled } from "react-icons/tb"
import { FaBlog } from "react-icons/fa"
import { FaLine } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          
          {/* Logo Section - スマホでは min-height を適用しない */}
          <div className="w-full md:w-1/4 flex items-center justify-center h-full md:min-h-[200px]">
            <Link href="/" className="text-2xl font-bold">
              江坂学生支部
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
            <div>
              <h2 className="text-sm font-medium mb-4">メニュー</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-400 hover:text-white">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                    支部について
                  </Link>
                </li>
                <li>
                  <Link href="/members" className="text-sm text-gray-400 hover:text-white">
                    メンバー
                  </Link>
                </li>
                <li>
                  <Link href="/activities" className="text-sm text-gray-400 hover:text-white">
                    活動
                  </Link>
                </li>
                <li>
                  <Link href="/upcoming_event" className="text-sm text-gray-400 hover:text-white">
                    今後のイベント
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-medium mb-4">協賛</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="http://mayashogi.com/" className="text-sm text-gray-400 hover:text-white">
                    摩耶将棋倶楽部
                  </Link>
                </li>
                { /* 
                <li>
                  <Link href="/books" className="text-sm text-gray-400 hover:text-white">
                    電子書籍
                  </Link>
                </li>
                <li>
                  <Link href="https://w.atwiki.jp/kansai_syogi/" className="text-sm text-gray-400 hover:text-white">
                    関西学生将棋連盟ホームページ
                  </Link>
                </li>
                <li>
                  <a href="https://www.kansai-shogi.info/" className="text-sm text-gray-400 hover:text-white">
                    関西将棋会館ホームページ
                  </a>
                </li>
                <li>
                  <a href="https://www.shogi.or.jp/" className="text-sm text-gray-400 hover:text-white">
                    日本将棋連盟ホームページ
                  </a>
                </li>
                */ }
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-medium mb-4">お問い合わせ</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScX8nJjcw51JtI-icx04fylpPqzK7jfxNWOATS_F88tg7Frdg/viewform" className="text-sm text-gray-400 hover:text-white">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://x.com/0karashogi"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@0karashogi"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandYoutubeFilled className="w-5 h-5" />
              </a>
              <a
                href="https://note.com/shogi_gakusei"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBlog className="w-5 h-5" />
              </a>
              <a
                href="https://lin.ee/9kDPZlU"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLine className="w-5 h-5" />  
              </a>
            </div>
          </div>

          {/* copyright */}
          <div className="flex justify-center gap-4 text-sm text-gray-400 mt-4">
            <p>&copy; {currentYear} 江坂学生支部</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

