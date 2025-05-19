import type { Metadata } from "next"
import MemberIntroduction from "./member-introduction"

export const metadata: Metadata = {
  title: "メンバー",
  description: "江坂学生支部のメンバー紹介ページです。",
}

export default function MembersPage() {
  return <MemberIntroduction/>
}
