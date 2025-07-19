import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "今後のイベント",
  description: "このページは現在準備中です。",
}

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">現在調整中</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        お待たせして申し訳ありません。
      </p>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        もうしばらくお待ちください。 
      </p>
    </main>
  )
}

