import type { Metadata } from "next"
import UpcomingEvent from "./upcoming_event"

export const metadata: Metadata = {
  title: "今後のイベント",
  description: "このページは現在準備中です。",
}

export default function ComingSoon() {
  return (
    <UpcomingEvent/>
  )
}

