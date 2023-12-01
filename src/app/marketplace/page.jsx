"use client"
import React, { useEffect, useState } from 'react'
import StudentSidebar from "../../components/StudentSidebar"
import Navbar from "../../components/Navbar"
import ProjectCard from "../../components/ProjectCard"
import Project from '../../components/Project'
import axios from 'axios'

const Projects = () => {
    // const projects = [
    //     {
    //         "_id": 1,
    //         "title": "Sample Project 1",
    //         "domain": "Sales and Marketing",
    //         "location": "Mumbai",
    //         "statement": "This is a sample project statement. lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invid id velit esse cillum dolore magna aliquy iaculis nisi ut aliqu incididunt",
    //         "milestones": [
    //             {
    //                 "dueDate": "2023-12-31T23:59:59.999Z",
    //                 "heading": "Milestone 1",
    //                 "submissionLink": "http://sample-submission-link.com",
    //                 "feedbackLink": "http://sample-feedback-link.com",
    //                 "subMilestones": [
    //                     {
    //                         "title": "SubMilestone 1",
    //                         "isCompleted": false,
    //                         "status": "Not Started",
    //                         "dueDate": "2023-12-15T23:59:59.999Z",
    //                         "assignedTo": "<User ObjectId>",
    //                         "description": "Description of SubMilestone 1",
    //                         "startDate": null,
    //                         "endDate": null,
    //                         "Aitools": ["Engineering"],
    //                         "connectedApps": [["Figma", "http://figma.com"]],
    //                         "work": {
    //                             "fileType": "file",
    //                             "file": "<Buffer Data>"
    //                         },
    //                         "stickyNotes": ["Note 1", "Note 2"]
    //                     },
    //                 ],
    //                 "isCompleted": false,
    //                 "status": "Not Started"
    //             }
    //         ],
    //         "userAgreement": {
    //         },
    //         "assignedTeam": {
    //             "name": "Development Team",
    //             "users": [
    //                 {
    //                     "username": "user1",
    //                     "email": "user1@example.com"
    //                 },
    //             ]
    //         },
    //         "assignedBy": {
    //             "name": "admin",
    //             "email": "admin@example.com",
    //             "companyName": "Google",
    //             "projectsPosted": 12,
    //             "sectorName": "DeepTech",
    //             "paymentsCompleted": 2680,
    //             "rating": 4
    //         },
    //         "logo": "https://aemi.ie/wp-content/uploads/2021/10/Project-Arts-Centre-Logo-Black-1-scaled.jpg",
    //         "health": {
    //             "progress": 0
    //         },
    //         "startDate": "2023-01-01T00:00:00.000Z",
    //         "endDate": "2023-12-31T23:59:59.999Z",
    //         "activity": [
    //             {
    //                 "submilestone": "<SubMilestone ObjectId>",
    //                 "type": "CREATE",
    //                 "timestamp": "2023-01-01T12:00:00.000Z",
    //                 "user": "<User ObjectId>",
    //                 "message": "Created the project."
    //             }
    //         ],
    //         "clientRequirements": {
    //             "paymentType": "Fixed",
    //             "payment": 2200,
    //             "worksDays": ["Mon", "Tue", "Wed"],
    //             "requiredTools": ["Figma", "MERN"],
    //             "files": [("doc.docx", Buffer.from([0x53, 0x61, 0x6D, 0x70, 0x6C, 0x65, 0x20, 0x62, 0x69, 0x6E, 0x61, 0x72, 0x79, 0x20, 0x64, 0x61, 0x74, 0x61]))]
    //         },
    //         "work": {
    //             "fileType": "file",
    //             "file": "<Buffer Data>"
    //         },
    //         "duration": 8,
    //         "postedOn": "2023-11-26T12:00:00.000Z"
    //     },
    //     {
    //         "_id": 2,
    //         "title": "Sample Project 2",
    //         "domain": "Sales and Marketing",
    //         "location": "Mumbai",
    //         "statement": "This is a sample project statement. lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor invid id velit esse cillum dolore magna aliquy iaculis nisi ut aliqu incididunt",
    //         "milestones": [
    //             {
    //                 "dueDate": "2023-12-31T23:59:59.999Z",
    //                 "heading": "Milestone 1",
    //                 "submissionLink": "http://sample-submission-link.com",
    //                 "feedbackLink": "http://sample-feedback-link.com",
    //                 "subMilestones": [
    //                     {
    //                         "title": "SubMilestone 1",
    //                         "isCompleted": false,
    //                         "status": "Not Started",
    //                         "dueDate": "2023-12-15T23:59:59.999Z",
    //                         "assignedTo": "<User ObjectId>",
    //                         "description": "Description of SubMilestone 1",
    //                         "startDate": null,
    //                         "endDate": null,
    //                         "Aitools": ["Engineering"],
    //                         "connectedApps": [["Figma", "http://figma.com"]],
    //                         "work": {
    //                             "fileType": "file",
    //                             "file": "<Buffer Data>"
    //                         },
    //                         "stickyNotes": ["Note 1", "Note 2"]
    //                     },
    //                 ],
    //                 "isCompleted": false,
    //                 "status": "Not Started"
    //             }
    //         ],
    //         "userAgreement": {
    //         },
    //         "assignedTeam": {
    //             "name": "Development Team",
    //             "users": [
    //                 {
    //                     "username": "user1",
    //                     "email": "user1@example.com"
    //                 },
    //             ]
    //         },
    //         "assignedBy": {
    //             "name": "admin",
    //             "email": "admin@example.com",
    //             "companyName": "Google",
    //             "projectsPosted": 12,
    //             "sectorName": "DeepTech",
    //             "paymentsCompleted": 2680,
    //             "rating": 3
    //         },
    //         "logo": "https://aemi.ie/wp-content/uploads/2021/10/Project-Arts-Centre-Logo-Black-1-scaled.jpg",
    //         "health": {
    //             "progress": 0
    //         },
    //         "startDate": "2023-01-01T00:00:00.000Z",
    //         "endDate": "2023-12-31T23:59:59.999Z",
    //         "activity": [
    //             {
    //                 "submilestone": "<SubMilestone ObjectId>",
    //                 "type": "CREATE",
    //                 "timestamp": "2023-01-01T12:00:00.000Z",
    //                 "user": "<User ObjectId>",
    //                 "message": "Created the project."
    //             }
    //         ],
    //         "clientRequirements": {
    //             "paymentType": "Fixed",
    //             "payment": 2200,
    //             "worksDays": ["Mon", "Tue", "Wed"],
    //             "requiredTools": ["Figma", "MERN"],
    //             "files": [("doc.docx", Buffer.from([0x53, 0x61, 0x6D, 0x70, 0x6C, 0x65, 0x20, 0x62, 0x69, 0x6E, 0x61, 0x72, 0x79, 0x20, 0x64, 0x61, 0x74, 0x61]))]
    //         },
    //         "work": {
    //             "fileType": "file",
    //             "file": "<Buffer Data>"
    //         },
    //         "duration": 8,
    //         "postedOn": "2023-11-26T12:00:00.000Z"
    //     }
    // ]
    const [projects, setProjects] = useState([])
    const [openedProj, setOpenedProj] = useState({})

    useEffect(() => {
        axios.get('/api/allprojects')
        .then(res => setProjects(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <>
            {
                Object.keys(openedProj).length !== 0 ? (
                    <Project project={openedProj} setOpenedProj={setOpenedProj} />
                ) : (
                    <></>
                )}
            <main className='w-[100vw]'>
                <div className='flex flex-col w-full h-full'>
                    <Navbar />
                    <div className='flex w-full h-full'>
                        <StudentSidebar />
                        <div className='w-full h-full flex flex-col'>
                            <div className='h-40 bg-black'>

                            </div>
                            <div className='h-full p-8'>
                                {
                                    projects.map(project => {
                                        return <ProjectCard key={project._id} project={project} setOpenedProj={setOpenedProj} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Projects