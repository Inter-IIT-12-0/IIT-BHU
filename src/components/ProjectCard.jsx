import React from 'react'
import Location_Icon from "../../public/Images/Location_Icon.svg"
import Money_Icon from "../../public/Images/Money_Icon.svg"
import Heart_Icon from "../../public/Images/Heart_Icon.svg"
import Yellow_Star from "../../public/Images/Yellow_Star.svg"
import Star_Icon from "../../public/Images/Star_Icon.svg"


const ProjectCard = ({ project, setOpenedProj }) => {

    function getDaysDifference(startDate, endDate) {
        startDate = new Date(startDate)
        endDate = new Date(endDate)
        const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const timeDifference = endUTC - startUTC;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    }

    return (
        <div className=' transition-all duration-500 border-2 border-zinc-300 rounded-2xl flex px-8 py-4 my-8 cursor-pointer hover:scale-105' onClick={() => setOpenedProj(project)}>
            <div className='xl:w-2/3 w-[60%]'>
                <div className='text-neutral-700 text-base font-semibold'> {project.status === 'Open' ? 'Open Listing till ' + (new Date(project.endDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    day: 'numeric',
                    month: 'long',
                })) : <span className='text-red-500'>In Review</span>} </div>
                <div className='font-bold text-2xl flex items-center'>
                    {project.title}  <span className='text-sm text-neutral-400'> &nbsp; ( {project.domain.map((dom, ind) => <span> {dom}, </span>)} ) </span>
                </div>
                <div className='flex my-2'>
                    <div className='flex mr-8 justify-center items-center'>
                        <Location_Icon className="mr-1" />
                        {project.location}
                    </div>
                    <div className='flex mr-8 justify-center items-center'>
                        <Money_Icon className="mr-1" />
                        {project.clientRequirements.paymentType} - &#8377; {project.clientRequirements.payment}
                    </div>
                </div>
                <div className='my-6 text-neutral-700 max-h-32 overflow-scroll overflow-x-hidden overflow-y-auto'>
                    {project.statement}
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold' >Skills</p>
                    <div className='flex'>
                        {
                            project.clientRequirements.requiredTools.map((tool, id) => (
                                <div key={id} className='text-sm mr-6 my-2 bg-zinc-300 rounded-lg px-5 py-1'>
                                    {tool}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col xl:w-1/3 w-[40%] pl-6'>

                <div className='flex mt-20'>
                    <div className='flex justify-start items-center'>
                        <img src="https://www.text-image.com/samples/per_normal_face.jpg" alt="" className='rounded-full w-16 h-16' />
                    </div>
                    <div className='flex flex-col pl-3'>
                        <div className='flex'>
                            {
                                [1, 2, 3, 4, 5].map(rating => {
                                    if (project.assignedBy.rating >= rating) {

                                        return <Yellow_Star key={rating} />
                                    }
                                    else {
                                        return <Star_Icon key={rating} />
                                    }

                                })
                            }
                            &nbsp; ( {project.assignedBy.rating} )
                        </div>
                        <div className='font-semibold' > {project.assignedBy.name} </div>
                        <div> {project.assignedBy.companyName} </div>
                    </div>
                </div>
                <div className='mt-2'>
                    <span className='font-semibold'> Sector: </span> {project.assignedBy.domain[0]}
                </div>
                <div className='mt-2'>
                    <span className='font-semibold'> &#8377; {project.assignedBy.paymentsCompleted} </span> spent so far
                </div>
                <div className='mt-16 text-right'> Posted {getDaysDifference(project.postedOn, new Date())} days ago </div>
            </div>
        </div>
    )
}

export default ProjectCard