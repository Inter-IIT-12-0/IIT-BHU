import React from 'react';
import Milestone from './Milestone';

const MilestoneTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
          <div className='flex'>
            <p className='mr-10'>Milestone Name :Milestone</p>
          <p className='justify-end'>Milestone Due Date: 12/11/12</p>
          </div>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          MileStone Description: Description of milestone Description of milestone Description of milestone Description of milestone Description of milestone.
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
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
          <tr className="bg-white border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              SubMilestone 1
            </th>
            <td className="px-6 py-4">
              TODO
            </td>
            <td className="px-6 py-4">
              12/11/23
            </td>
            <td className="px-6 py-4">
              Varun Kolanu
            </td>
            <td className="px-6 py-4">
              N/A
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MilestoneTable;
