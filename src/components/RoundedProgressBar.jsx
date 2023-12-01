import React, { useState } from 'react';

const PerformanceWidget = ({progress}) => {
  const radius = 50
  const [circumference] = useState(radius * 2 * Math.PI);
  const [percent] = useState(progress);

  return (
      <div className="flex items-center justify-center ">
        <svg className="w-32 h-32 transform translate-x-1 translate-y-1 scale-150" aria-hidden="true">
          <circle
            className="text-gray-300"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
          <circle
            className="text-blue-600"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percent / 100) * circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
        </svg>
        <span className="absolute text-2xl text-blue-700">{`${percent}%`}</span>
      </div>
  );
};

export default PerformanceWidget;
