"use client";

import React from "react";
import ToolMaker from "../../components/ToolMaker";
import Navbar from "../../components/Navbar";
import SidebarUpskilling from "../../components/SidebarUpskilling";
import StudentSidebar from "../../components/StudentSidebar";

const ToolsPage = () => {
    return (
        <div className="flex overflow-x-hidden">
            <div>
                <div className="w-screen">
                    <Navbar/>
                </div>
                <div className="flex flex-row">
                    <div>
                    <SidebarUpskilling page="tools"/>
                    </div>
                    <ToolMaker/>
                </div>
            </div>
        </div>
    )
}

export default ToolsPage