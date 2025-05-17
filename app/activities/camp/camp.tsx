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
  // Format the date from YYYY-MM-DD to YYYY年MM月DD日
  const formatDate = (isoDate: string) => {
    const [year, month, day] = isoDate.split("-")
    return `${year}年${month}月${day}日`
  }

  return (
    <div className="mb-12 bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-2xl font-semibold mb-4 text-sky-800">{`${title}`}</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <span className="inline-block px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm">{formatDate(date)}</span>
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
      date: "2024-09-15",
      title: "秋の将棋合宿",
      location: "京都府",
      images: ["/2024-01-07-suisen/suisen1.jpg", "/2024-01-07-suisen/suisen2.jpg", "/2024-03-24-sakura/sakura1.jpg"],
      description:
        "京都で3日間の将棋合宿を開催しました。朝から晩まで将棋漬けの日々で、参加者全員が技術を向上させることができました。プロ棋士による指導対局も行われ、貴重な経験となりました。",
    },
    {
      date: "2024-03-20",
      title: "春休み将棋合宿",
      location: "静岡県",
      images: [
        "/2024-03-24-sakura/sakura2.jpg",
        "/2024-05-05-suzuran/suzuran1.jpg",
        "/2024-05-05-suzuran/suzuran2.jpg",
      ],
      description:
        "静岡県の温泉地で春休み将棋合宿を実施しました。大学生を中心に20名が参加し、研修会や対局会を行いました。温泉でリラックスしながらも、真剣な対局が繰り広げられました。",
    },
    {
      date: "2023-12-25",
      title: "冬季将棋合宿",
      location: "長野県",
      images: ["/2024-06-15-ajisai/ajisai1.jpg", "/2024-06-15-ajisai/ajisai2.jpg", "/2024-06-15-ajisai/ajisai3.jpg"],
      description:
        "長野県の山間部で冬季将棋合宿を開催しました。雪景色の中での合宿は格別で、集中して将棋に取り組むことができました。夜には研究会も行われ、互いの研究成果を共有する貴重な機会となりました。",
    },
    {
      date: "2023-08-10",
      title: "夏季将棋合宿",
      location: "広島県",
      images: [
        "/2024-08-09-hiroshima_himawari/himawari1.jpg",
        "/2024-08-09-hiroshima_himawari/himawari2.jpg",
        "/2024-08-11-tokyo_himawari/himawari1.jpg",
      ],
      description:
        "広島県の海辺で夏季将棋合宿を実施しました。朝の対局、昼の講義、夜の研究会と充実したスケジュールで、参加者全員が多くを学ぶことができました。海水浴の時間も設けられ、リフレッシュしながら将棋に打ち込むことができました。",
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
