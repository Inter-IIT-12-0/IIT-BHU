import React, { useState } from 'react'
import Export_Icon from "../../public/Images/Export_Icon.svg"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'

const MilestoneTableClient = ({ project }) => {
    const [selectedMilestoneNum, setSelectedMilestoneNum] = useState(1)
    const [milestone, setMilestone] = useState(project.milestones[selectedMilestoneNum - 1])
    const {data:session} = useSession()

    const handlePayment = async () => {
        milestone.paymentCompleted = true
        let proj = {...project}
        proj.milestones = proj.milestones.map(mil => {
            if(mil._id === milestone._id) {
                let newMil = {...mil}
                newMil.paymentCompleted = true
                let presentClientPayment = session?.user.paymentsCompleted
                presentClientPayment += newMil.payment
                axios.patch(`/api/user/?userId=${session?.user._id}`, {
                    paymentsCompleted: presentClientPayment
                })
                return newMil
            }
            return mil
        })
        console.log(proj)
        const response = await axios.patch(`/api/project/${project._id}`, proj);
        if(response.status === 200) {
            toast.success("Payment Approved")
        }
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col">
            <div className='mt-3 border-b-2 border-gray-200'>
                {
                    project.milestones.map((milestone, index) => (
                        <span className={`mx-3 cursor-pointer ${index + 1 === selectedMilestoneNum && "bg-zinc-300"} px-3 py-1 rounded-t-xl`} key={index} onClick={() => {
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
                        <div className='inline-block rounded-xl border-2 border-gray-300 p-2'> {(new Date(milestone.dueDate)).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })} </div>

                    </div>
                    <div className='my-3'>
                        <span className='font-semibold mb-1 mr-2'> Description: </span>
                        <div className='inline-block rounded-xl border-2 border-gray-300 p-2'> {milestone.description} </div>
                    </div>
                    <div className='my-3'>
                        <span className='font-semibold mb-1 mr-2'> Deliverables: </span>
                        <div className='inline-block rounded-xl border-2 border-gray-300 p-2'> {milestone.deliverables} </div>
                    </div>
                </div>
                <div className='my-3'>
                    <span className='font-semibold mb-1 mr-2'> Attachments: </span>
                    <div className='rounded-xl p-2 flex'>
                        {
                            project.work.length !== 0 && project.work.map(work => (
                                <a href={work.url} target="_blank" className='bg-gray-200 flex px-2 py-1 rounded-xl' rel="noopener noreferrer">
                                    {work.title}
                                    <Export_Icon className="scale-50" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <button className={` text-white px-3 py-2 cursor-pointer rounded-xl ${milestone.paymentCompleted ? 'bg-sky-200' : 'bg-sky-700'}`} onClick={() => {
                    if (!milestone.paymentCompleted) handlePayment()
                    }} >
                    {
                        milestone.paymentCompleted ?
                        'Payment Approved' : 'Approve Payment'
                    }
                </button>
            </div>
        </div>
    )
}

export default MilestoneTableClient