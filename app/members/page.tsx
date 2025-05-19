import type { Metadata } from "next"
import MemberIntroduction from "./member-introduction"

export const metadata: Metadata = {
  title: "メンバー",
  description: "江坂学生支部のメンバー紹介ページです。",
}

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
    nameJa: "松本龍蔵",
    position: "支部長",
    university: "大阪公立大学 経済学部",
    message: "最高のイベントにします！",
    imagePath: "/members/matsumoto.jpg",
  },
  {
    nameJa: "古藤祐樹",
    position: "支部運営",
    university: "京都大学 文学部",
    message: "趣味は放浪です。",
    imagePath: "/members/koto.jpg",
  },
  {
    nameJa: "宮下雄成",
    position: "SNS運用",
    university: "龍谷大学 文学部",
    message: "",
    imagePath: "/members/miyashita.jpg",
  },
  {
    nameJa: "大西透",
    position: "京都大会運営",
    university: "京都大学 工学部",
    message: "趣味は競艇です。",
    imagePath: "/members/onishi.jpg",
  },
  {
    nameJa: "沖津斗夢",
    position: "京都大会運営",
    university: "龍谷大学 経営学部",
    message: "座右の銘「現状維持は即衰退」",
    imagePath: "/members/okitsu.jpg",
  },
  {
    nameJa: "數﨑大樹",
    position: "webサイト運営",
    university: "大阪大学 基礎工学部",
    message: "大会にも運営として顔を出すので、ぜひお声がけください！",
    imagePath: "/members/kazusaki.jpg",
  },
  {
    nameJa: "古江祐也",
    position: "中四国合宿運営",
    university: "尾道市立大学 芸術文化学部",
    message: "圧倒的に猫派です！あまりよさげな写真がなかったので、猫の写真を載せておきます。",
    imagePath: "/members/furue.jpg",
  },
  {
    nameJa: "金田夏輝",
    position: "関東大会合宿運営",
    university: "東京大学 文科三類",
    message: "趣味は散歩です。",
    imagePath: "/members/kaneda.jpg",
  },
  {
    nameJa: "土居亮太",
    position: "関西大会運営",
    university: "大阪公立大学",
    message: "",
    imagePath: "/members/doi.jpg",
  },
  {
    nameJa: "岸本昂大",
    position: "関西大会運営",
    university: "大阪公立大学 理学部",
    message: "将棋を通して様々な地域、年代の方と交流していきたいです",
    imagePath: "/members/kishimoto.png",
  },
  {
    nameJa: "市丸玲乃",
    position: "関西合宿運営",
    university: "関西大学 法学部",
    message: "趣味は音楽鑑賞で、Mr.Childrenが好きです！",
    imagePath: "/members/ichimaru.jpg",
  },
  {
    nameJa: "田中優汰",
    position: "営業部",
    university: "神戸大学 国際人間科学部",
    message: "将棋を通じて輪を広げましょう！",
    imagePath: "/members/tanaka.jpg",
  },
  {
    nameJa: "平井幸大",
    position: "SNS運営",
    university: "龍谷大学 経済学部",
    message: "色んな人と喋るのが好きです！",
    imagePath: "/members/non_image.png",
  },
  {
    nameJa: "岡本大地",
    position: "関東大会合宿運営",
    university: "星薬科大学 薬学部",
    message: "関東合宿の運営を頑張りたいです",
    imagePath: "/members/non_image.png",
  },
  {
    nameJa: "大原尚",
    position: "中四国大会運営",
    university: "近畿大学 工学部",
    message: "",
    imagePath: "/members/non_image.png",
  },
]

export default function MembersPage() {
  return <MemberIntroduction members={members} />
}
