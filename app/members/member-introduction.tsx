"use client"

import Image from "next/image"
import { useState } from "react"

// メンバーデータの型定義
type Member = {
  nameJa: string
  position: string
  university: string
  message: string
  imagePath: string
}

export default function MemberIntroduction({ members }: { members: Member[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">メンバー紹介</h1>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <MemberCard key={member.nameJa} member={member} />
        ))}
      </div>
    </div>
  )
}

function MemberCard({ member }: { member: Member }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with overlay */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={member.imagePath || "/placeholder.svg?height=600&width=450"}
          alt={member.nameJa}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-90" : "opacity-70"
          }`}
        ></div>
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2">
          <h2 className="text-3xl font-bold mb-1">{member.nameJa}</h2>
          {member.position && <p className="text-sm text-white/90 font-medium">{member.position}</p>}
          <p className="text-sm text-white/80">{member.university}</p>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {member.message && <p className="text-sm text-white/90 mt-3 leading-relaxed">{member.message}</p>}
        </div>
      </div>
    </div>
  )
}
