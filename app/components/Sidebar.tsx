'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Activity {
  date: string
  title: string
}

const Sidebar = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const fetchedActivities: Activity[] = [
      { date: '2023-07-02', title: '向日葵将棋大会' },
    ]
    setActivities(fetchedActivities)
  }, [])

  const groupedActivities = activities.reduce((acc, activity) => {
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

  return (
    <aside className="w-64 bg-gray-100 p-4 hidden md:block overflow-y-auto">
      <nav>
        {Object.entries(groupedActivities).map(([year, months]) => (
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
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
