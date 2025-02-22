import Link from "next/link"
import { Mail, Calendar, BookOpen, ExternalLink, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">江坂学生支部</h3>
            <div className="space-y-2 text-gray-300">
              <p>&copy; 2025 江坂学生支部</p>
              <p className="text-sm">This website is created by a group of students.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SNS・メディア</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/upcoming_event" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  <span>今後のイベント</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://note.com/shogi_gakusei" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>ブログ</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/0karashogi" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                  <span>X (旧Twitter)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@0karashogi" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-4 w-4" />
                  <span>YouTube</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">リンク</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/books" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>電子書籍</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.kansai-shogi.info/" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>関西将棋会館ホームページ</span>
                </a>
              </li>
              <li>
                <Link 
                  href="mailto:shogi.esakagakusei@gmail.com" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>お仕事依頼</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
