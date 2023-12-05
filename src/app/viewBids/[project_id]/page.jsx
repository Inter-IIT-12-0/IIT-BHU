"use client"
import React, { useEffect } from 'react'
import ViewBids from '../../../components/ViewBids'
import Navbar from '../../../components/Navbar'
import StudentSidebar from '../../../components/StudentSidebar'
import { useSession } from 'next-auth/react'

const viewBids = ({params}) => {
    const {project_id} = params
    const {data:session} = useSession()
    return (

        <main className='w-[100vw]'>
            {
                session &&
                session.user.role === 'Client' && 
                <div className='flex flex-col w-full h-full'>
                    <Navbar />
                    <div className='flex w-full h-full'>
                        <StudentSidebar />
                        <ViewBids project_id={project_id}/>
                    </div>
                </div>
            }

        </main>
    )
}

export default viewBids