"use client";

import { useState } from "react";
import milestones from "../../models/Milestone.json";
import Calendar from "../../public/Images/calendar.svg";
import Clipboard from "../../public/Images/clipboard.svg"

const Milestone = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <ol className="relative border-s border-gray-200 ml-2  dark:border-gray-700">
        <li className=" mt-8 ms-4">
          <div className="absolute w-3 h-3  mt-2 -start-1.5 border">
            <Calendar />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            End date
          </h3>
          <time className=" text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>
        </li>

        {milestones.map((milestone, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className=" mt-3 ms-4"
          >
            <div
              className={`absolute w-3 h-3 ${
                milestone.isCompleted ? "bg-green-500" : "bg-red-600"
              } rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 ${
                hoveredIndex === index ? "hovered" : ""
              }`}
            ></div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {milestone.heading}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            
          
            {hoveredIndex === index && (
              <div className="w-[200px] h-[250px] bg-white rounded-[20px] shadow" >
                <div className="w-[200px] h-[200px] bg-gradient-to-l from-emerald-200 to-emerald-100 rounded-tl-[20px] rounded-tr-[10px]" >
             
                {/* Additional Component content */}
                
                <div className="text-teal-700 text-[15px] text-center font-normal font-['Nunito']">Generating sub-milestones...</div>

                <ul>
                
                
                  {milestone.subMilestones.map((subMilestone, subIndex) => (
                <ol className="relative border-s ml-4 border-gray-200 dark:border-gray-700">
                <li className=" ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
                    {subMilestone.heading}
                  </h3>
                  <time className=" text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    {subMilestone.isCompleted
                      ? `Completed`
                      : `Not Completed`}
                  </time>
                </li>
              </ol>
                  ))}
                
                  
                </ul>
              
                </div>
                <div className="w-[140px] h-[20px] mt-2 ml-7 scale-33 p-[13.33px] bg-gradient-to-l from-emerald-200 to-emerald-100 rounded-[55.54px] flex justify-center items-center gap-[9.44px] inline-flex">
    <div className="text-black text-xs font-normal font-['Roboto']">Copy to Workspace</div>
</div>

                </div>
            
            )}



          </li>
        ))}
           <li className=" mt-4 ms-4">
          <div className="absolute w-3 h-3  mt-2 -start-1.5 border">
            <Calendar />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Project Created
          </h3>
          <time className=" text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>
        </li>
      </ol>
      <button className="w-[368.36px] h-[49.66px] p-[13.33px] mt-3 bg-gradient-to-l from-emerald-200 to-emerald-100 rounded-[55.54px] justify-center items-center gap-[9.44px] inline-flex">
    <button className="text-black text-xl font-normal font-['Roboto']">Update Milestone</button>
</button>
    </div>
  );
};

export default Milestone;
