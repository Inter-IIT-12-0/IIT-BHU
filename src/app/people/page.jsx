"use client"
import React from "react"
import People from "../../components/People"
import Navbar from "../../components/Navbar"
import StudentSidebar from "../../components/StudentSidebar"
import University from "../../components/University"

const PeoplePage = () => {
    return (
        <div>
            <Navbar/>
                <div className="flex flex-row">
                <StudentSidebar page={"people"}/>
                {/* <University/> */}
                <People/>
            </div>
        </div>
    )
}

export default PeoplePage