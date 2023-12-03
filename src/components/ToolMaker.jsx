import React, {useState} from 'react';
import tools from './toolMaker.json'
import SuccessModal from './successModal';
// import Slider from './Slider';

const ToolMaker = () => {

    const[showDomain, setShowDomain] = useState(false);
    const[showSpecs, setShowSpecs] = useState(false);
    const[showAiTools, setShowAiTools] = useState(false);
    const[specsSet, SetSpecsSet] = useState(null);
    const[domainName, setDomainName] = useState('+Add Domain');
    const[aiToolName, setAiToolName] = useState('+Add AI tool');
    const[specName, setSpecName] = useState(null);
    const[showModal, setShowModal] = useState(false);
    
    return (
        <div className="tool-maker-container rounded-lg overflow-hidden flex flex-col w-[100%]  ">
            <div className="section-1  items-center justify-between py-10 px-40 border-b border-gray-300 rounded-xl m-8" style={{ "backgroundColor": "#E8E8E8" }}>
                <h1 className="text-Text-Black text-center font-Lato text-3xl font-bold leading-normal tracking-tight">
                    Create your very own Personalized AI tool with Trumio
                </h1>
                <div className="w-full h-[30vh] flex space-x-4 flex-1 mb-10 mt-8">

                    <div className="flex-1  p-4 rounded-md bg-white cursor-pointer" onClick={() => {setShowAiTools(false); setShowDomain(true)}}>
                        <div className="text-Text text-center font-Lato text-xl font-normal leading-normal tracking-wider opacity-50 mt-20">
                            {domainName}
                            {specName}
                        </div>

                    </div>
                    <img className='h-12 w-12 mt-20 rounded-full' src="https://trumio.ai/wp-content/uploads/2023/07/Real-World-Expereinces-student.png"></img>

                    {/* Second Card */}
                    <div className="flex-1 bg-white rounded-md  p-4 cursor-pointer">

                        <div className="text-Text text-center font-Lato text-xl font-normal leading-normal tracking-wider opacity-50 mt-20" onClick={() => {setShowDomain(false); setShowSpecs(false); setShowAiTools(true)}}>
                            {aiToolName}
                        </div>

                    </div>

                </div>
                <div className='flex flex-col content '>
                    <button onClick={() => {setShowModal(true)}} className=' rounded-full text-white bg-blue-500 w-[70%] p-2 mx-auto'>Generate</button>
                    <p className="text-Text-Black text-center font-Lato text-base font-normal leading-normal tracking-wide">
                        You have 3 attempts remaining. Visit Arcade to earn more
                    </p>

                </div>
            </div>

            {showDomain && !showAiTools && <div className='ml-8'>
                <h1 className="text-Text-Black font-Lato text-2xl font-bold leading-normal tracking-tight">Choose your Domain</h1>
                <div className='flex flex-row w-[100%]'>
                {
                    tools.Domains && tools.Domains.map((ele, index) => { 
                        return <div key={index} className='w-[18%] h-40 mr-6 border-gray-300 rounded-lg bg-neutral-400 text-center cursor-pointer' onClick={() => {setShowAiTools(false); setShowSpecs(true); SetSpecsSet(ele.name); setDomainName(ele.name)}}>
                                {ele.name}
                        </div>
                    })
                }
                </div>
            </div>}

            {showSpecs && !showAiTools && <div className='ml-8'>
                <h1 className="text-Text-Black font-Lato text-2xl font-bold leading-normal tracking-tight">Select Specification</h1>
                <div className='flex flex-row w-[100%]'>
                {
                    tools.specs && tools.specs[specsSet].map((ele, index) => { 
                        return <div key={index} className='w-[18%] h-40 mr-6 border-gray-300 rounded-lg bg-neutral-400 text-center cursor-pointer' onClick={() => {setSpecName(ele.name)}}>
                                {ele.name}
                        </div>
                    })
                }
                </div>
            </div>}

            {showAiTools && !showDomain && <div className='ml-8'>
                <h1 className="text-Text-Black font-Lato text-2xl font-bold leading-normal tracking-tight">Choose AI Tool</h1>
                <div className='flex flex-row w-[100%]'>
                {
                    tools.aiTools && tools.aiTools.map((ele, index) => { 
                        return <div key={index} className='w-[18%] h-40 mr-6 border-gray-300 rounded-lg bg-neutral-400 text-center cursor-pointer' onClick={() => {setAiToolName(ele.name)}}>
                                {ele.name}
                        </div>
                    })
                }
                </div>
            </div>}

            <div className='ml-8'>
                <h1 className="text-Text-Black font-Lato text-2xl font-bold leading-normal tracking-tight">Your Personalised Tools</h1>
                <div className='flex flex-row w-[100%]'>
                {
                    tools.myTools && tools.myTools.map((ele, index) => { 
                        return <div key={index} className='w-[18%] h-40 mr-6 border-gray-300 rounded-lg bg-neutral-400 text-center cursor-pointer'>
                                {ele.name}
                        </div>
                    })
                }
                </div>
            </div>

            {showModal && <SuccessModal setShowModal = {setShowModal} aiToolName = {aiToolName} specName = {specName} domainName = {domainName}/>}
            
        </div>
    );
};

export default ToolMaker;
