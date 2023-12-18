// MilestoneTable.js

import React, { useEffect, useState } from 'react';
import SubMilestoneCard from './SubMilestoneCard';
import CalendarIcon from '../../public/Images/Calendar2.svg'
import axios from 'axios';
import ExportIcon from "../../public/Images/Export_Icon.svg"


const MilestoneTable = ({ project, setSelectedSubmilestone, setProject }) => {

  const handleStatusChange = (e, index1, index2) => {
    let updatedMilestones = [...project.milestones]
    updatedMilestones[index1].submilestones[index2].status = e.target.checked ? 'Completed' : 'In Progress'
    axios.patch(`/api/project/${project._id}`, {
      milestones: updatedMilestones
    }).then(res => setProject(res.data)).catch(err => toast.error(err.response.data.error))

  }

  const handleOpenSub = (submilestone, index1, index2) => {
    let updatedMilestones = [...project.milestones]
    if (updatedMilestones.status === 'Not Started') {
      updatedMilestones[index1].submilestones[index2].status = 'In Progress'
      axios.patch(`/api/project/${project._id}`, {
        milestones: updatedMilestones
      }).then(res => {
        setProject(res.data)
        setSelectedSubmilestone(submilestone)
      }).catch(err => toast.error(err.response.data.error))
    }
    else {
      setSelectedSubmilestone(submilestone)
    }
  }

  useEffect(() => {

  }, [project])

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div>
        {project.milestones.map((milestone, index1) => (
          <table key={milestone._id} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                <th scope="col" className="px-6 py-3">
                  Open
                </th>
              </tr>
            </thead>
            <tbody>
              {milestone.submilestones.map((submilestone, index2) => {
                return <tr
                  key={submilestone._id}
                  className="bg-white border-y dark:border-gray-200"

                >
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    <span className='ml-8'>{index2 + 1}</span>
                  </th>
                  <td className="px-6 py-4">
                    <input type="checkbox" name="status" checked={submilestone.status === 'Completed'} onChange={(e) => handleStatusChange(e, index1, index2)} />
                  </td>
                  <td className="px-6 py-4">
                    {submilestone.description}
                  </td>
                  <td className="px-6 py-4">
                    <ExportIcon className="scale-50 cursor-pointer" onClick={() => {
                      handleOpenSub(submilestone, index1, index2)
                    }} />
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default MilestoneTable;
