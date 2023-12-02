import React from "react";
import BadgeCheck from '../../public/Images/BadgeCheck.svg'

const ProfileSidebar = () => {
    return (
        <div className="h-[100%] w-72 bg-white shadow-2xl pb-3 flex flex-col z-20 pt-28">
            <div>
            <div className="justify-center items-center text-center">
                <h1 className="text-center font-Lato text-Text-Black text-3xl font-semibold mt-8">Rodney Doyle</h1>
                <h2 className="text-center font-Lato text-Text-Black text-1xl font-semibold">AI Data Analyst </h2>
                <p className="text-black text-center font-Lato text-base leading-normal font-semibold my-5">Sophomore at Engineering | Web Development Enthusiast</p>
                <button className="px-5 py-2 border-blue-600 border-2 rounded-full text-blue-600 font-semibold">Edit Profile</button>
                <h1 className="text-center font-Lato text-Text-Black text-2xl font-semibold mt-6">Details</h1>
                
            </div>
            <div className="justify-center items-center text-center">
            <hr className="w-50 mt-2"/>
            <p className="text-black text-center font-Lato text-base leading-normal font-semibold mt-2">Indian Institute of Technology B.Tech Computer Science</p>
            </div>
            <div className="justify-center items-center text-center">
                <div className="p-4">
                    <h1 className="text-lg font-semibold">Skills</h1>
                    <div className="flex flex-row flex-wrap mt-2">
                        <div className="flex flex-row px-3 rounded-full bg-blue-900 ml-2 mb-2">
                            <h1>Figma</h1> <BadgeCheck/> 
                        </div>
                        <div className="bg-gray-300 px-3 rounded-full ml-2 mb-2">
                            <h1>Data Analyst</h1>
                        </div>
                        <div className="bg-gray-300 px-3 rounded-full ml-2 mb-2">
                            <h1>product Management</h1>
                        </div>
                        <div className="bg-gray-300 px-3 rounded-full ml-2 mb-2">
                            <h1>PowerBI</h1>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <h1 className="text-lg font-semibold">Tools</h1>
                    <div className="flex flex-row flex-wrap mt-2">
                        <div className="flex flex-row px-3 rounded-full bg-blue-900 ml-2 mb-2">
                            <h1>Notion</h1> <BadgeCheck/>
                        </div>
                        <div className="bg-gray-300 px-3 rounded-full ml-2 mb-2">
                            Figma
                        </div>
                        <div className="bg-gray-300 px-3 rounded-full ml-2 mb-2">
                            Whimsical
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-50 mt-2"/>
            <div>
                <h1 className="text-lg font-semibold pl-3">Social Network</h1>
                <div className="flex flex-row justify-between px-3">
                    <div><img src="/Images/gmail_icon.png" alt="" /></div>
                    <div><img src="/Images/github_icon.png" alt="" /></div>
                    <div><img src="/Images/linkedIn_icon.png" alt="" /></div>
                    <div><img src="/Images/notion_icon.png" alt="" /></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProfileSidebar;