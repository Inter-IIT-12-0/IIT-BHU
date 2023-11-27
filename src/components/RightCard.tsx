import React from "react";

const RightCard = () => {
  return (
    <div className="flex max-w-md mx-auto bg-white shadow-md rounded-2xl p-4 overflow-hidden ">
      {/* Left side with text */}
      <div className="p-4 flex-1">
        <h2 className="text-xl font-semibold mb-2">Rewards & Badges</h2>
        <p className="text-gray-500 font-helvetica text-sm font-light leading-normal tracking-tight">
        Collect Badges and Reward as you complete the challenges.
        </p>
        <p className="text-blue-700 font-helvetica-neue text-base font-bold leading-normal tracking-tighter mu-12">
        View Rewards →
        </p>
      </div>
      {/* Right side with SVG or image */}
      <div className="w-35%">
        {/* Use your SVG or image here */}
        <img
          src="/Reward.svg"
          alt="Your Image"
          className="w-full h-full object-cover"
        />
        {/* or */}
        {/* <svg className="w-full h-full" viewBox="0 0 100 100">
          <!-- Your SVG content goes here -->
        </svg> */}
      </div>
    </div>
  );
};

export default RightCard;
