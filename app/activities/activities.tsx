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
        "江坂学生支部が運営する将棋教室の活動記録です。初心者から上級者まで、様々なレベルの方が参加しています。将棋の基本から実戦的な戦法まで、丁寧に指導しています。",
      image: "/ohisama/ohisama1.jpg",
      color: "bg-amber-100",
      borderColor: "border-amber-400",
      textColor: "text-amber-800",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
    },
    {
      id: "tournament",
      title: "大会",
      description:
        "江坂学生支部が主催・運営する将棋大会の記録です。季節ごとに様々な大会を開催しています。初心者から上級者まで、様々なレベルの方が参加できる大会を運営しています。",
      image: "/2024-08-09-hiroshima_himawari/himawari1.jpg",
      color: "bg-emerald-100",
      borderColor: "border-emerald-400",
      textColor: "text-emerald-800",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      id: "camp",
      title: "合宿",
      description:
        "江坂学生支部のメンバーによる合宿の記録です。集中的に将棋を学び、交流を深める機会となっています。これまでに開催した合宿の記録をご覧ください。",
      image: "/2024-01-07-suisen/suisen1.jpg",
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
