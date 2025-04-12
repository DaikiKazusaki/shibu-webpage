import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

export default function TournamentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header with background image */}
      <header className="relative py-20 text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "/about/game_shogi_ban.png",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content positioned above the background */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">将棋大会</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            初心者から上級者まで、すべての将棋ファンが楽しめる大会です。 戦略を磨き、新たな対局相手と出会いましょう。
          </p>
        </div>
      </header>

      {/* Tournament Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">大会情報</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">次回大会</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CalendarDays className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">開催日</p>
                    <p className="text-gray-600">2023年12月17日（日）</p>
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
                    <p className="text-gray-600">市民文化センター 3階 大会議室</p>
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
