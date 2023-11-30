"use client"
import Navbar from "../../../components/Navbar";
import StudentSidebar from "../../../components/StudentSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectDashboard from "../../../components/ProjectDashboard";
import GptAi from "../../../components/GptAi";
import MilestonesTimeline from "../../../components/MilestonesTimeline";

const Project = ({ params }) => {
  // const project = {
  //   "id": 2,
  //   "title": "Project2",
  //   "statement": "This is a sample project statement.",
  //   "logo": "https://i.gadgets360cdn.com/products/large/vivo-t2-5g-db-709x800-1681200173.jpg",
  //   "startDate": "2023-12-01T00:00:00.000Z",
  //   "endDate": "2023-12-05T00:00:00.000Z",
  //   "clientName": "Facebook",
  //   "milestones": [
  //     {
  //       "dueDate": "2023-12-01T00:00:00.000Z",
  //       "heading": "Milestone 1",
  //       "submissionLink": "https://sample-submission-link.com",
  //       "feedbackLink": "https://sample-feedback-link.com",
  //       "subMilestones": [
  //         {
  //           "heading": "SubMilestone 1",
  //           "isCompleted": false
  //         },
  //         {
  //           "heading": "SubMilestone 2",
  //           "isCompleted": true
  //         }
  //       ],
  //       "isCompleted": false,
  //       "status": "Not Started"
  //     }
  //   ],
  //   "userAgreement": {},
  //   "assignedTeam": "60a72b7c56f18a53bce5a0c1"
  // }

  const [project, setProject] = useState({})
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { id } = params;

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    axios.get(`/api/project/${id}`)
      .then(res => {
        setProject(res.data);
      }).catch(err => console.log(err));
  }, [])
  const [AiOpen, setAiOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);

  return (
    <>
      {AiOpen && (
        <GptAi setAiOpen={setAiOpen} />
      )}
      <main className={`w-[100vw] ${AiOpen ? 'blur-xl' : ''} `}>
        <div className={` ${timelineOpen ? 'w-[1120px]' : 'w-full'} transition-all duration-1000`}>
          <div className='flex flex-col w-full h-full'>
            <Navbar />
            <div className='flex w-full h-full'>
              <StudentSidebar />
              <div className="w-full flex flex-col px-20 py-5">
                <div className="flex justify-between mt-5">
                  <div className={`${AiOpen ? 'hidden' : ''}`}>
                    <h3 className="font-bold text-3xl"> {project.title} </h3>
                  </div>
                  <div className={`${AiOpen ? 'hidden' : ''}`}>
                    <span className="text-blue-500 underline underline-offset-2 mx-5 cursor-pointer">Team Chat</span>
                    {
                      timelineOpen ? <></> : <span onClick={() => setTimelineOpen(true)} className="text-blue-500 underline underline-offset-2 mx-5 cursor-pointer">Show Milestones</span>
                    }
                  </div>
                </div>
                <div className="my-5">

                  {
                    Object.keys(project).length !== 0 ? <ProjectDashboard project={project} setAiOpen={setAiOpen} AiOpen={AiOpen} /> : <></>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          timelineOpen ? <MilestonesTimeline setTimelineOpen={setTimelineOpen} /> : <></>

        }
        <img width="50" height="50" src="https://img.icons8.com/ios/50/message-bot.png" alt="message-bot" className='absolute top-2 right-1/2 cursor-pointer' onClick={() => setAiOpen(true)} />

      </main>
    </>
  );
};

export default Project;
