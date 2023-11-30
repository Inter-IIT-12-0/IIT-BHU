"use client"
import Navbar from "../../../components/Navbar";
import StudentSidebar from "../../../components/StudentSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectDashboard from "../../../components/ProjectDashboard";

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

  return (
    <main className='w-[100vw]'>
      <div className='flex flex-col w-full h-full'>
        <Navbar />
        <div className='flex w-full h-full'>
          <StudentSidebar />
          <div className="w-full flex flex-col px-20 py-5">
            <div className="flex justify-end">
              <span className="text-blue-500 underline underline-offset-2 mx-5">Team Chat</span>
              <span className="text-blue-500 underline underline-offset-2 mx-5">Show Milestones</span>
            </div>
            <div className="my-5">
              <h3 className="font-bold text-xl"> {project.title} </h3>
              {
                Object.keys(project).length !== 0 ? <ProjectDashboard project={project} /> : <></>
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
