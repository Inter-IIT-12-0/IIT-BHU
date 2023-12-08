// MilestoneTable.js

import React, { useState } from 'react';
import SubMilestoneCard from './SubMilestoneCard';
import CalendarIcon from '../../public/Images/Calendar2.svg'


const MilestoneTable = ({ project, setSelectedSubmilestone }) => {
  console.log(project)

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div>
        {project.milestones.map((milestone) => (
          <table key={milestone.id} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
              <div className='flex w-3/4 justify-between'>
                <p className='mr-10 font-bold'> {milestone.heading} </p>
                <p className='flex'> <CalendarIcon className="mr-2 scale-75" /> <span> Due Date: {(new Date(milestone.dueDate)).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })} </span></p>
              </div>
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                {milestone.description}
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Submilestone
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {milestone.submilestones && milestone.submilestones.map((submilestone, index) => (
                <tr
                  key={submilestone._id}
                  className="bg-white border-y dark:border-gray-200 cursor-pointer"
                  onClick={() => setSelectedSubmilestone(submilestone)}
                >
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    <span className='ml-8'>{index + 1}</span>
                  </th>
                  <td className="px-6 py-4">
                    {submilestone.status}
                  </td>
                  <td className="px-6 py-4">
                    {submilestone.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default MilestoneTable;
