// pages/index.js

import React from 'react';
import ContributionGraph from '../components/ContributionGraph';

const StreaksCount = () => {
  return (
    <div className='p-8 bg-blue-100 rounded mt-8'>
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">GitHub Contribution Counter</h1>
            <div className='flex flex-col bg-white rounded p-4'>
                <div className='flex flex-row justify-between ml-10 mr-2 mb-2'>
                    <h1>Jan</h1>
                    <h1>Feb</h1>
                    <h1>March</h1>
                    <h1>April</h1>
                    <h1>May</h1>
                    <h1>June</h1>
                    <h1>July</h1>
                    <h1>Aug</h1>
                    <h1>Sep</h1>
                    <h1>Oct</h1>
                    <h1>Nov</h1>
                    <h1>Dec</h1>
                </div>
                <div className='flex flex-row'>
                    <div className='mr-3 flex flex-col justify-between mt-2 mb-2'>
                        <h1>Mon</h1>
                        <h1>Tue</h1>
                        <h1>Fri</h1>
                    </div>
                    <ContributionGraph />
                </div>
            </div>
        </div>
    </div>
  );
};

export default StreaksCount;
