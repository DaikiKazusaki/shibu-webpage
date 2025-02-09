// 過去の活動を表示するサイドバー

'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Activity {
  date: string
  title: string
}

const Sidebar = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    // API から取得する想定のデータ
    const fetchedActivities: Activity[] = [
      { date: '2023-07-02', title: '向日葵将棋大会' },
    ]
    setActivities(fetchedActivities)
  }, [])

  const groupedActivities = useMemo(() => {
    return activities.reduce((acc, activity) => {
      const date = new Date(activity.date)
      const year = date.getFullYear()
      const month = date.getMonth()
      if (!acc[year]) {
        acc[year] = {}
      }
      if (!acc[year][month]) {
        acc[year][month] = []
      }
      acc[year][month].push(activity)
      return acc
    }, {} as Record<number, Record<number, Activity[]>>)
  }, [activities])

  return (
    <Card className="hidden md:block w-64 h-full">
      <CardHeader>
        <CardTitle>過去の活動</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-120px)]">
          {Object.entries(groupedActivities).length > 0 ? (
            Object.entries(groupedActivities).map(([year, months]) => (
              <div key={year}>
                <h2 className="text-lg font-bold mt-4 mb-2">{year}年</h2>
                {Object.entries(months).map(([month, monthActivities]) => (
                  <div key={`${year}-${month}`} className="mb-4">
                    <h3 className="text-md font-semibold mb-2">
                      {new Date(parseInt(year), parseInt(month)).toLocaleString('ja-JP', { month: 'long' })}
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
            ))
          ) : (
            <p className="text-sm text-gray-500">過去の活動はありません。</p>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

export default Sidebar
