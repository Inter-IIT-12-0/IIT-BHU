import React from "react";
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";
import SidebarUpskilling from "../../components/SidebarUpskilling";

const Mentorship = () => {
    const onj = {
        name:"name"
    }
    const arrayofobj = Array(9).fill(onj);
    return (
        <div>
            <Navbar />
            <div className="flex flex-row">
                <SidebarUpskilling page="mentorship" />
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
                        {/* <div className="py-2 px-6 rounded-xl shadow-lg mr-4 bg-white">College</div> */}
                        <div className="py-2 px-6 rounded-xl shadow-lg mr-4 bg-white">Domains</div>
                    </div>
                    <div className="flex flex-row flex-wrap relative">
                        {arrayofobj.map((ele) => {
                            return <div className="bg-white shadow-xl w-[30%] my-6 mr-6">
                            <div className="relative z-10">
                                <div className="relative">
                                    <img src="/Images/Rectangle2.png" alt="" className="w-full h-auto relative" />
                                        <div className="absolute top-2 left-0 right-0 flex flex-col justify-end p-4">
                                            <div className="flex justify-between">
                                                <div className="text-black bg-slate-100 p-1 rounded">Top Rated</div>
                                                <img src="/Images/Group_stars.svg" alt="" />
                                            </div>
                                            {/* <h2 className="text-black mt-4"></h2> */}
                                        </div>
                                    </div>
                                </div>
                                <img
                                className="absolute ml-64 -mt-9 z-20 border border-red-400 rounded-full"
                                src="/Images/newElipse.svg"
                                alt=""
                            />
                            <div>
                            <div className="px-6 mt-10">
                                <div className="flex flex-col rounded ">
                                    <h1 htmlFor="">Shri Shamendra</h1>
                                    <h1 className="w-full h-16 rounded">UX Leader & Career Coach at Adobe  </h1>
                                        
                                </div>
                                <hr className="my-4 w-full" />
                                <div className="flex justify-between right bg-slate-200 rounded-xl py-2 px-10 mb-3">
                                    <h1 className="text-sm font-semibold flex flex-wrap">Sessions 26</h1>
                                    <h1 className="text-sm font-semibold flex flex-wrap">Experience 4 years</h1>
                                    <h1 className="text-sm font-semibold flex flex-wrap">Reviews 15</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentorship;