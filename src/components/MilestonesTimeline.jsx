import React from 'react'
import Calendar from "../../public/Images/Calendar_Icon.svg"
import Close from "../../public/Images/Close_Icon.svg"
import Export_Icon from "../../public/Images/export.svg"
import SingleTimeline from './SingleTimeline'


const MilestonesTimeline = ({ setTimelineOpen, project }) => {

    const currentMilestone = project.milestones.filter(milestone => milestone.status === 'In Progress')[0]
    console.log(project, currentMilestone)
    return (
        <div className="w-96 h-full ml-20 flex flex-col absolute right-0 top-12 animate-[appear_1s_ease-in-out] z-50">
            <nav className='flex justify-end py-6 items-center'>
                <Close onClick={() => setTimelineOpen(false)} className="cursor-pointer" />
            </nav>
            {
                currentMilestone &&
                <div className='w-96 rounded-2xl py-3 flex flex-col mb-10 border border-gray-300 p-4 my-4'>

                    <div className='mb-3'>
                        <h2 className='font-bold'> {currentMilestone.heading} </h2>
                        <span className='text-sm font-normal text-zinc-600'>
                            {currentMilestone.description}
                        </span>
                    </div>
                    <div className='mb-3 flex justify-center items-center font-semibold underline underline-offset-2'>
                        Show Full In Workspace <Export_Icon className="ml-4" />
                    </div>
                </div>
            }

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6">
                    <Calendar className="absolute scale-150 -start-2 ml-6" />
                    <div className="font-bold text-lg ml-6"> Project Started </div>
                    <div className="mb-4 text-base font-normal ml-6">
                        <span className='text-zinc-500'>
                            {(new Date(project.startDate)).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                    </div>
                </li>

                {
                    project.milestones.map((milestone, index) => (
                        <SingleTimeline milestone={milestone} />
                    ))
                }

                <li className="mb-10 ms-6">
                    <Calendar className="absolute scale-150 -start-2 ml-6" />
                    <div className="font-bold text-lg ml-6"> End Date </div>
                    <div className="mb-4 text-base font-normal ml-6">
                        <span className="font-semibold">
                            {(new Date(project.endDate)).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                    </div>
                </li>

            </ol>
        </div>
    )
}

export default MilestonesTimeline