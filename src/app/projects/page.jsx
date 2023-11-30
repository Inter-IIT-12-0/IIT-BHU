import React from 'react'
import StudentSidebar from "../../components/StudentSidebar"
import Navbar from "../../components/Navbar"
import ProjectCard from "../../components/ProjectCard"

const Projects = () => {
    return (
        <main className='w-[100vw]'>
            <div className='flex flex-col w-full h-full'>
                <Navbar />
                <div className='flex w-full h-full'>
                    <StudentSidebar />
                    <div className='w-full h-full flex flex-col'>
                        <div className='h-40 bg-black'>

                        </div>
                        <div className='h-full p-8'>
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects