"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Project = ({ project, isOpen, setIsOpen }) => {
    // project = {
    //     "id": 1,
    //     "title": "Sample Project",
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
    //         "numOfJobsPosted": 2,
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
    //         "worksDays": ["Mon", "Tue", "Wed"],
    //         "requiredTools": ["Figma", "MERN"],
    //         "files": [("doc.docx", Buffer.from([0x53, 0x61, 0x6D, 0x70, 0x6C, 0x65, 0x20, 0x62, 0x69, 0x6E, 0x61, 0x72, 0x79, 0x20, 0x64, 0x61, 0x74, 0x61]))]
    //     },
    //     "work": {
    //         "fileType": "file",
    //         "file": "<Buffer Data>"
    //     },
    //     "duration": "5 Months"
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

    return (
        <main className={`${isOpen? 'w-[100vw] h-[100vh] opacity-100 z-10': 'translate-x-[100vw]'} absolute left-0 top-0 z-40 transition-all duration-700`}>
            <div className='absolute top-10 right-96 bg-black text-white w-10 h-10 rounded-full flex justify-center items-center z-40 cursor-pointer' onClick={() => setIsOpen(!isOpen)}> X </div>
            <div className='bg-slate-600 w-[100vw] h-[100vh] opacity-40'></div>
            <div className="my-10 absolute right-0 top-16 flex">
                <div className="bg-white overflow-hidden shadow-lg w-[500px] relative border-r-8 border-gray-100 px-4 rounded-l-3xl">
                    <div className="text-center p-6 border-b flex items-center">
                        <span className='text-left mr-8 font-semibold'> {project.title} </span>
                        <img src="https://hbr.org/resources/images/article_assets/2023/02/Feb23_021243567244.jpg" alt="Project" className='w-12 h-12 rounded-full' />
                    </div>

                    <div className='flex justify-start border-b-2 border-gray-300 pb-5 mt-5'>
                        <div className='flex flex-col mr-20 ml-5'>
                            <span>Payment Method</span>
                            <span> {project.clientRequirements.paymentType} </span>
                        </div>
                        <div className='flex flex-col'>
                            <span>Duration</span>
                            <span> {project.duration} </span>
                        </div>
                    </div>

                    <div className='flex flex-col my-5'>
                        <span className='ml-5 font-semibold'>Required Tools</span>
                        <div className='flex ml-4'>
                            {
                                project.clientRequirements.requiredTools.map((tool, id) => (
                                    <div key={id} className='mx-3 my-2 bg-pink-600 rounded-lg p-2 text-white'>
                                        {tool}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='m-3'>
                        <h3>Statement:</h3>
                        <div className='border-2 border-slate-400 rounded-lg p-4 '>
                            {project.statement}
                        </div>
                    </div>

                    <div className='mx-3 mt-20 mb-8'>
                        <h3>Attachments: </h3>
                        <div className='flex mt-3'>
                            {
                                // files.map((file, id) => (
                                //     <a key={id} className='w-10 h-10 bg-slate-200 rounded-md' href={`data:image/png;base64,${file[1]}`}> {file[0]} </a>
                                // ))
                                [["File 1", "sdfg"], ["File 2", "abcd"]].map(([filename, filepath], id) => (
                                    <a key={id} className='h-10 bg-slate-200 rounded-md w-20 mr-5 flex justify-center items-center' href={`data:image/png;base64,${filepath}`}> {filename} </a>
                                ))
                            }
                        </div>
                    </div>
                </div>



                <div className="bg-white rounded overflow-hidden shadow-lg w-72">
                    <div className="text-center p-6  border-b">
                        <button className='bg-gradient-to-bl from-cyan-300 to to-blue-700 w-40 h-12 rounded-md text-white font-mono block my-6'>CREATE BID</button>
                        <button className='bg-gradient-to-bl from-yellow-300 to to-yellow-600 w-52 h-12 rounded-md text-white font-mono block my-6'>Mark as interested</button>

                        <div>
                            <span className={winning_prob >= 75 ? `text-green-600` : winning_prob >= 40 ? `text-orange-500` : `text-red-500`}> {winning_prob}% </span>
                            <span> Winning Probability </span>
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-6">
                        <div className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-gray-800">
                                <img src="https://www.text-image.com/samples/per_normal_face.jpg" alt="Face" className='rounded-full w-16 h-16' />
                            </div>
                            <div className="pl-3 flex flex-col justify-around items-center">
                                <p className="text-sm font-medium text-gray-800 leading-none"> {project.assignedBy.name} </p>
                                <p className="text-xs text-gray-500"> {project.assignedBy.companyName} </p>
                            </div>
                        </div>
                        <div className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-gray-800">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none"> {project.assignedBy.email} </p>
                            </div>
                        </div>
                        <div className="px-4 py-2 hover:bg-gray-100 flex">
                            <span> {project.assignedBy.numOfJobsPosted} </span>
                            <div className="pl-3 flex justify-center items-center">
                                <p className="text-sm font-medium text-gray-800 leading-none">Jobs Posted</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-400 flex py-4">
                        <div className='mx-3'>
                            <p> Share </p>
                        </div>
                        <div className="text-gray-800">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Project