import Link from 'next/link'

export default function SNS() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">SNS・メディア</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/events" className="text-blue-600 hover:underline">
            イベント告知
          </Link>
        </li>
        <li>
          <a href="https://note.com/alluniv_shibu" className="text-blue-600 hover:underline">ブログ</a>
        </li>
        <li>
          <a href="https://x.com/0karashogi" className="text-blue-600 hover:underline">X (Twitter)</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@0karashogi" className="text-blue-600 hover:underline">YouTube</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">電子書籍</a>
        </li>
        <li>
          <a href="https://www.kansai-shogi.info/" className="text-blue-600 hover:underline">関西将棋会館ホームページ</a>
        </li>
      </ul>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">お仕事依頼</h2>
        <Link href="/contact" className="text-blue-600 hover:underline">
          地域の将棋講師等、お仕事依頼のフォーム
        </Link>
      </div>
    </div>
  )
}

