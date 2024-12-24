'use client'

import { useState } from 'react'

interface Member {
  name: string
  role: string
  university: string
  achievements: string
  introduction: string
}

const MemberCard: React.FC<Member> = ({ name, role, university, achievements, introduction }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">{role}</p>
      <p className="text-gray-600 mb-1">{university}</p>
      <p className="text-gray-700 mb-2">{achievements}</p>
      <p className="text-gray-800">{introduction}</p>
    </div>
  )
}

const PastMembersList: React.FC = () => {
  const [showPastMembers, setShowPastMembers] = useState(false)
  const pastMembers = [
    { name: '佐藤花子', year: 2022, achievements: '関西大会準優勝' },
    { name: '鈴木一郎', year: 2021, achievements: '全国大会出場' },
    // Add more past members as needed
  ]

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">過去のメンバー</h2>
      <button
        onClick={() => setShowPastMembers(!showPastMembers)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        {showPastMembers ? '非表示' : '表示'}
      </button>
      {showPastMembers && (
        <ul className="space-y-2">
          {pastMembers.map((member, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded">
              <span className="font-semibold">{member.name}</span> ({member.year}年) - {member.achievements}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Members() {
  const currentMembers: Member[] = [
    { 
      name: '山田太郎', 
      role: '代表', 
      university: '全国大学生大学', 
      achievements: '全国大会優勝', 
      introduction: '将棋が大好きです。日々精進しています。' 
    },
    { 
      name: '田中花子', 
      role: '副代表', 
      university: '△△大学', 
      achievements: '女流棋士リーグ準優勝', 
      introduction: '将棋を通じて多くの人と交流したいです。' 
    },
    { 
      name: '佐藤次郎', 
      role: '会計', 
      university: '□□大学', 
      achievements: '学生王座戦ベスト8', 
      introduction: '将棋の普及活動に力を入れています。' 
    },
    // Add more members as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">メンバー紹介</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentMembers.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
      <PastMembersList />
    </div>
  )
}

