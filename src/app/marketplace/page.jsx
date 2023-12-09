"use client"
import React, { useEffect, useState } from 'react'
import StudentSidebar from "../../components/StudentSidebar"
import Navbar from "../../components/Navbar"
import ProjectCard from "../../components/ProjectCard"
import Project from '../../components/Project'
import axios from 'axios'
import Filterbar from '../../components/Filterbar'
import { projectSearch } from '../../lib/SearchAlgo'
import { useSession } from 'next-auth/react'
import StudentMarketplace from '../../components/StudentMarketplace'
import ClientMarketPlace from '../../components/ClientMarketPlace'

const Projects = () => {
    const {data:session} = useSession()
    const [projects, setProjects] = useState([])
    const [openedProj, setOpenedProj] = useState({})
    const [availDomains, setAvailDomains] = useState([])
    const [selected, setSelected] = useState("All")

    useEffect(() => {
        axios.get('/api/allprojects')
        .then(res => {
            setAvailDomains(Array.from(new Set(res.data.flatMap(proj => proj.domain))));
            setProjects(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <>
            {
                Object.keys(openedProj).length !== 0 ? (
                    <Project project={openedProj} setOpenedProj={setOpenedProj} />
                ) : (
                    <></>
                )}
            <main className='w-[100vw] h-[100vh] overflow-hidden'>
                <div className='flex flex-col w-full h-full'>
                    <div>
                        <Navbar />
                    </div>
                    <div className='flex w-full h-full'>
                        <StudentSidebar page={"marketplace"}/>
                        {
                            session && 
                            ( session.user.role === 'Student' ? <StudentMarketplace projects={projects} setOpenedProj={setOpenedProj} availDomains={availDomains} selected={selected} setSelected={setSelected} /> : <ClientMarketPlace projects={projects} setOpenedProj={setOpenedProj} availDomains={availDomains} selected={selected} setSelected={setSelected}/>)
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Projects