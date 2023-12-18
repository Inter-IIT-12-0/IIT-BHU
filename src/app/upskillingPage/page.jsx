"use client";
import Link from "next/link";
import React from "react";

const upskillingPage = () => {
    return (
        <div style={{backgroundColor: 'var(--material-theme-sys-light-primary, #001338)'}} className="w-[100vw] h-[100vh] p-32 flex flex-col items-center gap-12">
            <div className="flex flex-col items-center">
                <div className="flex flex-row h-[10vh] w-[20vw]">
                <img className="h-[10vh] w-[10vw] " src="/Images/image_91.png" alt="" />
                <div>
                    <img src="/Images/image_70.png" alt="" />
                    <div style={{background:'linear-gradient(270deg, #FFF 23.43%, rgba(17, 24, 39, 0.00) 100%)'}} className="h-2 rounded"></div>
                </div>
                </div>
                <p className="text-white mt-4">Choose what you wish to explore and experiment in...</p>
            </div>
            <div className="grid grid-cols-3 gap-3 items-center w-[80%]">
                <Link href={"/toolsTable"} className="flex flex-col gap-3 p-4 bg-white rounded-3xl shadow-lg">
                    <img className="h-16 w-16" src="/Images/toolsImage.png" alt="" />
                    <h1 className="font-bold">Tool Table</h1>
                    <p>Build and use AI Tools of your own choice with Trumio</p>
                </Link>
                <Link href={"/homeArcade"} className="flex flex-col gap-3 p-4 bg-white rounded-3xl shadow-lg">
                    <img className="h-16 w-16" src="/Images/controllerImg.png" alt="" />
                    <h1 className="font-bold">AI Arcade</h1>
                    <p> Learn AI Tools via fun tools and experimentations </p>
                </Link>
                <Link href={"/Mentorship"} className="flex flex-col gap-3 p-4 bg-white rounded-3xl shadow-lg">
                    <img className="h-16 w-16" src="/Images/irI.svg" alt="" />
                    <h1 className="font-bold">Mentorships</h1>
                    <p>Get 1-on-1 support from AI industry experts </p>
                </Link>
            </div>
        </div>
    )
}

export default upskillingPage;