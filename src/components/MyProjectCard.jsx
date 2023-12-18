"use client";
import SearchIcon from "../../public/Images/SearchIcon.svg";
import NotificationsIcon from "../../public/Images/NotificationsIcon.svg";
import Link from "next/link";
import { useState } from "react";

const MyProjectCard = ({ project }) => {

  const [isOpen, setIsOpen] = useState(false)
  const clickHandler = () => {
    setIsOpen(!isOpen);
  }
  return (
    // <Link href={`/myprojects/${project._id}`} className="w-1/4">
    <div className="bg-white rounded-xl mr-4 mt-4 border w-1/4 pb-4 h-[270px]">
      <div className="relative z-10">
        <div className="flex justify-center gap-24 h-28">
          <div className="flex items-center"> <img src={project.assignedBy.avatarUrl} alt="" className="w-16 h-16 rounded-full" /> </div>
          <div>
            <div className="h-14 flex items-end pb-2 text-sky-800"> <span className="bg-white px-4 rounded-md"> &#8377; {project.clientRequirements.payment} </span> </div>
            <div className="h-14"></div>
          </div>
        </div>
        <div className="w-full h-14 bg-gradient-to-b from-sky-500 to-sky-800 absolute top-0 left-0 -z-10 rounded-t-xl"></div>
      </div>
      <div>
        <div className="px-6">
          <div className="flex flex-col rounded ">
            <p className="font-semibold text-xl"> {project.title} </p>
            <p className="text-neutral-600"> {project.assignedBy.name} </p>
            <p className="text-neutral-500"> Posted: {(new Date(project.postedOn)).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
            })} </p>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-center">
        <Link href={`/myprojects/${project._id}`}>
          <button className="text-white px-4 rounded-xl py-1 bg-sky-700">
            View Project
          </button>
        </Link>
      </div>
    </div>
    // </Link>
  );
};

export default MyProjectCard;
