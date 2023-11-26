"use client"
import Triangle from "../Images/Triangle.svg"

export default function ChatbotCard() {
    return (
        <div className="w-96 h-96 bg-gradient-to-l from-emerald-200 to-emerald-100 rounded-3xl relative">
            <Triangle className="absolute right-4 -bottom-[50px]"/>
        </div>
    );
}