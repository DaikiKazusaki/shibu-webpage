import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Users, Sparkles, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "今後のイベント",
  description: "おひさま将棋教室の今後のイベント情報をご覧いただけます。",
}

type Event = {
  id: string
  title: string
  date: string // "YYYY年MM月DD日" 形式
  category: "school" | "tournament" | "other"
}

const events: Event[] = [
  { id: "1", title: "おひさま将棋教室", date: "2025年3月16日", category: "school" },
  { id: "2", title: "おひさま将棋教室", date: "2025年4月20日", category: "school" },
  { id: "3", title: "鈴蘭将棋大会(仮)", date: "2025年5月4日", category: "tournament" },
  { id: "4", title: "出張おひさま将棋教室 in こまこい", date: "2025年3月23日", category: "school" },
  { id: "5", title: "あにまるしぇお手伝い", date: "2025年5月25日", category: "other" },
  { id: "6", title: "将棋YouTuberそらさん出版記念大会(6/1 or 6/7)", date: "2025年6月1日", category: "tournament" },
]

function sortEventsByDate(a: Event, b: Event) {
  return (
    new Date(a.date.replace(/年|月/g, "-").replace("日", "")).getTime() -
    new Date(b.date.replace(/年|月/g, "-").replace("日", "")).getTime()
  )
}

export default function EventsPage() {
  const categorizedEvents = {
    school: events.filter((event) => event.category === "school").sort(sortEventsByDate),
    tournament: events.filter((event) => event.category === "tournament").sort(sortEventsByDate),
    other: events.filter((event) => event.category === "other").sort(sortEventsByDate),
  }

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 p-8">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-8 text-center">今後のイベント</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <EventCategory
          title="将棋教室"
          events={categorizedEvents.school}
          icon={<Users className="w-6 h-6" />}
          applyLink="https://docs.google.com/forms/d/13uXUzLFbFLr38LxfHfAC6HolzVG3Zb8KVCnAqGpXx8s/viewform"
          applyText="教室に申し込む"
          pastActivitiesLink="/activities?category=school"
        />
        <EventCategory
          title="将棋大会"
          events={categorizedEvents.tournament}
          icon={<Calendar className="w-6 h-6" />}
          applyLink="/apply/event"
          applyText="大会に申し込む"
          pastActivitiesLink="/activities?category=tournament"
        />
        <EventCategory
          title="その他のイベント"
          events={categorizedEvents.other}
          icon={<Sparkles className="w-6 h-6" />}
        />
      </div>
    </main>
  )
}

function EventCategory({
  title,
  events,
  icon,
  applyLink,
  applyText,
  pastActivitiesLink,
}: {
  title: string
  events: Event[]
  icon: React.ReactNode
  applyLink?: string
  applyText?: string
  pastActivitiesLink?: string
}) {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="border-b border-zinc-200 dark:border-zinc-700 pb-2">
            <h3 className="text-lg font-medium text-zinc-700 dark:text-zinc-300">{event.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{event.date}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-2">
        {applyLink && (
          <Link
            href={applyLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors w-full text-center"
          >
            {applyText}
          </Link>
        )}
        {pastActivitiesLink && (
          <Link
            href={pastActivitiesLink}
            className="inline-block bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-800 dark:text-zinc-200 font-bold py-2 px-4 rounded transition-colors w-full text-center flex items-center justify-center"
          >
            <Clock className="w-4 h-4 mr-2" />
            過去の活動を見る
          </Link>
        )}
      </div>
    </section>
  )
}

