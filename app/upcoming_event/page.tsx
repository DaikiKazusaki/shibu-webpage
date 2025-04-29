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
  dates: string[]
  category: "school" | "tournament" | "other"
  location?: string
  applyLink?: string
}

const events: Event[] = [
  {
    title: "おひさま将棋教室特別企画",
    dates: ["2025年5月11日"],
    category: "school",
    location: "大阪府吹田市 豊一市民センター",
  },
  {
    title: "おひさま将棋教室",
    dates: ["2025年5月18日"],
    category: "school",
    location: "大阪府吹田市 豊一市民センター",
  },
  {
    title: "出張おひさま将棋教室 in こまこい",
    dates: ["2025年5月24日"],
    category: "school",
    location: "兵庫県神戸市 東灘区文化センター",
  },
  {
    title: "くったくたになれる将棋大会",
    dates: ["2025年5月4日"],
    category: "tournament",
    location: "大阪府吹田市 豊一市民センター",
    applyLink: "https://docs.google.com/forms/d/1kk5gSmhXm_6pkXbM1VbMawyeAtzfeJk_Zy4Ig9SzXAA/viewform",
  },
  {
    title: "将棋YouTuberそらさん杯 くったくたになれる将棋大会",
    dates: ["2025年6月7日"],
    category: "tournament",
    location: "京都府京都市 京都市生涯学習総合センター",
    applyLink: "https://docs.google.com/forms/d/171j8Gi5lvPx24jU8NfKTsw4yQDQWE-KoxVi3FKP8m9g/viewform",
  },
  {
    title: "駒師若水さん ミニ展覧会",
    dates: ["2025年5月4日"],
    category: "other",
    location: "大阪府吹田市 豊一市民センター",
  },
  {
    title: "あにまるしぇ お手伝い",
    dates: ["2025年5月25日"],
    category: "other",
    location: "大阪府高槻市 安満遺跡公園",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <EventCategory
          title="将棋教室"
          events={categorizedEvents.school}
          icon={<Users className="w-6 h-6" />}
          applyLink="https://docs.google.com/forms/d/e/1FAIpQLScrsUrDI4C3QtA093MawENrBpeCP0t1WuH58u0aB3zN9mpdfg/viewform"
          applyText="教室に申し込む"
          pastActivitiesLink="/activities?category=school"
        />
        <EventCategory
          title="将棋大会"
          events={categorizedEvents.tournament}
          icon={<Calendar className="w-6 h-6" />}
          applyText="大会に申し込む"
          pastActivitiesLink="/activities?category=tournament"
        />
        <EventCategory
          title="その他のイベント"
          events={categorizedEvents.other}
          icon={<Sparkles className="w-6 h-6" />}
        />
      </div>

      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-8 text-center"></h1>
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-8 text-center">詳細</h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <Image src="/advertisements/school.png" alt="おひさま将棋教室 広告" width={500} height={500} />
        <Image src="/advertisements/tournament0504.jpg" alt="くったくたになれる将棋大会(5/4) 広告" width={500} height={500} />
        <Image src="/advertisements/tournament0607.jpg" alt="将棋YouTuberそらさん杯くったくたになれる将棋大会(6/7) 広告" width={500} height={500} />
        <Image src="/advertisements/others.jpg" alt="その他のイベント 広告" width={500} height={500} />
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
    <section className="bg-zinc-50 dark:bg-zinc-800 rounded-lg shadow-md p-6 w-full">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={event.id || index} className="border-b border-zinc-200 dark:border-zinc-700 pb-2">
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
            {event.applyLink && (
              <div className="mt-2 flex justify-center">
                <Link
                  href={event.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded text-sm transition-colors w-full text-center"
                >
                  申し込む
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-2">
        {applyLink && (
          <Link
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
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
