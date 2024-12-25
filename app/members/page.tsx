'use client'

import { useState } from 'react'

interface Member {
  name: string
  role: string
  university: string
  introduction: string
}

const MemberCard: React.FC<Member> = ({ name, role, university, introduction }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">{role}</p>
      <p className="text-gray-600 mb-1">{university}</p>
      <p className="text-gray-800">{introduction}</p>
    </div>
  )
}

const PastMembersList: React.FC = () => {
  const [showPastMembers, setShowPastMembers] = useState(false)
  const pastMembers = [
    {name: '', year: '', achievements: ''},
    // { name: '佐藤花子', year: 2022, achievements: '関西大会準優勝' },
    // { name: '鈴木一郎', year: 2021, achievements: '全国大会出場' },
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
      name: '松本龍蔵', 
      role: '支部長', 
      university: '大阪公立大学 経済学部', 
      introduction: '1日中楽しめるアットホームなイベント作りを目指してみんなでがんばります！全国の将棋好きのみなさまと交流を深めたいです！ともに支部を運営してくれる大学生も募集中です！よろしくお願いします！' 
    },
    { 
      name: '古江祐也', 
      role: '中国地方大会運営', 
      university: '尾道市立大学 芸術文化学部', 
      introduction: '圧倒的猫派' 
    },
    { 
      name: '數﨑大樹', 
      role: 'サイト作成', 
      university: '大阪大学 基礎工学部',  
      introduction: 'ウェブデザイン勉強中...' 
    },
    {
      name: '沖津斗夢',
      role: '京都大会運営',
      university: '龍谷大学 経営学部',
      introduction: '座右の銘「現状維持は即衰退」'
    },
    {
      name: '平井幸大',
      role: 'SNS運用',
      university: '龍谷大学 経済学部',
      introduction: '色んな喋るのが好きです！'
    }
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

