import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "今後のイベント",
  description: "おひさま将棋教室の今後のイベント情報をご覧いただけます。",
}

type Event = {
  id: string
  title: string
  date: string
  category: "school" | "tournament" | "other"
}

const events: Event[] = [
  { id: "1", title: "おひさま将棋教室", date: "2025-06-15", category: "school" },
  { id: "2", title: "おひさま将棋教室", date: "2025-08-05", category: "school" },
  { id: "3", title: "夏休み子ども将棋大会", date: "2025-07-30", category: "tournament" },
  { id: "4", title: "出張こまこい", date: "2023-09-10", category: "other" },
]

export default function EventsPage() {
  const categorizedEvents = {
    school: events.filter((event) => event.category === "school"),
    tournament: events.filter((event) => event.category === "tournament"),
    other: events.filter((event) => event.category === "other"),
  }

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 p-8">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-8 text-center">今後のイベント</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <EventCategory
          title="将棋教室"
          events={categorizedEvents.school}
          icon={<Users className="w-6 h-6" />}
          applyLink="/app/apply/school"
          applyText="教室に申し込む"
        />
        <EventCategory
          title="将棋大会"
          events={categorizedEvents.tournament}
          icon={<Calendar className="w-6 h-6" />}
          applyLink="/app/apply/event"
          applyText="大会に申し込む"
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
}: {
  title: string
  events: Event[]
  icon: React.ReactNode
  applyLink?: string
  applyText?: string
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
      {applyLink && (
        <Link
          href={applyLink}
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {applyText}
        </Link>
      )}
    </section>
  )
}

