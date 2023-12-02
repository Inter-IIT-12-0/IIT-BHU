"use client";

import React from "react";
import ToolMaker from "../../components/ToolMaker";
import Navbar from "../../components/Navbar";
import SidebarUpskilling from "../../components/SidebarUpskilling";

const ToolsPage = () => {
    return (
        <div className="flex overflow-x-hidden">
            <div>
                <div className="w-screen">
                    <Navbar/>
                </div>
                <div className="flex flex-row">
                    <div>
                    <SidebarUpskilling/>
                    </div>
                    <ToolMaker/>
                </div>
            </div>
        </div>
    )
}

export default ToolsPage