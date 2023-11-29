"use client";
import SearchIcon from "../../public/Images/SearchIcon.svg";
import NotificationsIcon from "../../public/Images/NotificationsIcon.svg";
import Link from "next/link";
import { useState } from "react";
import Project from "./Project";

const ProjectCard = ({ project }) => {

  const [isOpen, setIsOpen] = useState(false)
  const clickHandler = () => {
    setIsOpen(!isOpen);
  }
  return (
    // <Link href={`/myprojects/${project._id}`}>
    <>
      <Project isOpen={isOpen} project={project} setIsOpen={setIsOpen} />
      <div className="cursor-pointer" onClick={clickHandler}>
        <div className="flex items-center justify-center cursor-pointer w-72 mx-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full shadow-xl bg-pink-500 left-4 -top-6">
                <img src={project.logo} alt="Logo" className="w-16 h-16 rounded-full" />
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2"> {project.title} </p>
                <div className="flex space-x-2 text-gray-400 text-sm">


                  <img src="https://img.icons8.com/ios-glyphs/30/client-management--v1.png" className="w-5 h-5"></img>

                  <p> {project.assignedBy.username} </p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>Jan'21 - Feb'22</p>
                </div>
                <div className="border-t-2 mb-4"></div>

                <div className="mt-4 text-gray-500 font-bold text-sm flex mb-2"> <img src="https://img.icons8.com/fluency-systems-regular/48/timer.png" className="w-5 h-5 mr-1"></img>  3 hr</div>
                <div className="items-center justify-between bg-gray-800 text-white w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full w-4 h-4 border border-purple-500"></div>
                    <div className="text-md font-bold">Investors Meeting</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="cursor-pointer">
                      <img
                        className="w-5 h-5 rounded-lg"
                        src="https://i.pravatar.cc/300"
                      />
                    </div>
                    <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="border-t-2 mt-4"></div>
                <div className="flex justify-between">
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Team Member</p>
                    <div className="flex space-x-2">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Progress</p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>34%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // </Link>
  );
};

export default ProjectCard;
