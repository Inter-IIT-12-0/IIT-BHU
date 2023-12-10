"use client"
import React, { useEffect, useState } from 'react';
import tools from './toolMaker.json'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import Trash from "../../public/Images/trash.svg"
import Link from 'next/link';
// import Slider from './Slider';
import Domains from "../../models/Domains.json"


const ToolMaker = () => {

    const [showDomain, setShowDomain] = useState(false);
    const [showAiTools, setShowAiTools] = useState(false);
    const [domainName, setDomainName] = useState('+Add Domain');
    const [aiToolName, setAiToolName] = useState('+Add AI tool');
    const { data: session } = useSession();
    const defaultAiImage = "https://img.freepik.com/premium-vector/ai-technology-digital-artificial-intelligence-future-circuit-electronic-colorful-vector-logo-design_216988-1080.jpg"

    const submitHandler = async () => { 
        try {
            setShowDomain(false)
            setShowAiTools(false)
            setDomainName("+Add Domain")
            setAiToolName("+Add AI tool")
            const response = await axios.post('/api/myTools', {
                name: domainName + '-' + aiToolName,
                image: defaultAiImage
            })
            toast.success("Tool Generated successfully!")
            window.location.reload()
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
        }
    }
    const handleDelete = async (name) => {
        try {
            const response = await axios.delete(`/api/myTools/${name}`)
            toast.success("Tool deleted successfully!")
            window.location.reload()
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
        }
        
    }

    return (
        <div className="tool-maker-container rounded-lg flex flex-col w-[100%] pb-8 overflow-y-auto overflow-scroll overflow-x-hidden max-h-[90vh]">
            <div className="section-1 items-center justify-between py-10 xl:px-40 px-10 border-b bg-[#001338] border-gray-300 rounded-xl m-8">
                <h1 className="text-white text-center font-Lato text-3xl font-bold leading-normal tracking-tight">
                    Create your very own Personalized AI tool with Trumio
                </h1>
                <div className="w-full h-[30vh] flex space-x-4 flex-1 mb-10 mt-8" >

                    <div className={`flex-1 w-80 p-4 rounded-md bg-[#667188] cursor-pointer ${showDomain ? 'bg-[#ccd0d7] text-[#001338]' : 'text-white'}`} onClick={() => { setShowAiTools(false); setShowDomain(true) }}>
                        <div className="text-Text text-center font-Lato text-xl font-normal leading-normal tracking-wider opacity-50 mt-20">
                            {domainName}
                        </div>

                    </div>
                    <img className='h-12 w-12 mt-20 rounded-full' src="https://trumio.ai/wp-content/uploads/2023/07/Real-World-Expereinces-student.png"></img>

                    {/* Second Card */}
                    <div className={`flex-1 w-72 rounded-md bg-[#667188] p-4 cursor-pointer ${showAiTools ? 'bg-[#ccd0d7] text-[#001338]' : 'text-white'}`} onClick={() => { setShowDomain(false); setShowAiTools(true) }}>

                        <div className={`text-Text text-center font-Lato text-xl font-normal leading-normal tracking-wider opacity-50 mt-20`} >
                            {aiToolName}
                        </div>

                    </div>

                </div>
                <div className='flex flex-col content '>
                    <button
                        onClick={submitHandler}
                        disabled={domainName === "+Add Domain" || aiToolName === "+Add AI tool"}
                        className={`rounded-full text-[#001338] w-[70%] p-2 mx-auto bg-white`}
                    >
                        Generate
                    </button>
                    <p className="text-white text-center font-Lato text-base font-normal leading-normal tracking-wide">
                        You have {
                            session && session.user.aiToolsLimit - session.user.aiTools.length
                        } attempts remaining. Visit <Link href={"/arcade"} className='text-blue-300'> Arcade </Link> to earn more
                    </p>

                </div>
            </div>

            {showDomain && !showAiTools && <div className='ml-8'>
                <h1 className="text-Text-Black font-Lato text-2xl font-bold leading-normal tracking-tight mb-3">Choose your Domain</h1>
                <div className='flex flex-wrap w-[100%]'>
                    {
                        Domains.map((ele, index) => {
                            return <div key={index} className={`w-[18%] h-40 mr-6 mb-5 border-gray-300 rounded-lg   text-center cursor-pointer ${ele === domainName ? 'bg-neutral-500' : 'bg-neutral-400'} flex justify-center items-center`} onClick={() => { setShowAiTools(false); setDomainName(ele) }}>
                                {ele}
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
                            return <div key={index} className={`w-[18%] h-40 mr-6 border-gray-300 rounded-lg text-center cursor-pointer ${ele.name === aiToolName ? 'bg-neutral-500' : 'bg-neutral-400'}`} onClick={() => { setAiToolName(ele.name) }}>
                                {ele.name}
                            </div>
                        })
                    }
                </div>
            </div>}

            <div className='ml-8'>
                <h1 className="text-Text-Black font-Lato text-2xl font-bold leading-normal tracking-tight my-3">Your Personalised Tools</h1>
                <div className='flex flex-row w-[100%] '>
                    {
                        session && session.user.aiTools.map((ele, index) => {
                            return <div key={index} className='w-[18%] mr-6 justify-around items-center border-gray-300 rounded-lg bg-neutral-400 text-center cursor-pointer flex flex-col relative p-3' >
                                <Trash className="absolute -top-2 -right-2 z-40 items-center scale-125 " onClick={() => handleDelete(ele.name)}/>
                                <Link href={`/customTool/${ele.name}`}>
                                <h2> {ele.name} </h2>
                                <img src={ele.image} alt={ele.nme} className='w-28 h-28 rounded-xl' />
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>

            {/* {showModal && <SuccessModal setShowModal = {setShowModal} aiToolName = {aiToolName} domainName = {domainName}/>} */}

        </div>
    );
};

export default ToolMaker;
