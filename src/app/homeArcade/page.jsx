"use client"
import { Navbar } from "@material-tailwind/react";
import React from "react"
import Link from "next/link";
import SidebarUpskilling from "../../components/SidebarUpskilling";

const HomeArcade = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-row">
                <SidebarUpskilling page={'arcade'}/>
                <div className="flex flex-col py-10 pl-10 w-[100%]">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text text-2xl font-semibold mb-3">Welcome to AI Arcade</h1>
                        <p>The home to all your exploration, learning and experimentation related to AI Tools</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 py-10">
                        <Link href={"/arcade"} className="rounded-3xl">
                            <img className="h-[65vh] fixed rounded-3xl" src="/Images/img1.png" alt=""/>
                            <div className="p-8 fixed">
                                <h1 className="text-white font-semibold">Going Upside down with</h1>
                                <h1 className="text-3xl text-yellow-600 font-bold">Chat-GPT</h1>
                            </div>
                            <div className="fixed bottom-24 ml-5 flex flex-col gap-3">
                                <img className="h-10 w-10" src="/Images/GPT.png" alt="" />
                                <p className="text-white flex">Experiment the aspects of AI-chat & answering <br /> by entering the upside down world of Hawkins.</p>
                            </div>
                        </Link>
                        <Link href={"/arcade"} className="rounded-3xl">
                            <img className="h-[65vh] fixed rounded-3xl" src="/Images/img2.png" alt=""/>
                            <div className="p-8 fixed">
                                <h1 className="text-white font-semibold">The Magic Behind</h1>
                                <h1 className="text-3xl text-yellow-600 font-bold">Midjourney</h1>
                            </div>
                            <div className="fixed bottom-24 ml-5 flex flex-col gap-3">
                                <img className="h-10 w-10" src="/Images/GPT.png" alt="" />
                                <p className="text-white flex">Experiment the aspects of AI-chat & answering <br /> by entering the upside down world of Hawkins.</p>
                            </div>
                        </Link>
                        <Link href={"/arcade"} className="rounded-3xl">
                            <img className="h-[65vh] fixed rounded-3xl" src="/Images/img3.png" alt=""/>
                            <div className="p-8 fixed">
                                <h1 className="text-white font-semibold">Going Upside down with</h1>
                                <h1 className="text-3xl text-yellow-600 font-bold">Chat-GPT</h1>
                            </div>
                            <div className="fixed bottom-24 ml-5 flex flex-col gap-3">
                                <img className="h-10 w-10" src="/Images/GPT.png" alt="" />
                                <p className="text-white flex">Experiment the aspects of AI-chat & answering <br /> by entering the upside down world of Hawkins.</p>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeArcade;