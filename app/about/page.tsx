import { Metadata } from "next"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "支部について",
  description: "江坂学生支部の詳細についての情報です。",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {/* Section 1 */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 mb-4">
                  活動理念
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-gray-800 pl-4">
                  将棋で人を繋ぐ 将棋を未来へ繋ぐ
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                 大好きな将棋界の方々の交流の架け橋となれるよう、より大きなイベントを、より高頻度で、よりたくさんの地域で開催することを目指しています。大学生であるわたしたちが「次世代の将棋文化を担う」という覚悟を持って、イベント運営やSNS活動に邁進していきます。運営メンバーは
                  <Link
                    href="/member"
                    className="inline-flex items-center text-blue-600 font-medium hover:underline mx-1"
                  >
                    こちら
                  </Link>
                  からご覧になれます！
                </p>
              </div>
              <div className="order-1 lg:order-2 h-80 lg:h-auto">
                <div className="w-full h-full relative">
                  <Image
                    src="/tournament/2024-08-09-hiroshima_himawari/himawari2.jpg?height=400&width=600"
                    alt="江坂学生支部の活動"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-80 lg:h-auto">
                <div className="w-full h-full relative">
                  <Image
                    src="/tournament/2024-01-07-suisen/suisen1.jpg?height=400&width=600"
                    alt="大会・教室の運営"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 mb-4">
                  活動内容
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-gray-800 pl-4">
                  大会・教室の運営、合宿の開催
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  将棋大会・教室・合宿などのイベントを主催しています！地域の学校や公民館に将棋講師の派遣も行っています！詳細は
                  <Link
                    href="/activities"
                    className="inline-flex items-center text-blue-600 font-medium hover:underline mx-1"
                  >
                    活動ページ
                  </Link>
                  から、今後開催されるイベントに関しては
                  <Link
                    href="/upcoming_events"
                    className="inline-flex items-center text-blue-600 font-medium hover:underline mx-1"
                  >
                    今後のイベント
                  </Link>
                  からご覧になれます！
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 mb-4">
                  サービス
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-gray-800 pl-4">
                  将棋講師の派遣
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  学校や地域のイベントなどに将棋講師を派遣しています。ご依頼については下記のボタンからお願いします！
                </p>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScX8nJjcw51JtI-icx04fylpPqzK7jfxNWOATS_F88tg7Frdg/viewform"
                  className="inline-flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors w-fit"
                >
                  <span>お問い合わせ</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 h-80 lg:h-auto">
                <div className="w-full h-full relative">
                  <Image
                    src="/about/teacher.jpg?height=400&width=600"
                    alt="将棋講師の派遣"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
