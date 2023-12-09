import React from 'react'
import SearchIcon from "../../public/Images/SearchIcon.svg"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import domains from "../../models/Domains.json"

const Filterbar = ({ location, setLocation, status, setStatus, payment, setPayment, domain, setDomain, search, setSearch, selected, setSelected }) => {
    const { data: session } = useSession()
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between w-full pt-3 my-3'>
                <div className='flex justify-around ml-6'>
                    <button className={`flex justify-around items-center rounded-2xl ${selected === 'All' ? 'border border-sky-700 bg-sky-100' : 'border border-neutral-400'} px-3 py-1  mr-5`} onClick={() => setSelected('All')}>
                        <div className={`${selected === 'All' ? 'bg-sky-700' : 'border-2 border-gray-300 '} rounded-full w-4 h-4 mx-2`}></div>
                        <span className={`${selected === 'All' ? 'text-sky-700' : 'text-neutral-600'}`}> All Listings </span>
                    </button>
                    <button className={`flex justify-around items-center rounded-2xl ${selected === 'My' ? 'border border-sky-700 bg-sky-100' : 'border border-neutral-400'} px-3 py-1 mr-5`} onClick={() => setSelected('My')}>
                        <div className={`${selected === 'My' ? 'bg-sky-700' : 'border-2 border-gray-300 '} rounded-full w-4 h-4 mx-2`}></div>
                        <span className={`${selected === 'My' ? 'text-sky-700' : 'text-neutral-600'}`}> {
                            session && session.user.role === 'Student' ? "My Bids" : session.user.role === "Client" ? "My Listings" : "My Bids"
                        } </span>
                    </button>
                </div>
                {
                    session.user.role === 'Client' &&
                    <Link href={"/createProject"} className='bg-sky-700 py-2 px-3 text-white mx-8 rounded-3xl'>
                        Create a Project
                    </Link>
                }
            </div>
            <div className='flex xl:my-1 my-3'>
                <div className='flex items-center mt-5 mx-6 bg-gray-100 w-72 px-3 rounded-2xl py-1'>
                    <SearchIcon className="scale-75" />
                    <input type="text" name="" placeholder='Search for Projects or Users' className='mx-3 outline-none w-full h-full bg-gray-100' value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <div className='flex flex-col xl:mx-6'>
                    <span> Location </span>
                    <select value={location} onChange={e => setLocation(e.target.value)} className='outline-none border-2 border-gray-300 px-2 w-2/3 xl:w-full py-1 rounded-lg'>
                        <option value="select">Select</option>
                        <option value="Remote">Remote</option>
                        <option value="Non Remote">Non Remote</option>
                    </select>
                </div>
                <div className='flex flex-col  xl:mx-6'>
                    <span> Status </span>
                    <select value={status} onChange={e => setStatus(e.target.value)} className='outline-none border-2 border-gray-300 px-2 py-1 rounded-lg w-2/3 xl:w-full'>
                        <option value="select">Select</option>
                        <option value="Open">Open</option>
                        <option value="In Review">In Review</option>
                    </select>
                </div>
                <div className='flex flex-col xl:mx-6'>
                    <span> Payment </span>
                    <select value={payment} onChange={e => setPayment(e.target.value)} className='outline-none border-2 border-gray-300 px-2 py-1 rounded-lg w-2/3 xl:w-full'>
                        <option value="select">Select</option>
                        <option value="Fixed">Fixed</option>
                        <option value="Installment">Installment</option>
                    </select>
                </div>
                <div className='flex flex-col xl:mx-6'>
                    <span> Domain </span>
                    <select value={domain} onChange={e => setDomain(e.target.value)} className='outline-none border-2 border-gray-300 px-2 py-1 rounded-lg w-2/3 xl:w-full'>
                        <option value="select">Select</option>
                        {
                            domains.map((domain, index) => (
                                <option key={index} value={domain}> {domain} </option>
                            ))
                        }
                    </select>
                </div>

            </div>
        </div>
    )
}

export default Filterbar