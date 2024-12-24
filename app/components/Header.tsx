import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          全国大学生支部
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/about">支部について</Link></li>
          <li><Link href="/members">メンバー</Link></li>
          <li><Link href="/activities">活動</Link></li>
          <li><Link href="/sns">SNS</Link></li>
          <li><Link href="/apply">申し込み</Link></li>
        </ul>
      </nav>
    </header>
  )
}

