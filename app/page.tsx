import Link from "next/link"
import type { Metadata } from "next"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export const metadata: Metadata = {
  title: "ホーム",
  description: "江坂学生支部のホームページです。",
}

// 画像データの配列を定義
const carouselImages = [
  {
    src: "/ohisama/ohisama4.jpg", // 実際の画像パス
    alt: "将棋教室の様子"
  },
  {
    src: "/2024-03-24-sakura/sakura1.jpg",
    alt: "将棋大会の様子"
  },
  {
    src: "/2024-08-11-tokyo_himawari/himawari3.jpg",
    alt: "将棋大会の運営"
  },
  // 必要な数だけ追加
];

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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左側のコンテンツ */}
          <div className="lg:w-1/2 space-y-8">
            <section className="border rounded-lg p-6 bg-background shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">江坂学生支部とは</h2>
              <p>
                全国の大学生有志で結成した、日本将棋連盟の支部です。将棋イベントを運営しています！詳細は
                <Link href="/about" className="text-blue-600 hover:underline">
                  こちら
                </Link>
                からご覧になれます。
              </p>
            </section>

            <section className="border rounded-lg p-6 bg-background shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">理念</h2>
              <p>
                どなたでもご参加いただける、日本一アットホームな将棋イベントを目指しています！将棋の普及にも力をいれています！
              </p>
            </section>
          </div>

          {/* 右側のコンテンツ */}
          <div className="lg:w-1/2 space-y-8">
            <section className="border rounded-lg p-6 bg-background shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">活動内容</h2>
              <p>
                将棋大会、将棋教室、将棋合宿などを主催しています！地域の学校や公民館に、将棋講師の派遣も行っております！活動内容の詳細については、
                <Link href="/activities" className="text-blue-600 hover:underline">
                  活動ページ
                </Link>
                をご覧ください。
              </p>
            </section>

            <section className="border rounded-lg p-6 bg-background shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
              <p>地域の小学校や公民館へ将棋講師の派遣も行っています。お問い合わせは
                <a href="mailto:shogi.esakagakusei@gmail.com" className="text-blue-600 hover:underline">
                  こちら
                </a>
                までお願いします！(リンクを押すと自動的にメールアプリが起動します)
              </p>
              <p>
                また、支部メンバーの募集も行っています！興味を持っていただいた方は、上記のリンクからお問い合わせください！
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
