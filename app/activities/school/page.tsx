import type { Metadata } from "next"
import School from "./school"

export const metadata: Metadata = {
  title: "将棋教室 | 活動",
  description: "江坂学生支部が運営する将棋教室の活動記録です。",
}

export default function SchoolPage() {
  return <School />
}
