"use client";
import SearchIcon from "../../public/Images/SearchIcon.svg";
import NotificationsIcon from "../../public/Images/NotificationsIcon.svg";
import Link from "next/link";
import { useState } from "react";

const MyProjectCard = ({ project }) => {
  console.log(project)

  const [isOpen, setIsOpen] = useState(false)
  const clickHandler = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Link href={`/myprojects/${project._id}`}>
      <div className="cursor-pointer" onClick={clickHandler}>
        <div className="bg-white rounded mr-4 mt-4 border pb-3">
          <div className="relative z-10">
            <div className="relative">
              <img src="/Images/Rectangle.png" alt="" className="w-full h-auto" />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4">
                <div className="flex flex-row">
                  <h1 className="text-black text-lg font-bold">{project.title}</h1>
                  <div className="text-black ml-4 bg-slate-100 p-1 rounded">{(new Date(project.startDate)).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'short'
                                    })} - {(new Date(project.endDate)).toLocaleDateString('en-US', {
                                      day: 'numeric',
                                      month: 'short'
                                  })}</div>
                </div>
                <h2 className="text-black mt-4">{project.assignedBy && project.assignedBy.name}</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="px-6 mt-10">
              <div className="flex flex-col rounded ">
                <label htmlFor="">Due Task</label>
                <div className="w-full h-16 flex justify-center items-center border border-solid border-gray-300 rounded">
                  {project?.milestones?.sort((a,b) => b.dueDate - a.dueDate)[0]?.heading}
                </div>
              </div>
              <hr className="my-4 w-full" />
              <div className="flex flex-row right">
                <h1>Team</h1>
                <div className="flex overflow-scroll overflow-y-hidden overflow-x-auto">
                {project.assignedTeam && project.assignedTeam.teamUserMap && project.assignedTeam.teamUserMap.map((ele) => {
                  return <img className="rounded-full h-10 w-10 ml-1 mb-1 mr-1" src={ele.user && ele.user.avatarUrl} alt="" />
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyProjectCard;
