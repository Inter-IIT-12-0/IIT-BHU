"use client"
import React, {useEffect, useState} from "react"
import axios from "axios"
import Navbar from "../../../components/Navbar"
import ProfileSidebar from "../../../components/profileSidebar"
import EarningStats from "../../../components/EarningStats"
import Projects from "../../../components/Projects"
import StreaksCount from "../../../components/StreaksCount"
import Achievements from "../../../components/Achievements"

const ProfilePage = () => {
    // http://localhost:3000/api/user?id=656f65c9429f3743911ceb14

    const test_user_id = "656f65c9429f3743911ceb14";
    const[userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/user?id=${test_user_id}`);
                setUserData(response.data);
            } catch (error) {
                console.log("error is:",error);
            }
        }
        fetchdata();
    },[])

    console.log("user data is:", userData);

    return (
        <div>
            <Navbar/>
            <div className="relative z-10">
                <img className="w-full h-25" src='/Images/newImage.jpg'/>
            </div>
            {userData && userData.map((ele) =>  { return <>
                 <img className="absolute ml-6 -mt-28 z-20 h-56 rounded-full" src={ele.avatarUrl} alt="" />
                <div className="flex flex-row relative z-10">
                    <div>
                        <ProfileSidebar key={ele.email + "user"} name={ele.name} occupation = {ele.occupation} institute = {ele.institute} tools = {ele.expertise.tools} skills = {ele.expertise.skills} professionalInto = {ele.professionalIntroduction} />
                    </div>
                    <div className="flex flex-col p-8">
                        <EarningStats EarningStats = {ele.earningStats}/>
                        <Achievements achievements = {ele.achievements} />
                        <Projects projects = {ele.projects} />
                        <StreaksCount/>
                    </div>
                </div>
                </>
            })}
        </div>
    )
}

export default ProfilePage