// components/ContributionCounter.js

import React from 'react';

const ContributionGraph = ({ contributions }) => {
  // Dummy data for demonstration, replace it with your actual data
  // contributions should be an array representing daily contributions
  // For simplicity, using a random number generator here
  const generateRandomContributions = () => {
    return Array.from({ length: 365 }, () => Math.floor(Math.random() * 6));
  };

  const contributionData = contributions || generateRandomContributions();

  return (
    <div className="flex flex-row flex-wrap gap-1 w-full\">
      {contributionData.map((count, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${
            count === 0 ? 'bg-gray-200' : `bg-green-${count * 100}`
          }`}
        />
      ))}
    </div>
  );
};

export default ContributionGraph;
