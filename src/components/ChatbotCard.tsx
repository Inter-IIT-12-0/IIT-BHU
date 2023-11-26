"use client"
import Triangle from "../Images/Triangle.svg"
import Send_Icon from "../Images/Send_Icon.svg"

export default function ChatbotCard() {
    return (
        <div className="w-96 bg-gradient-to-l from-emerald-200 to-emerald-100 rounded-3xl relative flex flex-col items-center pb-6">
            <div className="text-teal-700 text-2xl font-normal font-['Nunito'] w-80 mt-8">Here is the top fintech startups of your institute </div>
            <div className="w-80 h-60 bg-white rounded-tl-3xl rounded-tr-3xl border-2 mt-2">

            </div>
            <div className="flex justify-around mt-3 w-80">
                <input type="text" className="rounded-lg w-60 h-11"/>
                <div className="rounded-full bg-white flex justify-center items-center p-3">
                    <Send_Icon />
                </div>
            </div>
            <Triangle className="absolute right-4 -bottom-[50px] "/>
        </div>
    );
}