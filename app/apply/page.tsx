import Link from 'next/link'

export default function Apply() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/apply/event" className="text-blue-600 hover:underline">
            大会・教室のお申し込み
          </Link>
        </li>
        <li>
          <Link href="/apply/request" className="text-blue-600 hover:underline">
            地域の小学校の将棋講師など、その他のご依頼
          </Link>
        </li>
        <li>
          <Link href="/apply/join" className="text-blue-600 hover:underline">
            支部に入りたい方はこちら
          </Link>
        </li>
      </ul>
    </div>
  )
}

