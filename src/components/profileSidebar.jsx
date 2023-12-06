import React from "react";
import BadgeCheck from '../../public/Images/BadgeCheck.svg'

const ProfileSidebar = ({name, occupation, institute, tools, skills, professionalInto}) => {
    console.log("tools are :",tools);
    // <ProfileSidebar key={ele.email + "user"} name={ele.name} occupation = {ele.occupation} institute = {ele.institute} tools = {ele.tools} skills = {ele.skills} professionalInto = {ele.professionalIntroduction} />

    return (
        <div className="h-[80vh] overflow-scroll overflow-y-auto overflow-x-hidden w-72 bg-white shadow-2xl pb-3 flex flex-col z-20 pt-28">
            <div>
            <div className="justify-center items-center text-center">
                <h1 className="text-center font-Lato text-Text-Black text-3xl font-semibold mt-8">{name}</h1>
                <h2 className="text-center font-Lato text-Text-Black text-1xl font-semibold">AI {occupation} </h2>
                <p className="text-black text-center font-Lato text-base leading-normal font-semibold my-5">{professionalInto}</p>
                <button className="px-5 py-2 border-blue-600 border-2 rounded-full text-blue-600 font-semibold">Edit Profile</button>
                <h1 className="text-center font-Lato text-Text-Black text-2xl font-semibold mt-6">Details</h1>
                
            </div>
            <div className="justify-center items-center text-center">
            <hr className="w-50 mt-2"/>
            <p className="text-black text-center font-Lato text-base leading-normal font-semibold mt-2">{institute}</p>
            </div>
            <div className="justify-center items-center text-center">
                <div className="p-4">
                    <h1 className="text-lg font-semibold">Skills</h1>
                    <div className="flex flex-row flex-wrap mt-2">
                    {tools && tools.map((ele, index) => (
                        <div className={`flex flex-row px-3 rounded-full ${index === 0 ? 'bg-blue-900' : 'bg-gray-300'} ml-2 mb-2`}>
                            <h1>{ele}</h1>
                            {index === 0 && <BadgeCheck/>}
                        </div>
                    ))}
                    </div>
                </div>
                <div className="p-5">
                    <h1 className="text-lg font-semibold">Tools</h1>
                    <div className="flex flex-row flex-wrap mt-2">
                        {skills && skills.map((ele, index) => (
                            <div className={`flex flex-row px-3 rounded-full ${index === 0 ? 'bg-blue-900' : 'bg-gray-300'} ml-2 mb-2`}>
                                <h1>{ele}</h1>
                                {index === 0 && <BadgeCheck/>}
                            </div>
                        ))}
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