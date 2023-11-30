// MilestoneTable.js

import React, { useState } from 'react';
import SubMilestoneCard from './SubMilestoneCard';
import CalendarIcon from '../../public/Images/Calendar2.svg'

const MilestoneTable = ({ project }) => {
  const [selectedSubmilestone, setSelectedSubmilestone] = useState(null);

  const handleSubmilestoneClick = (submilestone) => {
    setSelectedSubmilestone(submilestone);
  };

  const closePopup = () => {
    setSelectedSubmilestone(null);
  };

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
                  Submilestone Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Assigned to
                </th>
                <th scope="col" className="px-6 py-3">
                  Comments
                </th>
              </tr>
            </thead>
            <tbody>
              {milestone.subMilestones.map((submilestone) => (
                <tr
                  key={submilestone.id}
                  className="bg-white border-b dark:border-gray-700 cursor-pointer"
                  onClick={() => handleSubmilestoneClick(submilestone)}
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {submilestone.title}
                  </th>
                  <td className="px-6 py-4">
                    {submilestone.status}
                  </td>
                  <td className="px-6 py-4">
                    {(new Date(submilestone.dueDate)).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4">
                    {submilestone.assignedTo.name}
                  </td>
                  <td className="px-6 py-4">
                    N/A
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>

      {/* Pop-up Card */}
      {selectedSubmilestone && (
        <SubMilestoneCard submilestone={selectedSubmilestone} />
      )}
    </div>
  );
};

export default MilestoneTable;
