"use client"
import Image from "next/image";
import Trumio_logo from "../../public/Images/Trumio_Logo.svg";
import Trumio_text from "../../public/Images/Trumio_text.svg";
import Dashboard_Icon from "../../public/Images/Dashboard_Icon.svg"
import My_Learnings_Icon from "../../public/Images/My_Learnings_Icon.svg"
import AIArcadeIcon from "../../public/Images/AIArcadeIcon.svg"
import AILoungeIcon from "../../public/Images/AILoungeIcon.svg"
import ToolsIcon from "../../public/Images/ToolsIcon.svg"
import LeaderboardIcon from "../../public/Images/LeaderboardIcon.svg"
import ChallengesIcon from "../../public/Images/ChallengesIcon.svg"
import MentorshipIconUpskill from "../../public/Images/MentorshipIconUpskill.svg"
import Settings_Icon from "../../public/Images/Settings_Icon.svg"


export default function SidebarUpskilling() {

    return (
        <div className="w-60 bg-white shadow-2xl pb-3 flex flex-col pl-5 z-20 h-[91vh]">
            {/* <div className=" justify-start items-center gap-4 inline-flex">
                <Trumio_logo />
                <div>
                    <Trumio_text />
                    <div className="w-28 h-2 bg-gradient-to-l from-[#00509f] to-white rounded-[0.1rem] flex flex-row-reverse font-bold font-['Montserrat'] text-white text-[0.3rem] pr-1 items-center" >
                        UNIK
                    </div>
                </div>
            </div> */}
            <div>
            <div className=" justify-start items-center gap-8 inline-flex hover-background bg-sky-100 rounded mt-6">
                <div className="w-6 h-6 justify-center items-center flex">
                    <Dashboard_Icon />
                </div>
                <div className="text-black text-base font-semibold font-sans">Dashboard</div>
            </div>
            <div className="justify-start items-center gap-8 inline-flex hover-background mt-6">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <AIArcadeIcon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">AI Arcade</div>
            </div>
            <div className="justify-start items-center gap-8 inline-flex hover-background mt-6">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <AILoungeIcon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">AI Lounge</div>
            </div>
            <hr className="w-50 mt-2"/>
            <div className="justify-start items-center gap-8 inline-flex hover-background mt-6">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <ToolsIcon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">Table of Tools</div>
            </div>
            <div className="justify-start items-center gap-8 inline-flex hover-background mt-6">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <LeaderboardIcon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">Leaderboard</div>
            </div>
            <div className="mt-2 relative w-50 h-px left-0 border border-stone-300"></div>
            <div className="justify-start items-center gap-8 inline-flex hover-background mt-6">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <ChallengesIcon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">Challenges</div>
            </div>
            <div className="justify-start items-center gap-8 inline-flex hover-background mt-6">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <MentorshipIconUpskill />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">Mentorship</div>
            </div>
            <div className="justify-start items-center gap-8 inline-flex hover-background mt-6">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <My_Learnings_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">Courses</div>
            </div>
            <div className=" text-black text-base font-semibold font-sans justify-start items-center gap-8 inline-flex hover-background mt-6">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Settings_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-sans">Settings</div>
            </div>
            </div>
            
        </div>
    );
}
