'use client'

import { useState } from 'react'

interface Activity {
  date: string
  title: string
  description: string
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
      date: '2023年12月15日',
      title: '冬季将棋大会開催',
      description: '地域の方々を招いて冬季将棋大会を開催しました。参加者は100名を超え、大盛況でした。',
      blogLink: '/blog/winter-tournament-2023'
    },
    {
      date: '2023年10月5日',
      title: '小学校での将棋教室',
      description: '地元の小学校で将棋教室を開催。子どもたちの興味を引き出すことができました。',
      blogLink: '/blog/elementary-school-class'
    },
    {
      date: '2023年8月20日',
      title: '夏季合宿',
      description: 'メンバーで2泊3日の合宿を行い、技術向上と親睦を深めました。',
      blogLink: '/blog/summer-camp-2023'
    },
    {
      date: '2023年6月30日',
      title: 'オンライン将棋大会',
      description: '初のオンライン将棋大会を開催。全国から200名以上の参加がありました。',
      blogLink: '/blog/online-tournament-2023'
    },
    {
      date: '2023年4月15日',
      title: '新入生歓迎会',
      description: '新しく加入した学生メンバーを歓迎する会を開催しました。',
      blogLink: '/blog/welcome-party-2023'
    },
    {
      date: '2023年2月11日',
      title: '将棋フェスティバル参加',
      description: '市内で開催された将棋フェスティバルにブース出展しました。',
      blogLink: '/blog/shogi-festival-2023'
    },
    {
      date: '2023年1月5日',
      title: '新年将棋大会',
      description: '新年を祝して、地域の方々と共に新年将棋大会を開催しました。',
      blogLink: '/blog/new-year-tournament-2023'
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

