"use client";
import Projects_Icon from "../../public/Images/Projects_Icon.svg";
import My_Learnings_Icon from "../../public/Images/My_Learnings_Icon.svg";
import Discussion_Icon from "../../public/Images/Discussion_Icon.svg";
import Mentorship_Icon from "../../public/Images/Mentorship_Icon.svg";
import Skill_Test_Icon from "../../public/Images/Skill_Test_Icon.svg";
import Layer from "../../public/Images/layer.svg";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function StudentSidebar({page}) {
    const {data:session} = useSession()
    return (
        <div className="w-60 bg-white shadow-2xl pb-6 flex flex-col h-[94vh] justify-between items-center">
            <div className="pr-5">
                <Link
                    href={"/"}
                    className={`justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000 ${page === "dashboard" && 'bg-sky-100'} rounded-r-2xl pl-5`}
                >
                    <div className="w-6 h-6 justify-center items-center flex">
                        <Projects_Icon />
                    </div>
                    <div className="text-black text-base font-semibold font-sans">
                        Dashboard
                    </div>
                </Link>
                <Link
                    href={"/marketplace"}
                    className={`justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000 ${page === "marketplace" && 'bg-sky-100'} rounded-r-2xl pl-5`}
                >
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <My_Learnings_Icon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">
                        Marketplace
                    </div>
                </Link>
                <Link
                    href={"/myprojects"}
                    className={`justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000 ${page === "myprojects" && 'bg-sky-100'} rounded-r-2xl pl-5`}
                >
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <Discussion_Icon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">
                        My Projects
                    </div>
                </Link>
                {
                    session && session.user.role === "Student" &&
                    <Link
                    href={"/toolsPage"}
                    className={`justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000 ${page === "tools" && 'bg-sky-100'} rounded-r-2xl pl-5`}
                >
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <Layer />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">
                        Tool Table
                    </div>
                </Link>
                }
                <Link
                    href={"/people"}
                    className={`justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000 ${page === "people" && 'bg-sky-100'} rounded-r-2xl pl-5`}
                >
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <Mentorship_Icon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">
                        People
                    </div>
                </Link>
                <div className={`justify-start items-center inline-flex mt-8 gap-6 hover-background transition-all duration-1000 ${page === "chat" && 'bg-sky-100'} rounded-r-2xl pl-5 mb-6`}>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <Skill_Test_Icon />
                        </div>
                    </div>
                    <div className="text-black text-base font-semibold font-sans">
                        My Chats
                    </div>
                </div>
                <Link href={"/upskilling"}>
                    <button className="px-6 hover:bg-sky-700 transition-all duration-500 mb-2 py-2 rounded-2xl text-center bg-sky-900 text-white">
                        Switch to Learn
                    </button>
                </Link>
            </div>

                
        </div>
    );
}
