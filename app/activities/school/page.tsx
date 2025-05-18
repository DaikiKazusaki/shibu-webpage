import type { Metadata } from "next"
// import School from "./school"

export const metadata: Metadata = {
  title: "将棋教室 | 活動",
  description: "江坂学生支部が運営する将棋教室の活動記録です。",
}

export default function SchoolPage() {
  // return <School />
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">現在準備中</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        お待たせして申し訳ありません。
      </p>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        もうしばらくお待ちください。 
      </p>
    </main>
  )
}
