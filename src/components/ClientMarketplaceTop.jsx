"use client"
import React from 'react'
import SearchIcon from "../../public/Images/SearchIcon.svg"
import domains from "../../models/Domains.json"
import Link from 'next/link'


const ClientMarketplaceTop = ({ status, domain, setStatus, setDomain }) => {

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

    return (
        <>
            <div className="flex w-[96%] rounded-3xl mt-6 pt-6 pl-10 bg-[#001338]">
                <div className='flex flex-col gap-6 w-2/3'>
                    <div className="flex flex-row">
                        <img src="/Images/calendar.svg" className="mr-2" alt="" />
                        <h1 className="text-white font-semibold"> {
                            getDate()
                        } </h1>
                    </div>
                    <div>
                        <h1 className="text-white text-3xl font-semibold">
                            Trumio, Projects & <span className='text-sky-400'> You </span>
                        </h1>
                        <h4 className="text-gray-200 text-sm my-3">Harness the brilliance and creativity of the most exceptional student minds for the real-world industry projects with Trumio! </h4>
                    </div>
                    <Link href="/createProject" className='bg-sky-700 w-32 rounded-2xl text-white px-4 text-center py-1'>
                        List Project
                    </Link>
                </div>
                <div className='flex justify-center items-center w-1/3'>
                    <img src="/Images/ProjectListing.png" alt="" className='w-56 h-56' />
                </div>
            </div>
            <div className='flex mt-3'>
                <div className='flex flex-col  xl:mx-3'>
                    <select value={status} onChange={e => setStatus(e.target.value)} className='outline-none border-2 bg-gray-300 px-4 text-zinc-500 py-2 rounded-2xl w-2/3 xl:w-full'>
                        <option value="select">Project Status</option>
                        <option value="Open">Open</option>
                        <option value="In Review">In Review</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <select value={domain} onChange={e => setDomain(e.target.value)} className='outline-none border-2 bg-gray-300 px-4 text-zinc-500 py-2 rounded-2xl w-2/3 xl:w-full'>
                        <option value="select"> Project Domain </option>
                        {
                            domains.map((domain, index) => (
                                <option key={index} value={domain}> {domain} </option>
                            ))
                        }
                    </select>
                </div>

            </div>
        </>
    )
}

export default ClientMarketplaceTop