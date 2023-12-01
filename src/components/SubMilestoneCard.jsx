import React, { useState } from 'react';
import Activity_Icon from '../../public/Images/Activity_Icon.svg';
import Share_Icon from '../../public/Images/Share_Icon.svg';
import Notes_Icon from '../../public/Images/Notes_Icon.svg';
import ActivityBar from './ActivityBar';
import Notes from './Notes';

const SubMilestoneCard = ({ submilestone, setSelectedSubmilestone, project, setTimelineOpen }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const getInitialLetter = (fileName) => {
    return fileName.charAt(0).toUpperCase();
  };

  const [selectedOption, setSelectedOption] = useState("");
  return (
    <main className='bg-white flex w-full h-full'>
      <div className='flex flex-col px-10 pb-20 w-full'>
        <div className='w-full flex justify-center items-center mt-3'> <span className='flex justify-center items-center rounded-full h-10 w-10 bg-black text-white cursor-pointer' onClick={() => setSelectedSubmilestone(null)}>X </span>  </div>
        <div>
          {/* Main Heading and Text Options */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-black font-Lato text-5xl font-medium leading-normal tracking-wide">{submilestone.title}</h1>
            <div className="flex space-x-4">
              <p className="text-blue-500 text-lg font-Lato font-semibold leading-normal tracking-tight underline cursor-pointer">Team Chat</p>
              <p className="text-blue-500 text-lg font-Latol font-semibold leading-normal tracking-tight underline cursor-pointer" onClick={() => setTimelineOpen(true)} >Milestone Timeline</p>
            </div>
          </div>

          {/* Text Description */}
          <h1 className="text-black font-Lato text-xl font-medium leading-normal tracking-tight" style={{ "letterSpacing": 0.7 }}>DESCRIPTION</h1>
          <p className="text-zinc-500 font-Lato text-xl leading-normal tracking-tight" style={{ letterSpacing: '0.7px' }}>
            {submilestone.description}
          </p>

          <h1 className="text-black font-Lato text-xl font-medium leading-normal tracking-tight mt-4" style={{ "letterSpacing": 0.7 }}>Dates</h1>
          <p className="text-zinc-500 font-Lato text-xl leading-normal tracking-tight" style={{ letterSpacing: '0.7px' }}>
            {(new Date(submilestone.startDate)).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })} - {(new Date(submilestone.endDate)).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>

          <h1 className="text-black mt-6 mb-5 font-Lato text-2xl font-medium leading-normal tracking-tight" style={{ "letterSpacing": 0.7 }}>CONNECTED APPS</h1>
          {/* Cards */}
          <div className="flex space-x-4 pl-5">
            {project.connectedApps.map((connectedApp, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 bg-gray-200 p-8" style={{ "width": "200px", borderRadius: 28 }}>
                {/* Card Image */}
                <img
                  src={connectedApp.tool}
                  alt={`Image${index}`}
                  className="mb-4 rounded-lg"
                />
                {/* Card Content */}
                <a href={connectedApp.url} target='_blank' className='cursor-pointer flex justify-center text-blue-500 -mb-4'>
                  <span>Click Here</span>
                </a>
              </div>
            ))}
          </div>

          {/* File Upload */}
          <h1 className="text-black font-Lato text-2xl font-medium leading-normal tracking-tight mt-8" style={{ "letterSpacing": 0.7 }}>UPLOAD WORK</h1>
          <div className="mt-8">
            <input
              id="fileInput"
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />



            {/* Display Uploaded File Names in Flex-Row Container */}
            {(

              <div className="mt-4 border p-2 flex flex-row">
                <label htmlFor="fileInput" className="cursor-pointer border p-2">
                  <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-upload-button-user-interface-anggara-basic-outline-anggara-putra.png" alt="external-upload-button-user-interface-anggara-basic-outline-anggara-putra"></img>{/* Adjust size based on your icon */}
                </label>
                {selectedFiles.map((file, index) => (
                  <div key={index} className="mx-4 bg-slate-200 rounded-md p-2">
                    {file.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='w-24 h-[100vh] px-1'>
        <div className={`relative flex flex-col justify-center items-center py-2 mb-4 cursor-pointer ${selectedOption === 'Activity' && 'bg-indigo-50'}`}>
          <div>
            <Activity_Icon className="scale-75" onClick={() => {
              selectedOption === 'Activity' ? setSelectedOption(null) :
                setSelectedOption("Activity")
            }} />
            <span>Activity</span>
          </div>
          {
            selectedOption === 'Activity' && <ActivityBar activities={project.activities}/>
          }
        </div>
        <div className={`flex flex-col justify-center items-center py-2 mb-4 cursor-pointer ${selectedOption === 'Share' && 'bg-indigo-50'}`}>
          <div>
            <Share_Icon className="scale-75" onClick={() => {
              selectedOption === 'Share' ? setSelectedOption(null) :
                setSelectedOption("Share")
            }} />
          </div>
          <span>Share</span>
        </div>
        <div className={`relative flex flex-col justify-center items-center py-2 mb-4 cursor-pointer ${selectedOption === 'Notes' && 'bg-indigo-50'}`}>
          <div>
            <Notes_Icon className="scale-75" onClick={() => {
              selectedOption === 'Notes' ? setSelectedOption(null) :
                setSelectedOption("Notes")
            }} />
          </div>
          <span>Notes</span>
          {
            selectedOption === 'Notes' && <Notes submilestone={submilestone} />
          }
        </div>
      </div>
      {/* <ActivityBar /> */}
    </main>
  );
};

export default SubMilestoneCard;
