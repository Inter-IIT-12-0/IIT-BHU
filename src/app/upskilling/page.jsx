"use client"
import React, { useEffect, useState } from "react";
import { Circle, Line } from 'rc-progress'
import Navbar from "../../components/Navbar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SidebarUpskilling from "../../components/SidebarUpskilling";
import axios from "axios";
import Thunder from "../../../public/Images/Thunder.svg"

const Upskilling = () => {

  const { data: session } = useSession()
  const [projects, setProjects] = useState(null);

  const today = new Date();
  const dayOfWeek = today.getDay();
  let date = today.getDate();
  if (date < 10) {
    date = '0' + date.toString();
  }
  const month = today.getMonth();
  const year = today.getFullYear();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [projectState, setProjectState] = useState('All');
  const obj1 = [
    {
      img: '/Images/GPT.png',
      tag: 'The Fundamentals',
      desc: 'Demonstrate your interaction design skills by creating wireframes for a task management board'
    },
    {
      img: '/Images/GPT.png',
      tag: 'Introduction to Prompts',
      desc: 'Learn the basics of using prompts to interact with ChatGPT. Explore different prompt strategies and understand how to formulate effective queries.'
    }
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session) {
          const response = await axios.get(`/api/myprojects`);
          setProjects(response.data.filter(proj => proj.status === 'Assigned'));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [session])

  return (
    <main className='w-[100vw] h-[100vh] overflow-hidden bg-gray-100'>
      {projects && <div className='flex flex-col w-full h-full '>
        <Navbar />
        <div className="flex flex-row w-full h-full overflow-x-hidden">
          <SidebarUpskilling page="dashboard" />
          <div className="flex flex-col w-full p-4 overflow-scroll overflow-y-auto overflow-x-hidden max-h-[90vh]">
            <div style={{ backgroundColor: 'var(--material-theme-sys-light-primary, #001338)' }} className="flex justify-between items-center w-[100%] h-52 rounded-3xl mb-3 p-12">
              <div className="flex flex-col gap-8">
                <div className="flex flex-row">
                  <img src="/Images/calendar.svg" className="mr-2" alt="" />
                  <h1 className="text-white font-semibold">{daysOfWeek[dayOfWeek]}, {date}-{month + 1}-{year}</h1>
                </div>
                <div>
                  <h1 className="text-white text-3xl font-semibold">Welcome back, <span className="text-sky-500"> {session?.user?.name} </span></h1>
                  <h1 className="text-sm text-gray-200 my-1">Unlock the university ecosystem with Trumio, bridging the university ecosystem, collaborate on real-world projects for global clients.</h1>
                </div>
              </div>
              <img className="w-48 h-48" src="/Images/studsDashboard.png" alt="" />
            </div>
            <div className="flex flex-row gap-10">
              <div className="w-[70%] my-3">
                <h1 className="font-semibold text-2xl mb-2">Explore</h1>
                <div className="w-[100%] flex flex-row gap-6">
                  <div className="rounded-3xl shadow-lg p-6 flex flex-col justify-center items-center w-[37%] bg-white">
                    <h1 className="text-3xl font-semibold">85%</h1>
                    <h1 className="font-semibold">people network with their alumni on Trumio</h1>
                    <Link href={'/people'}>
                      <button className="py-1 px-5 rounded-full border-2 odd:border-blue-500 text-blue-500 my-3 font-semibold">Explore People</button>
                    </Link>
                  </div>
                  <div className="rounded-3xl shadow-lg p-6 flex flex-row gap-4 bg-white w-[60%]">
                    <div className="flex flex-col gap-4">
                      <h1 className="font-semibold">
                        Connect with people across the Trumio Ecosystem to drive or engage in various discussions
                      </h1>
                      <div>
                        <Link href={'/lounges'}>
                          <button className="border-2 border-blue-500 text-blue-500 py-1 px-5 rounded-full mt-2 font-semibold">Enter Lounge</button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <img src="/Images/gi.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <h1 className="text-2xl font-semibold"> Recommended Learnings </h1>
                </div>
                <div className="grid grid-cols-2 gap-4 w-[100%]">
                  {obj1.map((ele) => {
                    return <Link href="/learning" className="rounded-3xl shadow-xl p-6 flex flex-col gap-4">
                      <div className="flex justify-between">
                        <img src={ele.img} alt="" />
                        <div className="p-1 bg-gray-400 h-8 rounded-xl">POPULAR</div>
                      </div>
                      <h1 className="text-2xl font-semibold">{ele.tag}</h1>
                      <p>{ele.desc}</p>
                      <h1>Begineer * 6 Hours</h1>
                    </Link>
                  })}
                </div>
              </div>
              <div className="w-[27%] flex flex-col gap-5">
                <div className="p-6 flex flex-col gap-3 bg-white rounded-3xl shadow-lg">
                  <Line
                    percent={80}
                    strokeColor='blue'
                    strokeWidth={2}
                    trailColor="lightblue"
                    trailWidth={2}
                    strokeLinecap="circle"
                  />
                  <h1 className="text-3xl font-semibold">80%</h1>
                  <h1 className="text-sm font-bold">of your Trumio profile is completed</h1>
                  <p>Complete your profile to get personalised experiences and connect with like-minded individuals</p>
                  <div>
                    <button className="py-2 px-3 border rounded-full border-blue-500 text-blue-500 font-semibold">Complete</button>
                  </div>
                </div>
                <Link href={"/Challenges"} className="p-6 flex flex-col gap-3 bg-white rounded-3xl shadow-lg">
                  <h1 className=""> <Thunder className="scale-75" /> </h1>
                  <p className="font-semibold"> Start your first streak </p>
                  <h1 className="text-neutral-500">Complete any lesson, assessment or challenge to start a streak</h1>
                </Link>
                <Link href={"/learning"} className="p-6 flex flex-col gap-3 bg-white rounded-3xl shadow-lg">
                  <img className="h-10 w-10" src="/Images/Leaderboard.png" alt="" />
                  <h1 className="font-semibold">Join a learning league</h1>
                  <p className="text-neutral-500"> Complete a session to join this week's leaderboard and compete against other Trumioers </p>
                  <h1 className="text-blue-600 cursor-pointer font-semibold">Go to Leaderboards </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </main>
  )
}

export default Upskilling;