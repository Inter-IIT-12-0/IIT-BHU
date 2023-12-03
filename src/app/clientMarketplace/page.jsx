"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";
import ClientMarketPlaceComponent from "../../components/ClientMarketPlace";

const ClientMarketPlace = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-row">
            <StudentSidebar/>
            <ClientMarketPlaceComponent/>
            </div>
        </div>
    )
}

export default ClientMarketPlace