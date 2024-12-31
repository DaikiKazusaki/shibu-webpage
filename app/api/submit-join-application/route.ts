import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, university, grade, experience, motivation } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'zenkoku.daigakusei.shibu@gmail.com',
    subject: '新しい参加申し込み',
    text: `
      新しい参加申し込みがありました。

      氏名: ${name}
      メールアドレス: ${email}
      大学名: ${university}
      学年: ${grade}
      将棋経験: ${experience}
      志望動機: ${motivation}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Error submitting application' }, { status: 500 })
  }
}

