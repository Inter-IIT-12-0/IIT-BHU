import React from 'react'
import domains from "../../models/Domains.json"

const StudentMarketplaceTop = ({ status, domain, setStatus, setDomain, search, setSearch }) => {
    return (
        <>
        <div className="flex flex-col w-[96%] rounded-3xl mt-3 p-12 gap-5 bg-[#001338] items-center">
            <h1 className="text-white text-2xl font-bold">Experience real-world projects on the go... </h1>
            <div className="relative w-[70%]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <input type="text"
                    placeholder="Search for project"
                    id="simple-search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg"></input>
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

export default StudentMarketplaceTop