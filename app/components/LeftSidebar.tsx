"use client"
import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Activity {
  date?: string
  title: string
}

const Sidebar = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    // API から取得する想定のデータ
    const fetchedActivities: Activity[] = [
      { date: "", title: "おひさま将棋教室" },
      { date: "2024-10-12", title: "秋桜将棋大会開催" },
      { date: "2024-08-21", title: "福岡向日葵将棋大会開催" },
      { date: "2024-08-18", title: "京都向日葵将棋大会開催" },
      { date: "2024-08-16", title: "名古屋向日葵将棋大会開催" },
      { date: "2024-08-11", title: "東京向日葵将棋大会開催" },
      { date: "2024-08-09", title: "広島向日葵将棋大会開催" },
      { date: "2024-06-15", title: "紫陽花将棋大会開催" },
      { date: "2024-05-05", title: "水仙将棋大会開催" },
      { date: "2024-03-24", title: "桜将棋大会開催" },
      { date: "2024-01-07", title: "水仙将棋大会開催" },
      { date: "2023-11-04", title: "秋桜将棋大会開催" },
      { date: "2023-09-03", title: "金木星将棋大会開催" },
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

    const grouped = sortedActivities.reduce(
      (acc, activity) => {
        if (!activity.date) {
          if (!acc["ongoing"]) acc["ongoing"] = []
          acc["ongoing"].push(activity)
        } else {
          const date = new Date(activity.date)
          const year = date.getFullYear()
          const month = date.getMonth()
          if (!acc[year]) acc[year] = {}
          if (!acc[year][month]) acc[year][month] = []
          acc[year][month].push(activity)
        }
        return acc
      },
      {} as Record<string | number, Record<number, Activity[]> | Activity[]>,
    )

    return grouped
  }, [activities])

  return (
    <Card className="hidden md:block w-64 h-full">
      <CardHeader>
        <CardTitle>過去の活動</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-120px)]">
          {Object.entries(groupedActivities).length > 0 ? (
            <>
              {groupedActivities["ongoing"] && (
                <div key="ongoing">
                  <h2 className="text-lg font-bold mt-4 mb-2">将棋教室</h2>
                  <ul className="space-y-1">
                    {(groupedActivities["ongoing"] as Activity[]).map((activity, index) => (
                      <li key={index}>
                        <Link href={`/activities#${activity.title}`} className="text-blue-600 hover:underline">
                          {activity.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {Object.entries(groupedActivities)
                .filter(([key]) => key !== "ongoing")
                .sort(([a], [b]) => Number.parseInt(b) - Number.parseInt(a))
                .map(([year, months]) => (
                  <div key={year}>
                    <h2 className="text-lg font-bold mt-4 mb-2">{year}年</h2>
                    {Object.entries(months as Record<number, Activity[]>)
                      .sort(([a], [b]) => Number.parseInt(b) - Number.parseInt(a))
                      .map(([month, monthActivities]) => (
                        <div key={`${year}-${month}`} className="mb-4">
                          <h3 className="text-md font-semibold mb-2">
                            {new Date(Number.parseInt(year as string), Number.parseInt(month)).toLocaleString("ja-JP", {
                              month: "long",
                            })}
                          </h3>
                          <ul className="space-y-1">
                            {monthActivities.map((activity, index) => (
                              <li key={index}>
                                <Link href={`/activities#${activity.date}`} className="text-blue-600 hover:underline">
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
            <p className="text-sm text-gray-500">過去の活動はありません。</p>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

export default Sidebar

