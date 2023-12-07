"use client"
import React from "react"
import Navbar from "../../components/Navbar"
import StudentSidebar from "../../components/StudentSidebar"
import ProjectNameComp from "../../components/ProjectNameComp"

const clientProjects = () => {
      
    return (
        <div>
            <Navbar/>
            <div className="flex flex-row">
                <StudentSidebar/>
                <ProjectNameComp/>
            </div>
        </div>
    )
}

export default clientProjects
