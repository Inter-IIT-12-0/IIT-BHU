"use client"
import Triangle from "../../public/Images/Triangle.svg"
import Send_Icon from "../../public/Images/Send_Icon.svg"
import React, { useState, useEffect } from "react";
import { generate, stop } from "../pages/api/GPT/conversation";
import aiToolUserPrompt from "../pages/api/GPT/ai-tool-user-prompt";
import recommendProject from "../pages/api/recommendation/projectRecommend";
import recommend from "../pages/api/recommendation/recommend";
import axios from "axios";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const ChatbotCard = ({ isOpen }) => {
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("")
  const [toggler, setToggler] = useState(true);
  const [mode, setMode] = useState("User");
  const [result, setResult] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [user, setUser] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [projectFilter, setProjectFilter] = useState('');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [userChat, setUserChat] = useState("")
  const [projectChat, setProjectChat] = useState("")
  const [gotResponse, setGotResponse] = useState(false)
  const { data: session } = useSession()

  useEffect(() => { //! The chat bot is loaded with ll the persons through an apicall
    if (session) {
      axios.get('/api/allusers/')
        .then(res => { // Log the response to the console

          setUser(res.data);

        })
        .catch(err => toast.error(err.response.data.error)
        );

      axios.get('/api/allprojects/')
        .then(res => {
          setProjects(res.data);
        });
    }

  }, [session]);
  const submitHandler = (e) => {
    e.preventDefault()
    if (mode === 'General')
      handleGenerate();
    if (mode === 'User')
      handleGenerate2();
    if (mode === 'Project')
      handleGenerate3();
  }

  const handleGenerate = async () => { //! Responsible uses the LLM model for responding to the general queries and can handle conversations
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
    setChat("");
  };
  const handleGenerate2 = async () => { //! This uses the flask API which is based on Recommendation engine, returns users satisfying the query
    setUserChat(chat);
    setFiltered([])
    setGotResponse(false)
    const obj = await recommend(chat);
    setGotResponse(true)
    setChat("");
    if (obj) {
      const domainOrder = {};
      obj.forEach((domain, index) => {
        domainOrder[domain] = index;
      });
      const sortedUsers = user.sort((a, b) => {
        const domainA = a.domain.find(domain => obj.includes(domain));
        const domainB = b.domain.find(domain => obj.includes(domain));

        return domainOrder[domainA] - domainOrder[domainB];
      });
      const filteredProjects = sortedUsers.filter(person =>
        person.domain.some(domainElement => obj.includes(domainElement))
      );

      setFilteredProjects(filteredProjects);

    }
  }

  const handleGenerate3 = async () => { //! This uses the flask API which is based on Recommendation engine, returns the projects satisfying the query
    setProjectChat(chat);
    setChat("");
    setFilteredProjects([])
    setGotResponse(false)
    const obj = await recommendProject(chat);
    setGotResponse(true)
    setChat("");
    if (obj) {

      const domainOrder = {};
      obj.forEach((domain, index) => {
        domainOrder[domain] = index;
      });
      const sortedProjects = projects.sort((a, b) => {
        const domainA = a.domain.find(domain => obj.includes(domain));
        const domainB = b.domain.find(domain => obj.includes(domain));

        return domainOrder[domainA] - domainOrder[domainB];
      });
      const filteredProjects = sortedProjects.filter(project =>
        project.domain.some(domainElement => obj.includes(domainElement))
      );

      setFiltered(filteredProjects);

    }
  }

  return (
    <div className={`${isOpen ? 'w-[400px] h-[450px] opacity-100' : 'w-0 h-0 opacity-0'} bg-gradient-to-b from-[#63a2c3] to-[#0958a2] flex flex-col items-center absolute bottom-20 -right-9 -z-10 transition-all duration-1000 rounded-3xl shadow border-4 border-[#daf7f7]`}>
      <span className="absolute top-2 left-8 text-2xl font-bold font-sans text-sky-800">
        TruBot
      </span>
      <img src="/Images/Wave.png" className="w-full h-16" />
      <div className="flex w-full justify-around py-3">
        <button className={`px-4 py-1  rounded-lg font-semibold ${mode === 'User' ? 'bg-[#004b90] text-white' : 'bg-[#daf7f7] text-[#004b90]'}`} onClick={() => setMode("User")}> People </button>
        <button className={`px-4 py-1 rounded-lg font-semibold ${mode === 'Project' ? 'bg-[#004b90] text-white' : 'bg-[#daf7f7] text-[#004b90]'}`} onClick={() => setMode("Project")}> Projects </button>
        <button className={`px-4 py-1 rounded-lg font-semibold ${mode === 'General' ? 'bg-[#004b90] text-white' : 'bg-[#daf7f7] text-[#004b90]'} `} onClick={() => setMode("General")}> General </button>
      </div>
      <div className='w-full h-full relative bg-inherit'>
        {mode == "General" &&
          <div className='h-[270px] overflow-scroll overflow-y-auto overflow-x-hidden px-4'>
            {messages &&
              messages.slice(2).map((msgJson, index) => (
                <div className={`w-full flex mt-5 ${msgJson.role === 'user' ? 'justify-end' : 'justify-start'}`} key={index}>
                  <div className="flex gap-3 items-end">
                    {
                      msgJson.role !== 'user' &&
                      <img src={'/Images/Dot.png'} alt="Dot" className="w-8 h-8 rounded-full" />
                    }
                    <div className={`px-3 py-1 my-5 rounded-xl relative bottom-2 ${msgJson.role === 'user' ? 'rounded-br-none' : 'rounded-bl-none'} bg-[#daf7f7] text-sky-800`}>
                      {msgJson.content}
                    </div>
                    {
                      msgJson.role === 'user' &&
                      <img src={session?.user.avatarUrl} alt="Me" className="w-8 h-8 rounded-full" />
                    }
                  </div>
                </div>
              ))
            }
          </div>
        }
        {
          mode == "User" && <div className='h-[270px] overflow-scroll overflow-y-auto overflow-x-hidden mx-3 px-2'>
            {userChat &&
              <div className="`w-full flex mt-5 justify-end">
                <div className="flex gap-3 items-end">
                  <div className={`px-3 py-1 my-5 rounded-xl relative bottom-2 rounded-br-none bg-[#daf7f7] text-sky-800`}>
                    {userChat}
                  </div>
                  <img src={session?.user.avatarUrl} alt="Me" className="w-8 h-8 rounded-full" />
                </div>
              </div>
            }


            {
              gotResponse && userChat && (filtered.length === 0 ? <div className="px-3 py-1 w-40 my-5 rounded-lg text-sky-600">
                <div className={`w-full flex mt-5 justify-start`}>
                  <div className="flex gap-3 items-end">
                    <img src={'/Images/Dot.png'} alt="Dot" className="w-8 h-8 rounded-full" />
                    <div className={`px-3 py-1 my-5 rounded-xl relative bottom-2 rounded-bl-none bg-[#daf7f7] text-sky-800`}>
                      No User found
                    </div>
                  </div>
                </div>
              </div>
                :
                <div className="flex gap-3 items-end">
                  <img src={'/Images/Dot.png'} alt="Dot" className="w-8 h-8 rounded-full" />
                  <div className="flex flex-col">
                    {filtered && filtered.slice(0, 5).map((user, index) => (
                      <div
                        key={index}
                        className="flex px-2 py-1 my-2 rounded-xl rounded-bl-none bg-[#daf7f7]"
                      >
                        <div className="flex flex-col p-3">
                          <div className="flex">
                            <img src={user.avatarUrl} className="rounded-full h-12 w-12"></img>
                          </div>
                          <div className="text-base text-sky-800 font-semibold flex w-full">
                            <div className="w-full"> {user.name} ({user.rating} ) </div>
                          </div>
                        </div>
                        <div className="text-sky-500 mt-10 flex items-center">
                          <Link href={`/profile/${user._id}`} target="_blank">
                            View profile
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>)
            }


          </div>
        }


        {
          mode == "Project" && <div className='h-[270px] overflow-scroll overflow-y-auto overflow-x-hidden mx-3 px-2'>
            {projectChat &&
              <div className="`w-full flex mt-5 justify-end">
                <div className="flex gap-3 items-end">
                  <div className={`px-3 py-1 my-5 rounded-xl relative bottom-2 rounded-br-none bg-[#daf7f7] text-sky-800`}>
                    {projectChat}
                  </div>
                  <img src={session?.user.avatarUrl} alt="Me" className="w-8 h-8 rounded-full" />
                </div>
              </div>
            }
            {
              gotResponse && projectChat && (filteredProjects.length === 0 ? <div className="px-3 py-1 w-40 my-5 rounded-lg text-sky-600">
                <div className={`w-full flex mt-5 justify-start`}>
                  <div className="flex gap-3 items-end w-full">
                    <img src={'/Images/Dot.png'} alt="Dot" className="w-8 h-8 rounded-full" />
                    <div className={`px-3 py-1 my-5 rounded-xl relative bottom-2 rounded-bl-none bg-[#daf7f7] text-sky-800`}>
                      No Project found
                    </div>
                  </div>
                </div>
              </div>
                :
                projectChat &&
                <div className="flex gap-3 items-end">
                  <img src={'/Images/Dot.png'} alt="Dot" className="w-8 h-8 rounded-full" />
                  <div className="flex flex-col">

                    {filteredProjects && filteredProjects.slice(0, 5).map((project, index) => (
                      <div
                        key={index}
                        className="flex px-2 py-1 bg-[#daf7f7] my-2 rounded-xl rounded-bl-none"
                      >
                        <div className="flex flex-col w-7/12">
                          <div className="text-base text-sky-800 font-semibold flex w-full">
                            <div className="w-full"> {project.title} </div>
                          </div>
                          <div> {project.domain[0]} </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>)
            }

          </div>
        }
        <form className='absolute bottom-1 right-0 w-full flex items-center justify-center gap-3' onSubmit={submitHandler}>
          <input type="text" className='outline-none bg-[#daf7f7] w-3/4 h-10 rounded-md px-3 border-t border-zinc-300' value={chat} onChange={e => setChat(e.target.value)} />
          <button className='cursor-pointer bg-[#daf7f7] border-t border-zinc-300 rounded-full px-3 pb-3 pt-2' type='submit' > <Send_Icon className="-rotate-45" /> </button>
        </form>
      </div>
      <Triangle className="absolute right-4 -bottom-[55px] " />
    </div>
  );
}

