import type { Metadata } from "next"
import Camp from "./camp"

export const metadata: Metadata = {
  title: "合宿 | 活動",
  description: "江坂学生支部のメンバーによる合宿の記録です。",
}

export default function Page() {
  return <Camp />
}
