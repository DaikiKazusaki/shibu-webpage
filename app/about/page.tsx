import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
                  私たちについて
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-gray-800 pl-4">
                  江坂学生支部とは
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  江坂学生支部は、大学生によって運営されている支部です。将棋の技術向上だけでなく、集中力や論理的思考力、礼儀作法なども学ぶことができます。初心者から上級者まで、様々なレベルの学生が集まり、切磋琢磨しながら将棋の腕を磨いています。メンバーについては、
                  <Link
                    href="/member"
                    className="inline-flex items-center text-blue-600 font-medium hover:underline mx-1"
                  >
                    こちら
                  </Link>
                  からご覧になれます！
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors w-fit"
                >
                  <span>詳しく見る</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 h-80 lg:h-auto">
                <div className="w-full h-full relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
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
                    src="/2024-01-07-suisen/suisen1.jpg?height=400&width=600"
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
                  大会・教室の運営
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  定期的に将棋大会や教室を開催し、学生たちに実践の場を提供しています。初心者向けの入門教室から、上級者向けの研究会まで、レベルに合わせた
                  プログラムを用意しています。また、プロ棋士を招いた特別講座なども実施し、より高度な技術や知識を学ぶ機会も設けています。
                </p>
                <Link
                  href="/activities"
                  className="inline-flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors w-fit"
                >
                  <span>詳しく見る</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
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
                  学校や地域のイベント、企業研修などに将棋講師を派遣しています。将棋を通じてコミュニケーション能力や思考力を養うプログラムを
                  提供し、教育現場や企業研修でも好評をいただいています。経験豊富な講師陣が、対象者のレベルや目的に合わせた指導を行います。
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors w-fit"
                >
                  <span>詳しく見る</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="order-1 lg:order-2 h-80 lg:h-auto">
                <div className="w-full h-full relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
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

      {/* Call to Action */}
      <div className="bg-gray-800 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            江坂学生支部の活動やイベントについて、詳しく知りたい方はお気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium">お問い合わせはこちら</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  )
}
