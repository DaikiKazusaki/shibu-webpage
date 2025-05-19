"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Activities() {
  // Define the activity categories
  const categories = [
    {
      id: "school",
      title: "将棋教室",
      description:　
        "大人の方、女性の方でも気軽に参加できる将棋教室「おひさま将棋教室」を開催しています。上達を目指すだけはなく、「多様な将棋との向き合い方をすべて応援する」ことをテーマに、どんなご要望にも寄り添えるよう日々努力しております。「人気YouTuberさんの指導対局」「学生強豪と指し放題」など、特別企画も盛りだくさん。「公式LINEでの質問受付」「書籍の貸し出し(100冊以上)」「講師作の詰将棋の配布」「大会の割引」など、会員様限定のサービスも充実しています。",
      image: "/school/ohisama1.jpg",
      color: "bg-amber-100",
      borderColor: "border-amber-400",
      textColor: "text-amber-800",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
    },
    {
      id: "tournament",
      title: "大会",
      description:
        "「1日楽しめるリーグ戦&交流戦&自由対局」「おひとりでもご参加いただける団体戦」「誰もが得意を活かせる、毎局違う持ち時間」「丁寧なクラス分け」「じゃんけん大会で景品をプレゼント」「駒の展覧会や記念対局などの同時企画」といった、既存の将棋大会の課題を解決し、実力や世代に関わらずみなさまに楽しんでいただける新構想を実現し続けています！",
      image: "/tournament/2024-08-09-hiroshima_himawari/himawari1.jpg",
      color: "bg-emerald-100",
      borderColor: "border-emerald-400",
      textColor: "text-emerald-800",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      id: "camp",
      title: "合宿",
      description:
        "夏休みと春休みに、2泊3日で全国から学生が集まります。今後は、学生と社会人の架け橋として、多様な人が交流できる場を創ります。過去3回は関西で開催しましたが、2025年夏から東西で開催します。",
      image: "/tournament/2024-01-07-suisen/suisen1.jpg",
      color: "bg-sky-100",
      borderColor: "border-sky-400",
      textColor: "text-sky-800",
      buttonColor: "bg-sky-600 hover:bg-sky-700",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-16 text-center">江坂学生支部の活動</h1>

      <div className="space-y-24">
        {categories.map((category) => (
          <section key={category.id} className={`rounded-xl overflow-hidden shadow-lg ${category.borderColor} border`}>
            <div className="relative h-80 w-full">
              <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className={`text-4xl font-bold text-white mb-2`}>{category.title}</h2>
              </div>
            </div>
            <div className={`p-8 ${category.color}`}>
              <p className="text-lg mb-8">{category.description}</p>
              <Link href={`/activities/${category.id}`} passHref>
                <Button className={`${category.buttonColor} text-white group`}>
                  詳細を見る
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
