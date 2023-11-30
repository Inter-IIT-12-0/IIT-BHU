"use client"
import Image from "next/image";
import Trumio_logo from "../../public/Images/Trumio_Logo.svg";
import Trumio_text from "../../public/Images/Trumio_text.svg";
import Projects_Icon from "../../public/Images/Projects_Icon.svg"
import My_Learnings_Icon from "../../public/Images/My_Learnings_Icon.svg"
import Discussion_Icon from "../../public/Images/Discussion_Icon.svg"
import Mentorship_Icon from "../../public/Images/Mentorship_Icon.svg"
import Skill_Test_Icon from "../../public/Images/Skill_Test_Icon.svg"
import Settings_Icon from "../../public/Images/Settings_Icon.svg"


export default function StudentSidebar() {

    return (
        <div className="w-60 h-[120vh] bg-white shadow-2xl pb-3 flex flex-col justify-start pl-5 z-20 transition-all duration-1000">
            
            <div className="justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000">
                <div className="w-6 h-6 justify-center items-center flex">
                    <Projects_Icon />
                </div>
                <div className="text-black text-base font-semibold font-sans">Dashboard</div>
            </div>
            <div className="justify-start items-center inline-flex hover-background mt-8 gap-6 transition-all duration-1000">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <My_Learnings_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">Marketplace</div>
            </div>
            <div className="justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Discussion_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">My Projects</div>
            </div>
            <div className="justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Mentorship_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">People</div>
            </div>
            <div className="justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000">
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
