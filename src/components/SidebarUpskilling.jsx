"use client"
import Image from "next/image";
import Trumio_logo from "../../public/Images/Trumio_Logo.svg";
import Trumio_text from "../../public/Images/Trumio_text.svg";
import Dashboard_Icon from "../../public/Images/Dashboard_Icon.svg"
import My_Learnings_Icon from "../../public/Images/My_Learnings_Icon.svg"
import AIArcadeIcon from "../../public/Images/game.svg"
import AILoungeIcon from "../../public/Images/AILoungeIcon.svg"
import ToolsIcon from "../../public/Images/ToolsIcon.svg"
import LeaderboardIcon from "../../public/Images/LeaderboardIcon.svg"
import ChallengesIcon from "../../public/Images/ChallengesIcon.svg"
import MentorshipIconUpskill from "../../public/Images/MentorshipIconUpskill.svg"
import Settings_Icon from "../../public/Images/Settings_Icon.svg"
import Link from "next/link"


export default function SidebarUpskilling({ page }) {

    return (
        <div className="w-60 bg-white shadow-2xl pb-3 flex flex-col h-[100vh] justify-between items-center">
            <div className="pr-5">
                <Link href={"/upskilling"} className={` justify-start items-center gap-8 inline-flex hover-background ${page === "dashboard" && "bg-sky-100"} rounded mt-6`}>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <Dashboard_Icon />
                    </div>
                    <div className="text-black text-base font-semibold font-sans">Dashboard</div>
                </Link>
                <Link href={"/homeArcade"} className={` justify-start items-center gap-8 inline-flex hover-background ${page === "arcade" && "bg-sky-100"} rounded mt-6`}>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <AIArcadeIcon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">AI Arcade</div>
                </Link>
                <div className="w-full h-5 opacity-0"></div>

                <Link href="/toolsTable" className={` justify-start items-center gap-8 inline-flex hover-background ${page === "tools" && "bg-sky-100"} rounded mt-6`}>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <ToolsIcon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">Tool Table</div>
                </Link>
                <Link href={"/lounges"} className={` justify-start items-center gap-8 inline-flex hover-background ${page === "lounge" && "bg-sky-100"} rounded mt-6`}>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <AILoungeIcon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">AI Lounge</div>
                </Link>
                <div className="w-full h-5 opacity-0"></div>

                <Link href={"/mentorship"} className={` justify-start items-center gap-8 inline-flex hover-background ${page === "mentorship" && "bg-sky-100"} rounded mt-6`}>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <MentorshipIconUpskill />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">Mentorship</div>
                </Link>

                <Link href={"/courses"} className={` justify-start items-center gap-8 inline-flex hover-background ${page === "courses" && "bg-sky-100"} rounded mt-6`}>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <My_Learnings_Icon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">Courses</div>
                </Link>

                <Link href={"/challenges"} className={` justify-start items-center gap-8 inline-flex hover-background ${page === "challenges" && "bg-sky-100"} rounded mt-6`}>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <ChallengesIcon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">Challenges</div>
                </Link>


                <div className={` justify-start items-center gap-8 inline-flex hover-background ${page === "settings" && "bg-sky-100"} rounded mt-6 mb-6`}>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <Settings_Icon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">Settings</div>
                </div>
            </div>
            <Link href={"/"}>
                <button className="px-6 mb-2 hover:bg-sky-700 transition-all duration-500 py-2 rounded-2xl text-center bg-sky-900 text-white">
                    Enter Marketplace
                </button>
            </Link>

        </div>
    );
}
