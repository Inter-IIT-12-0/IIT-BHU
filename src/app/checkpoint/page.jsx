"use client"
import React, { useState } from 'react';

const MAX_COUNT = 5;

function Checkpoint() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileLimit, setFileLimit] = useState(false);

    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some(file => {
            if (uploaded.findIndex(f => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
            return false;
        });
        if (!limitExceeded) setUploadedFiles(uploaded);
    };

    const handleFileEvent = e => {
        const chosenFiles = Array.from(e.target.files);
        handleUploadFiles(chosenFiles);
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
            {/* Card Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-semibold mb-2">Checkpoint</h1>
                <p className="text-gray-600">A React page with text data, SVG icons, and file upload functionality.</p>
            </div>

            {/* Text Data 1 */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p>This is the first text data on the page.</p>
            </div>

            {/* Text Data 2 */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Date</h2>
                <p>This is the second text data on the page.</p>
            </div>

            {/* SVG Section */}
            <div className="flex space-x-4 items-center mb-6">
                {/* SVG 1 */}
                <img src="https://img.icons8.com/color/48/figma--v1.png" className='h-8 w-8'></img>
                <img src="https://img.icons8.com/color/48/figma--v1.png" className='h-8 w-8'></img>
                <label htmlFor="fileUpload">
                    <img src="https://img.icons8.com/ios/50/add--v1.png" className={`btn btn-primary w-8 h-8 ${!fileLimit ? '' : 'disabled'}`}></img>
                </label>
            </div>

            {/* File Upload Section */}
            <div className="mb-6">
                <input
                    id="fileUpload"
                    type="file"
                    multiple
                    accept="application/pdf, image/png"
                    onChange={handleFileEvent}
                    disabled={fileLimit}
                    className="hidden"
                />

                <label htmlFor="fileUpload">
                    <img src="https://img.icons8.com/ios/50/add--v1.png" className={`btn btn-primary w-8 h-8 ${!fileLimit ? '' : 'disabled'}`}></img>
                </label>

                <div className="uploaded-files-list mt-4">
                    {uploadedFiles.map((file, index) => (
                        <div key={index} className="bg-gray-200 p-2 rounded">
                            {file.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Checkpoint;
