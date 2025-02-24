"use server"

export async function submitRegistration(formData: FormData) {
  try {
    const dates = formData.getAll("dates")
    const data = {
      dates,
      lastNameKanji: formData.get("lastNameKanji"),
      firstNameKanji: formData.get("firstNameKanji"),
      lastNameKana: formData.get("lastNameKana"),
      firstNameKana: formData.get("firstNameKana"),
      email: formData.get("email"),
      notes: formData.get("notes"),
    }

    // Google Spreadsheetのエンドポイント
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbw4luaN-c5VcN2pfKbU9dfhvUy0HvsrvM8XoabUAYea2sl27I6cLXd-lyK26jMHT06d/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    )

    if (!response.ok) {
      throw new Error("送信に失敗しました")
    }

    return { success: true }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "予期せぬエラーが発生しました" }
  }
}

