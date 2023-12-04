import React from 'react'
import Send_Icon from "../../public/Images/Send_Icon.svg"

const ActivityBar = ({ activities }) => {
    return (
        <div className='w-96 h-[82vh] bg-indigo-50 flex flex-col absolute right-[94px] -mr-3 top-0 justify-between pb-4 rounded-bl-3xl'>
            <div className='pl-8'>
                <div className='flex justify-center items-center pr-8'>
                    <p className=' border-b border-zinc-300 py-8 w-full flex justify-start items-center font-semibold  text-3xl'>
                        Activity
                    </p>
                </div>
                <div className='h-[48vh] overflow-x-hidden overflow-y-auto overflow-scroll mb-8'>
                    {
                        activities.map((activity, index) => (
                            <div className='flex my-5 justify-between'>
                                <span className="w-3 h-3 bg-sky-700 rounded-full m-2" />
                                <div className="text-black text-base font-normal pl-2"> {activity.user.name} has {activity.type === 'CREATE' ? <span className='text-green-600'> Created </span> : activity.type === 'EDITED' ? <span className='text-yellow-500'> Edited </span> : <span className='text-red-500'> Deleted </span>}  submilestone <span className='text-sky-600'> {activity.submilestone.title} </span> at  {(new Date(activity.timestamp)).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })} </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='bg-sky-700 rounded-3xl py-3 px-6 w-2/3 text-center text-white cursor-pointer'>
                    Summarise Activity
                </div>
                <form className="flex justify-around mt-3 w-80 mb-4">
                    <input type="text" className="rounded-3xl w-full h-11 pl-4 mx-3 outline-none" placeholder='Write a comment' />
                    <button type="submit" className="rounded-full bg-white flex justify-center items-center p-3">
                        <Send_Icon />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ActivityBar