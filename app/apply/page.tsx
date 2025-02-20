import Link from 'next/link'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '申し込み',
  description: '教室・大会などの申し込みを行うページです．',
}

export default function Apply() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <ul className="space-y-4">
        <li>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScrsUrDI4C3QtA093MawENrBpeCP0t1WuH58u0aB3zN9mpdfg/viewform" className="text-blue-600 hover:underline">
            教室のお申し込み
          </Link>
        </li>
        <li>
          <Link href="/apply/event" className="text-blue-600 hover:underline">
            大会のお申し込み
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

