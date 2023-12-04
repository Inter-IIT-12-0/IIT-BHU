import React, { useState } from 'react';
import MilestoneTable from './MileStoneProject';
import Calendar from './Calendar';
import Healthdashboard from './HealthDashboard';
import TeamCard from './TeamCard';
import AppCard from './AppCard';
import SubMilestoneCard from './SubMilestoneCard';



const ProjectTimeline = ({ project, setIsOpen, isOpen, setSelectedSubmilestone }) => {
  const [selectedTab, setSelectedTab] = useState('Milestones');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Milestones':
        return <MilestoneTable project={project} setSelectedSubmilestone={setSelectedSubmilestone} />
      case 'Timeline':
        return <Calendar />;
      case 'Health':
        return <Healthdashboard project={project} />;
      case 'Apps':
        return <div> <AppCard project={project} /> </div>;
      case 'Team':
        return <div> <TeamCard project={project} /> </div>;
      default:
        return null;
    }
  };

  // const [selectedSubmilestone, setSelectedSubmilestone] = useState(null);

  // const handleSubmilestoneClick = (submilestone) => {
  //   setSelectedSubmilestone(submilestone);
  // };

  return (
    <div>
      {/* {selectedSubmilestone && (
        <SubMilestoneCard submilestone={selectedSubmilestone} setSelectedSubmilestone={setSelectedSubmilestone} project={project}/>
      )} */}
      <div className={`flex flex-col w-11/12 mt-8 ${isOpen ? 'blur-xl' : ''} `}>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <a
              href="#"
              onClick={() => handleTabClick('Milestones')}
              className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${selectedTab === 'Milestones'
                ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
                }`}
            >
              Milestones
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              onClick={() => handleTabClick('Timeline')}
              className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${selectedTab === 'Timeline'
                ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
                } `}
            >
              Timeline
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              onClick={() => handleTabClick('Apps')}
              className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${selectedTab === 'Apps'
                ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
                } `}
            >
              Apps
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              onClick={() => handleTabClick('Health')}
              className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${selectedTab === 'Health'
                ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
                } `}
            >
              Health
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              onClick={() => handleTabClick('Team')}
              className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${selectedTab === 'Team'
              ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
              : 'text-gray-500 dark:text-gray-400'
              } `}
            >
              Team
            </a>
          </li>
        </ul>
        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
