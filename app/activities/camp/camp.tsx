"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Camp {
  date: string
  title: string
  location: string
  description: string
  images: string[]
  blogLink?: string
}

const CampItem = ({ date, title, location, description, images, blogLink }: Camp) => {
  // Format the date from YYYY-MM-DD～YYYY-MM-DD to YYYY年MM月DD日～YYYY年MM月DD日
  const formatDate = (dateRange: string) => {
    if (!dateRange) return ""

    // Check if it's a date range (contains ～)
    if (dateRange.includes("～")) {
      const [startDate, endDate] = dateRange.split("～")
      const formatSingleDate = (isoDate: string) => {
        const [year, month, day] = isoDate.split("-")
        return `${year}年${month}月${day}日`
      }
      return `${formatSingleDate(startDate)}～${formatSingleDate(endDate)}`
    } else {
      // Single date
      const [year, month, day] = dateRange.split("-")
      return `${year}年${month}月${day}日`
    }
  }

  return (
    <div className="mb-12 bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-2xl font-semibold mb-4 text-sky-800">{`${title}`}</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        {date && (
          <span className="inline-block px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm">
            {formatDate(date)}
          </span>
        )}
        <span className="inline-block px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm">{location}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {images.map((image, index) => (
          <div key={index} className="w-full h-64 relative rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg?height=300&width=400"}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>
      <p className="text-gray-700 mb-4 text-lg">{description}</p>
      {blogLink && (
        <a
          href={blogLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline inline-block mt-2"
        >
          ブログを読む
        </a>
      )}
    </div>
  )
}

export default function Camp() {
  const [visibleCamps, setVisibleCamps] = useState(3)

  // Sample data for camps
  const camps: Camp[] = [
    {
      date: "2024-03-05～2024-03-07",
      title: "2024年春合宿",
      location: "大阪府高槻市セミナーハウス高岳館",
      images: [ "/camp/2024-spring/camp1.jpg", "/camp/2024-spring/camp2.jpg" ],
      description:  "",
    },
    {
      date: "2024-09-03～2024-09-05",
      title: "2024年秋合宿",
      location: "大阪府高槻市セミナーハウス高岳館",
      images: [ "/camp/2024-fall/camp1.jpg" ],
      description: "",
    },
    {
      date: "2025-03-05～2024-03-07",
      title: "2025年秋合宿",
      location: "大阪府高槻市セミナーハウス高岳館",
      images: [ "/camp/2025-spring/camp1.jpg", "/camp/2025-spring/camp2.jpg" ],
      description: "",
    },
  ]

  const loadMore = () => {
    setVisibleCamps((prev) => Math.min(prev + 3, camps.length))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/activities" passHref>
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            活動一覧に戻る
          </Button>
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-sky-800">将棋合宿</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          江坂学生支部では、定期的に将棋合宿を開催しています。
          集中的に将棋を学び、メンバー同士の交流を深める貴重な機会となっています。
          これまでに開催した合宿の記録をご覧ください。
        </p>
      </div>

      <div className="space-y-8">
        {camps.slice(0, visibleCamps).map((camp, index) => (
          <CampItem key={index} {...camp} />
        ))}
      </div>

      {visibleCamps < camps.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore} className="bg-sky-600 hover:bg-sky-700 text-white">
            もっと見る
          </Button>
        </div>
      )}
    </div>
  )
}
