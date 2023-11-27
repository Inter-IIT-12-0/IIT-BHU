"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const MyProjects = () => {
  return (

    <div className=" bg-opacity-30">
        {/* <Sidebar /> */}
<div className=" bg-gray-100 flex justify-end items-end w-3/5">
<div className="container mx-auto bg-indigo-500 bg-opacity-30 backdrop-blur-lg rounded-lg p-6">
		<form>
			<h1 className="text-center font-bold text-white text-4xl mb-8">Find your project</h1>
				<div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input className="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search your domain name" />
					<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						<select id="Com" className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
            <option value="com" selected>In Progress</option>
            <option value="net">Completed</option>
            <option value="org">Conflicted</option>
          </select>
						<button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
					</div>
				</div>
		</form>
	</div>
</div>
    <Footer />
    </div>
  );
};

export default MyProjects;
