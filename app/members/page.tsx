import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'メンバー',
  description: '江坂学生支部のメンバーついての情報です．',
}

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
      introduction: '最高のイベントにします！' 
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
      introduction: '色んな人と喋るのが好きです！'
    },
    {
      name: '岡本大地',
      role: '関東大会合宿運営',
      university: '星薬科大学 薬学部',
      introduction: '関東合宿の運営を頑張りたいです'
    },
    {
      name: '大西透',
      role: '京都大会運営',
      university: '京都大学 工学部',
      introduction: '趣味は競艇です'
    },
    {
      name: '田中優汰',
      role: '営業部',
      university: '神戸大学 国際人間科学部',
      introduction: '将棋を通じて輪を広げましょう！'
    },
    {
      name: '金田夏輝',
      role: '関東大会合宿運営',
      university: '東京大学 文科三類',
      introduction: '趣味は読書と登山です。楽しく将棋を続けたいです！'
    },
    {
      name: '市丸玲乃',
      role: '関西合宿運営',
      university: '関西大学 法学部',
      introduction: '趣味は音楽鑑賞で，Mr.Childrenが好きです！'
    },
    {
      name: '岸本昂大',
      role: '関西大会運営',
      university: '大阪公立大学 理学部',
      introduction: '将棋を通して様々な地域、年代の方と交流していきたいです'
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

