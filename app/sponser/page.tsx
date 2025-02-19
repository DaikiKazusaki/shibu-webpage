import type { Metadata } from "next"
import Link from "next/link"
import Image from 'next/image'

export const metadata: Metadata = {
  title: "スポンサー",
  description: "このページは現在準備中です。",
}

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">現在準備中</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        お待たせして申し訳ありません。もうしばらくお待ちください。
      </p>
      <Image src="/public/sponser/nichibei-coffee.jpg" alt="Sample Image" width={500} height={500} objectFit="contain" />
      <Link href="http://www.nichibeicoffee.co.jp/" className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        スポンサーページへ
      </Link>
    </main>
  )
}

