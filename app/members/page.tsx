import Image from "next/image"

// メンバーデータの型定義
type Member = {
  nameJa: string
  position: string
  university: string
  message: string
  imagePath: string
}

// メンバーデータ
const members: Member[] = [
  {
    nameJa: "古藤祐樹",
    position: "",
    university: "京都大学文学部",
    message: "趣味は放浪です！",
    imagePath: "/members/koto.jpg",
  },
]

export default function MemberIntroduction() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <p className="text-gray-600 text-sm">会社紹介</p>
        <h1 className="text-3xl font-bold mt-2">メンバー紹介</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard key={member.nameJa} member={member} />
        ))}
      </div>
    </div>
  )
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-blue-600 leading-tight">{member.nameJa}</h2>
          <p className="text-gray-700 mt-2 mb-1">{member.position}</p>
        </div>
        <div className="w-full md:w-32 lg:w-40">
          <Image
            src={member.imagePath || "/placeholder.svg"}
            alt={member.nameJa}
            width={160}
            height={200}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 text-sm whitespace-pre-line">{member.university}</p>
        <p className="text-gray-700 text-sm whitespace-pre-line mt-1">{member.message}</p>
      </div>
    </div>
  )
}

