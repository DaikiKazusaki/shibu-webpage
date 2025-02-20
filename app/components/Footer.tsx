import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">江坂学生支部</h3>
            <p>&copy; 2025 江坂学生支部. All rights reserved.</p>
            <p>This website is created by a group of students.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SNS・メディア</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/upcoming_event" className="hover:text-blue-300">
                  今後のイベント
                </Link>
              </li>
              <li>
                <a href="https://note.com/shogi_gakusei" className="hover:text-blue-300">
                  ブログ
                </a>
              </li>
              <li>
                <a href="https://x.com/0karashogi" className="hover:text-blue-300">
                  X (旧Twitter)
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@0karashogi" className="hover:text-blue-300">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="/books" className="hover:text-blue-300">
                  電子書籍
                </a>
              </li>
              <li>
                <a href="https://www.kansai-shogi.info/" className="hover:text-blue-300">
                  関西将棋会館ホームページ
                </a>
              </li>
              <li>
                <Link href="mailto:shogi.esakagakusei@gmail.com" className="hover:text-blue-300">
                  お仕事依頼
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

