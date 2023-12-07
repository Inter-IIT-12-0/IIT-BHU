import React from "react";
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";

const Challenges = () => {

    const obj = {
        stickerImg : "/Images/newRectangle.png",
        name1: "Data Wragling",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur officia amet maiores ducimus tempore debitis!",
        img: "/Images/Ellipse_2.svg"
    }

    const arrayOfObjs = Array(9).fill(obj);
    const otherArray = Array(3).fill(obj);

    return (
        <div>
            <Navbar/>
            <div className="flex flex-row">
                <StudentSidebar page={"challenges"}/>
                <div className="flex flex-col p-5 bg-blue-100 w-[100%]">
                    <h1 className="mb-5 text-3xl font-semibold">Challenges</h1>
                    <div className="flex flex-row">
                        {otherArray.map((ele) => {
                            return <div className='flex flex-col h-62 bg-white shadow-lg rounded-3xl p-8 justify-center w-[25%] mr-5'>
                            <img className="h-10 w-10" src={ele.stickerImg} alt="" />
                            <h1 className='text-md font-semibold my-3'>{ele.name1}</h1>
                            <h1 className='text-sm my-3'>{ele.desc}</h1>
                            <div className='flex flex-row my-4'>
                                <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                            </div>
                        </div>
                        })}
                    </div>
                    <div className="flex flex-row my-6 ml-8">
                        <h1 className="text text-2xl font-semibold mr-10">All</h1>
                        <h1 className="text text-2xl font-semibold mr-10">Domain</h1>
                        <h1 className="text text-2xl font-semibold mr-10">Research</h1>
                        <h1 className="text text-2xl font-semibold mr-10">Design</h1>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3 w-[100%]">
                        {
                            arrayOfObjs.map((ele) => {
                                return <div className='flex flex-col bg-white shadow-lg rounded-3xl p-8 justify-center'>
                                <div className="flex justify-between">
                                    <div>
                                        <img className="h-10 w-10" src={ele.stickerImg} alt="" />
                                        <h1 className='text-md font-semibold my-3'>{ele.name1}</h1>
                                    </div>
                                    <div className="flex flex-row">
                                        <img src="/Images/Group_stars.svg" alt="" />
                                    </div>
                                </div>
                                <h1 className='text-sm my-3'>{ele.desc}</h1>
                                <div className='flex flex-row my-4'>
                                    <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                    <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                    <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                    <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                </div>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challenges