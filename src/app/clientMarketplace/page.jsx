"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";
import ClientMarketPlaceComponent from "../../components/ClientMarketPlaceComp";
import axios from "axios";

const ClientMarketPlace = () => {

    return (
        <div>
            <Navbar/>
            <div className="flex flex-row">
            <StudentSidebar page={"marketplace"}/>
            <ClientMarketPlaceComponent />
            </div>
        </div>
    )
}

export default ClientMarketPlace