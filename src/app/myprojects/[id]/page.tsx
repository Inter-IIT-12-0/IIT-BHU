"use client"
import Navbar from "../../../components/Navbar";
import StudentSidebar from "../../../components/StudentSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Project = ({ params }) => {
  const project = {
    "id": 2,
    "title": "Project2",
    "statement": "This is a sample project statement.",
    "logo": "https://i.gadgets360cdn.com/products/large/vivo-t2-5g-db-709x800-1681200173.jpg",
    "startDate": "2023-12-01T00:00:00.000Z",
    "endDate": "2023-12-05T00:00:00.000Z",
    "clientName": "Facebook",
    "milestones": [
      {
        "dueDate": "2023-12-01T00:00:00.000Z",
        "heading": "Milestone 1",
        "submissionLink": "https://sample-submission-link.com",
        "feedbackLink": "https://sample-feedback-link.com",
        "subMilestones": [
          {
            "heading": "SubMilestone 1",
            "isCompleted": false
          },
          {
            "heading": "SubMilestone 2",
            "isCompleted": true
          }
        ],
        "isCompleted": false,
        "status": "Not Started"
      }
    ],
    "userAgreement": {},
    "assignedTeam": "60a72b7c56f18a53bce5a0c1"
  }
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { id } = params;

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  useEffect(() => {

  })

  return (
    <div className="w-full">
      <StudentSidebar />
      <Navbar />
      <div className="pl-64 pt-24 pr-10">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              {project.title}
            </p>
            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
              <p>Sort By:</p>
              <select
                aria-label="select"
                className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
              >
                <option className="text-sm text-indigo-800">Latest</option>
                <option className="text-sm text-indigo-800">Oldest</option>
                <option className="text-sm text-indigo-800">Latest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800"
                href=""
              >
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              {/* Add more links as needed */}
            </div>
            <button
              onClick={togglePopup}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Task
              </p>
            </button>
          </div>

          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                  {/* Replace the content of each td with your actual data */}
                  <td>
                    <div className="ml-5">
                      <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input
                          placeholder="checkbox"
                          type="checkbox"
                          className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                        />
                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm"></div>
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-center pl-5">
                      <p className="text-base font-medium leading-none text-gray-700 mr-2">
                        Sample Task 1
                      </p>
                    </div>
                  </td>
                  <td className="pl-24">
                    {/* Add content for the other columns */}
                  </td>
                  {/* Add more td elements for other columns as needed */}
                </tr>

                {/* Add more table rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
