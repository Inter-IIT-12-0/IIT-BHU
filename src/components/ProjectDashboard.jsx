import React, { useState } from 'react';
import MilestoneTable from './MileStoneProject';
import Calendar from './Calendar';
import Healthdashboard from './HealthDashboard';
import TeamCard from './TeamCard';
import AppCard from './AppCard';



const ProjectTimeline = ({project}) => {
  const [selectedTab, setSelectedTab] = useState('Milestones');
  const projectone = {
    "title": "Your Project Title",
    "statement": "Your Project Statement",
    "milestones": [
      {
        "dueDate": "2023-12-31",
        "heading": "Milestone 1",
        "description": "Description for Milestone 1",
        "submissionLink": "Submission Link for Milestone 1",
        "feedbackLink": "Feedback Link for Milestone 1",
        "subMilestones": [
          {
            "title": "SubMilestone 1",
            "isCompleted": false,
            "status": "Not Started",
            "dueDate": "2023-12-15",
            "assignedTo": "userId",
            "description": "Description for SubMilestone 1",
            "startDate": null,
            "endDate": null,
            "Aitools": ["Engineering"],
            "work": {
              "fileType": "file",
              "file": "Sample File Content" // Note: This is a placeholder. You might need to handle file content differently.
            },
            "stickyNotes": []
          }
          // Add more subMilestones as needed
        ],
        "isCompleted": false,
        "status": "Not Started",
        "payment": 1000
      }
      // Add more milestones as needed
    ],
    "userAgreement": {
      // Define user agreement fields as needed
    },
    "assignedTeam": "teamId",
    "assignedBy": "userId",
    "logo": "path/to/logo.png",
    "health": {
      "progress": 0
    },
    "startDate": "2023-01-01",
    "endDate": "2023-12-31",
    "activity": [
      {
        "submilestone": {
          "title": "SubMilestone 1",
          "isCompleted": false,
          "status": "Not Started",
          "dueDate": "2023-12-15",
          "assignedTo": "userId",
          "description": "Description for SubMilestone 1",
          "startDate": null,
          "endDate": null,
          "Aitools": ["Engineering"],
          "work": {
            "fileType": "file",
            "file": "Sample File Content"
          },
          "stickyNotes": []
        },
        "type": "CREATE",
        "timestamp": "2023-11-30T00:00:00.000Z",
        "user": "userId",
        "message": "Project created"
      }
      // Add more activity entries as needed
    ],
    "clientRequirements": {
      "paymentType": "Fixed",
      "payment": 5000,
      "workDays": ["Monday", "Wednesday", "Friday"],
      "requiredTools": ["Engineering"],
      "files": []
    },
    "work": {
      "fileType": "file",
      "file": "Sample File Content"
    },
    "duration": 6,
    "domain": "Your Project Domain",
    "postedOn": "2023-11-30T00:00:00.000Z",
    "status": "In Review",
    "location": "Project Location",
    "connectedApps": [
      ["Figma", "http://figma.com"]
    ]
  };
  
  console.log(JSON.stringify(project, null, 2));
  
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Milestones':
        return <MilestoneTable project={project}/>
      case 'Timeline':
        return <Calendar />;
      case 'Health':
        return <Healthdashboard />;
      case 'Apps':
        return <AppCard project={projectone} />;
      case 'Teams':
        return (
          <>
          <TeamCard project={project} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-11/12 mt-8">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick('Milestones')}
            className={`inline-block p-4 ${
              selectedTab === 'Milestones'
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
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            Timeline
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick('Apps')}
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            Apps
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick('Health')}
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            Health
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick('Teams')}
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            Teams
          </a>
        </li>
      </ul>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProjectTimeline;
