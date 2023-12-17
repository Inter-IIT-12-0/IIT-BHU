import React from 'react';
import HealthDashboard from './Milestone_sidebar';
import ComparisonGraph from './ComparisonGraph';
import RoundedProgressBar from './RoundedProgressBar';
import ProjectTop from './ProjectTop';

const Healthdashboard = ({ project }) => {

  const getTotalAmount = () => {
    let amount = 0;
    project.milestones.forEach(milestone => amount += milestone.payment)
    return amount;
  }

  const getCompletedAmount = () => {
    const amount = project.milestones.filter(milestone => milestone.paymentCompleted).reduce((acc, currJson) => {
      return acc + currJson.payment
    }, 0);
    return amount;
  }
  return (
    <>
    <ProjectTop projectName={project.title} projectDescription={project.statement} />
    <div className="grid grid-cols-2 gap-4 mt-3">
      <div className="p-4 bg-gray-200 rounded shadow flex flex-col">
        <div className='w-full flex justify-center font-bold text-xl'> Percentage Completion </div>
        <div className='flex justify-around items-center h-full'>
          <div>
            <div className='mb-3 -mt-6 '><span className='font-bold'> Start Date: </span> <span> {(new Date(project.startDate)).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })} </span> </div>

            <div className='my-3'><span className='font-bold'> End Date: </span> <span> {(new Date(project.endDate)).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })} </span> </div>
          </div>
          <RoundedProgressBar progress={Math.floor(((project.milestones.map(mil => mil.submilestones.filter(sub => sub.status === 'Completed').length/mil.submilestones.length)).reduce((acc,compl) => acc + compl, 0) / project.milestones.length) *100)} />

        </div>

      </div>
      <div className="p-4 bg-gray-200 rounded shadow">
        <ComparisonGraph />
      </div>
      <div className="col-span-2 p-4 bg-gray-200 rounded shadow">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
            <div className='flex justify-between w-1/2'>
              <p className='mr-32 font-bold'>Payments</p>
              <p className='px-3 py-1 bg-green-400 rounded-2xl'>
                &#8377; {getCompletedAmount()}/{getTotalAmount()}
              </p>
            </div>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Milestone
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {
              project.milestones.map(milestone => (
                <tr className="bg-white border-y dark:border-gray-300">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {milestone.heading}
                  </th>
                  <td className="px-6 py-4">
                    {
                      milestone.status === 'Completed' ? (new Date(milestone.paymentDate)).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      }) : '-'
                    }
                  </td>
                  <td className="px-6 py-4">
                    &#8377; {milestone.payment}
                  </td>
                  <td className="px-6 py-4">
                    {milestone.status}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Healthdashboard;