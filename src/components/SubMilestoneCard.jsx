import React, { useState } from 'react';
import Activity_Icon from '../../public/Images/Activity_Icon.svg';
import Share_Icon from '../../public/Images/Share_Icon.svg';
import Notes_Icon from '../../public/Images/Notes_Icon.svg';
import PlusIcon from '../../public/Images/PlusIcon.svg';
import ActivityBar from './ActivityBar';
import Notes from './Notes';
import axios from 'axios';
import { useEffect } from 'react';
import { useSession } from "next-auth/react"
import toast from 'react-hot-toast';

const SubMilestoneCard = ({ submilestone, setSelectedSubmilestone, project, setTimelineOpen }) => {
  const { data: session } = useSession()
  const [tool, setTool] = useState('');
  const [url, setUrl] = useState('');
  const [nam, setName] = useState('');
  const [link, setLink] = useState('');
  const [docUrl, setDocUrl] = useState('');
  const [docName, setDocName] = useState('');

  const [connectedApps, setConnectedApps] = useState(0);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'docName') {
      return setDocName(value);
    }
    if(name === 'docUrl') {
      return setDocUrl(value);
    }
    if (name === 'tool') {
      setTool(value);
    } else if (name === 'url') {
      setUrl(value);
    }
    else if (name === 'link') {
      setLink(value);
    }
    else {
      setName(value);
    }
  };
  const [isOpen, setOpen] = useState(0);
  const [isOpen2, setOpen2] = useState(1);
  const handleFileChange = (e) => {
    const files = Array.from(e.target);
    setSelectedFiles((prevFiles) => [...prevFiles, files]);
  };
  useEffect(() => {
  }, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: existingProject } = await axios.get(`/api/project/${project._id}`);
      existingProject.connectedApps.push({ tool, url });
      existingProject.activities.push({ submilestone, type: 'CREATE', timestamp: Date.now(), user: session.user._id, message: "Linked a tool by providing its endpoint in the milestone" });
      const response = await axios.patch(`/api/project/${project._id}`, existingProject);

    } catch (error) {
      console.log(error)
    }

    setOpen(0);
  };
  const handleWorkSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: existingProject } = await axios.get(`/api/project/${project._id}`);
      existingProject.work.push({ title: docName, url: docUrl });
      existingProject.activities.push({ submilestone, type: 'CREATE', timestamp: Date.now(), user: session.user._id, message: "Added the file" + docName + "in the submilestone by giving its URL" });
      const response = await axios.patch(`/api/project/${project._id}`, existingProject);
      toast.success("Added Work")
    } catch (error) {
      console.log(error)
    }

    setOpen(0);
  };

  const getInitialLetter = (fileName) => {
    return fileName.charAt(0).toUpperCase();
  };

  const [selectedOption, setSelectedOption] = useState("");
  return (
    <main className='bg-white flex w-screen  h-screen max-h-[90vh] overflow-scroll overscroll-y-auto overflow-x-hidden'>
      <div className='flex flex-col px-10 pb-20 w-full'>
        <div className='w-full flex justify-center items-center mt-3'> <span className='flex justify-center items-center rounded-full h-10 w-10 bg-black text-white cursor-pointer' onClick={() => setSelectedSubmilestone({})}>X </span>  </div>
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

          <h1 className="text-black mt-6 mb-5 font-Lato text-2xl font-medium leading-normal tracking-tight " style={{ "letterSpacing": 0.7 }}>CONNECTED APPS</h1>
          {/* Cards */}
          <div className="grid grid-cols-6 flex-wrap space-x-4 pl-5 bg-blue-100 p-8 rounded-3xl">
            {project.connectedApps.map((connectedApp, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 mb-5 shadow-xl cursor-pointer bg-gray-200 p-8" style={{ "width": "200px", borderRadius: 28 }}>
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
            <div className='rounded-3xl flex justify-center items-center cursor-pointer shadow-lg bg-gray-200 p-8' style={{ height: '230px' }}>
              <div onClick={() => setOpen(1)}>
                <label>Add App</label>
                <PlusIcon className="cursor-pointer ml-3" ></PlusIcon>
              </div>
            </div>
            <div>
              {isOpen && <div>
                <form onSubmit={handleFormSubmit} className='rounded-3xl shadow-lg p-8 flex flex-col justify-center w-72 bg-white'>
                  <div className='flex flex-row mt-4'>
                    <label className='mr-2 font-bold'>
                      Tool
                    </label>
                    <input
                      type="text"
                      name="tool"
                      value={tool}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='flex flex-row mt-4'>
                    <label className='mr-2 font-bold'>
                      Url</label>
                    <input
                      type="text"
                      name="url"
                      value={url}
                      onChange={handleInputChange}
                    />
                  </div>

                  <br />
                  <div>
                    <button className='py-2 px-5 rounded-full bg-blue-900 text-white font-semibold' type="submit">Submit</button>
                  </div>
                </form>

              </div>}
            </div>
          </div>

          {/* File Upload */}
          <h1 className="text-black font-Lato text-2xl font-medium leading-normal tracking-tight mt-8" style={{ "letterSpacing": 0.7 }}>UPLOAD WORK</h1>
          <div className='mt-8'>
            <div>
              {isOpen2 && <div>
                <form onSubmit={handleWorkSubmit} className='rounded-3xl shadow-lg p-8 flex flex-col justify-center bg-gray-100'>
                  <div className='flex flex-row mt-4'>
                    <label className='mr-2 font-bold'>
                      Document Name</label>
                    <input
                      type="text"
                      name="docName"
                      value={docName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='flex flex-row mt-4'>
                    <label className='mr-2 font-bold'>
                    Url</label>
                    <input
                      type="text"
                      name="docUrl"
                      value={docUrl}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <button className='py-2 px-5 rounded-full bg-blue-900 text-white font-semibold mt-4' type="submit">Submit</button>
                  </div>
                </form>

              </div>}
            </div>
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
            selectedOption === 'Activity' && <ActivityBar activities={project.activities} />
          }
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
            selectedOption === 'Notes' && <Notes submilestone={submilestone} project={project} />
          }
        </div>
      </div>
    </main>
  );
};

export default SubMilestoneCard;
