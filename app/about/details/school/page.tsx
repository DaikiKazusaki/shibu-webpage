import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, CalendarDays, Clock, GraduationCap, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function ClassroomPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Class Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">教室案内</h2>
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

      {/* Class Levels */}
      <section className="bg-[#f5f5f0] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">クラス紹介</h2>
          <Tabs defaultValue="beginner" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginner">初心者クラス</TabsTrigger>
              <TabsTrigger value="intermediate">中級者クラス</TabsTrigger>
              <TabsTrigger value="advanced">上級者クラス</TabsTrigger>
            </TabsList>
            <TabsContent value="beginner" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>初心者クラス</CardTitle>
                  <CardDescription>将棋を始めたばかりの方、ルールを覚えたい方向け</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <BookOpen className="mr-4 h-6 w-6 text-[#8C2D19]" />
                    <div>
                      <p className="font-medium">学習内容</p>
                      <ul className="ml-6 list-disc text-gray-600">
                        <li>駒の動かし方と基本ルール</li>
                        <li>簡単な詰将棋</li>
                        <li>基本的な戦法と手筋</li>
                        <li>対局マナー</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="mr-4 h-6 w-6 text-[#8C2D19]" />
                    <div>
                      <p className="font-medium">目標</p>
                      <p className="text-gray-600">
                        将棋のルールを完全に理解し、基本的な戦法を身につけて、10級程度の実力を目指します。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="intermediate" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>中級者クラス</CardTitle>
                  <CardDescription>基本ルールを理解し、さらなる上達を目指す方向け</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <BookOpen className="mr-4 h-6 w-6 text-[#8C2D19]" />
                    <div>
                      <p className="font-medium">学習内容</p>
                      <ul className="ml-6 list-disc text-gray-600">
                        <li>様々な戦法と対策</li>
                        <li>中級レベルの詰将棋</li>
                        <li>実戦的な手筋と定跡</li>
                        <li>終盤の寄せ方</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="mr-4 h-6 w-6 text-[#8C2D19]" />
                    <div>
                      <p className="font-medium">目標</p>
                      <p className="text-gray-600">
                        様々な戦法を理解し、実戦で活用できるようになり、5級〜1級程度の実力を目指します。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="advanced" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>上級者クラス</CardTitle>
                  <CardDescription>さらなる高みを目指す有段者向け</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <BookOpen className="mr-4 h-6 w-6 text-[#8C2D19]" />
                    <div>
                      <p className="font-medium">学習内容</p>
                      <ul className="ml-6 list-disc text-gray-600">
                        <li>高度な戦略と戦術</li>
                        <li>難易度の高い詰将棋</li>
                        <li>プロの棋譜研究</li>
                        <li>個別の弱点克服</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="mr-4 h-6 w-6 text-[#8C2D19]" />
                    <div>
                      <p className="font-medium">目標</p>
                      <p className="text-gray-600">
                        高度な戦略を理解し、大会での上位入賞を目指します。アマチュア高段者レベルの実力を養成します。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instructors */}
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
    </div>
  )
}
