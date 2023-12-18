"use client"
import React, { useEffect, useState } from "react";
import { Circle, Line } from 'rc-progress'
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import StudentSidebar from "../components/StudentSidebar";
import axios from "axios";

const Home = () => {

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
                    <StudentSidebar page={"dashboard"} />
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
                                    <h1 className="text-2xl font-semibold">Project Report</h1>
                                    <div className="flex flex-row">
                                        <div className={`p-2 border border-gray-300 font-semibold ml-1 text-sm rounded-lg ${projectState === 'All' ? 'bg-gray-300' : 'bg-gray-100'} cursor-pointer`} onClick={() => { setProjectState('All') }}>All</div>
                                        <div className={`p-2 border border-gray-300 font-semibold ml-1 text-sm rounded-lg ${projectState === 'Active' ? 'bg-gray-300' : 'bg-gray-100'} cursor-pointer`} onClick={() => { setProjectState('Active') }}>Active</div>
                                        <div className={`p-2 border border-gray-300 font-semibold ml-1 text-sm rounded-lg ${projectState === 'Completed' ? 'bg-gray-300' : 'bg-gray-100'} cursor-pointer`} onClick={() => { setProjectState('Completed') }}>Completed</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 w-[100%]">
                                    {projects.map((ele) => {
                                        const completedPercentage = ele.milestones.reduce((totalPercentage, ele) => {
                                            let sum = 0;
                                            let sum2 = 0;

                                            sum += ele.submilestones && ele.submilestones.length;

                                            ele.submilestones && ele.submilestones.forEach((subMilestone) => {
                                                if (subMilestone.status === 'Completed') {
                                                    sum2 += 1; // Increment sum2 for each 'Completed' submilestone
                                                }
                                            });

                                            // If you want to calculate the percentage of completed submilestones
                                            // you can use the formula: (sum2 / sum) * 100

                                            const milestonePercentage = (sum2 / sum) * 100;
                                            // Add the current milestone's percentage to the total
                                            return totalPercentage + milestonePercentage;
                                        }, 0); // Start with an initial total percentage of 0

                                        const totalMilestones = ele.milestones.length;
                                        const milestoneApprovePayment = ele.milestones.reduce((appm, ele) => {
                                            let count = 0;
                                            if (ele.paymentCompleted === true) {
                                                count++;
                                            }
                                            return appm + count;
                                        }, 0)

                                        const verifiedPercentage = (milestoneApprovePayment / totalMilestones) * 100;

                                        return <div className="flex flex-col p-4 rounded-3xl shadow-lg bg-white">
                                            <div className="flex justify-between w-52]">
                                                <h1 className="font-bold text-sm">{ele.title}</h1>
                                                <div className="flex gap-1">
                                                    {ele.assignedTeam && ele.assignedTeam.teamUserMap.map((ele) => {
                                                        return <img className="h-6 w-6 rounded-full" src={ele.user.avatarUrl} alt="" />
                                                    })}
                                                </div>
                                            </div>
                                            <div className="flex gap-4 h-32 my-3">
                                                <div className="relative z-10">
                                                    <div className="flex flex-col absolute z-20 ml-6 mt-8 items-center">
                                                        <p>{completedPercentage}%</p>
                                                        <p>Complete</p>
                                                    </div>
                                                    <div className="relative h-28 w-28">
                                                        <Circle
                                                            className="relative"
                                                            percent={completedPercentage}
                                                            strokeColor='blue'
                                                            strokeWidth={4}
                                                            trailColor="lightblue"
                                                            trailWidth={4}
                                                            strokeLinecap="circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="relative z-10">
                                                    <div className="flex flex-col absolute z-20 ml-6 mt-8 items-center">
                                                        <p>{verifiedPercentage}%</p>
                                                        <p>Verified</p>
                                                    </div>
                                                    <div className="relative h-28 w-28">
                                                        <Circle
                                                            className="relative"
                                                            percent={verifiedPercentage}
                                                            strokeColor='blue'
                                                            strokeWidth={4}
                                                            trailColor="lightblue"
                                                            trailWidth={4}
                                                            strokeLinecap="circle"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                    {projects.length === 0 && <div>
                                        No Projects Found
                                    </div>}
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
                                <div className="p-6 flex flex-col gap-3 bg-white rounded-3xl shadow-lg">
                                    <h1 className="text-3xl font-bold"> &#8377; 0</h1>
                                    <p>Your total payment on Trumio till date</p>
                                    <h1 className="text-blue-500">see breakup</h1>
                                </div>
                                <div className="p-6 flex flex-col gap-3 bg-white rounded-3xl shadow-lg">
                                    <img className="h-10 w-10" src="/Images/impImg.png" alt="" />
                                    <h1 className="text-sm font-bold">Explore Universities</h1>
                                    <p>Traverse through the University Ecosystem to get real-time updates about students, professors and lab facilities.</p>
                                    <Link href={'/university'}>
                                        <h1 className="text-blue-500 cursor-pointer">Go to University page</h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </main>
    )
}

export default Home;