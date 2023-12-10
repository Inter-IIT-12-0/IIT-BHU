import React, { useState } from 'react'
import Send_Icon from "../../public/Images/Send_Icon.svg"
import summariseActivity from "../../src/pages/api/GPT/summariseActivity"
import { useEffect } from 'react'
const ActivityBar = ({ activities }) => {
    const [openSummarized, setOpenSummarized] = useState(false)
    const [loading, setLoading] = useState(false)
    const [report, setReport] = useState(null)
    const modifiedActivityArray = activities.map((activity) => ({
        type: activity.type,
        user: activity.user,
        message: activity.message,
        subMilestoneTitle: activity.submilestone.title,
    }));
    const fetchData = async () => {
        try {
            setOpenSummarized(true)
            setLoading(true)
            const response = await summariseActivity(modifiedActivityArray);
            setLoading(false)
            console.log(response);
            setReport(response)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
    }, []);
    return (
        <div className='w-96 h-[82vh] bg-indigo-50 flex flex-col absolute right-[94px] -mr-3 top-0 justify-between pb-4 rounded-bl-3xl'>
            <div className='pl-8'>
                <div className='flex justify-center items-center pr-8'>
                    <p className=' border-b border-zinc-300 py-8 w-full flex justify-start items-center font-semibold  text-3xl'>
                        Activity
                    </p>
                </div>
                <div className='h-[48vh] overflow-x-hidden overflow-y-auto overflow-scroll mb-8 relative px-2'>
                    {
                        openSummarized ? (loading ? <img src="/Images/loading2.gif" alt="Loading ..." className='scale-50'/> : Object.keys(report).length !==0 &&
                            <>
                            <div className='mt-2'>
                                <span className='font-semibold bg-gray-300 p-2 flex w-8 h-8 justify-center items-center rounded-full cursor-pointer' onClick={() => setOpenSummarized(false)}> X </span>
                            </div>
                            {
                                Object.keys(report).map(key => (
                                    <div className='flex my-3 justify-between flex-wrap'>
                                        <span className='font-semibold mr-2'> {key} </span>
                                        <span> {report[key]} </span>
                                    </div>
                                ))
                            }
                            </>)
                            :
                            activities.map((activity, index) => (
                                <div className='flex my-5 justify-between'>
                                    <span className="w-3 h-3 bg-sky-700 rounded-full m-2" />
                                    <div className="text-black text-base font-normal pl-2"> {activity.user.name} {activity.message} </div>
                                </div>
                            ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='bg-sky-700 rounded-3xl py-3 px-6 w-2/3 text-center text-white cursor-pointer' onClick={fetchData}>
                    Summarise Activity
                </div>
            </div>
        </div>
    )
}

export default ActivityBar