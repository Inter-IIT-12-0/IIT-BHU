"use client";

import { useState } from "react";
import milestones from '../../models/Milestone.json';

interface MilestoneProps {
  subMilestones: { heading: string; isCompleted: boolean }[];
}

const Milestone: React.FC<MilestoneProps> = ({ subMilestones }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  const handleMouseEnter = (index:number) => {
    setHoveredIndex(index);
  };



  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {milestones.map((milestone, index) => (
      <li key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className="mb-10 ms-4" >
          <div 
            className={`absolute w-3 h-3 ${milestone.isCompleted ? 'bg-green-500' : 'bg-red-600'} rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 ${
              hoveredIndex === index ? 'hovered' : ''
            }`}
          ></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {milestone.heading}
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>

          {/* Additional Component */}
          {hoveredIndex === index && (
            <div className="absolute top-0 left-1/2 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md z-50">
              {/* Additional Component content */}
              
              <ul>
                  {milestone.subMilestones.map((subMilestone, subIndex) => (
                    
<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
<li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{subMilestone.heading}</h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{subMilestone.isCompleted ? `Completed`: `Not Completed`}</time>

    </li>
 
   
</ol>


                  ))}
                </ul>
            </div>
          )}
        </li> ))}
        
       
      </ol>
    </div>
  );
};

export default Milestone;
