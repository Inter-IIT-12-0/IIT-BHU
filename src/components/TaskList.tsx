"use client"
import React, { useState } from "react";

const TaskList = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="sm:px-6 w-full">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center justify-between">
          <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Tasks
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
              href="javascript:void(0)"
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
  );
};

export default TaskList;
