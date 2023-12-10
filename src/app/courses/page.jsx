import React from "react";
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";
import SidebarUpskilling from "../../components/SidebarUpskilling";

const Mentorship = () => {

    const obj = [];
    
    const courseNames = [
        "Web Development Fundamentals",
        "Introduction to Data Science",
        "UX Design Essentials",
        "Mobile App Development with React Native",
        "Machine Learning Basics",
        "Digital Marketing Strategies",
        "Project Management Fundamentals",
        "UI/UX Prototyping",
        "Full-Stack JavaScript Development",
        "Data Visualization Techniques",
        "Cybersecurity Fundamentals",
        "Content Marketing Mastery"
    ];

    for (let i = 0; i < 12; i++) {
        const fakeObject = {
            heading: courseNames[i],
            img: "/Images/newImage.png"
        };

        obj.push(fakeObject);
    }


    const arrayOfObj = Array(12).fill(obj);

    return (
        <div>
            <Navbar />
            <div className="flex flex-row">
                <SidebarUpskilling page={"courses"} />
                <div className="flex flex-col w-[100%] p-8 max-h-[90vh] overflow-scroll overflow-y-auto overflow-x-hidden">
                    <div className="flex flex-col w-[100%]">
                        <div className="relative w-[40%]">
                            <div className="absolute inset-y-0 top-2 flex pl-3 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input type="text"
                                placeholder="Enter your search query"
                                id="simple-search"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            </input>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="py-2 px-6 rounded-xl shadow-lg mr-4 bg-blue-300">All</div>
                        <div className="py-2 px-6 rounded-xl shadow-lg mr-4 bg-white">Recommended</div>
                        <div className="py-2 px-6 rounded-xl shadow-lg mr-4 bg-white">Domains</div>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {obj.map((ele) => {
                            return <div className="bg-blue-300 rounded-xl my-6 flex   flex-col items-center justify-between">
                                <h1 className="text-sm text-white font-semibold mt-3">{ele.heading}</h1>
                                <img src={ele.img} className="h-[50%] w-[50%]" alt="" />
                                <button className="rounded-full bg-white text-black text-sm font-semibold py-2 px-6 mb-3">Start Learning</button>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentorship;
