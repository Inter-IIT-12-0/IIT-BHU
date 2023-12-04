"use client"
import React from "react"
import People from "../../components/People"
import Navbar from "../../components/Navbar"
import StudentSidebar from "../../components/StudentSidebar"

const PeoplePage = () => {
    return (
        <div>
            <Navbar/>
                <div className="flex flex-row">
                <StudentSidebar/>
                <People/>
            </div>
        </div>
    )
}

export default PeoplePage