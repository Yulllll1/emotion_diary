'use client'

import { useState } from "react"

export default function DiaryForm() {
    const [emotion, setEmotion] = useState("")
    const [content, setContent] = useState("")
    
    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault() //새로고침 막기
        console.log("저장됨", {emotion, content})
    
        setEmotion("")
        setContent("")
    }
    return(
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow">
            <div>
                <label className="block font-semibold mb-1">오늘의 감정</label>
                <select
                    value = {emotion}
                    onChange={(e) => setEmotion(e.target.value)}
                    className= "w-full p-2 border rounded"
                >
                    <option value="">감정을 선택하세요</option>
                    <option value="😊">😊 행복</option>
                    <option value="😢">😢 슬픔</option>
                    <option value="😡">😡 화남</option>
                </select>       
                
            <label className="block font-semibold mb-1">일기 내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded h-32"
              placeholder="오늘 하루 어땠나요?"
            />
          </div>
    
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            저장하기
          </button>
    
    
        </form>
    
    )
}

