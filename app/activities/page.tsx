'use client'

import { useState } from 'react'
import Image from 'next/image' 

interface Activity {
  date: string
  title: string
  description: string
  figure: string
  blogLink?: string
}

const ActivityItem: React.FC<Activity> = ({ date, title, description, blogLink }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <div className="bg-blue-500 rounded-full w-4 h-4 mr-4"></div>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
      <div className="ml-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <Image src="/2023-07-02-himawari/himawari-1.jpg" alt="Sample Image" width={500} height={500} objectFit="contain" />
        <p className="text-gray-700 mb-2">{description}</p>
        {blogLink && (
          <a 
            href={blogLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
          >
            ブログを読む
          </a>
        )}
      </div>
    </div>
  )
}

const ActivityTimeline: React.FC = () => {
  const [visibleActivities, setVisibleActivities] = useState(5)
  const activities: Activity[] = [
    {
      date: '2023年7月2日',
      title: '向日葵将棋大会開催',
      description: '地域の方々を招いて冬季将棋大会を開催しました。参加者は100名を超え、大盛況でした。'
    }
  ]

  const loadMore = () => {
    setVisibleActivities(prevVisible => 
      Math.min(prevVisible + 5, activities.length)
    )
  }

  return (
    <div>
      {activities.slice(0, visibleActivities).map((activity, index) => (
        <ActivityItem key={index} {...activity} />
      ))}
      {visibleActivities < activities.length && (
        <button 
          onClick={loadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          さらに読み込む
        </button>
      )}
    </div>
  )
}

export default function Activities() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">これまでの活動</h1>
      <ActivityTimeline />
    </div>
  )
}

