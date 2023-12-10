import React from "react";

const Projects = ({ projects }) => {
    return (
        <div>
            <div className="w-full p-8 bg-blue-100 rounded mt-8">
                <h1 className="font-semibold text-2xl">Projects</h1>
                <div className="flex flex-row flex-wrap mt-3">
                    {projects.map((ele, index) => (
                        <div className="bg-white rounded mr-4 mt-4 w-[23%]" key={index}>
                            <div className="relative z-10">
                                <div className="relative">
                                    <img src="/Images/Rectangle.png" alt="" className="w-full h-auto" />
                                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4">
                                        <div className="flex flex-row">
                                            <h1 className="text-black text-lg font-bold">{ele.title.slice(0, 14)}</h1>
                                            <div className="text-black ml-4 bg-slate-100 p-1 rounded">12 Dec - 8 Jan</div>
                                        </div>
                                        <h2 className="text-black mt-4">{ele.assignedBy && ele.assignedBy.name}</h2>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="absolute ml-48 -mt-9 z-20"
                                src={ele.logo}
                                alt=""
                            />
                            <div>
                                <div className="px-6 mt-10">
                                    <div className="flex flex-col rounded ">
                                        <label htmlFor="">Due Task</label>
                                        <input className="w-full h-16 border border-solid border-gray-300 rounded" type="text" />
                                    </div>
                                    <hr className="my-4 w-full" />
                                    <div className="flex flex-row right">
                                        <h1>Team</h1>
                                        {ele.assignedTeam && ele.assignedTeam.teamUserMap && ele.assignedTeam.teamUserMap.map((ele) => {
                                            return <img className="rounded-full h-10 w-10 ml-1 mb-1 mr-1" src={ele.user && ele.user.avatarUrl} alt="" />
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects

