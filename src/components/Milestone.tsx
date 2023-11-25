"use client";

import { useState } from "react";

interface MyComponentProps {
  // Define your component props here
}

const Milestone: React.FC<MyComponentProps> = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  const handleMouseEnter = (index:number) => {
    setHoveredIndex(index);
  };

  const milestones = [
    {
      title: 'Application UI code in Tailwind CSS',
      date: 'February 2022',
      additionalContent: 'This is the first component.',
    },
    {
      title: 'Another Milestone',
      date: 'March 2022',
      additionalContent: 'This is the second component.',
    },
    // Add more milestones as needed
  ];

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {milestones.map((milestone, index) => (
      <li key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className="mb-10 ms-4" >
          <div 
            className={`absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 ${
              hoveredIndex === index ? 'hovered' : ''
            }`}
          ></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Application UI code in Tailwind CSS
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>

          {/* Additional Component */}
          {hoveredIndex === index && (
            <div className="absolute top-0 left-1/2 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md z-50">
              {/* Additional Component content */}
              <p>{milestone.additionalContent}</p>
            </div>
          )}
        </li> ))}
        
       
      </ol>
    </div>
  );
};

export default Milestone;
