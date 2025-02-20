"use client"

import type React from "react"
import { useState } from "react"

// スプレッドシートのURL -> 53行目
// 大会一覧 -> 90行目 

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    dates: [] as string[],
    lastNameKanji: "",
    firstNameKanji: "",
    lastNameKana: "",
    firstNameKana: "",
    email: "",
    notes: "",
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      dates: checked ? [...prev.dates, value] : prev.dates.filter((date) => date !== value),
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Check if at least one date is selected
    if (formData.dates.length === 0) {
      setStatus({ submitting: false, submitted: false, error: "少なくとも1つの日程を選択してください。" })
      return
    }

    setStatus({ submitting: true, submitted: false, error: null })

    try {
      // 以下のfetch関数内のURLは，Googleスプレッドシートのエンドポイントに置き換える
      // 詳細はこちらを確認 -> https://chatgpt.com/c/67b2bd50-0508-8003-beda-d71ab7503f99
      const response = await fetch("https://script.google.com/macros/s/AKfycby_QXJ1q4S6nsMHvCX5ho8FywA5qHllDzn2ILLaOPiZ0CKp8fT3lMJP7OwzVsSwOcMY/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({
          dates: [],
          lastNameKanji: "",
          firstNameKanji: "",
          lastNameKana: "",
          firstNameKana: "",
          email: "",
          notes: "",
        })
        // フォーム送信成功後、3秒後にステータスをリセット
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: null })
        }, 3000)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || "送信に失敗しました")
      }
    } catch (error) {
      if (error instanceof Error) {
        setStatus({ submitting: false, submitted: false, error: error.message })
      } else {
        setStatus({ submitting: false, submitted: false, error: "予期せぬエラーが発生しました" })
      }
    }
  }

  // 以下で参加日時の選択肢を定義
  const dates = [ 
    "2025年5月4日(日)鈴蘭将棋大会(仮)",
    "2025年6月1日(日)将棋YouTuberそらさん出版記念大会",
  ]

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="mb-6">
        <label className="block mb-2 font-bold">参加日時（複数選択可）</label>
        {dates.map((date) => (
          <div key={date} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={date}
              name="dates"
              value={date}
              checked={formData.dates.includes(date)}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor={date}>{date}</label>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-bold">氏名（漢字）</label>
        <div className="flex space-x-4">
          <input
            type="text"
            name="lastNameKanji"
            value={formData.lastNameKanji}
            onChange={handleInputChange}
            placeholder="姓"
            required
            className="w-1/2 px-3 py-2 border rounded"
          />
          <input
            type="text"
            name="firstNameKanji"
            value={formData.firstNameKanji}
            onChange={handleInputChange}
            placeholder="名"
            required
            className="w-1/2 px-3 py-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-bold">氏名（ひらがな）</label>
        <div className="flex space-x-4">
          <input
            type="text"
            name="lastNameKana"
            value={formData.lastNameKana}
            onChange={handleInputChange}
            placeholder="せい"
            required
            className="w-1/2 px-3 py-2 border rounded"
          />
          <input
            type="text"
            name="firstNameKana"
            value={formData.firstNameKana}
            onChange={handleInputChange}
            placeholder="めい"
            required
            className="w-1/2 px-3 py-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-bold">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="notes" className="block mb-2 font-bold">
          備考
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-3 py-2 border rounded"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status.submitting}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {status.submitting ? "送信中..." : "送信"}
      </button>

      {status.submitted && <p className="mt-4 text-green-600">登録が完了しました。ありがとうございます！</p>}
      {status.error && <p className="mt-4 text-red-600">{status.error}</p>}
    </form>
  )
}

export default EventRegistrationForm

