"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

interface Activity {
  date: string
  title: string
  description: string
  images: string[]
  blogLink?: string
}

const ActivityItem: React.FC<Activity> = ({ date, title, description, images, blogLink }) => {
  return (
    <div id={date} className="mb-8">
      <div className="flex items-center mb-2">
        <div className="bg-blue-500 rounded-full w-4 h-4 mr-4"></div>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
      <div className="ml-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {images.map((image, index) => (
            <div key={index} className="w-full h-64 relative">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <p className="text-gray-700 mb-2">{description}</p>
        {blogLink && (
          <a href={blogLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
      date: "2024-10-12",
      title: "秋桜将棋大会",
      images: ["/2024-10-12-kosumosu/kosumosu1.jpg"],
      description: "",
    },
    {
      date: "2024-08-21",
      title: "福岡向日葵将棋大会",
      images: [
        "/2024-08-21-fukuoka_himawari/himawari1.jpg",
        "/2024-08-21-fukuoka_himawari/himawari2.jpg",
        "/2024-08-21-fukuoka_himawari/himawari3.jpg",
      ],
      description: "",
    },
    {
      date: "2024-08-18",
      title: "京都向日葵将棋大会",
      images: ["/2024-08-18-kyoto_himawari/himawari1.jpg"],
      description: "",
    },
    {
      date: "2024-08-16",
      title: "名古屋向日葵将棋大会",
      images: ["/2024-08-16-nagoya_himawari/himawari1.jpg", "/2024-08-16-nagoya_himawari/himawari2.jpg"],
      description: "",
    },
    {
      date: "2024-08-11",
      title: "東京向日葵将棋大会",
      images: [
        "/2024-08-11-tokyo_himawari/himawari1.jpg",
        "/2024-08-11-tokyo_himawari/himawari2.jpg",
        "/2024-08-11-tokyo_himawari/himawari3.jpg",
      ],
      description: "",
    },
    {
      date: "2024-08-09",
      title: "広島向日葵将棋大会",
      images: ["/2024-08-09-hiroshima_himawari/himawari1.jpg", "/2024-08-09-hiroshima_himawari/himawari2.jpg"],
      description: "",
    },
    {
      date: "2024-06-15",
      title: "紫陽花将棋大会",
      images: ["/2024-06-15-ajisai/ajisai1.jpg", "/2024-06-15-ajisai/ajisai2.jpg", "/2024-06-15-ajisai/ajisai3.jpg"],
      description: "",
    },
    {
      date: "2024-05-05",
      title: "鈴蘭将棋大会",
      images: [
        "/2024-05-05-suzuran/suzuran1.jpg",
        "/2024-05-05-suzuran/suzuran2.jpg",
        "/2024-05-05-suzuran/suzuran3.jpg",
      ],
      description: "",
    },
    {
      date: "2024-03-24",
      title: "桜将棋大会",
      images: ["/2024-03-24-sakura/sakura1.jpg", "/2024-03-24-sakura/sakura2.jpg"],
      description: "",
    },
    {
      date: "2024-01-07",
      title: "水仙将棋大会",
      images: ["/2024-01-07-suisen/suisen1.jpg", "/2024-01-07-suisen/suisen2.jpg", "/2024-01-07-suisen/suisen1.jpg"],
      description: "",
    },
    {
      date: "2023-11-04",
      title: "秋桜将棋大会",
      images: [
        "/2023-11-04-kosumosu/kosumosu1.jpg",
        "/2023-11-04-kosumosu/kosumosu2.jpg",
        "/2023-11-04-kosumosu/kosumosu3.jpg",
      ],
      description: "",
    },
    {
      date: "2023-09-03",
      title: "金木犀将棋大会",
      images: ["/2023-09-03-kinmokusei/kinmokusei1.jpg", "/2023-09-03-kinmokusei/kinmokusei2.jpg"],
      description: "",
    },
    {
      date: "2023-07-02",
      title: "向日葵将棋大会",
      images: [
        "/2023-07-02-himawari/himawari1.jpg",
        "/2023-07-02-himawari/himawari2.jpg",
        "/2023-07-02-himawari/himawari3.jpg",
      ],
      description: "",
    },
  ]

  const loadMore = () => {
    setVisibleActivities((prevVisible) => Math.min(prevVisible + 5, activities.length))
  }

  return (
    <div>
      {activities.slice(0, visibleActivities).map((activity, index) => (
        <ActivityItem key={index} {...activity} />
      ))}
      {visibleActivities < activities.length && (
        <button onClick={loadMore} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
          さらに読み込む
        </button>
      )}
    </div>
  )
}

const ShogiBannerImages: React.FC = () => {
  const images = [
    "/ohisama/ohisama1.jpg",
    "/ohisama/ohisama2.jpg",
    "/ohisama/ohisama3.jpg",
    "/ohisama/ohisama4.jpg",
    "/ohisama/ohisama5.jpg",
    "/ohisama/ohisama6.jpg",
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {images.map((image, index) => (
        <div key={index} className="w-full h-48 md:h-64 relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={`おひさま将棋教室 - 画像 ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}

export default function Activities() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Removed the div with className="mb-8" that was creating the space */}
      <h1 className="text-3xl font-bold mb-6">おひさま将棋教室</h1>
      <ShogiBannerImages />
      <h1 className="text-3xl font-bold mb-6">将棋大会</h1>
      <ActivityTimeline />
    </div>
  )
}

