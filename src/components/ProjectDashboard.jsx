import React, { useEffect, useState } from 'react';
import MilestoneTable from './MileStoneProject';
import Calendar from './Calendar';
import Healthdashboard from './HealthDashboard';
import TeamCard from './TeamCard';
import AppCard from './AppCard';
import SubMilestoneCard from './SubMilestoneCard';
import MilestoneTableClient from './MilestoneTableClient';
import FeedbackForm from './FeedbackForm';
import Timeline from "../../public/Images/Timeline.svg";
import MilestonesTimeline from './MilestonesTimeline';



const ProjectDashboard = ({ project, setIsOpen, isOpen, setSelectedSubmilestone, role, setProject, setAiOpen }) => {
  const [selectedTab, setSelectedTab] = useState('Health');
  const [timelineOpen, setTimelineOpen] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Milestones':
        if (role === "Client") return <MilestoneTableClient project={project} />
        return <MilestoneTable project={project} setSelectedSubmilestone={setSelectedSubmilestone} setProject={setProject} />
      case 'Timeline':
        return <Calendar />;
      case 'Health':
        return <Healthdashboard project={project} />;
      case 'Apps':
        return <div> <AppCard project={project} /> </div>;
      case 'Team':
        return <div> <TeamCard project={project} /> </div>;
      case 'Feedback':
        return <div> <FeedbackForm project={project} /> </div>
      default:
        return null;
    }
  };

  useEffect(() => {

  }, [timelineOpen])

  return (
    <div>
      <div className={`flex flex-col w-full h-full`}>
        <div className='h-16 shadow-md w-full flex items-center justify-between px-16 relative'>
          <div className='flex gap-5'>
            <div className={`inline-block px-8 py-1 rounded-2xl cursor-pointer ${selectedTab === 'Health' ? 'bg-sky-700 text-white' : 'border border-gray-400 font-semibold text-gray-400'}`} onClick={() => handleTabClick('Health')}>Health</div>

            <div className={`inline-block px-8 py-1 rounded-2xl cursor-pointer ${selectedTab === 'Milestones' ? 'bg-sky-700 text-white' : 'border border-gray-400 font-semibold text-gray-400'}`} onClick={() => handleTabClick('Milestones')}>Milestones</div>



            {
              (role === 'Student' || role === 'Professor' || role === 'Learner') &&
              <div className={`inline-block px-8 py-1 rounded-2xl cursor-pointer ${selectedTab === 'Apps' ? 'bg-sky-700 text-white' : 'border border-gray-400 font-semibold text-gray-400'}`} onClick={() => handleTabClick('Apps')}>Apps</div>
            }

            <div className={`inline-block px-8 py-1 rounded-2xl cursor-pointer ${selectedTab === 'Team' ? 'bg-sky-700 text-white' : 'border border-gray-400 font-semibold text-gray-400'}`} onClick={() => handleTabClick('Team')}>Team</div>

            <div className={`inline-block px-8 py-1 rounded-2xl cursor-pointer ${selectedTab === 'Feedback' ? 'bg-sky-700 text-white' : 'border border-gray-400 font-semibold text-gray-400'}`} onClick={() => handleTabClick('Feedback')}>Feedback</div>

            <div className={`inline-block px-8 py-1 rounded-2xl cursor-pointer ${selectedTab === 'Timeline' ? 'bg-sky-700 text-white' : 'border border-gray-400 font-semibold text-gray-400'}`} onClick={() => handleTabClick('Timeline')}>Timeline</div>

            <div className={`inline-block px-8 py-1 rounded-2xl cursor-pointer ${selectedTab === 'Chat' ? 'bg-sky-700 text-white' : 'border border-gray-400 font-semibold text-gray-400'}`}>Chat</div>
          </div>
          <div className='flex gap-6'>
            <button className='bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-1 text-white rounded-2xl' onClick={() => setAiOpen(true)}> AI </button>
            <div className='relative'>
              <Timeline onClick={() => setTimelineOpen(true)} className="cursor-pointer" />
              {
                timelineOpen &&
                <MilestonesTimeline setTimelineOpen={setTimelineOpen} project={project} />
              }
            </div>
          </div>
        </div>
        <div className={`mt-4 px-8 h-full max-h-[75vh] overflow-scroll overflow-y-auto overflow-x-hidden ${timelineOpen && 'opacity-30'} `}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
