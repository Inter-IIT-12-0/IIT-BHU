"use client"
import React from 'react'
import SearchIcon from "../../public/Images/SearchIcon.svg"
import domains from "../../models/Domains.json"
import Link from 'next/link'


const ProjectTop = ({ projectName, projectDescription }) => {

    const getDate = () => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        let date = today.getDate();
        if (date < 10) {
            date = '0' + date.toString();
        }
        const month = today.getMonth();
        const year = today.getFullYear();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return `${daysOfWeek[dayOfWeek]}, ${date}-${month + 1}-${year}`
    }

    function trimPara(paragraph, maxLength) {
        if (paragraph.length <= maxLength) {
            return paragraph;
        } else {
            return paragraph.substring(0, maxLength) + '...';
        }
    }

    return (
        <div className="flex w-full rounded-3xl mt-1 py-6 pl-10 bg-[#001338]">
            <div className='flex flex-col gap-6 w-2/3'>
                <div className="flex flex-row">
                    <img src="/Images/calendar.svg" className="mr-2" alt="" />
                    <h1 className="text-white font-semibold"> {
                        getDate()
                    } </h1>
                </div>
                <div>
                    <h1 className="text-white text-3xl font-semibold">
                        {projectName}
                    </h1>
                    <h4 className="text-gray-200 text-sm my-3 max-h-16 overflow-scroll overflow-y-auto overflow-x-hidden"> {projectDescription} </h4>
                </div>
            </div>
            <div className='flex justify-center items-center w-1/3'>
                <img src="/Images/ProjectTop.png" alt="" className='w-40 h-40' />
            </div>
        </div>
    )
}

export default ProjectTop