"use client"
import React, { useEffect, useState } from 'react'
import StudentSidebar from "../../components/StudentSidebar"
import Navbar from "../../components/Navbar"
import ProjectCard from "../../components/ProjectCard"
import Project from '../../components/Project'
import axios from 'axios'

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [openedProj, setOpenedProj] = useState({})

    useEffect(() => {
        axios.get('/api/allprojects')
        .then(res => setProjects(res.data))
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
            <main className='w-[100vw]'>
                <div className='flex flex-col w-full h-full'>
                    <Navbar />
                    <div className='flex w-full h-full'>
                        <StudentSidebar />
                        <div className='w-full h-full flex flex-col'>
                            <div className='h-40 bg-black'>

                            </div>
                            <div className='h-full p-8'>
                                {
                                    projects.map(project => {
                                        return <ProjectCard key={project._id} project={project} setOpenedProj={setOpenedProj} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Projects