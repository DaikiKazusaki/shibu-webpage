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
  guests?: string[]
  location?: string
  applyLink?: string
}

const schoolEvents: Event[] = [
  {
    title: "おひさま将棋教室 新特別企画「大学生強豪と指し放題！」",
    dates: ["2025年6月8日"],
    category: "school",
    location: "大阪府吹田市 豊一市民センター",
  },
  {
    title: "おひさま将棋教室 新特別企画「大学生強豪と指し放題！」",
    dates: ["2025年6月22日"],
    category: "school",
    location: "大阪府吹田市 豊一市民センター",
  },
]

const tournamentEvents: Event[] = [
  {
    title: "うたげ将棋団体戦",
    dates: ["2025年6月28日"],
    category: "tournament",
    location: "大阪府大阪市 将棋barうたげ",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdDEgpGTVBpCM5Os-dpytcejN8yq9NlCMkpHtpmNfGca8m0BQ/viewform",
  },
]

const otherEvents: Event[] = [
  {
    title: "摩耶将棋倶楽部 一日将棋カフェ",
    dates: ["2025年6月21日"],
    category: "other",
    guests: ["主催: 摩耶将棋倶楽部"],
    location: "兵庫県神戸市 摩耶将棋倶楽部",
  },
]

const imageAds: { src: string; alt: string }[] = [
  { src: "/advertisements/ohisama-June.jpg", alt: "おひさま将棋教室 広告" },
  { src: "/advertisements/tournament0607.png", alt: "将棋YouTuberそらさん杯くったくたになれる将棋大会 広告" },
  { src: "/advertisements/tournament0628.png", alt: "うたげ将棋団体戦" },
  { src: "/advertisements/others.jpg", alt: "その他のイベント 広告" },
  { src: "/advertisements/others0621.jpg", alt: "摩耶将棋倶楽部一日将棋カフェ 広告" },
]

function getEarliestDate(dates: string[]): Date {
  return new Date(
    Math.min(...dates.map((date) => new Date(date.replace(/年|月/g, "-").replace("日", "")).getTime()))
  )
}

function sortEventsByDate(a: Event, b: Event) {
  return getEarliestDate(a.dates).getTime() - getEarliestDate(b.dates).getTime()
}

function formatDates(dates: string[]): string {
  return dates.length > 1 ? dates.join(" or ") : dates[0]
}

// 本日以降のイベントのみを残す
function isUpcoming(dateStr: string): boolean {
  const eventDate = new Date(dateStr.replace(/年|月/g, "-").replace("日", ""))
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return eventDate >= today
}

function filterUpcomingEvents(events: Event[]): Event[] {
  return events
    .map((event) => ({
      ...event,
      dates: event.dates.filter(isUpcoming),
    }))
    .filter((event) => event.dates.length > 0)
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 p-8">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-8 text-center">今後のイベント</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <EventCategory
          title="将棋教室"
          events={filterUpcomingEvents(schoolEvents).sort(sortEventsByDate)}
          icon={<Users className="w-6 h-6" />}
          applyLink="https://docs.google.com/forms/d/e/1FAIpQLScrsUrDI4C3QtA093MawENrBpeCP0t1WuH58u0aB3zN9mpdfg/viewform"
          applyText="教室に申し込む"
          pastActivitiesLink="/activities?category=school"
        />
        <EventCategory
          title="将棋大会"
          events={filterUpcomingEvents(tournamentEvents).sort(sortEventsByDate)}
          icon={<Calendar className="w-6 h-6" />}
          applyText="大会に申し込む"
          pastActivitiesLink="/activities?category=tournament"
        />
        <EventCategory
          title="その他のイベント"
          events={filterUpcomingEvents(otherEvents).sort(sortEventsByDate)}
          icon={<Sparkles className="w-6 h-6" />}
        />
      </div>

      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 my-12 text-center">詳細</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {imageAds.map((ad, index) => (
          <div key={index} className="w-full flex justify-center">
            <Image src={ad.src} alt={ad.alt} width={500} height={500} className="rounded-lg shadow-md" />
          </div>
        ))}
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
            {event.guests && (
              <p className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2 mt-1">
                <Users className="w-4 h-4" />
                {event.guests.join("、")}
              </p>
            )}
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
