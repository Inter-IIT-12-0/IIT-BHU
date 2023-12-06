"use client"
import React, { useState } from 'react'
import Form1 from '../../components/CreateProject';
import Navbar from "../../components/Navbar"
import StudentSidebar from "../../components/StudentSidebar"

const createProject = () => {
    const [form,setForm] = useState(1);
    return (
        <main className='w-[100vw]'>
            <div className='flex flex-col w-full h-full'>
                <Navbar />
                <div className='flex w-full h-full'>
                    <StudentSidebar />
                    <Form1 />
                </div>
            </div>
        </main>
    )
}

export default createProject