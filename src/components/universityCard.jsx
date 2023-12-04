import React from 'react'
import Location_Icon from "../../public/Images/Location_Icon.svg"
import Money_Icon from "../../public/Images/Money_Icon.svg"
import Heart_Icon from "../../public/Images/Heart_Icon.svg"
import Yellow_Star from "../../public/Images/Yellow_Star.svg"
import Star_Icon from "../../public/Images/Star_Icon.svg"


const UniversityCard = ({ universityData }) => {
    // project = {
    //     "id": 1,
    //     "title": "Sample Project",
    //     "status": "Open",
    //     "location": "Mumbai",
    //     "domain": "Sales and Marketing",
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
    //         "paymentsCompleted": 2680,
    //         "rating": 4
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
    // }

    function getDaysDifference(startDate, endDate) {
        startDate = new Date(startDate)
        endDate = new Date(endDate)
        const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const timeDifference = endUTC - startUTC;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    }

    

    return (
        <div className='w-full transition-all duration-500 border-2 border-zinc-500 flex px-8 py-4 my-8 cursor-pointer hover:scale-105'>
            <div className='w-2/3 flex flex-row'>
                {/* <div className='text-neutral-700 text-base font-semibold'> {project.status === 'Open' ? 'Open Listing till '  : 'Under Review'} </div> */}
                <div>
                    <div className='font-bold text-2xl'>
                        {universityData.name}
                    </div>
                    <div className='flex my-2'>
                        <div className='flex mr-8 justify-center items-center'>
                            <Location_Icon className="mr-1" />
                            {universityData.address}
                        </div>
                        <div className='flex mr-8 justify-center items-center'>
                            <Money_Icon className="mr-1" />
                            {universityData.type}
                        </div>
                    </div>
                    <div className='my-6 text-neutral-700'>
                        {universityData.description}
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold' >Skills</p>
                        <div className='flex'>
                            
                            <div className='text-sm mr-6 my-2 bg-zinc-300 rounded-lg px-5 py-1'>
                                {universityData.members.length} students
                            </div>
                            <div className='text-sm mr-6 my-2 bg-zinc-300 rounded-lg px-5 py-1'>
                                {universityData.professors.length} profesors
                            </div>
                            <div className='text-sm mr-6 my-2 bg-zinc-300 rounded-lg px-5 py-1'>
                                {universityData.labcount} labcount
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start items-center ml-32'>
                    <img src={universityData.profileUrl} alt="" className='rounded-full w-32 h-32' />
                </div>
            </div>
            
            <div className='flex flex-col w-1/3 pl-6'>
                <div className='flex justify-end'>
                    <Heart_Icon />
                </div>
                <div className='flex'>
                    
                    <div className='flex flex-col pl-3'>
                        <div className='flex'>

                            {
                                universityData.followers
                            } followers
                        </div>
                        {/* <div className='font-semibold' > {project.assignedBy.name} </div>
                        <div> {project.assignedBy.companyName} </div> */}
                    </div>
                </div>
                <div>
                    <button className='py-2 px-6 rounded-full bg-blue-900 mt-20'>View Page</button>
                </div>
                {/* <div className='mt-2'>
                    <span className='font-semibold'> Sector: </span> {project.assignedBy.sectorName}
                </div> */}
                {/* <div className='mt-2'>
                    <span className='font-semibold'> &#8377; {project.assignedBy.paymentsCompleted} </span> spent so far
                </div>
                <div className='mt-16 text-right'> Posted {getDaysDifference(project.postedOn, new Date())} days ago </div> */}
            </div>
        </div>
    )
}

export default UniversityCard