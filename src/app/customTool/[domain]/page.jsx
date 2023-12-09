"use client"
import React, { useState, useEffect, useRef } from 'react'
import { generate, stop } from "../../../pages/api/GPT/conversation";
import aiToolUserPrompt from "../../../pages/api/GPT/ai-tool-user-prompt";
import Navbar from '../../../components/Navbar';
import StudentSidebar from '../../../components/StudentSidebar';

const CustomisedTool = ({params}) => {
    let {domain} = params
    domain = domain.split('-')[0]
    const [message, setMessage] = useState([])
    const [chat, setChat] = useState("")
    const chatBox = useRef(null)
    const [result, setResult] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        handleGenerate();
    }

    const handleGenerate = async () => {
        if (message.length == 0) {
            aiToolUserPrompt(
                domain,
                "Assistant",
                "",
                message, setMessage
            );
        }
        aiToolUserPrompt(
            domain,
            "Assistant",
            chat,
            message, setMessage
        );
        await generate(message, result, setResult, setMessage);
        console.log(message);
        setChat("");
    };

    useEffect(() => {
        if (chatBox.current) {
            chatBox.current.scrollTop = chatBox.current.scrollHeight
        }
    }, [])

    return (
        <>
        <Navbar/>
        <div className='flex flex-row'>
        <StudentSidebar/>
        <main className='w-[90vw] h-[90vh] flex flex-row items-center relative p-8'>
            <div className='flex flex-col'>
                <div className='rounded-xl border border-gray-500 shadow-2xl mr-10 font-semibold p-4 ml-10 text-2xl w-72'>Hello I am <b>{domain}</b> Ai Tool <br /> How may I help you Today ?</div>
                <img src="https://i.pinimg.com/originals/79/04/42/7904424933cc535b666f2de669973530.gif" className='h-60 pr-0' alt="" />
            </div>
            <div className='w-[50vw] h-[85vh] relative rounded-2xl bg-white border border-gray-500 shadow-lg'>
                <div className='h-5/6 overflow-scroll overflow-y-auto overflow-x-hidden relative top-5 mx-3 rounded-xl px-5' ref={chatBox}>
                    <div className='w-[100%] flex items-center justify-center'>
                        <span className='font-bold'>I am your friend ask anything related to your domain</span>
                    </div>
                    {message &&
                        message.slice(2).map(msgJson => (
                            <div className={`w-full flex ${msgJson.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`px-6 py-2 my-5 rounded-lg ${msgJson.role === 'user' ? 'bg-sky-500 text-indigo-50' : 'border-sky-500 border-2 text-sky-600'}`}>
                                    {msgJson.content}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <form className='right-20 bg-blue-300 w-[100%] flex justify-center items-center py-3 rounded-2xl mt-9' onSubmit={submitHandler}>
                    <input type="text" placeholder='Write a message' className='rounded-xl outline-none w-1/2 px-2 py-4 border border-gray-500 h-12' value={chat} onChange={e => setChat(e.target.value)} />
                    <button className='rounded-xl px-2 py-2 shadow-lg bg-white ml-4 cursor-pointer border border-gray-500' type='submit' > Send </button>
                </form>
            </div>
        </main>
        </div>
        </>
    )
}

export default CustomisedTool;