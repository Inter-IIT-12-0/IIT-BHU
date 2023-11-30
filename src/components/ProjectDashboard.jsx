import React, { useState } from 'react';
import MilestoneTable from './MileStoneProject';
import Calendar from './Calendar';
import Healthdashboard from './HealthDashboard';


const ProjectDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Profile');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Profile':
        return <MilestoneTable />
      case 'Dashboard':
        return <Calendar />;
      case 'Settings':
        return <Healthdashboard />;
      case 'Contacts':
        return <div>Contacts Content Goes Here</div>;
      case 'Disabled':
        return <div>Disabled Content Goes Here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick('Profile')}
            className={`inline-block p-4 ${
              selectedTab === 'Profile'
                ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            Profile
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick('Dashboard')}
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            Dashboard
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick('Settings')}
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            Settings
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick('Contacts')}
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            Contacts
          </a>
        </li>
        <li>
          <a
            className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Disabled
          </a>
        </li>
      </ul>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProjectDashboard;
