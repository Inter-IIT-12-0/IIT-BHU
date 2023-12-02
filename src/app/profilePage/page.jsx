"use client"
import React from "react"
import Navbar from "../../components/Navbar"
import ProfileSidebar from "../../components/profileSidebar"
import EarningStats from "../../components/EarningStats"
import Projects from "../../components/Projects"
import StreaksCount from "../../components/StreaksCount"
import Achievements from "../../components/Achievements"

const ProfilePage = () => {
    return (
        <div>
            <Navbar/>
            <div className="relative z-10">
                <img className="w-full h-25" src='/Images/newImage.jpg'/>
            </div>
            <img className="absolute ml-6 -mt-28 z-20" src="/Images/Ellipse_2.svg" alt="" />
            <div className="flex flex-row relative z-10">
                <div>
                    <ProfileSidebar/>
                </div>
                <div className="flex flex-col p-8">
                    <EarningStats/>
                    <Achievements/>
                    <Projects/>
                    <StreaksCount/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage