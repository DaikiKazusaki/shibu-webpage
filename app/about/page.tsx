import Link from "next/link"

export default function About() {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">全国大学生支部とは</h1>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">大学生による支部</h2>
          <p>全国大学生支部は大学生によって運営されている支部です...</p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">大会・教室の運営</h2>
          <p>私たちは定期的に大会や教室を開催しています...</p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">支部の活動にご興味を持った方</h2>
          <p>全国大学生支部の活動に興味を持っていただきありがとうございます。私たちと一緒に活動してみませんか？</p>
          <Link href="/apply/join" className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            参加申し込みフォームへ
          </Link>
        </section>
      </div>
    )
  }

