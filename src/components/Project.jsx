"use client"
import React, { useEffect, useState } from 'react'
import RightArrow from "../../public/Images/Right_Arrow.svg"
import Copy_Link from "../../public/Images/Copy_Link_Icon.svg"
import Export from "../../public/Images/Export_Icon.svg"
import Hand from "../../public/Images/Hand_Icon.svg"
import Heart from "../../public/Images/Heart_Icon.svg"
import Slack from "../../public/Images/Slack_Icon.svg"
import Star_Bold from "../../public/Images/Star_Bold_Icon.svg"
import Whatsapp from "../../public/Images/Whatsapp_Icon.svg"
import Clock from "../../public/Images/Clock_Icon.svg"
import Calendar_Icon from "../../public/Images/Calendar2.svg"
import Export_Icon from "../../public/Images/export.svg"
import Location_Icon from "../../public/Images/Location_Icon.svg"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const Project = ({ project, setOpenedProj, selected }) => {
    const { data: session } = useSession()
    const router = useRouter()
    const [myTeam, setMyTeam] = useState({})

    const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
    function getDaysDifference(startDate, endDate) {
        startDate = new Date(startDate)
        endDate = new Date(endDate)
        const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const timeDifference = endUTC - startUTC;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    }
    const [isFullOpen, setFullOpen] = useState(false);

    const handleCreateBid = () => { //! Creates a bid by making an api call posting a new team and redirected to the createBid Page
        try {
            let changedProject = project
            axios.post('/api/team', {
                teamUserMap: [
                    {
                        user: session.user._id,
                        role: 'Leader',
                        status: 'Approved'
                    }
                ],
                project: project._id
            }).then(res => {
                router.push(`/createBid/${project._id}`)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        axios.get('/api/myTeams').then(res => setMyTeam(res.data.filter(team => team.project === project._id).length !== 0 ? res.data.filter(team => team.project === project._id)[0] : {})).catch(err => toast.error(err.response.data.error))

    }, [])

    return (
        <main className="w-[100vw] h-[100vh] overflow-hidden z-50 absolute top-0 right-0">
            <div className='w-[100vw] h-[100vh] absolute top-0 right-0 opacity-50 transition-all duration-1000 bg-zinc-800'></div>
            <div className={`absolute right-0 top-0 flex flex-col h-full bg-white rounded-l-3xl animate-[appear_1s_ease-in-out] ${isFullOpen ? 'w-full' : ''} transition-all duration-500`}>
                <nav className='h-16 flex justify-between px-6 py-4'>
                    <div onClick={() => setOpenedProj({})} className='cursor-pointer'> X </div>
                    <div onClick={() => setFullOpen(!isFullOpen)} className='text-sm flex items-center cursor-pointer justify-end gap-2'>
                        <Export_Icon className="scale-50" />
                        <span className='text-sky-700 italic'>  {isFullOpen ? 'Minimize Window' : 'Open in new window'}  </span>
                    </div>

                </nav>
                <div className='flex'>
                    <div className={`shadow-lg ${isFullOpen ? 'w-full' : 'w-[600px]'} relative border-r-8 border-gray-100 px-4`}>
                        <div className="text-center px-6 flex items-center justify-between">
                            <span className='text-3xl mr-8 font-semibold'> {project.title} </span>
                            <span className='text-sm'> Listing Live till {(new Date(project.endDate)).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                            })} </span>
                        </div>

                        <div className='flex flex-col border-b-2 border-gray-300 pb-5 mt-5'>
                            <div className='flex justify-between mb-3'>
                                <div className='flex flex-col'>
                                    <div className='flex mr-20 ml-5 mb-2'>
                                        <div className='flex mr-5'>
                                            <Location_Icon />
                                            <span className='ml-3'> {project.location} </span>
                                        </div>
                                        <div className='flex'>

                                            <Calendar_Icon />
                                            <span className='ml-3'> Expected Duration - {getDaysDifference(project.startDate, project.endDate) < 7 ? `${getDaysDifference(project.startDate, project.endDate)} Days` : `${Math.ceil(getDaysDifference(project.startDate, project.endDate) / 7)} Weeks`} </span>
                                        </div>
                                    </div>
                                    <div className='flex mr-20 ml-5'>
                                        <Star_Bold className="scale-75" />
                                        <span className='ml-3'> {project.domain.join(", ")} </span>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center w-28 bg-indigo-100 rounded-xl'>
                                    <span className='font-bold'> &#8377; {project.clientRequirements.payment} </span>
                                    <span> {project.clientRequirements.paymentType} </span>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className="w-72 h-16 bg-indigo-100 flex justify-evenly items-center mt-3 ml-3 rounded-xl" >
                                    {
                                        days.map(day => (
                                            <div className={`flex flex-col items-center ${day === "Fri" && "pr-4 border-r-2 border-zinc-400"}`} key={day}>
                                                <div className={`w-3.5 h-3.5 rounded-full ${project.clientRequirements.workDays.includes(day) ? 'bg-white border border-gray-400' : 'bg-green-500'}`} />
                                                {day}
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className='text-sm flex w-40 justify-center gap-2 text-neutral-500 italic'>
                                    <Clock />
                                    Posted {getDaysDifference(project.postedOn, new Date()) === 0 ? 'Today' : getDaysDifference(project.postedOn, new Date()) === 1 ? 'Yesterday' : `${getDaysDifference(project.postedOn, new Date())} days ago`}
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col my-5 pl-5 border-b-2 pb-3 border-gray-300'>
                            <span className='font-bold text-xl'>Requirement Details</span>
                            <span className='mt-2'>Skills</span>
                            <div className='flex'>
                                {
                                    project.clientRequirements.requiredTools.map((tool, id) => (
                                        <div key={id} className='text-sm mr-6 my-2 bg-sky-700 text-white px-3 py-1 rounded-xl'>
                                            {tool}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='m-3'>
                            <h3 className='font-bold text-xl'>Description:</h3>
                            <div className='rounded-lg py-4 text-neutral-700 text-base max-h-32 overflow-scroll overflow-x-hidden overflow-y-auto'>
                                {project.statement}
                            </div>
                        </div>

                        <div className='mx-3 pb-8'>
                            <h3 className='font-semibold text-xl'>Attachments: </h3>
                            {

                                <div div className='flex mt-3'>
                                    {
                                        project.clientRequirements.file && Object.keys(project.clientRequirements.file).length !== 0 ?
                                            <a href={project.clientRequirements.file?.url} target="_blank" className='px-2 py-1 bg-gray-200 rounded-lg flex items-center'>
                                                <span>{project.clientRequirements.file?.title}</span> <Export_Icon className="scale-50" />
                                            </a> :
                                            <div> No Attachments </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>

                    <div className={`bg-white rounded shadow-lg ${isFullOpen ? 'w-full' : 'w-80'}`}>
                        <div className="text-center  border-b-2 flex items-center flex-col pt-5 pb-5">
                            {
                                session && (session.user.role === "Student" || session.user.role === "Professor" ? (Object.keys(myTeam).length === 0 ?
                                    <button className="w-48 h-12 bg-sky-700 text-white  rounded-3xl shadow mb-5 text-xl  font-sans tracking-tight flex items-center justify-center" onClick={handleCreateBid}> Create Bid </button> :
                                    <button className="w-48 h-12 bg-sky-700 text-white  rounded-3xl shadow mb-5 text-xl  font-sans tracking-tight flex items-center justify-center" onClick={() => {
                                        return router.push(`/createBid/${project._id}`)
                                    }}> View My Proposal </button>
                                )
                                    :
                                    (
                                        selected !== 'My' ?
                                            (Object.keys(myTeam).length === 0 ?
                                                <button className="w-48 h-12 bg-sky-700 text-white  rounded-3xl shadow mb-5 text-xl  font-sans tracking-tight flex items-center justify-center" onClick={handleCreateBid}> Create Bid </button> :
                                                <button className="w-48 h-12 bg-sky-700 text-white  rounded-3xl shadow mb-5 text-xl  font-sans tracking-tight flex items-center justify-center" onClick={() => {
                                                    return router.push(`/createBid/${project._id}`)
                                                }}> View My Proposal </button>
                                            ) :
                                            <Link href={`/viewBids/${project._id}`} className="w-48 h-12 bg-sky-700  text-white rounded-3xl shadow mb-5 text-xl  font-sans tracking-tight flex items-center justify-center" >View Bids </Link>
                                    )
                                )
                            }
                            {
                                selected !== 'My' && Object.keys(myTeam).length === 0 &&
                                <button className="w-48 h-12 rounded-3xl shadow border text-xl text-sky-700 border-sky-700 flex justify-center items-center cursor-pointer" onClick={() => {
                                    toast.success("Your interest has been conveyed")
                                }}>
                                    <span> Interested </span>
                                </button>
                            }
                        </div>
                        <div className="pt-6 flex flex-col items-center text-xl border-b-2">
                            <h3 className='font-bold text-sky-700'>About the Client</h3>

                            <div className="px-4 py-2 flex flex-col items-center">
                                <div className="text-gray-800 my-3">
                                    <img src={project.assignedBy.avatarUrl} alt="Face" className='rounded-full w-16 h-16' />
                                </div>
                                <div className="pl-3 flex flex-col justify-around items-center mb-3">
                                    <p className="text-sm font-medium text-gray-800 leading-none mb-1"> {project.assignedBy.name} </p>
                                    <p className="text-xs text-gray-500"> {project.assignedBy.companyName} </p>
                                </div>
                            </div>
                            <div className="px-4 py-2 flex flex-col">
                                <div className="text-neutral-700 text-base font-normal font-sans tracking-wide"> <span className='font-semibold'> Sector:  </span>{project.assignedBy.domain[0]} </div>
                                <div className="text-neutral-700 text-base font-normal font-sans tracking-wide"> <span className='font-semibold'> Payments Completed: </span> &#8377; {project.assignedBy.paymentsCompleted} </div>
                                <div className="text-neutral-700 text-base font-normal font-sans tracking-wide"> <span className='font-semibold'> Projects Posted: </span> {project.assignedBy.projectsPosted} </div>
                            </div>

                            <div className="flex flex-col py-4">
                                <div className='flex justify-center mb-4'>
                                    <p className='font-semibold text-2xl'> Share </p>
                                </div>
                                <div className='flex justify-around'>
                                    <a className='flex flex-col items-center mx-2 text-base' href="#">
                                        <Slack className="scale-50" />
                                        Slack
                                    </a>
                                    <a className='flex flex-col items-center mx-2 text-base' href="#">
                                        <Whatsapp className="scale-50" />
                                        Whatsapp
                                    </a>
                                    <a className='flex flex-col items-center mx-2 text-base' href="#">
                                        <Copy_Link className="scale-50" />
                                        Copy Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Project