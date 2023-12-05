// components/PercentageCircle.js
import React from 'react';

const PercentageCircle = ({ percentage }) => {
    const percent = parseInt(percentage);
  return (
    <div className="relative w-12 h-12">
      {/* White circular background */}
      <div className="absolute w-full h-full rounded-full bg-white"></div>

      {/* Percentage text in the center */}
      <div className="absolute inset-0 flex items-center justify-center text-1xl font-semibold text-black">
        {percent}%
      </div>

      {/* Circular border fill based on percentage */}
      <div
        className={`absolute w-full h-full rounded-full border-4 border-blue-500 transform rotate-90 origin-center border-solid border-dasharray-${100 - 50
            }`}
      ></div>
    </div>
  );
};

export default PercentageCircle;
