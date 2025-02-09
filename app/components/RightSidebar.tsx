import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

// 更新内容の型定義
type Update = {
  date: string
  content: string
}

// 更新内容のサンプルデータ
const updates: Update[] = [
  { date: "2025年2月15日", content: "新機能Aをリリースしました。" },
  { date: "2025年2月10日", content: "パフォーマンスの改善を行いました。" },
  { date: "2025年2月5日", content: "バグの修正を行いました。" },
  { date: "2025年1月30日", content: "デザインの微調整を行いました。" },
  { date: "2025年1月25日", content: "新しいユーザーインターフェースを導入しました。" },
]

const RightSidebar: React.FC = () => {
  return (
    <Card className="w-64 h-full">
      <CardHeader>
        <CardTitle>更新情報</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-120px)]">
          {updates.map((update, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold text-sm text-gray-600">{update.date}</p>
              <p className="text-sm">{update.content}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

export default RightSidebar

