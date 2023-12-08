import React, { useState } from 'react'

const MilestoneTableClient = ({ project }) => {
    const [selectedMilestoneNum, setSelectedMilestoneNum] = useState(1)
    const [milestone, setMilestone] = useState(project.milestones[selectedMilestoneNum-1])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col">
            <div className='mt-3 border-b-2 border-gray-200'>
                {
                    project.milestones.map((milestone, index) => (
                        <span className={`mx-3 cursor-pointer ${index + 1 === selectedMilestoneNum && "bg-zinc-300"} px-3 py-1 rounded-t-xl`} onClick={() => {
                            setMilestone(project.milestones[index + 1])
                            setSelectedMilestoneNum(index + 1)
                        }}> Milestone {index + 1} </span>
                    ))
                }
            </div>
            <div>
                <div>
                    <div className='text-xl font-bold my-5'> {milestone.heading} </div>
                    <div className='justify-between'>
                        <span className='font-semibold'> Due Date: </span>
                        {/* <span>
                        {(new Date(milestone.dueDate)).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                        </span> */}
                    </div>
                    <div className='my-3'>
                        <span className='font-semibold'> Submitted By: </span>
                        <span> Name </span>
                    </div>
                    <div className='my-3'>
                        <span className='font-semibold mb-1 mr-2'> Description: </span>
                        <div className='inline-block rounded-xl border-2 border-gray-300 p-2'> {milestone.description} </div>
                    </div>
                    <div className='my-3'>
                    <span className='font-semibold mb-1 mr-2'> Deliverables: </span>
                        <div className='inline-block rounded-xl border-2 border-gray-300 p-2'> {milestone.deliverables} </div>
                    </div>
                    <div className='my-3'>
                    <span className='font-semibold mb-1 mr-2'> Attachments: </span>
                        <div className='inline-block rounded-xl border-2 border-gray-300 p-2'> "" </div>
                    </div>
                </div>
                <button className='bg-sky-700 text-white px-3 py-2 rounded-xl'>
                    Approve Payment
                </button>
            </div>
        </div>
    )
}

export default MilestoneTableClient