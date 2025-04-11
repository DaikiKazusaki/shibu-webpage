import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {/* Section 1 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">江坂学生支部とは</h2>
              <p className="text-lg text-gray-600 mb-6">
                江坂学生支部は、将棋を通じて学生の成長を支援する組織です。将棋の技術向上だけでなく、集中力や論理的思考力、礼儀作法なども学ぶことができます。初心者から上級者まで、様々なレベルの学生が集まり、切磋琢磨しながら将棋の腕を磨いています。
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <span>詳しく見る</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-gray-200 h-80 rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="江坂学生支部の活動"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/2024-01-07-suisen/suisen1.jpg?height=400&width=600"
                  alt="大会・教室の運営"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">大会・教室の運営</h2>
              <p className="text-lg text-gray-600 mb-6">
                定期的に将棋大会や教室を開催し、学生たちに実践の場を提供しています。初心者向けの入門教室から、上級者向けの研究会まで、レベルに合わせたプログラムを用意しています。また、プロ棋士を招いた特別講座なども実施し、より高度な技術や知識を学ぶ機会も設けています。
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <span>詳しく見る</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">将棋講師の派遣</h2>
              <p className="text-lg text-gray-600 mb-6">
                学校や地域のイベント、企業研修などに将棋講師を派遣しています。将棋を通じてコミュニケーション能力や思考力を養うプログラムを提供し、教育現場や企業研修でも好評をいただいています。経験豊富な講師陣が、対象者のレベルや目的に合わせた指導を行います。
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <span>詳しく見る</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-gray-200 h-80 rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="将棋講師の派遣" fill className="object-cover" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
