import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Users, Sparkles, Clock, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "今後のイベント",
  description: "おひさま将棋教室の今後のイベント情報をご覧いただけます。",
}

type Event = {
  id?: string
  title: string
  dates: string[] // "YYYY年MM月DD日" 形式の配列に変更
  category: "school" | "tournament" | "other"
  location?: string
}

const events: Event[] = [
  {
    title: "おひさま将棋教室",
    dates: ["2025年4月20日"],
    category: "school",
    location: "大阪府吹田市豊一市民センター",
  },
  {
    title: "おひさま将棋教室",
    dates: ["2025年5月18日"],
    category: "school",
    location: "大阪府吹田市豊一市民センター",
  },
  {
    title: "鈴蘭将棋大会(仮)",
    dates: ["2025年5月4日"],
    category: "tournament",
    location: "未定(大阪)",
  },
  {
    title: "将棋YouTuberそらさん出版記念大会",
    dates: ["2025年6月1日", "2025年6月7日"], // 複数の候補日を配列で指定
    category: "tournament",
    location: "未定(京都)",
  },
  {
    title: "あにまるしぇお手伝い",
    dates: ["2025年5月25日"],
    category: "other",
    location: "大阪府高槻市安満遺跡公園",
  },
]

function getEarliestDate(dates: string[]): Date {
  return new Date(Math.min(...dates.map((date) => new Date(date.replace(/年|月/g, "-").replace("日", "")).getTime())))
}

function sortEventsByDate(a: Event, b: Event) {
  return getEarliestDate(a.dates).getTime() - getEarliestDate(b.dates).getTime()
}

function formatDates(dates: string[]): string {
  return dates.length > 1 ? dates.join(" or ") : dates[0]
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
      {/* 以下はスペースを設けるためのh1タグ */}
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-8 text-center"></h1>
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-8 text-center">詳細</h1>
      <div className="mt-12 flex justify-center">
        {/* 広告の写真は以下に追加 */}
        <Image src="/advertisements/school.jpg" alt="おひさま将棋教室 広告" width={500} height={500} objectFit="contain" />
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
            <p className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDates(event.dates)}
            </p>
            {event.location && (
              <p className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4" />
                {event.location}
              </p>
            )}
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

