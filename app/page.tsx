import Link from 'next/link'
import EventRegistrationForm from './components/EventRegistrationForm'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">全国大学生支部へようこそ</h1>
      <EventRegistrationForm />
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">全国大学生支部とは</h2>
        <p>全国大学生支部の概要説明...</p>
        <Link href="/about" className="text-blue-600 hover:underline">
          詳細を見る
        </Link>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">理念・存在意義</h2>
        <p>全国大学生支部の理念と存在意義の説明...</p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">活動内容</h2>
        <p>主な活動内容の概要...</p>
        <Link href="/activities" className="text-blue-600 hover:underline">
          詳細を見る
        </Link>
      </section>
    </div>
  )
}

