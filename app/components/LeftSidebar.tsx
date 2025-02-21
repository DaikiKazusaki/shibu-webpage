"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface Activity {
  date?: string
  title: string
}

type GroupedActivities = {
  ongoing?: Activity[]
  [key: number]: {
    [key: number]: Activity[]
  }
}

const Sidebar = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    // API から取得する想定のデータ
    const fetchedActivities: Activity[] = [
      { date: "", title: "おひさま将棋教室" },
      { date: "2024-10-12", title: "秋桜将棋大会" },
      { date: "2024-08-21", title: "福岡向日葵将棋大会" },
      { date: "2024-08-18", title: "京都向日葵将棋大会" },
      { date: "2024-08-16", title: "名古屋向日葵将棋大会" },
      { date: "2024-08-11", title: "東京向日葵将棋大会" },
      { date: "2024-08-09", title: "広島向日葵将棋大会" },
      { date: "2024-06-15", title: "紫陽花将棋大会" },
      { date: "2024-05-05", title: "鈴蘭将棋大会" },
      { date: "2024-03-24", title: "桜将棋大会" },
      { date: "2024-01-07", title: "水仙将棋大会" },
      { date: "2023-11-04", title: "秋桜将棋大会" },
      { date: "2023-09-03", title: "金木星将棋大会" },
      { date: "2023-07-02", title: "向日葵将棋大会" },
    ]
    setActivities(fetchedActivities)
  }, [])

  const groupedActivities = useMemo(() => {
    const sortedActivities = [...activities].sort((a, b) => {
      if (!a.date) return -1
      if (!b.date) return 1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return sortedActivities.reduce((acc: GroupedActivities, activity) => {
      if (!activity.date) {
        if (!acc.ongoing) acc.ongoing = []
        acc.ongoing.push(activity)
      } else {
        const date = new Date(activity.date)
        const year = date.getFullYear()
        const month = date.getMonth()
        if (!acc[year]) acc[year] = {}
        if (!acc[year][month]) acc[year][month] = []
        acc[year][month].push(activity)
      }
      return acc
    }, {})
  }, [activities])

  return (
    <div className="hidden md:block h-full bg-background border-l">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">過去の活動</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-4rem)] px-4">
        <div className="py-4">
          {Object.keys(groupedActivities).length > 0 ? (
            <>
              {groupedActivities.ongoing && (
                <div key="ongoing">
                  <h3 className="text-base font-semibold">将棋教室</h3>
                  <ul className="mt-2 space-y-1.5">
                    {groupedActivities.ongoing.map((activity: Activity, index: number) => (
                      <li key={index}>
                        <Link href={`/activities#${activity.title}`} className="text-sm text-blue-600 hover:underline">
                          {activity.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-4" />
                  <h3 className="text-base font-semibold">将棋大会</h3>
                </div>
              )}
              {Object.entries(groupedActivities)
                .filter(([key]) => key !== "ongoing")
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([year, months]) => (
                  <div key={year} className="mt-4">
                    <h3 className="text-base font-semibold text-primary/80">{year}年</h3>
                    <Separator className="my-2" />
                    {Object.entries(months)
                      .sort(([a], [b]) => Number(b) - Number(a))
                      .map(([month, monthActivities]) => (
                        <div key={`${year}-${month}`} className="mb-4">
                          <h4 className="text-sm font-medium mt-3 mb-2">
                            {new Date(Number(year), Number(month)).toLocaleString("ja-JP", {
                              month: "long",
                            })}
                          </h4>
                          <ul className="space-y-1.5">
                            {monthActivities.map((activity: Activity, index: number) => (
                              <li key={index}>
                                <Link
                                  href={`/activities#${activity.date}`}
                                  className="text-sm text-blue-600 hover:underline"
                                >
                                  {activity.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                ))}
            </>
          ) : (
            <p className="text-sm text-muted-foreground">過去の活動はありません。</p>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

export default Sidebar

