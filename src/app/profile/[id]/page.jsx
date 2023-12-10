"use client"
import React, {useEffect, useState} from "react"
import axios from "axios"
import Navbar from "../../../components/Navbar"
import ProfileSidebar from "../../../components/profileSidebar"
import EarningStats from "../../../components/EarningStats"
import Projects from "../../../components/Projects"
import StreaksCount from "../../../components/StreaksCount"
import Achievements from "../../../components/Achievements"

const ProfilePage = ({params}) => {
    // http://localhost:3000/api/user?id=656f65c9429f3743911ceb14

    // const test_user_id = "656ff14b85ccd18b3fd73a5d";
    const user_id = params.id
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/user?id=${user_id}`);
                setUserData(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata();
    },[])

    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            
            {userData  && <>
                <div className="relative z-10">
                    <img className="w-full h-25" src='/Images/newImage.jpg'/>
                </div>
                 <img className="absolute ml-6 -mt-28 z-20 h-56 rounded-full" src={userData.avatarUrl} alt="" />
                <div className="flex flex-row relative z-10 overflow-x-hidden">
                    <div className="h-[106vh]">
                        <ProfileSidebar key={userData.email + "user"} name={userData.name} occupation = {userData.occupation} institute = {userData.institute} tools = {userData.expertise.tools} skills = {userData.expertise.skills} professionalInto = {userData.professionalIntroduction} />
                    </div>
                    <div className="flex flex-col p-8 max-h-[106vh] overflow-y-auto overflow-x-hidden">
                        <Projects projects = {userData.projects} />
                        <StreaksCount/>
                    </div>
                </div>
                </>
            } 
        </div>
    )
}

export default ProfilePage