import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
                    <p className="text-gray-600">5歳以上のお子様から大人まで、将棋に興味のある方ならどなたでも</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CalendarDays className="mr-4 h-6 w-6 text-[#8C2D19]" />
                  <div>
                    <p className="font-medium">開催日</p>
                    <p className="text-gray-600">毎週土曜日・日曜日</p>
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
                    <p className="text-gray-600">市民文化センター 2階 会議室</p>
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
                <CardFooter>
                  <Button asChild className="bg-[#8C2D19] hover:bg-[#6B2113]">
                    <Link href="#entry">このクラスに申し込む</Link>
                  </Button>
                </CardFooter>
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
                <CardFooter>
                  <Button asChild className="bg-[#8C2D19] hover:bg-[#6B2113]">
                    <Link href="#entry">このクラスに申し込む</Link>
                  </Button>
                </CardFooter>
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
                <CardFooter>
                  <Button asChild className="bg-[#8C2D19] hover:bg-[#6B2113]">
                    <Link href="#entry">このクラスに申し込む</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">講師紹介</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 aspect-square overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="山田先生"
                  className="h-full w-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">山田 太郎</h3>
              <p className="mb-2 text-sm text-gray-500">アマ五段</p>
              <p className="text-gray-600">
                20年以上の指導経験を持つベテラン講師。初心者への指導に定評があり、わかりやすい解説が好評です。
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 aspect-square overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="佐藤先生"
                  className="h-full w-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">佐藤 花子</h3>
              <p className="mb-2 text-sm text-gray-500">女流アマ三段</p>
              <p className="text-gray-600">
                女流アマ大会優勝経験あり。特に子供への指導に力を入れており、楽しみながら上達できる指導法が特徴です。
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 aspect-square overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="鈴木先生"
                  className="h-full w-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">鈴木 一郎</h3>
              <p className="mb-2 text-sm text-gray-500">アマ六段</p>
              <p className="text-gray-600">
                全国アマチュア大会準優勝経験あり。中級者・上級者向けの高度な戦略指導を得意としています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f0] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">よくある質問</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>将棋を全く知らなくても大丈夫ですか？</AccordionTrigger>
                <AccordionContent>
                  はい、もちろん大丈夫です。初心者クラスでは駒の動かし方から丁寧に指導しますので、将棋を全く知らない方でも安心してご参加いただけます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>何歳から参加できますか？</AccordionTrigger>
                <AccordionContent>
                  5歳以上のお子様から参加可能です。ただし、低年齢のお子様の場合は、集中力や理解力に個人差がありますので、まずは体験レッスンにお越しいただくことをおすすめします。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>将棋盤や駒は持参する必要がありますか？</AccordionTrigger>
                <AccordionContent>
                  教室での練習用の将棋盤と駒は用意していますので、持参の必要はありません。ただし、自宅での練習用に将棋盤をお持ちでない方には、初心者向けの盤駒セットを販売もしています（3,000円〜）。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>途中からクラスを変更することはできますか？</AccordionTrigger>
                <AccordionContent>
                  はい、可能です。上達状況に応じて、講師と相談の上でクラスの変更を行うことができます。実力に合ったクラスで学ぶことが上達の近道ですので、お気軽にご相談ください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>振替レッスンはありますか？</AccordionTrigger>
                <AccordionContent>
                  やむを得ない事情で欠席された場合、月内であれば別の日程への振替が可能です。ただし、事前にご連絡いただいた場合に限ります。また、教室の混雑状況によっては希望の日に振替できない場合もございますので、ご了承ください。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Entry Form */}
      <section id="entry" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-center text-3xl font-bold">入会申し込み</h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    氏名
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-gray-300 p-2"
                    placeholder="例: 山田 太郎"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="furigana" className="text-sm font-medium">
                    ふりがな
                  </label>
                  <input
                    id="furigana"
                    className="w-full rounded-md border border-gray-300 p-2"
                    placeholder="例: やまだ たろう"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="age" className="text-sm font-medium">
                    年齢
                  </label>
                  <input
                    id="age"
                    type="number"
                    className="w-full rounded-md border border-gray-300 p-2"
                    placeholder="例: 10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="gender" className="text-sm font-medium">
                    性別
                  </label>
                  <select id="gender" className="w-full rounded-md border border-gray-300 p-2">
                    <option value="">選択してください</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                    <option value="other">その他</option>
                    <option value="no-answer">回答しない</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    メールアドレス
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-gray-300 p-2"
                    placeholder="例: taro@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    電話番号
                  </label>
                  <input
                    id="phone"
                    className="w-full rounded-md border border-gray-300 p-2"
                    placeholder="例: 090-1234-5678"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="class" className="text-sm font-medium">
                  希望クラス
                </label>
                <select id="class" className="w-full rounded-md border border-gray-300 p-2">
                  <option value="">選択してください</option>
                  <option value="beginner">初心者クラス</option>
                  <option value="intermediate">中級者クラス</option>
                  <option value="advanced">上級者クラス</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="level" className="text-sm font-medium">
                  棋力（段・級位）
                </label>
                <input
                  id="level"
                  className="w-full rounded-md border border-gray-300 p-2"
                  placeholder="例: 初段、3級、初心者 など"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-medium">
                  将棋経験
                </label>
                <textarea
                  id="experience"
                  className="h-24 w-full rounded-md border border-gray-300 p-2"
                  placeholder="これまでの将棋経験や大会参加歴などをご記入ください"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">申し込み種別</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="entry-type" value="regular" />
                    <span>通常入会</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="entry-type" value="trial" />
                    <span>体験レッスン</span>
                  </label>
                </div>
              </div>
              <div className="text-center">
                <Button className="bg-[#8C2D19] hover:bg-[#6B2113]" size="lg">
                  申し込む
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
