import type { Metadata } from "next"
import Tournament from "./tournament"

export const metadata: Metadata = {
  title: "大会 | 活動",
  description: "江坂学生支部が主催・運営する将棋大会の記録です。",
}

export default function TournamentPage() {
  return <Tournament />
}
