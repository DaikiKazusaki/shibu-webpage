// newsを右サイドバーに表示するコンポーネント

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

// 更新内容の型定義
type Update = {
  date: string
  content: string
}

// 更新内容のサンプルデータ
const updates: Update[] = [
  { date: "2025年2月16日", content: "活動ページに写真を追加しました．" },
  { date: "2025年2月9日", content: "サイトのレイアウトを変更しました．" }
]

const RightSidebar = () => {
  const updateItems = useMemo(() => {
    return updates.map((update, index) => (
      <div key={index} className="mb-4">
        <p className="font-semibold text-sm text-gray-600">{update.date}</p>
        <p className="text-sm">{update.content}</p>
      </div>
    ))
  }, [])

  return (
    <Card className="w-64 h-full">
      <CardHeader>
        <CardTitle>更新情報</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-120px)]">
          {updateItems.length > 0 ? updateItems : <p className="text-sm text-gray-500">更新情報はありません。</p>}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

export default RightSidebar

