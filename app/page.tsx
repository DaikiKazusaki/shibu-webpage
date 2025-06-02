import Link from "next/link"
import type { Metadata } from "next"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "ホーム",
  description: "江坂学生支部のホームページです。",
}

// 画像データの配列を定義
const carouselImages = [
  {
    src: "/home/home1.jpg", // 実際の画像パス
    alt: "将棋教室の様子",
  },
  {
    src: "/home/home2.jpg",
    alt: "将棋大会の様子",
  },
  {
    src: "/home/home3.jpg",
    alt: "将棋大会の運営",
  },
  // 必要な数だけ追加
]

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* カルーセルセクション */}
      <div className="w-full max-w-6xl px-4 mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[2/1] w-full overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
      {/* カルーセルセクションここまで */}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">江坂学生支部へようこそ</h1>
        <div className="flex flex-col gap-4">
          {/* 1行目 */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Card className="flex-1">
              <CardHeader className="p-4">
                <CardTitle className="text-2xl font-semibold">江坂学生支部とは</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p>
                  江坂学生支部は、
                  <Link href="https://www.google.com/maps/search/%E6%B1%9F%E5%9D%82/@34.7641004,135.4847462,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D">
                    大阪府吹田市江坂
                  </Link>
                  を拠点とする、全国の大学生15人(うち支部会員10人)で結成した日本将棋連盟の支部です。全国各地で将棋イベントを主催しています！詳細は
                  <Link href="/about" className="text-blue-500 hover:underline">
                    こちら
                  </Link>
                  からご覧になれます。
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader className="p-4">
                <CardTitle className="text-2xl font-semibold">活動内容</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p>
                  将棋大会、将棋教室、将棋合宿などを主催しています！地域の学校や公民館に、将棋講師の派遣も行っております！活動内容の詳細については、
                  <Link href="/activities" className="text-blue-500 hover:underline">
                    活動ページ
                  </Link>
                  をご覧ください。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 2行目 */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Card className="flex-1">
              <CardHeader className="p-4">
                <CardTitle className="text-2xl font-semibold">活動理念</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  <p>
                    どなたでもご参加いただける、日本一アットホームな将棋イベントを目指しています！イベントを実施し、将棋の普及にも力をいれています！
                  </p>
                  <p>
                    イベントの詳細については、
                    <Link href="/upcoming_event" className="text-blue-500 hover:underline">
                      こちら
                    </Link>
                    をご覧ください。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader className="p-4">
                <CardTitle className="text-2xl font-semibold">お問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  <p>
                    将棋講師の派遣や共同でのイベント運営などのお誘い、盤駒時計の貸し出しなどはこちらから受け付けております。お問い合わせは
                    <a href="https://docs.google.com/forms/d/1d27qX0rCMNJqbLmMlST3oJq3Zy-Z5M1HXP4C-DFXOWg/viewform" className="text-blue-500 hover:underline">
                      こちら
                    </a>
                    までお願いします！
                  </p>
                  <p>
                    また、支部を運営する仲間やスポンサー様の募集も行っています！興味を持っていただいた方は、上記のリンクからお問い合わせください！
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

