import React from 'react'
import Location_Icon from "../../public/Images/Location_Icon.svg"
import Money_Icon from "../../public/Images/Money_Icon.svg"
import Heart_Icon from "../../public/Images/Heart_Icon.svg"
import Yellow_Star from "../../public/Images/Yellow_Star.svg"
import Star_Icon from "../../public/Images/Star_Icon.svg"
import Domain from "../../public/Images/Domain.svg"
import Payment from "../../public/Images/Payment.svg"
import Location from "../../public/Images/Location.svg"
import Calendar3 from "../../public/Images/Calendar3.svg"
import Timer from "../../public/Images/Timer.svg"
import Skills from "../../public/Images/Skills.svg"


const SmallCard = ({ heading, logo, subheading }) => {
    return (
        <div className='flex items-center justify-start'>
            <div className='mx-3 p-2 rounded-lg flex justify-center items-center bg-gray-200'>
                {logo}
            </div>
            <div className='flex flex-col'>
                <span className='font-semibold'> {heading} </span>
                <span className='text-neutral-500' > {subheading} </span>
            </div>
        </div>
    )
}

const ProjectCard = ({ project, setOpenedProj, page }) => {

    function getDaysDifference(startDate, endDate) {
        startDate = new Date(startDate)
        endDate = new Date(endDate)
        const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const timeDifference = endUTC - startUTC;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    }

    function trimPara(paragraph, maxLength) {
        if (paragraph.length <= maxLength) {
            return paragraph;
        } else {
            return paragraph.substring(0, maxLength) + '...';
        }
    }

    return (
        <div className={`bg-white  rounded-2xl flex px-8 py-8 ${page !== 'createBid' ? 'cursor-pointer hover:scale-105 duration-500 transition-all mb-12' : 'mt-6'}`} onClick={() => {
            if(page !== 'createBid') {
                setOpenedProj(project)
            }
        }}>
            <div className='xl:w-2/3 w-[60%]'>
                <div className='text-neutral-700 text-sm font-semibold'> {project.status === 'Open' ? 'Open for Bidding' : <span className='text-red-500'>In Review</span>} </div>
                <div className='font-semibold text-3xl text-sky-700'>
                    {project.title}
                </div>
                <div className={`my-2 text-neutral-500 ${page === 'createBid' && 'max-h-20 overflow-scroll overflow-y-auto overflow-x-hidden'} `}>
                    { page === 'createBid' ? project.statement : trimPara(project.statement, 200)}
                </div>
                <div className='grid grid-cols-3 gap-3 mt-6'>
                    <SmallCard heading={"Domain"} subheading={project.domain.join(", ")} logo={<Domain />} />
                    <SmallCard heading={"Payment"} subheading={<span> &#8377; {project.clientRequirements.payment} </span>} logo={<Payment />} />
                    <SmallCard heading={"Location"} subheading={project.location} logo={<Location />} />
                    <SmallCard heading={"Deadline"} subheading={(new Date(project.endDate)).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })} logo={<Calendar3 />} />
                    <SmallCard heading={"Duration"} subheading={ getDaysDifference(project.startDate, project.endDate) < 7 ? `${getDaysDifference(project.startDate, project.endDate)} Days` : `${Math.ceil(getDaysDifference(project.startDate, project.endDate)/7)} Weeks`} logo={<Timer />} />
                    <SmallCard heading={"Domain"} subheading={project.clientRequirements.requiredTools.join(", ")} logo={<Skills />} />
                </div>
            </div>
            <div className='flex flex-col justify-center gap-3 items-center xl:w-1/3 w-[40%] pl-6 border-l-2 border-gray-300'>

                <div className='flex justify-start items-center'>
                    <img src={project.assignedBy?.avatarUrl} alt="" className='rounded-full w-20 h-20' />
                </div>
                <div>
                    <span className='text-sky-700 font-semibold text-xl'>
                        {project.assignedBy?.name}
                    </span>
                </div>
                <div className='text-neutral-500'>
                    {project.assignedBy?.domain[0]}
                </div>
                <div >
                    {project.assignedBy?.companyName}
                </div>
                <div className='flex justify-center'>
                    <div className='flex justify-around px-2 py-1 border-2 border-gray-300 rounded-xl mx-2'>
                        <img src="/Images/Rating.png" alt="" />
                        <span> {project.assignedBy?.rating} </span>
                    </div>
                    <div className='flex justify-around  px-2 py-1 border-2 border-gray-300 rounded-xl mx-2'>
                        <img src="/Images/Coins.png" alt="" />
                        <span> &#8377; {project.assignedBy?.paymentsCompleted} </span>
                    </div>
                    
                </div>
                <div className=' w-full mt-3 text-sm text-neutral-400 font-semibold italic text-right'> Posted {getDaysDifference(project.postedOn, new Date()) === 0 ? 'Today' : getDaysDifference(project.postedOn, new Date()) === 1 ? 'Yesterday' : `${getDaysDifference(project.postedOn, new Date())} days ago` } </div>
            </div>
        </div>
    )
}

export default ProjectCard