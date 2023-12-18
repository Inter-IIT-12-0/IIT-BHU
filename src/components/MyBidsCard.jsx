"use client";
import SearchIcon from "../../public/Images/SearchIcon.svg";
import NotificationsIcon from "../../public/Images/NotificationsIcon.svg";
import Link from "next/link";
import { useState } from "react";

const MyDomainCard = ({ project }) => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="bg-white rounded mr-4 mt-4 border pb-3">
            <div className="relative z-10">
                <div className="relative">
                    <img src="/Images/Rectangle.png" alt="" className="w-full h-auto" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4">
                        <div className="flex flex-row">
                            <h1 className="text-black text-lg font-bold">{project.title}</h1>
                            <div className="text-black ml-4 bg-slate-100 p-1 rounded">{(new Date(project.startDate)).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short'
                            })} - {(new Date(project.endDate)).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short'
                            })}</div>
                        </div>
                        <h2 className="text-black mt-4">{project.assignedBy && project.assignedBy.name}</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="px-6 mt-10">
                    <div className="flex flex-col rounded ">
                        <p> Domain: {project.domain[0]} </p>
                        <p className="text-neutral-500"> Posted on: {(new Date(project.postedOn)).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                        })} </p>
                    </div>
                    <hr className="my-4 w-full" />
                    <div className="flex justify-center">
                        <Link href={`/viewBids/${project._id}`}>
                            <button className="text-white px-4 rounded-xl py-1 bg-sky-700">
                                See Bids
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDomainCard;
