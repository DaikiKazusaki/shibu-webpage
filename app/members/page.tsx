'use client'

// import { useState } from 'react'

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
    </div>
  )
}

