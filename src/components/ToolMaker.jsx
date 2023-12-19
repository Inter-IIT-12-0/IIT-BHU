"use client"
import React, { useEffect, useState } from 'react';
import tools from './toolMaker.json'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import Trash from "../../public/Images/trash.svg"
import Link from 'next/link';


const ToolMaker = () => {
    const Domains = tools.Domains
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
        }
    }
    const handleDelete = async (name) => {
        try {
            const response = await axios.delete(`/api/myTools/${name}`)
            toast.success("Tool deleted successfully!")
            window.location.reload()
        } catch (error) {
            console.log(error)
        }

    }

    const domainImages = {
        "UI_UX_Designing": "/Images/UI_UX.png",
        "Engineering": "/Images/Engineering.png",
        "Product_Management": "/Images/Product.png",
        "Data_Analysis": "/Images/Data.png" ,
        "Consultancy" : "/Images/Consultancy.png" ,
        "Research" :"/Images/Research.png" ,
        "Software_Development": "/Images/Software.png",
        "Marketing_and_Branding": "/Images/Marketing.png",
        "Business_Development": "/Images/Business.png" ,
        "Project_Management": "/Images/Project.png",
        "Sustainability": "/Images/Sustainability.png",
        "AI_ML": "/Images/AIML.png"
    }

    const domainTags = {
        "UI_UX_Designing": "Obtaining UI inspirations, posters and generating UX copies & personas",
        "Engineering": "Bug reporting, generating code snippets with code analysis & visualization",
        "Product_Management": "Creating and launching market strategies, GTMs, Product documentations etc",
        "Data_Analysis": "Analyzing and interpreting data to extract valuable insights for decision-making",
        "Consultancy": "Providing expert advice and recommendations in specific domains",
        "Research": "Searching, sorting & summarizing research papers across relevant information",
        "Software_Development": "Designing, coding, testing, and maintaining software applications",
        "Marketing_and_Branding": "Creating campaign ideas, drafts & SEO fulfilled keywords in blogs, articles etc",
        "Business_Development": "Identifying opportunities, building relationships, and driving business growth",
        "Project_Management": "Planning, executing, and closing projects, ensuring goals are met",
        "Sustainability": "Developing and implementing sustainable practices and strategies",
        "AI_ML": "Developing and implementing artificial intelligence and machine learning algorithms"
    };

    const toolsImages = {
        "GPT": "/Images/GPT.png",
        "Bard": "/Images/Bard.webp",
        "Copilot": "/Images/Copilot.png"
    }

    const toolsTags = {
        "GPT": "Conversations Elevated, Intelligence Unleashed",
        "Bard": "Where Words Sing and Stories Resonate",
        "Copilot": "Your Journey, Our Expertise"
    }
    

    return (
        <div className="tool-maker-container rounded-lg flex flex-col w-[100%] pb-8 overflow-y-auto overflow-scroll overflow-x-hidden max-h-[90vh] bg-gray-200">
            <div className="section-1 items-center justify-between py-10 xl:px-40 px-10 border-b bg-[#001338] border-gray-300 rounded-xl m-8">
                <h1 className="text-white text-center font-Lato text-3xl font-bold leading-normal tracking-tight">
                    Create your very own Personalized AI tool with Trumio
                </h1>
                <div className="w-full h-[30vh] flex space-x-4 flex-1 mb-10 mt-8" >

                    <div className={`flex-1 w-80 p-4 rounded-md bg-[#667188] cursor-pointer ${showDomain ? 'bg-[#ccd0d7] text-[#001338]' : 'text-white'}`} onClick={() => { setShowAiTools(false); setShowDomain(true) }}>
                        <div className="text-Text text-center font-Lato text-xl font-normal leading-normal tracking-wider opacity-50 mt-20">
                            {domainName.replace(/_/g, " ")}
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
                            return <div key={index} className={`w-[30%] h-40 mr-6 mb-5 rounded-lg px-4 text-center cursor-pointer bg-white ${ele === domainName && 'shadow-lg border border-gray-400' } flex flex-col items-start justify-center gap-3`} onClick={() => { setShowAiTools(false); setDomainName(ele) }}>
                                <img src={domainImages[ele]} alt="" />
                                <span className='font-semibold'> {ele.replace(/_/g, " ")} </span>
                                <p className='text-sm text-neutral-500 text-start'> {domainTags[ele]} </p>
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
                            return <div key={index} className={`w-[20%] h-40 mr-6 mb-5 rounded-lg px-4 text-center cursor-pointer bg-white ${ele === aiToolName && 'shadow-lg border border-gray-400' } flex flex-col items-start justify-center gap-3`} onClick={() => { setAiToolName(ele) }}>
                            <img src={toolsImages[ele]} alt="" className='w-12 h-12'/>
                            <span className='font-semibold'> {ele} </span>
                            <p className='text-sm text-neutral-500 text-start'> {toolsTags[ele]} </p>
                        </div>
                        })
                    }
                </div>
            </div>}

            <div className='ml-8'>
                {
                    session && session.user.aiTools.length === 0 ? <></> :
                        <>
                            <h1 className="text-Text-Black font-Lato text-2xl font-bold leading-normal tracking-tight my-3">Your Personalised Tools</h1>
                            <div className='flex flex-row w-[100%] '>
                                {
                                    session?.user.aiTools.map((ele, index) => {
                                        return <div key={index} className=' mr-6 justify-around items-center rounded-lg bg-gradient-to-b from-[#001f5e] to-[#001338] w-[15%] text-center cursor-pointer flex flex-col relative p-3' >
                                            <Trash className="absolute -top-2 -right-2 z-40 items-center scale-125 " onClick={() => handleDelete(ele.name)} />
                                            <Link href={`/customTool/${ele.name}`} className='flex flex-col justify-center items-center'>
                                                <img src={`https://ui-avatars.com/api/?name=${ele.name.replace(/_/g, "+")}`} alt={ele.name} className='w-16 h-16 rounded-full shadow-xl' />
                                                <h2 className='text-white'> {ele.name} </h2>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                        </>
                }
            </div>

        </div>
    );
};

export default ToolMaker;
