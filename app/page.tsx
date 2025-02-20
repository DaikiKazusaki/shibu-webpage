import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ホーム',
  description: '江坂学生支部のホームページです。',
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">江坂学生支部へようこそ</h1>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">江坂学生支部とは</h2>
        <p>全国の大学生有志で結成した、日本将棋連盟の支部です。将棋イベントを運営しています！</p>
        <Link href="/about" className="text-blue-600 hover:underline">
          詳細を見る
        </Link>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">理念・存在意義</h2>
        <p>どなたでもご参加いただける、日本一アットホームな将棋イベントを目指しています！将棋の普及にも力をいれています！</p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">活動内容</h2>
        <p>将棋大会、将棋教室、将棋合宿などを主催しています！地域の学校や公民館に、将棋講師の派遣も行っております！</p>
        <Link href="/activities" className="text-blue-600 hover:underline">
          詳細を見る
        </Link>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
        <p>
          将棋講師の派遣も行っています。また、支部メンバーの募集も随時行っています！お問い合わせは
          <a href="mailto:shogi.esakagakusei@gmail.com" className="text-blue-600 hover:underline">こちらまで</a>
        </p>
      </section>
    </div>
  )
}
