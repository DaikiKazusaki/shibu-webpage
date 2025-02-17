import { Metadata } from 'next'
import EventRegistrationForm from './EventRegistrationForm'

export const metadata: Metadata = {
  title: '将棋大会参加登録',
  description: 'イベントの参加登録フォームです。',
}

export default function SchoolPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">将棋大会参加登録</h1>
      <EventRegistrationForm />
    </div>
  )
}
