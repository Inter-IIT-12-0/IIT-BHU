"use client"
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { getSession, useSession } from 'next-auth/react'
import { projectSearch } from '../lib/SearchAlgo'
import axios from 'axios'
import StudentMarketplaceTop from './StudentMarketplaceTop'

const StudentMarketplace = ({ projects, setOpenedProj, selected, setSelected }) => {
    const { data: session } = useSession()
    const [location, setLocation] = useState("select")
    const [status, setStatus] = useState("select")
    const [payment, setPayment] = useState("select")
    const [domain, setDomain] = useState("select")
    const [search, setSearch] = useState("")
    const [myBids, setMyBids] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async (req, res) => {
        try {
            if (session) {
                const response1 = await axios(`/api/mybids`);
                setMyBids(response1.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full items-center flex flex-col bg-zinc-200 max-h-[92vh] overflow-scroll overflow-y-auto overflow-x-hidden '>
            <StudentMarketplaceTop domain={domain} setDomain={setDomain} status={status} setStatus={setStatus} search={search} setSearch={setSearch} />
            <div className='h-full w-full p-8 flex flex-col'>
                <div className='flex justify-between px-3 mb-3'>
                    <span className='font-semibold'>Projects </span>
                    <div>
                        <button className={`${selected === 'All' ? 'bg-gray-400 text-white' : 'border-2 border-zinc-300'} mx-2 px-3 py-1 rounded-xl`} onClick={() => setSelected('All')} >All Listings</button>
                        <button className={`${selected === 'My' ? 'bg-gray-400 text-white' : 'border-2 border-zinc-300'} mx-2 px-3 py-1 rounded-xl`} onClick={() => setSelected('My')}>My Bids</button>
                    </div>
                </div>
                <div>
                    {
                        session && (
                            selected === 'All' ? projects.length !== 0 ? projects.filter(project => {
                                return projectSearch(search, location, status, payment, domain, project)
                            }).map(project => {
                                return <ProjectCard key={project._id} project={project} setOpenedProj={setOpenedProj} selected={selected} />
                            }) : <div className="w-full h-full flex justify-center items-center"> No Projects Found </div> :
                                myBids && myBids.length !== 0 ? myBids.filter(bid => {
                                    return projectSearch(search, location, status, payment, domain, bid.project)
                                }).map(bid => {
                                    return <ProjectCard key={bid._id} project={bid.project} setOpenedProj={setOpenedProj} selected={selected} />
                                }) : <div className="w-full h-full flex justify-center items-center"> No Bids Found </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default StudentMarketplace