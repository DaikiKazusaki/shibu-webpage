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
    message: "",
    imagePath: "/members/koto.jpg",
  },
  {
    nameJa: "宮下雄成",
    position: "SNS運用",
    university: "龍谷大学文学部",
    message: "",
    imagePath: "/members/miyashita.jpg",
  },
  {
    nameJa: "大西透",
    position: "京都大会運営",
    university: "京都大学工学部",
    message: "趣味は競艇です。",
    imagePath: "/members/onishi.jpg",
  },
]

export default function MemberIntroduction() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
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
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-black leading-tight">{member.nameJa}</h2>
        </div>
        <div className="w-full">
          <Image
            src={member.imagePath || "/placeholder.svg"}
            alt={member.nameJa}
            width={320}
            height={180}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        {member.position && (
          <p className="text-gray-700 mb-2">
            <span className="font-medium">役職：</span>
            {member.position}
          </p>
        )}
        <p className="text-gray-700 text-sm whitespace-pre-line">
          <span className="font-medium">大学：</span>
          {member.university}
        </p>
        {member.message && <p className="text-gray-700 text-sm whitespace-pre-line mt-1">{member.message}</p>}
      </div>
    </div>
  )
}

