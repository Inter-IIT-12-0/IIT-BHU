import React from 'react';
import Link from "next/link"

const TeamCard = ({ project }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {project?.assignedTeam.teamUserMap.map((Member, appIndex) => (
        <div
          key={appIndex}
          className="flex flex-col justify-center p-6 shadow-md rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100"
        >
          <img
            src={Member.user && Member.user.avatarUrl}
            alt=""
            className="w-20 h-20 mx-auto rounded-full dark:bg-slate-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">{Member.user && Member.user.name}</h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-400">{Member.role}</p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
              >
                <Link href={`/profile/${Member.user && Member.user._id}`} className='border border-white py-1 px-2 rounded-md'>Go to Profile</Link>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
