import { Metadata } from 'next'

import Activities from './activities'

export const metadata: Metadata = {
  title: '活動',
  description: '江坂学生支部のこれまでの活動を記録したものです．',
}

export default function Home() {
  return <Activities />
}
