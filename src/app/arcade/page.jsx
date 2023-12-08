"use client"
import React from "react"
import Navbar from "../../components/Navbar"
import StudentSidebar from "../../components/StudentSidebar"

const Arcade = () => {

    const obj = {
        img: '/Images/GPT.png',
        tag: 'The Fundamentals',
        desc: 'Demonstrate your interaction design skills by creating wireframes for a task management board'
    }

    const arrayOfObjs = Array(3).fill(obj);

    return (
        <div className="max-h-[100vh] overflow-scroll overflow-y-auto overflow-x-hidden">
            <Navbar/>
            <div className="flex flex-row">
                <StudentSidebar/>
                <div className="p-8 flex flex-col w-[100%] max-h-[92vh] overflow-scroll overflow-x-hidden overflow-y-auto">
                    <div className="rounded w-[100%] h-72 flex flex-between p-4 pt-10" style={{backgroundColor:'#111827'}}>
                        <div className="flex flex-col gap-4">
                            <img className="h-10 w-10" src="/Images/GPT.png" alt="" />
                            <h1 className="text-3xl text-white font-semibold">Going Upside Down with <span className="text-red-600">Chat-GPT</span></h1>
                            <p className="text-white font-semibold">Experiment the aspects of the powerful language model “Chat-GPT” that can understand and generate human-like text, making it a fascinating tool for natural language understanding and conversation.</p>
                            <h2 className="text-white font-semibold">6 Modules</h2>
                        </div>
                        <div><img className="h-48" src="/Images/groupImage.png" alt="" /></div>
                    </div>
                    <div className="w-[100%] flex flex-col gap-2 my-4">
                        <h1 className="text-gray-600 font-semibold">LEARN</h1>
                        <h1 className="text-2xl font-semibold">The fundamental of Prompt & GPT</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {arrayOfObjs.map((ele) => {
                            return <div className="rounded-3xl shadow-xl p-6 flex flex-col gap-4">
                            <div className="flex justify-between">
                                <img src={ele.img} alt="" />
                                <div className="p-1 bg-gray-400 h-8 rounded-xl">POPULAR</div>
                            </div>
                            <h1 className="text-2xl font-semibold">{ele.tag}</h1>
                            <p>{ele.desc}</p>
                            <h1>Begineer * 6 Hours</h1>
                        </div>
                        })}
                    </div>
                    <div className="w-[100%] flex flex-col gap-2 my-4">
                        <h1 className="text-gray-600 font-semibold">PRACTICE</h1>
                        <h1 className="text-2xl font-semibold">Apply your skills to practice</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {arrayOfObjs.map((ele) => {
                            return <div className="rounded-3xl shadow-xl p-6 flex flex-col gap-4">
                            <div className="flex justify-between">
                                <img src={ele.img} alt="" />
                                <div className="p-1 bg-gray-400 h-8 rounded-xl">POPULAR</div>
                            </div>
                            <h1 className="text-2xl font-semibold">{ele.tag}</h1>
                            <p>{ele.desc}</p>
                            <h1>Begineer * 6 Hours</h1>
                        </div>
                        })}
                    </div>
                    <div className="w-[100%] flex flex-col gap-2 my-4">
                        <h1 className="text-gray-600 font-semibold">TEST</h1>
                        <h1 className="text-2xl font-semibold">Assess your base understandings to GPT</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {arrayOfObjs.map((ele) => {
                            return <div className="rounded-3xl shadow-xl p-6 flex flex-col gap-4">
                            <div className="flex justify-between">
                                <img src={ele.img} alt="" />
                                <div className="p-1 bg-gray-400 h-8 rounded-xl">POPULAR</div>
                            </div>
                            <h1 className="text-2xl font-semibold">{ele.tag}</h1>
                            <p>{ele.desc}</p>
                            <h1>Begineer * 6 Hours</h1>
                        </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arcade