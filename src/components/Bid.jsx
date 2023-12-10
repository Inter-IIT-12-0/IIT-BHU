"use client"
import React, { useState } from 'react'
import BackArrowIcon from "../../public/Images/BackArrow_Icon.svg"
import axios from 'axios'
import toast from 'react-hot-toast'
import {useRouter} from "next/navigation"


const ConfirmationModal = ({setModalOpen, teamName, handleAccept}) => {
    return (
        <main className='w-[100vw] h-[100vh] overflow-hidden absolute top-0 left-0 z-20 bg-gray-600 bg-opacity-60 flex justify-center items-center'>
            <div className='w-72 flex flex-col justify-around items-center bg-gray-200 p-5 rounded-xl'>
                <h2 className='font-bold text-lg my-2'> Confirm Bid </h2>
                <p className='text-zinc-600 my-2'>
                    Are you sure you want to select team {teamName}'s bid?' 
                </p>
                <button className='px-3 py-2  my-2 rounded-2xl bg-sky-700 cursor-pointer text-white' onClick={handleAccept}>Yes, I'm sure! </button>
                <button className='px-3 py-2  my-2 rounded-2xl border-2 border-sky-700 text-sky-700 cursor-pointer' onClick={() => setModalOpen(false)}>No, Go back </button>
            </div>
        </main>
    )
}

const Bid = ({team, setOpenBid}) => {

    const router = useRouter()

    const handleAccept = () => {
        axios.patch(`/api/project/${team.project}`, {
            milestones: team.proposal.milestones,
            assignedTeam: team._id,
            status: 'Assigned'
        }).then(res => {
            axios.patch(`/api/team/?teamId=${team._id}`, {
                status: 'Accepted'
            }).then(res => {
                toast.success("Bid Accepted Successfully")
                router.push("/myprojects")
            }).catch(err => toast.error(err.response.data.error))

        })
    }

    const [modalOpen, setModalOpen] = useState(false)
    return (
            <div className="p-8 w-full ">
                <BackArrowIcon className="relative  cursor-pointer" onClick={() => setOpenBid(false)} />
                <div className="flex justify-between mt-3">
                    <div className="flex flex-row">
                        <img src="" alt="" />
                        <h1 className="text-2x1 text-black font-semibold text-2xl"> {team.teamName} </h1>
                    </div>
                    <h1 className="text-2xl text-black font-semibold"> {team.rating} /5.0</h1>
                </div>
                <div className="flex flex-col p-8 bg-blue-100 rounded-md mt-6">
                    <h1 className="text-2xl text-black font-semibold">Bid Details</h1>
                    <div className="flex justify-between">
                        <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
                            <div className="flex flex-row mr-20">
                                <h1 className="text-2x1 text-black font-semibold mr-2">Total Bid Amount</h1>
                                <div className="pt-1">
                                    <img className="h-4" src="/Images/info-circle.png" alt="" />
                                </div>
                            </div>
                            <div className="text-back text-2xl font-semibold"> &#8377; {team.proposal.bidAmount} </div>
                        </div>
                        <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
                            <div className="flex flex-row mr-20">
                                <h1 className="text-2x1 text-black font-semibold mr-2">Expected Duration</h1>
                                <div className="pt-1">
                                    <img className="h-4" src="/Images/info-circle.png" alt="" />
                                </div>
                            </div>
                            <div className="text-back text-2xl font-semibold"> {team.proposal.milestones.reduce((acc,mil) => acc + mil.duration, 0)} Weeks</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-blue-100 max-h-[35vh] overflow-scroll overflow-y-auto overflow-x-hidden rounded-md p-8 mt-6 w-full">
                    <h1 className=" text-black text-2xl font-semibold">Milestone Details</h1>
                    <table className="min-w-full bg-white border border-blue-900">
                        <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="py-2 px-6 font-semibold">Sr. No</th>
                                <th className="py-2 px-6 font-semibold">Milestone Name</th>
                                <th className="py-2 px-6 font-semibold">Milestone Amount</th>
                                <th className="py-2 px-6 font-semibold">Duration</th>
                                <th className="py-2 px-6 font-semibold">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {team.proposal.milestones.map((milestone, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-2 px-6 text-center">{index + 1}</td>
                                    <td className="py-2 px-6 text-center"> {milestone.heading} </td>
                                    <td className="py-2 px-6 text-center"> &#8377; {milestone.payment} </td>
                                    <td className="py-2 px-6 text-center"> {milestone.duration} </td>
                                    <td className="py-2 px-6 flex justify-center">
                                        <img src="/Images/eye.svg" alt="" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <hr className="w-[100%]" />
                    {/* </div> */}
                </div>
                <div className='w-full flex justify-center items-center my-5 text-white'>
                    <button className='px-4 py-2 rounded-2xl bg-sky-800 hover:bg-sky-600 transition-all duration-500' onClick={() => setModalOpen(true)}>
                        Accept Bid
                    </button>
                </div>
                {
                    modalOpen && <ConfirmationModal setModalOpen={setModalOpen} teamName={team.teamName} handleAccept={handleAccept} />
                }
            </div>
    )
}

export default Bid