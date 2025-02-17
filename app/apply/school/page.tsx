import { Metadata } from 'next'
import SchoolRegistrationForm from './SchoolRegistrationForm'

export const metadata: Metadata = {
  title: '将棋教室参加登録',
  description: 'イベントの参加登録フォームです。',
}

export default function SchoolPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">おひさま将棋教室参加登録</h1>
      <SchoolRegistrationForm />
    </div>
  )
}
