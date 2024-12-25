import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-6">申し込みありがとうございます！</h1>
      <p className="mb-4">全国大学生支部への参加申し込みを受け付けました。</p>
      <p className="mb-8">担当者が内容を確認の上、追ってご連絡いたします。</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        ホームに戻る
      </Link>
    </div>
  )
}

