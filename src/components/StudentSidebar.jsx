"use client"
import Projects_Icon from "../../public/Images/Projects_Icon.svg"
import My_Learnings_Icon from "../../public/Images/My_Learnings_Icon.svg"
import Discussion_Icon from "../../public/Images/Discussion_Icon.svg"
import Mentorship_Icon from "../../public/Images/Mentorship_Icon.svg"
import Skill_Test_Icon from "../../public/Images/Skill_Test_Icon.svg"
import Layer from "../../public/Images/layer.svg"
import Link from "next/link"


export default function StudentSidebar() {

    return (
        <div className="w-60 h-[91vh] bg-white shadow-2xl pb-3 flex flex-col justify-start pl-5 transition-all duration-1000">
            
            <Link href={"/"} className="justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000">
                <div className="w-6 h-6 justify-center items-center flex">
                    <Projects_Icon />
                </div>
                <div className="text-black text-base font-semibold font-sans">Dashboard</div>
            </Link>
            <Link href={"/marketplace"} className="justify-start items-center inline-flex hover-background mt-8 gap-6 transition-all duration-1000">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <My_Learnings_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">Marketplace</div>
            </Link>
            <Link href={"/myprojects"} className="justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Discussion_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">My Projects</div>
            </Link>
            <Link href={"/toolsPage"} className="justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Layer />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">Tool Table</div>
            </Link>
            <Link href={"/people"} className="justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Mentorship_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">People</div>
            </Link>
            <div className="justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000 cursor-pointer">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Skill_Test_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">My Chats</div>
            </div>
        </div>
    );
}
