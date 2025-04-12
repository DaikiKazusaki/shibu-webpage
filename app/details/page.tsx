import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Trophy, Users } from "lucide-react"

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
                  <Link href="/details/tournament">大会について</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/details/school">教室について</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg md:h-[400px] md:w-[400px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="山田先生"
                  className="h-full w-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">イベント情報</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8C2D19]/10">
                <Trophy className="h-6 w-6 text-[#8C2D19]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">月例将棋大会</h3>
              <p className="mb-4 text-gray-600">
                毎月開催される将棋大会。レベル別のクラス分けで、初心者から上級者まで楽しめます。
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>毎月第3日曜日</span>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8C2D19]/10">
                <Users className="h-6 w-6 text-[#8C2D19]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">初心者教室</h3>
              <p className="mb-4 text-gray-600">
                将棋の基本から学べる初心者向け教室。経験豊富な講師が丁寧に指導します。
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>毎週土曜日 午前10時〜</span>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8C2D19]/10">
                <MapPin className="h-6 w-6 text-[#8C2D19]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">会場案内</h3>
              <p className="mb-4 text-gray-600">交通アクセス良好な市民センターで開催。駐車場も完備しています。</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="mr-2 h-4 w-4" />
                <span>市民文化センター 3階</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
