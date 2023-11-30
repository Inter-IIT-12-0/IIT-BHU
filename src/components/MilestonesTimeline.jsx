import React from 'react'
import Calendar from "../../public/Images/Calendar_Icon.svg"
import Close from "../../public/Images/Close_Icon.svg"
import Export_Icon from "../../public/Images/export.svg"


const MilestonesTimeline = ({setTimelineOpen}) => {
    return (
        <div className="w-96 h-full ml-20 flex flex-col absolute right-0 top-0 animate-[appear_1s_ease-in-out]">
            <nav className='flex justify-between py-6 border-b-2 border-zinc-200 items-center'>
                <div>
                    <span className='font-bold'> Status: </span>
                    <span className='text-red-600'>Due Today</span>
                </div>
                <Close onClick={() => setTimelineOpen(false)} className="cursor-pointer" />
            </nav>
            <div className='w-96 rounded-2xl py-3 flex flex-col mb-10 border border-gray-300 p-4 my-4'>
                <div className='flex justify-between border-b-2 border-zinc-200 mb-3'>
                    <span className='font-normal text-zinc-500'>Milestone 1</span>
                    <span>Due Date: 3 Dec</span>
                </div>
                <div className='mb-3'>
                    <h2 className='font-bold'> Heading </h2>
                    <span className='text-sm font-normal text-zinc-600'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eaque quae cum doloribus unde
                    </span>
                </div>
                <div className='mb-3 flex justify-center items-center font-semibold underline underline-offset-2'>
                    Show Full In Workspace <Export_Icon className="ml-4" />
                </div>
            </div>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6">
                    {/* <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-red-600">
                </span> */}
                    <Calendar className="absolute scale-150 -start-2" />
                    <div className="font-bold"> Project Started </div>
                    <div className="mb-4 text-base font-normal">
                        <span className="font-semibold"> On </span>
                        <span> 20 December </span>
                    </div>
                </li>

                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-red-600">
                    </span>
                    <div className="font-bold"> Milestone 1 </div>
                    <div className="mb-4 text-base font-normal">
                        <span className="font-semibold">Due date: </span>
                        <span> 20 December </span>
                    </div>
                </li>

                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-yellow-400">
                    </span>
                    <div className="font-bold"> Milestone 1 </div>
                    <div className="mb-4 text-base font-normal">
                        <span className="font-semibold">Due date: </span>
                        <span> 20 December </span>
                    </div>
                </li>

                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-green-400">
                    </span>
                    <div className="font-bold"> Milestone 1 </div>
                    <div className="mb-4 text-base font-normal">
                        <span className="font-semibold">Due date: </span>
                        <span> 20 December </span>
                    </div>
                </li>

                <li className="mb-10 ms-6">
                    <Calendar className="absolute scale-150 -start-2" />
                    <div className="font-bold"> End Date </div>
                    <div className="mb-4 text-base font-normal">
                        <span className="font-semibold"> December 22 </span>
                    </div>
                </li>

            </ol>
        </div>
    )
}

export default MilestonesTimeline