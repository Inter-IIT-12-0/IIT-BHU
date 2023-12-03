"use client"
import React, { useState, useEffect, useRef } from 'react'
import { generate, stop } from "../pages/api/GPT/conversation";
import aiToolUserPrompt from "../pages/api/GPT/ai-tool-user-prompt";

const CustomisedTool = ({domain}) => {
  const [message, setMessage] = useState([])
  const [chat, setChat] = useState("")
  const chatBox = useRef(null)
  const[result,setResult] =useState("");
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
    if(chatBox.current) {
      chatBox.current.scrollTop = chatBox.current.scrollHeight
    }
  }, [])

  return (
    <main className='w-[100vw] h-[100vh] flex justify-center items-center relative'>
      <div className='w-[50vw] h-[90vh] bg-indigo-200 relative rounded-2xl'>
        <div className='h-5/6 overflow-scroll overflow-y-auto overflow-x-hidden relative top-5 mx-3 rounded-xl px-5' ref={chatBox}>
          {message &&
            message.slice(2).map(msgJson => (
              <div className={`w-full flex ${msgJson.role === 'user' ? 'justify-end' : 'justify-start' }`}>
                <div className={`px-6 py-2 my-5 rounded-lg ${msgJson.role === 'user' ? 'bg-sky-500 text-indigo-50' : 'border-sky-500 border-2 text-sky-600' }`}>
                  {msgJson.content}
                </div>
              </div>
            ))
          }
        </div>
        <form className='absolute bottom-5 right-20 w-3/4' onSubmit={submitHandler}>
          <input type="text" placeholder='Write a message' className='rounded-xl outline-none w-3/4 px-2 py-4' value={chat} onChange={e => setChat(e.target.value)} />
          <button className='rounded-xl px-2 py-2 bg-white ml-4 cursor-pointer' type='submit' > Send </button>
        </form>
      </div>
    </main>
  )
}

export default CustomisedTool;