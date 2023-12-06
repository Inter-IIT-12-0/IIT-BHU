"use client"
import React, { useState } from 'react'
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

const Project = ({ project, setOpenedProj }) => {
    const {data: session} = useSession()
    const router = useRouter()
    // project = {
    //     "id": 1,
    //     "title": "Sample Project",
    //     "domain": "Sales and Marketing",
    //     "location": "Mumbai",
    //     "domain": "Sales and Marketing",
    //     "location": "Mumbai",
    //     "statement": "This is a sample project statement. lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invid id velit esse cillum dolore magna aliquy iaculis nisi ut aliqu incididunt",
    //     "milestones": [
    //         {
    //             "dueDate": "2023-12-31T23:59:59.999Z",
    //             "heading": "Milestone 1",
    //             "submissionLink": "http://sample-submission-link.com",
    //             "feedbackLink": "http://sample-feedback-link.com",
    //             "subMilestones": [
    //                 {
    //                     "title": "SubMilestone 1",
    //                     "isCompleted": false,
    //                     "status": "Not Started",
    //                     "dueDate": "2023-12-15T23:59:59.999Z",
    //                     "assignedTo": "<User ObjectId>",
    //                     "description": "Description of SubMilestone 1",
    //                     "startDate": null,
    //                     "endDate": null,
    //                     "Aitools": ["Engineering"],
    //                     "connectedApps": [["Figma", "http://figma.com"]],
    //                     "work": {
    //                         "fileType": "file",
    //                         "file": "<Buffer Data>"
    //                     },
    //                     "stickyNotes": ["Note 1", "Note 2"]
    //                 },
    //             ],
    //             "isCompleted": false,
    //             "status": "Not Started"
    //         }
    //     ],
    //     "userAgreement": {
    //     },
    //     "assignedTeam": {
    //         "name": "Development Team",
    //         "users": [
    //             {
    //                 "username": "user1",
    //                 "email": "user1@example.com"
    //             },
    //         ]
    //     },
    //     "assignedBy": {
    //         "name": "admin",
    //         "email": "admin@example.com",
    //         "companyName": "Google",
    //         "projectsPosted": 12,
    //         "sectorName": "DeepTech",
    //         "paymentsCompleted": 2680
    //         "projectsPosted": 12,
    //         "sectorName": "DeepTech",
    //         "paymentsCompleted": 2680
    //     },
    //     "logo": "https://aemi.ie/wp-content/uploads/2021/10/Project-Arts-Centre-Logo-Black-1-scaled.jpg",
    //     "health": {
    //         "progress": 0
    //     },
    //     "startDate": "2023-01-01T00:00:00.000Z",
    //     "endDate": "2023-12-31T23:59:59.999Z",
    //     "activity": [
    //         {
    //             "submilestone": "<SubMilestone ObjectId>",
    //             "type": "CREATE",
    //             "timestamp": "2023-01-01T12:00:00.000Z",
    //             "user": "<User ObjectId>",
    //             "message": "Created the project."
    //         }
    //     ],
    //     "clientRequirements": {
    //         "paymentType": "Fixed",
    //         "payment": 2200,
    //         "payment": 2200,
    //         "worksDays": ["Mon", "Tue", "Wed"],
    //         "requiredTools": ["Figma", "MERN"],
    //         "files": [("doc.docx", Buffer.from([0x53, 0x61, 0x6D, 0x70, 0x6C, 0x65, 0x20, 0x62, 0x69, 0x6E, 0x61, 0x72, 0x79, 0x20, 0x64, 0x61, 0x74, 0x61]))]
    //     },
    //     "work": {
    //         "fileType": "file",
    //         "file": "<Buffer Data>"
    //     },
    //     "duration": 8,
    //     "postedOn": "2023-11-26T12:00:00.000Z"
    //     "duration": 8,
    //     "postedOn": "2023-11-26T12:00:00.000Z"
    // }
    const winning_prob = 39;
    const [files, setFiles] = useState([]);
    // useEffect(() => {
    //     let files = []
    //     project.clientRequirements.files.forEach(file => {
    //         files = [...files, (file[0], file[1].toString('base64'))]
    //     })
    //     setBase64Data(files);
    // }, [project.clientRequirements.files]);

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
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

    const handleCreateBid = () => {
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
                console.log(res.data)
                changedProject.assignedTeam = res.data._id
                axios.put(`/api/project/${project._id}`, changedProject).then(res => console.log(res.data)).catch(console.log)
                router.push(`createBid/${project._id}`)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="w-[100vw] h-[100vh] z-10 absolute top-0 right-0 overflow-y-hidden">
            {/* <div className='absolute top-10 right-96 bg-black text-white w-10 h-10 rounded-full flex justify-center items-center z-40 cursor-pointer' onClick={() => setIsOpen(!isOpen)}> X </div> */}
            <div className='w-[100vw] h-[100vh] absolute top-0 right-0 opacity-50 transition-all duration-1000 bg-zinc-800'></div>
            <div className={`absolute right-0 top-0 flex flex-col h-full bg-white rounded-l-3xl animate-[appear_1s_ease-in-out] ${isFullOpen ? 'w-full' : ''} transition-all duration-500`}>
                <nav className='h-16 flex justify-between px-6 py-4'>
                    <div onClick={() => setOpenedProj({})} className='cursor-pointer'> X </div>
                    <div onClick={() => setFullOpen(!isFullOpen)} className='text-sm mr-16 flex items-center cursor-pointer'>
                        <Export_Icon />
                        <span className='ml-3'>  {isFullOpen ? 'Minimize Window' : 'Open in new window'}  </span>
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
                                            <Star_Bold className="scale-75" />
                                            <span className='ml-3'> {project.domain} </span>
                                        </div>
                                    </div>
                                    <div className='flex mr-20 ml-5'>
                                        <Calendar_Icon />
                                        <span className='ml-3'> Expected Duration - {project.duration} W </span>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center w-28 bg-zinc-300 rounded-xl'>
                                    <span className='font-bold'> &#8377; {project.clientRequirements.payment} </span>
                                    <span> {project.clientRequirements.paymentType} </span>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className="w-72 h-16 bg-zinc-300 flex justify-evenly items-center mt-3 ml-3" >
                                    {
                                        days.map(day => (
                                            <div className={`flex flex-col items-center ${day === "Fri" && "pr-4 border-r-2 border-zinc-400"}`} key={day}>
                                                <div className={`w-3.5 h-3.5 rounded-full ${project.clientRequirements.workDays.includes(day) ? 'bg-white border border-gray-400' : 'bg-green-500'}`} />
                                                {day}
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className='text-sm flex w-40 justify-around'>
                                    <Clock />
                                    Posted {getDaysDifference(project.postedOn, new Date())} days ago
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col my-5 pl-5 border-b-2 pb-3 border-gray-300'>
                            <span className='font-bold text-xl'>Requirement Details</span>
                            <span className='mt-2'>Skills</span>
                            <div className='flex'>
                                {
                                    project.clientRequirements.requiredTools.map((tool, id) => (
                                        <div key={id} className='text-sm mr-6 my-2 bg-zinc-300 rounded-lg px-5 py-1'>
                                            {tool}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='m-3'>
                            <h3 className='font-bold text-xl'>Description:</h3>
                            <div className='rounded-lg py-4 text-neutral-700 text-base'>
                                {project.statement}
                            </div>
                        </div>

                        <div className='mx-3 py-8'>
                            <h3 className='font-semibold'>Attachments: </h3>
                            <div className='flex mt-3'>
                                {
                                    // files.map((file, id) => (
                                    //     <a key={id} className='w-10 h-10 bg-slate-200 rounded-md' href={`data:image/png;base64,${file[1]}`}> {file[0]} </a>
                                    // ))
                                    [["File 1", "sdfg"], ["File 2", "abcd"]].map(([filename, filepath], id) => (
                                        <a key={id} className='h-10 text-sky-700 rounded-md w-20 mr-5 flex justify-center items-center' href={`data:image/png;base64,${filepath}`}> {filename} </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className={`bg-white rounded shadow-lg ${isFullOpen ? 'w-full' : 'w-80'}`}>
                        <div className="text-center  border-b-2 flex items-center flex-col pt-5 pb-5">
                            {
                                session && (session.user.role === "Student" ?
                                <button className="w-48 h-12 bg-blue-400 rounded-lg shadow mb-5 text-xl font-bold font-sans tracking-tight" onClick={handleCreateBid} >Create Bid </button> :
                                <Link href={`/viewBids/${project._id}`} className="w-48 h-12 bg-blue-400 rounded-lg shadow mb-5 text-xl font-bold font-sans tracking-tight flex items-center justify-center" >View Bid </Link>
                                )
                            }
                            <button className="w-48 h-12 rounded-lg shadow border text-xl border-blue-400 flex justify-center items-center cursor-pointer" >
                                <Hand className="scale-75" />
                                <span> Interested </span>
                            </button>
                            <button className="mt-5 w-32 h-8 bg-blue-400 bg-opacity-0 rounded-lg shadow border border-blue-400 flex items-center justify-center text-sm cursor-pointer" >
                                <Heart className="scale-50" />
                                <span> Favourite </span>
                            </button>
                        </div>
                        <div className="pt-6 flex flex-col items-center text-xl border-b-2">
                            <h3 className='font-bold'>About the Client</h3>

                            <div className="px-4 py-2 flex flex-col">
                                <div className="text-gray-800 my-3">
                                    <img src="https://www.text-image.com/samples/per_normal_face.jpg" alt="Face" className='rounded-full w-16 h-16' />
                                </div>
                                <div className="pl-3 flex flex-col justify-around items-center mb-3">
                                    <p className="text-sm font-medium text-gray-800 leading-none mb-1"> {project.assignedBy.name} </p>
                                    <p className="text-xs text-gray-500"> {project.assignedBy.companyName} </p>
                                </div>
                            </div>
                            <div className="px-4 py-2 flex flex-col">
                                <div className="text-neutral-700 text-base font-normal font-sans tracking-wide">Sector: {project.assignedBy.sectorName} </div>
                                <div className="text-neutral-700 text-base font-normal font-sans tracking-wide">Payments Completed: &#8377; {project.assignedBy.paymentsCompleted} </div>
                                <div className="text-neutral-700 text-base font-normal font-sans tracking-wide">Projects Posted: {project.assignedBy.projectsPosted} </div>
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
        </main>
    )
}

export default Project