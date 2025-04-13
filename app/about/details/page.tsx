import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#f5f5f0] py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">将棋大会 & 教室</h1>
              <p className="text-xl text-gray-600">
                伝統の駒を動かし、戦略を磨き、新しい友達と出会いましょう。初心者から上級者まで、すべての方に開かれた将棋の世界へようこそ。
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-[#8C2D19] hover:bg-[#6B2113]">
                  <Link href="/about/details/tournament">大会について</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about/details/school">教室について</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg md:h-[400px] md:w-[400px]">
                <Image
                  src="/about/school_view.jpg?height=200&width=200"
                  alt="おひさま将棋教室の風景"
                  className="h-full w-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 教室案内 Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold">教室案内</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">教室概要</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">対象</p>
                    <p className="text-gray-600">5歳以上のお子様から大人まで、将棋に興味のある方</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CalendarDays className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">開催日</p>
                    <p className="text-gray-600">毎月第3日曜日</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">時間</p>
                    <p className="text-gray-600">
                      初心者クラス: 10:00〜12:00
                      <br />
                      中級者クラス: 13:00〜15:00
                      <br />
                      上級者クラス: 15:30〜17:30
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">会場</p>
                    <p className="text-gray-600">豊一市民センター</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">料金</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">入会金</p>
                  <p className="text-gray-600">3,000円（教材費込み）</p>
                </div>
                <div>
                  <p className="font-medium">月謝</p>
                  <p className="text-gray-600">
                    子供（中学生以下）: 5,000円/月（月4回）
                    <br />
                    大人: 6,000円/月（月4回）
                    <br />
                    ※月の途中からでも日割り計算いたします
                  </p>
                </div>
                <div>
                  <p className="font-medium">体験レッスン</p>
                  <p className="text-gray-600">1回1,000円（入会時に月謝から差し引きます）</p>
                </div>
                <div>
                  <p className="font-medium">支払方法</p>
                  <p className="text-gray-600">
                    現金または銀行振込
                    <br />
                    （毎月25日までに翌月分をお支払いください）
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 講師紹介 Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">講師紹介</h2>
          <div className="flex justify-center">
            <div className="max-w-sm rounded-lg border bg-card p-6 shadow-sm text-center">
              <div className="mb-4 mx-auto aspect-square overflow-hidden rounded-full w-40 h-40 flex items-center justify-center bg-gray-100">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="𠮷川惠"
                  className="h-full w-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">𠮷川 惠</h3>
              <p className="mb-2 text-sm text-gray-500">関西将棋会館五段</p>
              <p className="text-gray-600">
                女流アマ名人戦で優勝経験もある研修会員。おひさま将棋教室での講師歴も長く、初心者から上級者まで幅広い指導経験を持つ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 大会紹介 */}
            {/* 大会紹介 */}
            <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">将棋大会</h2>
          <div className="mb-12 text-center max-w-2xl mx-auto text-gray-700 text-lg">
            初心者から上級者まで、すべての将棋ファンが楽しめる大会です。
            戦略を磨き、新たな対局相手と出会いましょう。
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">次回大会</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CalendarDays className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">開催日</p>
                    <p className="text-gray-600">2025年5月4日（日）</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">時間</p>
                    <p className="text-gray-600">
                      受付: 9:00〜9:30
                      <br />
                      開会式: 9:45
                      <br />
                      対局開始: 10:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">会場</p>
                    <p className="text-gray-600">豊一市民センター</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">参加費</p>
                    <p className="text-gray-600">
                      一般: 2,000円
                      <br />
                      学生: 1,000円
                      <br />
                      小学生以下: 500円
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">大会形式</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">クラス分け</p>
                  <p className="text-gray-600">
                    A級（有段者）
                    <br />
                    B級（1〜3級）
                    <br />
                    C級（4級以下）
                    <br />
                    初心者クラス（ルールを覚えたばかりの方）
                  </p>
                </div>
                <div>
                  <p className="font-medium">対局方法</p>
                  <p className="text-gray-600">
                    スイス式トーナメント（5回戦）
                    <br />
                    持ち時間: 各30分
                    <br />
                    秒読み: 30秒
                  </p>
                </div>
                <div>
                  <p className="font-medium">表彰</p>
                  <p className="text-gray-600">
                    各クラス上位3名を表彰
                    <br />
                    参加賞あり
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
