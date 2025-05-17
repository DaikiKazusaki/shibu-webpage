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
      date: "2024-10-12",
      title: "おひさま将棋教室",
      images: ["/ohisama/ohisama1.jpg", "/ohisama/ohisama2.jpg", "/ohisama/ohisama3.jpg"],
      description:
        "初心者から上級者まで参加できる将棋教室を開催しました。駒の動かし方から実戦的な戦法まで、レベルに合わせた指導を行いました。参加者は熱心に取り組み、楽しく将棋を学んでいました。",
    },
    {
      date: "2024-08-05",
      title: "夏休み特別将棋教室",
      images: ["/ohisama/ohisama4.jpg", "/ohisama/ohisama5.jpg", "/ohisama/ohisama6.jpg"],
      description:
        "夏休み期間中に特別将棋教室を開催しました。多くの小中学生が参加し、基本的な戦法や詰将棋の解き方などを学びました。最後には参加者同士の対局も行い、学んだことを実践する機会となりました。",
    },
    {
      date: "2024-06-20",
      title: "大学生向け将棋講座",
      images: ["/ohisama/ohisama1.jpg", "/ohisama/ohisama3.jpg", "/ohisama/ohisama5.jpg"],
      description:
        "大学生を対象とした将棋講座を開催しました。中級者向けの内容で、実戦で役立つ戦法や終盤の詰みパターンなどを解説しました。参加者からは「実践的な内容で勉強になった」との声をいただきました。",
    },
    {
      date: "2024-04-15",
      title: "初心者向け将棋教室",
      images: ["/ohisama/ohisama2.jpg", "/ohisama/ohisama4.jpg", "/ohisama/ohisama6.jpg"],
      description:
        "将棋を始めたばかりの方を対象とした教室を開催しました。駒の動かし方から基本的な戦法まで、丁寧に指導しました。参加者は熱心に質問し、将棋の面白さを感じていただけたようです。",
    },
  ]

  const loadMore = () => {
    setVisibleClasses((prev) => Math.min(prev + 3, classes.length))
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
        {classes.slice(0, visibleClasses).map((classItem, index) => (
          <SchoolClassItem key={index} {...classItem} />
        ))}
      </div>

      {visibleClasses < classes.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore} className="bg-amber-600 hover:bg-amber-700 text-white">
            もっと見る
          </Button>
        </div>
      )}
    </div>
  )
}
