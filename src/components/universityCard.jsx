import React from 'react'
import Location_Icon from "../../public/Images/Location_Icon.svg"
import Money_Icon from "../../public/Images/Money_Icon.svg"
import Heart_Icon from "../../public/Images/Heart_Icon.svg"
import Link from "next/link"


const UniversityCard = ({ universityData }) => {

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
        <div className='w-full transition-all duration-500 border-2 border-zinc-500 flex px-8 py-4 my-8 cursor-pointer hover:scale-105'>
            <div className='w-2/3 flex flex-row'>
                <div>
                    <div className='font-bold text-2xl'>
                        {universityData.name}
                    </div>
                    <div className='flex my-2'>
                        <div className='flex mr-8 justify-center items-center'>
                            <Location_Icon className="mr-1" />
                            {universityData.address}
                        </div>
                        <div className='flex mr-8 justify-center items-center'>
                            <Money_Icon className="mr-1" />
                            {universityData.type}
                        </div>
                    </div>
                    <div className='my-6 text-neutral-700'>
                        {universityData.description}
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold' >Skills</p>
                        <div className='flex'>

                            <div className='text-sm mr-6 my-2 bg-zinc-300 rounded-lg px-5 py-1'>
                                {universityData.members.length} students
                            </div>
                            <div className='text-sm mr-6 my-2 bg-zinc-300 rounded-lg px-5 py-1'>
                                {universityData.professors.length} profesors
                            </div>
                            <div className='text-sm mr-6 my-2 bg-zinc-300 rounded-lg px-5 py-1'>
                                {universityData.labcount} labcount
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start items-center ml-32'>
                    <img src={universityData.profileUrl} alt="" className='rounded-full w-32 h-32' />
                </div>
            </div>

            <div className='flex flex-col w-1/3 pl-6'>
                <div className='flex justify-end'>
                    <Heart_Icon />
                </div>
                <div className='flex'>

                    <div className='flex flex-col pl-3'>
                        <div className='flex'>

                            {
                                universityData.followers
                            } followers
                        </div>
                    </div>
                </div>
                <div>
                    <Link href={`/university/${universityData._id}`}>
                        <div className='py-2 px-6 rounded-full bg-sky-400 text-white mt-20 w-44'>View Page</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UniversityCard