"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Tournament {
  date: string
  title: string
  description: string
  images: string[]
  blogLink?: string
}

const TournamentItem = ({ date, title, description, images, blogLink }: Tournament) => {
  // Format the date from YYYY-MM-DD to YYYY年MM月DD日
  const formatDate = (isoDate: string) => {
    const [year, month, day] = isoDate.split("-")
    return `${year}年${month}月${day}日`
  }

  return (
    <div className="mb-12 bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-2xl font-semibold mb-4 text-emerald-800">{`${title}`}</h3>
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

export default function Tournament() {
  const [visibleTournaments, setVisibleTournaments] = useState(5)

  // Data from the original activities.tsx
  const tournaments: Tournament[] = [
    {
      date: "2025-05-07",
      title: "くったくたになれる将棋大会",
      images: [
        "/tournament/2025-05-07-kuttakuta/kuttakuta1.jpg",
        "/tournament/2025-05-07-kuttakuta/kuttakuta2.jpg",
        "/tournament/2025-05-07-kuttakuta/kuttakuta3.jpg",
      ],
      description:
        "運営：松本，土居，岸本。新しい試みとして、参加者がくったくたになるまで将棋を楽しむ大会を開催しました。参加者のレベルが非常に高く、熱戦が繰り広げられました。",
    },
    {
      date: "2024-10-12",
      title: "秋桜将棋大会",
      images: ["/tournament/2024-10-12-kosumosu/kosumosu1.jpg"],
      description:
        "運営：松本，土居，岸本。",
    },
    {
      date: "2024-08-21",
      title: "福岡向日葵将棋大会",
      images: [
        "/tournament/2024-08-21-fukuoka_himawari/himawari1.jpg",
        "/tournament/2024-08-21-fukuoka_himawari/himawari2.jpg",
        "/tournament/2024-08-21-fukuoka_himawari/himawari3.jpg",
      ],
      description:
        "運営：松本，大塚さん。福岡で開催された向日葵将棋大会では、地元の方々を中心に多くの参加者が集まりました。初心者から上級者まで、様々なレベルの方が楽しめる大会となりました。",
    },
    {
      date: "2024-08-18",
      title: "京都向日葵将棋大会",
      images: ["/tournament/2024-08-18-kyoto_himawari/himawari1.jpg"],
      description:
        "運営：松本，大西，沖津。京都の歴史ある場所で開催された向日葵将棋大会。伝統と新しい将棋文化が融合した素晴らしい大会となりました。",
    },
    {
      date: "2024-08-16",
      title: "名古屋向日葵将棋大会",
      images: [
        "/tournament/2024-08-16-nagoya_himawari/himawari1.jpg",
        "/tournament/2024-08-16-nagoya_himawari/himawari2.jpg",
      ],
      description:
        "運営：松本，蓮田さん。名古屋で開催された向日葵将棋大会では、地元の将棋ファンが多く参加し、活気ある大会となりました。",
    },
    {
      date: "2024-08-11",
      title: "東京向日葵将棋大会",
      images: [
        "/tournament/2024-08-11-tokyo_himawari/himawari1.jpg",
        "/tournament/2024-08-11-tokyo_himawari/himawari2.jpg",
        "/tournament/2024-08-11-tokyo_himawari/himawari3.jpg",
      ],
      description:
        "運営：松本，金田，沖津，岡本。東京で開催された向日葵将棋大会は大盛況で、多くの参加者が熱戦を繰り広げました。",
    },
    {
      date: "2024-08-09",
      title: "広島向日葵将棋大会",
      images: [
        "/tournament/2024-08-09-hiroshima_himawari/himawari1.jpg",
        "/tournament/2024-08-09-hiroshima_himawari/himawari2.jpg",
      ],
      description:
        "運営：松本，大原，沖津。広島で開催された向日葵将棋大会では、地元の方々を中心に多くの参加者が集まりました。",
    },
    {
      date: "2024-06-15",
      title: "紫陽花将棋大会",
      images: [
        "/tournament/2024-06-15-ajisai/ajisai1.jpg",
        "/tournament/2024-06-15-ajisai/ajisai2.jpg",
        "/tournament/2024-06-15-ajisai/ajisai3.jpg",
      ],
      description:
        "運営：松本，土居，岸本。梅雨の季節に開催された紫陽花将棋大会。雨の中でも多くの方が参加し、熱い対局が繰り広げられました。",
    },
    {
      date: "2024-05-05",
      title: "鈴蘭将棋大会",
      images: [
        "/tournament/2024-05-05-suzuran/suzuran1.jpg",
        "/tournament/2024-05-05-suzuran/suzuran2.jpg",
        "/tournament/2024-05-05-suzuran/suzuran3.jpg",
      ],
      description:
        "運営：松本。初夏の訪れを感じる鈴蘭将棋大会。子どもから大人まで幅広い年齢層の方が参加し、楽しい大会となりました。",
    },
    {
      date: "2024-03-24",
      title: "桜将棋大会",
      images: [
        "/tournament/2024-03-24-sakura/sakura1.jpg",
        "/tournament/2024-03-24-sakura/sakura2.jpg",
      ],
      description:
        "運営：松本，土居，岸本。桜の季節に開催された将棋大会。春の訪れを感じながら、参加者は熱戦を繰り広げました。",
    },
    {
      date: "2024-01-07",
      title: "水仙将棋大会",
      images: [
        "/tournament/2024-01-07-suisen/suisen1.jpg",
        "/tournament/2024-01-07-suisen/suisen2.jpg",
        "/tournament/2024-01-07-suisen/suisen1.jpg",
      ],
      description:
        "運営：松本，土居，岸本。新年最初の大会となる水仙将棋大会。新しい年の始まりを祝うように、多くの方が参加しました。",
    },
  ]

  const loadMore = () => {
    setVisibleTournaments((prev) => Math.min(prev + 5, tournaments.length))
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
        <h1 className="text-4xl font-bold mb-6 text-emerald-800">将棋大会</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          江坂学生支部では、季節ごとに様々なテーマの将棋大会を開催しています。
          初心者から上級者まで、様々なレベルの方が参加できる大会を運営しています。
          これまでに開催した大会の記録をご覧ください。
        </p>
      </div>

      <div className="space-y-8">
        {tournaments.slice(0, visibleTournaments).map((tournament, index) => (
          <TournamentItem key={index} {...tournament} />
        ))}
      </div>

      {visibleTournaments < tournaments.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore} className="bg-emerald-600 hover:bg-emerald-700 text-white">
            もっと見る
          </Button>
        </div>
      )}
    </div>
  )
}
