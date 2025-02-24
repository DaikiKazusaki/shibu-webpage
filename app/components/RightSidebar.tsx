"use client"

import { useMemo } from "react"
import { Separator } from "@/components/ui/separator"

// 更新内容の型定義
type Update = {
  date: string
  content: string
}

// 更新内容のサンプルデータ
const updates: Update[] = [
  {
    date: "2025年2月21日",
    content:
      "「ホーム」のレイアウトとサイドバーのデザインを変更しました．また，「今後のイベント」に「詳細」を追加しXと同じ写真を掲載するようにしました．",
  },
  {
    date: "2025年2月20日",
    content:
      "「今後のイベント」ページを作成しました．教室・大会の情報はこちらからご覧ください．また，ホーム画面に画像を追加しました．",
  },
  { date: "2025年2月17日", content: "SNSのリンクをフッターに追加し，SNSページを削除しました．" },
  { date: "2025年2月16日", content: "活動ページに写真を追加しました．" },
  { date: "2025年2月9日", content: "サイトのレイアウトを変更しました．" },
]

const RightSidebar = () => {
  const updateItems = useMemo(() => {
    return updates.map((update, index) => (
      <div key={index} className="py-4 first:pt-0 last:pb-0">
        <p className="font-semibold text-sm text-muted-foreground">{update.date}</p>
        <p className="text-sm mt-1">{update.content}</p>
        {index < updates.length - 1 && <Separator className="mt-4" />}
      </div>
    ))
  }, [])

  return (
    <div className="bg-background border-l border-b">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">更新情報</h2>
      </div>
      <div className="px-4">
        <div className="py-4">
          {updateItems.length > 0 ? (
            updateItems
          ) : (
            <p className="text-sm text-muted-foreground">更新情報はありません。</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default RightSidebar

