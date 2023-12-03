"use client"
import React, { useState, useEffect } from 'react'

const page = () => {
  const [convo, setConvo] = useState([
    {
      "role": "user", "content": "Context 1"
    },
    {
      "role": "user", "content": "Context 2"
    }
  ])
  const [chat, setChat] = useState("")
  const [toggler, setToggler] = useState(true)


  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  const submitHandler = (e) => {
    e.preventDefault()
    sessionStorage.setItem("convo", JSON.stringify([...convo, {
      role: "user", content: chat
    }]))
    setChat("")
    setToggler(prev => !prev)
  }

  const generateBotChat = () => {
    let randomMsg = generateRandomString(20);
    sessionStorage.setItem('convo', JSON.stringify([...convo, {
      role: "system", content: randomMsg
    }]))
    setToggler(prev => !prev)
  }

  useEffect(() => {
    let conversation = JSON.parse(sessionStorage.getItem('convo'))
    console.log(conversation)
    if (conversation) {

      setConvo(conversation)
    }
  }, [toggler])

  return (
    <main className='w-[100vw] h-[100vh] flex justify-center items-center relative'>
      <div onClick={generateBotChat} className='absolute top-2 left-32'> Generate bot chat </div>
      <div className='w-[50vw] h-[90vh] bg-indigo-200 relative rounded-2xl'>
        <div className='h-5/6 relative top-5 mx-3 rounded-xl px-5'>
          {convo &&
            convo.slice(2).map(msgJson => (
              <div className={`w-full flex ${msgJson.role === 'user' ? 'justify-end' : 'justify-start' } `}>
                <div className={`px-6 py-2 rounded-lg ${msgJson.role === 'user' ? 'bg-sky-500 text-indigo-50' : 'border-sky-500 border-2 text-sky-600' }`}>
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

export default page