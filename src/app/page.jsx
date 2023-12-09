"use client"
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import StudentSidebar from "../components/StudentSidebar";
import axios from "axios";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession()

  const [userData, setUserData] = useState(null)
  const [myprojects, setMyProjects] = useState(null)

  const getDayName = (index) => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return daysOfWeek[index];
  };

  const today = new Date();
  const dayOfWeek = today.getDay();
  let date = today.getDate();
  if (date < 10) {
    date = '0' + date.toString();
  }
  const month = today.getMonth();
  const year = today.getFullYear();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user?id=${session.user._id}`);
        const myProjects = await axios.get(`http://localhost:3000/api/myprojects`);
        setUserData(response.data);
        setMyProjects(myProjects.data);
      } catch (error) {
        console.log("error is:", error);
      }
    }
    fetchdata();
  }, [session])

  const [taskName, setTaskName] = useState("PROJECT STATUS");
  const [projectStat, setProjectStat] = useState("ACTIVE");

  let availableDays = userData && userData.availableDays;

  return (
    <main className='w-[100vw] h-[100vh] overflow-hidden'>
      <div className='flex flex-col w-full h-full '>
        <Navbar />
        <div className="flex flex-row w-full h-full">
          <StudentSidebar page={"dashboard"} />
          {session && <div className="flex flex-col w-full p-8 max-h-full overflow-scroll overflow-y-auto overflow-x-hidden">
            <div className="relative w-[40%]">
              <div className="absolute inset-y-0 top-2 flex pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input type="text"
                placeholder="Enter your search query"
                id="simple-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              </input>
            </div>
            <div style={{ backgroundColor: 'rgba(0, 97, 165, 0.73)' }} className="flex flex-col gap-8 w-[100%] h-52 rounded-3xl my-6 p-12">
              <div className="flex flex-row">
                <img src="/Images/calendar.svg" className="mr-2" alt="" />
                <h1 className="text-white font-semibold">{daysOfWeek[dayOfWeek]}, {date}-{month + 1}-{year}</h1>
              </div>
              <div>
                <h1 className="text-white text-3xl font-semibold">Hello There, {userData && userData.name}</h1>
                <h1 className="text-white font-semibold my-1">Let's find out how your projects are coming to shape.</h1>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="xl:w-[70%] w-[60%]">
                <h1 className="text-2xl font-bold mb-6">Your Finances</h1>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 border border-gray-400 rounded-3xl h-60 bg-white shadow-md flex flex-col items-center gap-4">
                    <img src="/Images/coin_image.png" className="h-28 mt-5 w-28" alt="" />
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-black text-2xl font-bold">$2,700</h1>
                      <h1 className="text-black font-semibold">Total Released</h1>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-400 rounded-3xl h-60 bg-white shadow-md flex flex-col items-center gap-4">
                    <img src="/Images/coin_image.png" className="h-28 mt-5 w-28" alt="" />
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-black text-2xl font-bold">$2,700</h1>
                      <h1 className="text-black font-semibold">Total Released</h1>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-400 rounded-3xl h-60 bg-white shadow-md flex flex-col items-center gap-4">
                    <img src="/Images/coin_image.png" className="h-28 mt-5 w-28" alt="" />
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-black text-2xl font-bold">$2,700</h1>
                      <h1 className="text-black font-semibold">Total Released</h1>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl font-bold my-6">Task List</h1>
                <div className="p-8 rounded-3xl shadow-md ">
                  <div className="flex flex-row">
                    <h1 onClick={() => { setTaskName("PROJECT STATUS") }} className={`text text-2xl font-semibold mr-20 cursor-pointer ${taskName === "PROJECT STATUS" ? 'border-b-blue-600 border-b-4' :
                      ''} `}>PROJECT STATUS</h1>
                    <h1 onClick={() => { setTaskName("MEETINGS") }} className={`text text-2xl font-semibold mr-20 cursor-pointer ${taskName === "MEETINGS" ? 'border-b-blue-600 border-b-4' :
                      ''} `}>MEETINGS</h1>
                  </div>
                  <hr />
                  <div className="flex flex-row justify-between flex-wrap">
                    {taskName === "PROJECT STATUS" && userData && userData.projects.filter((ele) => ele.status !== 'Completed').map((ele) => {
                      return <div className="flex flex-col space-y-8 bg-blue-300 xl:w-[45%] w-full mt-6 rounded-3xl shadow-md p-6 mr-8">
                        {ele.milestones.filter((ele) => ele.status === 'In Progress').map((ele) => {
                          return <div className="flex justify-between">
                            <h1 className="text text-2xl font-semibold">{ele.title}</h1>
                            <h1 className="text text-2xl font-semibold">Active</h1>
                          </div>
                        })}
                        <div className="flex justify-between">
                          <h1 className="text text-1xl font-semibold">{ele.title}</h1>
                          <h1 className="text text-1xl font-semibold">12 Dec 23</h1>
                        </div>
                        <div className="w-[100%] bg-blue-100 rounded-lg h-6">
                          <div className="w-[50%] bg-white rounded-lg h-6"></div>
                        </div>
                      </div>
                    })}
                    {taskName === "MEETINGS" && <div>
                      <div className="flex flex-row">
                        <div className="rounded-full font-semibold py-1 px-3 border-gray-400 border my-4 mr-4">Today</div>
                        <div className="rounded-full font-semibold py-1 px-3 border-gray-400 border my-4 mr-4">Tommorow</div>
                      </div>
                      <div className="flex flex-row">
                        <div className="py-1 px-6 rounded-full my-4 mr-4" style={{ backgroundColor: '#F9DDA2' }}>Standup 9:00 AM - 45 Mins</div>
                        <div className="py-1 px-6 rounded-full my-4 mr-4" style={{ backgroundColor: '#ECD0FA' }}>Standup 9:00 AM - 45 Mins</div>
                      </div>
                    </div>}
                  </div>
                </div>
              </div>
              <div className="pl-5 w-[40%]">
                <h1 className="text text-2xl font-bold">Availability</h1>
                <div className="my-4 shadow-lg rounded-3xl flex flex-col gap-2 py-2 px-6 w-full">
                  <div className="ml-[30%]">8:00 PM - 10:00 PM</div>
                  <div className="flex justify-between">
                    {Array.from({ length: 7 }, (_, index) => (
                      <div
                        key={index}
                        className={`rounded-full h-7 w-7 ${availableDays && availableDays.includes(getDayName(index)) ? 'bg-green-500' : 'bg-gray-300'}`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <h1>Mon</h1>
                    <h1>Tue</h1>
                    <h1>Wed</h1>
                    <h1>Thu</h1>
                    <h1>Fri</h1>
                    <h1>Sat</h1>
                    <h1>Sun</h1>
                  </div>
                </div>
                <h1 className="text text-2xl font-bold">My Projects</h1>
                <div className="my-4 shadow-3xl rounded-lg px-3 py-4">
                  <div className="flex justify-around">
                    <span onClick={() => { setProjectStat("ACTIVE") }} className={`w-1/3 font-semibold cursor-pointer ${projectStat === "ACTIVE" ? 'border-b-blue-600 border-b-4' :
                      ''} `}>ACTIVE</span>
                    <span onClick={() => { setProjectStat("COMPLETED") }} className={`w-1/3 font-semibold cursor-pointer ${projectStat === "COMPLETED" ? 'border-b-blue-600 border-b-4' :
                      ''} `}>COMPLETED</span>
                  </div>
                  <hr />
                  <div className="flex flex-col">
                    {projectStat !== 'COMPLETED' && userData && userData.projects.filter((ele) => ele.status !== 'Completed').map((ele) => {
                      return <div className="flex flex-col space-y-8 bg-blue-300 w h-48 mt-4 rounded-3xl shadow-md p-6 pb-10">
                        <div className="flex justify-between">
                          <h1 className="text text-2xl font-semibold">{ele.title}</h1>
                          <h1 className="text text-2xl font-semibold"></h1>
                        </div>
                        <div className="flex justify-between">
                          <h1 className="text text-1xl font-semibold">{ele.assignedTeam?.teamName}</h1>
                          <h1 className="text text-1xl font-semibold">{ele.domain[0]}</h1>
                        </div>
                        <div className="w-[100%] bg-blue-100 rounded-lg h-6">
                          <div className="w-[50%] bg-white rounded-lg h-6"></div>
                        </div>
                      </div>
                    })}
                    {projectStat === 'COMPLETED' && userData && userData.projects.filter((ele) => ele.status === 'Completed').map((ele) => {
                      return <div className="flex flex-col space-y-8 bg-blue-300 w-[100%] h-48 mt-4 rounded-3xl shadow-md p-6 mr-8">
                        <div className="flex justify-between">
                          <h1 className="text text-2xl font-semibold">{ele.title}</h1>
                          <h1 className="text text-2xl font-semibold"></h1>
                        </div>
                        <div className="flex justify-between">
                          <h1 className="text text-1xl font-semibold">{ele.assignedTeam.teamName}</h1>
                          <h1 className="text text-1xl font-semibold">{ele.domain[0]}</h1>
                        </div>
                        <div className="w-[100%] bg-blue-100 rounded-lg h-6">
                          <div className="w-[50%] bg-white rounded-lg h-6"></div>
                        </div>
                      </div>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </main>
  )
}

export default Home