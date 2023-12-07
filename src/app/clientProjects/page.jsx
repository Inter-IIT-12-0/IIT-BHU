"use client"
import React from "react"
import Navbar from "../../components/Navbar"
import StudentSidebar from "../../components/StudentSidebar"
import ProjectNameComp from "../../components/ProjectNameComp"
import ClientProjectComponent from "../../components/ClientProjectsComponent"
import ClientProjectsRightSidebar from "../../components/clientProjectsRightSidebar"

const clientProjects = () => {
    
    return (
        <div>
            <Navbar/>
            <div className="flex flex-row">
                <StudentSidebar/>
                {/* <ProjectNameComp/> */}
                <ClientProjectComponent teamId={"6570f721da1fb728a85dea5f"} />
                {/* <ClientProjectsRightSidebar/> */}
            </div>
        </div>
    )
}

export default clientProjects
