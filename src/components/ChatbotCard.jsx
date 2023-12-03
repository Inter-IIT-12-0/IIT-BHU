"use client"
import Triangle from "../../public/Images/Triangle.svg"
import Send_Icon from "../../public/Images/Send_Icon.svg"
import React, { useState, useEffect } from "react";
import { generate, stop } from "../pages/api/GPT/conversation";
import aiToolUserPrompt from "../pages/api/GPT/ai-tool-user-prompt";
import recommend from "../pages/api/recommendation/recommend";
import axios from "axios";

const ChatbotCard = ({ isOpen }) => {
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("")
  const [toggler, setToggler] = useState(true);
  const [mode, setMode] = useState(1);
  const [result, setResult] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [user, setUser] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    axios.get('/api/allusers/')
      .then(res => { // Log the response to the console
        console.log("hello");

        setUser(res.data);

      })
      .catch(err => console.log(err));

  }, []);
  const submitHandler = (e) => {
    e.preventDefault()
    if (mode == 1)
      handleGenerate();
    if (mode == 2)
      handleGenerate2();


  }

  const handleGenerate = async () => {
    if (messages.length == 0) {
      aiToolUserPrompt(
        "General ChatBot for company Trumio named as TruBot",
        "Assistant",
        "",
        messages, setMessages
      );
    }
    aiToolUserPrompt(
      "General ChatBot",
      "Assistant",
      chat,
      messages, setMessages
    );
    await generate(messages, result, setResult, setMessages);
    console.log(messages);
    setChat("");
  };
  const handleGenerate2 = async () => {
    const obj = await recommend(chat);
    console.log("object",obj);
    setFiltered(user.filter(person => person.domain === obj[0]));
    console.log(filtered);
    console.log(user);
  }
  return (
    <div className={`${isOpen ? 'w-96 h-96 opacity-100' : 'w-0 h-0 opacity-0'}  bg-gradient-to-l from-emerald-200 to-emerald-100 rounded-3xl flex flex-col items-center pb-6 absolute bottom-20 -right-9 -z-10 transition-all duration-1000`}>
      <div className='w-full h-full bg-gradient-to-l from-emerald-200 to-emerald-100 relative rounded-2xl'>
        {mode == 1 &&
          <div className='h-2/3 overflow-scroll overflow-y-auto overflow-x-hidden relative top-5 mx-3 rounded-xl px-5'>
            {messages &&
              messages.slice(2).map(msgJson => (
                <div className={`w-full flex ${msgJson.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-6 py-2 my-5 rounded-lg ${msgJson.role === 'user' ? 'bg-sky-500 text-indigo-50' : 'border-sky-500 border-2 text-sky-600'}`}>
                    {msgJson.content}
                  </div>
                </div>
              ))
            }
          </div>
        }
        {
          mode == 2 && <div>
            <h1>hello</h1>
            {filtered.map((user, index) => (
              <div
                key={index}
              >
                <p>{user.name}</p>
              </div>
            ))}

          </div>
        }
        <form className='absolute bottom-5 right-20 w-3/4' onSubmit={submitHandler}>
          <input type="text" placeholder='Write a message' className='rounded-xl outline-none w-3/4 px-2 py-4' value={chat} onChange={e => setChat(e.target.value)} />
          <button className='rounded-xl px-2 py-2 bg-white ml-4 cursor-pointer' type='submit' > Send </button>
        </form>
      </div>
      <Triangle className="absolute right-4 -bottom-[50px] " />
    </div>
  );
}

export default ChatbotCard;