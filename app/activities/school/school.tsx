"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SchoolClass {
  date: string
  title: string
  description: string
  images: string[]
  blogLink?: string
}

const SchoolClassItem = ({ date, title, description, images, blogLink }: SchoolClass) => {
  // Format the date from YYYY-MM-DD to YYYY年MM月DD日
  const formatDate = (isoDate: string) => {
    const [year, month, day] = isoDate.split("-")
    return `${year}年${month}月${day}日`
  }

  return (
    <div className="mb-12 bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-2xl font-semibold mb-4 text-amber-800">{`${title}`}</h3>
      <p className="text-gray-500 mb-4">{formatDate(date)}</p>
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

export default function School() {
  const [visibleClasses, setVisibleClasses] = useState(3)

  // Sample data for shogi classes
  const classes: SchoolClass[] = [
    {
      "date": "2025-05-18",
      "title": "おひさま将棋教室",
      "description": "講師：吉川さん，運営：松本，今回は写真を取り忘れてしまいました...すいません！！！(松本)",
      "images": []
    },
    {
      "date": "2025-04-20",
      "title": "おひさま将棋教室",
      "description": "講師：吉川さん，運営：松本",
      "images": []
    },
    {
      "date": "2025-03-23",
      "title": "出張おひさま将棋教室 in こまこい",
      "description": "運営：立石さん(こまこい)，講師：松本",
      "images": []
    },
    {
      "date": "2025-03-16",
      "title": "おひさま将棋教室",
      "description": "講師：吉川さん，運営：松本",
      "images": []
    },
    {
      "date": "2025-02-16",
      "title": "おひさま将棋教室",
      "description": "講師：吉川さん，運営：松本",
      "images": []
    },
    {
      "date": "2025-01-25",
      "title": "旧おひさま将棋教室",
      "description": "講師：吉川さん，運営：松本",
      "images": []
    },
    {
      "date": "2025-01-12",
      "title": "出張おひさま将棋教室 in こまこい",
      "description": "運営：立石さん(こまこい)，講師：松本",
      "images": []
    },
    {
      "date": "2024-10-27",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-10-14",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-10-20",
      "title": "出張おひさま将棋教室 in こまこい",
      "description": "運営：立石さん(こまこい)，講師：松本",
      "images": []
    },
    {
      "date": "2024-10-12",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-09-23",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-09-21",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-09-15",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-07-28",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-07-20",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-07-13",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-07-12",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-07-07",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    },
    {
      "date": "2024-06-30",
      "title": "旧おひさま将棋教室",
      "description": "運営：松本",
      "images": []
    }
  ]

  // Sort classes by date in descending order (newest first)
  const sortedClasses = [...classes].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const loadMore = () => {
    setVisibleClasses((prev) => Math.min(prev + 3, sortedClasses.length))
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
        <h1 className="text-4xl font-bold mb-6 text-amber-800">将棋教室</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          江坂学生支部では、定期的に将棋教室を開催しています。初心者から上級者まで、様々なレベルの方が参加できる教室を運営しています。
          将棋の基本から実戦的な戦法まで、丁寧に指導しています。
        </p>
      </div>

      <div className="space-y-8">
        {sortedClasses.slice(0, visibleClasses).map((classItem, index) => (
          <SchoolClassItem key={index} {...classItem} />
        ))}
      </div>

      {visibleClasses < sortedClasses.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore} className="bg-amber-600 hover:bg-amber-700 text-white">
            もっと見る
          </Button>
        </div>
      )}
    </div>
  )
}
