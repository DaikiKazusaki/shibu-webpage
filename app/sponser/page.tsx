import type { Metadata } from "next"
import Link from "next/link"
import Image from 'next/image'

export const metadata: Metadata = {
  title: "スポンサー",
  description: "このページは現在準備中です。",
}

export default function ComingSoon() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">日米珈琲</h1>
      <Image src="/sponser/nichibei-coffee.jpg" alt="Image of nishibei-coffee" width={500} height={500} objectFit="contain" />
      <Link href="http://www.nichibeicoffee.co.jp/" className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        スポンサーページへ
      </Link>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        お待たせして申し訳ありません。もうしばらくお待ちください。
      </p>
    </main>
  )
}

