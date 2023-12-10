"use client"
import Navbar from "../../../components/Navbar";
import StudentSidebar from "../../../components/StudentSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectDashboard from "../../../components/ProjectDashboard";
import GptAi from "../../../components/GptAi";
import MilestonesTimeline from "../../../components/MilestonesTimeline";
import SubMilestoneCard from "../../../components/SubMilestoneCard";
import { useSession } from "next-auth/react";

const Project = ({ params }) => {

  const [project, setProject] = useState({})
  const { id } = params;
  const {data:session} = useSession()

  const [AiOpen, setAiOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [selectedSubmilestone, setSelectedSubmilestone] = useState({});

  useEffect(() => {
    axios.get(`/api/project/${id}`)
      .then(res => {
        setProject(res.data);
      }).catch(err => toast.error(err.response.data.error)
      );
  }, [selectedSubmilestone])

  return (
    <>
      {AiOpen && (
        <GptAi setAiOpen={setAiOpen} /> //! AI Tools for the workspace are in GptAi 
      )}
      <main className={`w-full h-[100vh] overflow-hidden`}>
        <div className={` ${timelineOpen ? 'w-[75vw]' : 'w-full'} transition-all duration-1000`}>
          <div className='flex flex-col w-full h-full'>
            <div>
              <Navbar />
            </div>
            {
              session &&  Object.keys(selectedSubmilestone).length === 0 ? (
                <div className='flex w-full h-full'>
                  <StudentSidebar page={"myprojects"}/>
                  <div className="w-full flex flex-col px-20 py-5">
                    <div className="flex justify-between mt-5">
                      <div>
                        <h3 className="font-bold text-3xl"> {project.title} </h3>
                      </div>
                      <div>
                        <span className="text-blue-500 underline underline-offset-2 mx-5 cursor-pointer">Team Chat</span>
                        {
                          timelineOpen ? <></> : <span onClick={() => setTimelineOpen(true)} className="text-blue-500 underline underline-offset-2 mx-5 cursor-pointer">Milestone Timeline</span>
                        }
                      </div>
                    </div>
                    <div className="my-5 max-h-[70vh] overflow-scroll overflow-y-auto overflow-x-hidden">

                      {
                        Object.keys(project).length !== 0 ? <ProjectDashboard project={project} role={session.user.role} setProject={setProject} setSelectedSubmilestone={setSelectedSubmilestone}/> : <></>
                      }
                    </div>
                  </div>
                </div>
              ) : 
              session ?
                <SubMilestoneCard submilestone={selectedSubmilestone} setSelectedSubmilestone={setSelectedSubmilestone} project={project} setTimelineOpen={setTimelineOpen} /> :
                <div className='flex w-full h-full'>
                  <StudentSidebar page={"myprojects"}/>
                  <div className="w-full flex flex-col px-20 py-5">
                    <div className="flex justify-between mt-5">
                      <div>
                        <h3 className="font-bold text-3xl"> {project.title} </h3>
                      </div>
                      <div>
                        <span className="text-blue-500 underline underline-offset-2 mx-5 cursor-pointer">Team Chat</span>
                        {
                          timelineOpen ? <></> : <span onClick={() => setTimelineOpen(true)} className="text-blue-500 underline underline-offset-2 mx-5 cursor-pointer">Milestone Timeline</span>
                        }
                      </div>
                    </div>
                    <div className="my-5 max-h-[70vh] overflow-scroll overflow-y-auto overflow-x-hidden">

                      {
                        Object.keys(project).length !== 0 ? <ProjectDashboard project={project} setSelectedSubmilestone={setSelectedSubmilestone} role={session.user.role} setProject={setProject}/> : <></>
                      }
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
        {
          timelineOpen ? <div className="max-h-[90vh] overflow-scroll overflow-y-scroll">
            <MilestonesTimeline setTimelineOpen={setTimelineOpen} project={project} />
          </div> : <></>

        }
        <img width="50" height="50" src="https://img.icons8.com/ios/50/message-bot.png" alt="message-bot" className='absolute top-2 right-1/2 z-40 cursor-pointer' onClick={() => setAiOpen(true)} />

      </main>
    </>
  );
};

export default Project;
