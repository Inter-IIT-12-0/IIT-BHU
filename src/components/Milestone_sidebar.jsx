import React from 'react';
import ComparisonGraph from './ComparisonGraph';
import RoundedProgressBar from './RoundedProgressBar';

const HealthDashboard = () => {
  return (
    <div>
      <ComparisonGraph />
      <RoundedProgressBar />
    </div>
  );
};

export default HealthDashboard;
