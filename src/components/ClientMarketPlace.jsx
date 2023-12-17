"use client"
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import Filterbar from './Filterbar'
import { useSession } from 'next-auth/react'
import { projectSearch } from '../lib/SearchAlgo'
import axios from 'axios'
import ClientMarketplaceTop from './ClientMarketplaceTop'

const ClientMarketplace = ({projects, setOpenedProj, selected, setSelected}) => {
    const {data:session} = useSession()
    const [status, setStatus] = useState("select")
    const [payment, setPayment] = useState("select")
    const [domain, setDomain] = useState("select")
    const [search, setSearch] = useState("")
    const [allProjects, setAllProjects] = useState([])
    const [myProjects, setMyProjects] = useState([])

    useEffect(() => {
        if (session)
            setMyProjects(projects.filter(project => project.assignedBy._id === session.user._id))
            setAllProjects(projects.filter(project => project.assignedBy._id !== session.user._id))
    }, [session, projects])
    return (
        <div className='w-full items-center flex flex-col bg-zinc-200 max-h-[92vh] overflow-scroll overflow-y-auto overflow-x-hidden '>
            {/* <Filterbar status={status} setStatus={setStatus} payment={payment} setPayment={setPayment} domain={domain} setDomain={setDomain} setSearch={setSearch} search={search} selected={selected} setSelected={setSelected} /> */}
            <ClientMarketplaceTop domain={domain} setDomain={setDomain} status={status} setStatus={setStatus} />
            <div className='h-full w-full p-8 flex flex-col'>
                <div className='flex justify-between px-3 mb-3'>
                    <span className='font-semibold'>Projects </span>
                    <div>
                        <button className={`${selected === 'All' ? 'bg-gray-400 text-white' : 'border-2 border-zinc-300'} mx-2 px-3 py-1 rounded-xl`} onClick={() => setSelected('All')} >All Listings</button>
                        <button className={`${selected === 'My' ? 'bg-gray-400 text-white' : 'border-2 border-zinc-300'} mx-2 px-3 py-1 rounded-xl`} onClick={() => setSelected('My')}>My Listings</button>
                    </div>
                </div>
                <div>
                {
                    session && (
                        selected === 'All' ? allProjects.length !== 0 ? allProjects.filter(project => {
                            return projectSearch(search, location, status, payment, domain, project)
                        }).map(project => {
                            return <ProjectCard key={project._id} project={project} setOpenedProj={setOpenedProj} selected={selected} />
                        }) : <div className="w-full h-full flex justify-center items-center"> No Listings Found </div> : 
                        myProjects.length !== 0 ? myProjects.filter(bid => {
                            return projectSearch(search, location, status, payment, domain, bid)
                        }).map(bid => {
                            return <ProjectCard key={bid._id} project={bid} setOpenedProj={setOpenedProj} selected={selected}/>
                        }) : <div className="w-full h-full flex justify-center items-center"> No Listings Found </div>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default ClientMarketplace
