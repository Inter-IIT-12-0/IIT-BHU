import React from 'react'

const SingleTimeline = ({ milestone }) => {
    return (
        <li className="mb-10 ms-6">
            <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3  ${milestone.status === 'Completed' ? 'bg-green-400' : (milestone.status === 'Not Started' ? 'bg-yellow-400' : 'bg-red-600')}`}>
            </span>
            <div className={`text-lg font-bold ml-6 ${milestone.status === 'Not Started' ? 'text-zinc-500 italic' : ''} `}> {milestone.heading} </div>
            <div className="mb-4 text-base font-normal">
                {
                    milestone.status === 'Completed' ?
                        <span className='ml-6'> Completed </span> :
                        <div>
                            <span className={`font-normal ml-6 ${milestone.status === 'In Progress' ? 'text-red-600 italic' : ''} `}>Due date: </span>
                            <span className='text-zinc-500'> {(new Date(milestone.dueDate)).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })} </span>
                        </div>
                }
            </div>
        </li>
    )
}

export default SingleTimeline