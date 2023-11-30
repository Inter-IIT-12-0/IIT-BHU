import React, { useState } from 'react';

const SubMilestoneCard = ({submilestone}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const getInitialLetter = (fileName) => {
    return fileName.charAt(0).toUpperCase();
  };

  return (
    <div className="container mx-auto p-8">
      {/* Main Heading and Text Options */}
      <div className="flex justify-between items-center mb-4">
      <h1 class="text-black font-Lato text-5xl font-medium leading-normal tracking-wide">{submilestone.title}</h1>
        <div className="flex space-x-4">
        <p class="text-black font-Lato text-2xl font-semibold leading-normal tracking-tight underline">Team Chat</p>
        <p class="text-black font-Lato text-2xl font-semibold leading-normal tracking-tight underline">Show Milestone</p>
        </div>
      </div>

      {/* Text Description */}
      <h1 class="text-black font-Lato text-2xl font-medium leading-normal tracking-tight" style={{"letterSpacing":0.7}}>Description</h1>
      <p className="text-gray-700 font-Lato text-2xl font-medium leading-normal tracking-tight" style={{ letterSpacing: '0.7px' }}>
      {submilestone.description}
    </p>

    <h1 class="text-black font-Lato text-2xl font-medium leading-normal tracking-tight" style={{"letterSpacing":0.7}}>Dates</h1>
      <p className="text-gray-700 font-Lato text-2xl font-medium leading-normal tracking-tight" style={{ letterSpacing: '0.7px' }}>
      {submilestone.startDate} - {submilestone.endDate}
    </p>

    <h1 class="text-black font-Lato text-2xl font-medium leading-normal tracking-tight" style={{"letterSpacing":0.7}}>CONNECTED APPS</h1>
      {/* Cards */}
      <div className="flex space-x-4 ">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex-shrink-0 w-1/3 bg-gray-200 p-4" style={{"height":"200px", "width":"200px", borderRadius:28}}>
            {/* Card Image */}
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.NI94miDnt29EtYfOyUGBUQHaLG&pid=Api&rs=1&c=1&qlt=95&w=76&h=115"
              alt={`Image${index}`}
              className="mb-4"
            />
            {/* Card Content */}
            <p>Card {index} Content</p>
          </div>
        ))}
      </div>

      {/* File Upload */}
      <h1 class="text-black font-Lato text-2xl font-medium leading-normal tracking-tight" style={{"letterSpacing":0.7}}>UPLOAD WORK</h1>
      <div className="mt-8">
        <input
        id="fileInput"
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        


        {/* Display Uploaded File Names in Flex-Row Container */}
        { (
            
          <div className="mt-4 border p-2 flex flex-row">
            <label htmlFor="fileInput" className="cursor-pointer border p-2">
            <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-upload-button-user-interface-anggara-basic-outline-anggara-putra.png" alt="external-upload-button-user-interface-anggara-basic-outline-anggara-putra"></img>{/* Adjust size based on your icon */}
          </label>
            {selectedFiles.map((file, index) => (
              <div key={index} className="mr-4">
                {file.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubMilestoneCard;
