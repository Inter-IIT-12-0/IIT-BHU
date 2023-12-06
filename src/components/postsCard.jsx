import React, {useState} from "react";
import Projects from "./Projects";

const PostCard = ({tabName, ele, details}) => {

    const description = ele.description;
    const followers = ele.followers;
    console.log("details are:",details);
    console.log("description is:",description);

    return (
        <div className="flex flex-row">
            
                <div className="flex flex-col pb-8 px-5 w-[80%]">
                <h1 className="my-5 text-black text-2xl font-semibold">About</h1>
                <div className="">
                    {tabName === 'posts' ? description : details.about}
                </div>
                {
                    tabName !== 'startup' && <>
                    <h1 className="my-5 text-black text-2xl font-semibold">Posts</h1>
                    <div className="flex flex-col">
                        {details.posts && details.posts.map((ele) => {
                            return <div className="flex flex-col shadow-lg bg-white rounded-3xl border border-slate-400 p-8 w-[60%] mb-5">
                            <div className="flex flex-row mb">
                                <img className="h-16" src={tabName === 'posts' ? details.postAvatarUrl : ele.postAvatarUrl} alt="" />
                                <div className="ml-3">
                                    <div className="text-black text-1x1 font-semibold">{tabName === 'posts' ? details.name : ele.name}</div>
                                    <h1 className="text-sm">{followers} followers</h1>
                                </div>
                            </div>
                            <div className="text-sm flex flex-wrap my-5">
                                {tabName === 'posts' ? details.description : ele.description}
                            </div>
                            <div>
                                <img className="w-[100%]" src={tabName === 'posts' ? details.postUrl : ele.postUrl} alt="" />
                            </div>
                            <div className="flex justify-between mt-4">
                                <h1 className="text-sm">{tabName === 'posts' ? details.likes :ele.likes} Likes</h1>
                                <h1 className="text-sm">{tabName === 'posts' ? details.postUrl :ele.comment} comments</h1>
                            </div>
                        </div>
                        })}
                        {
                            tabName === 'posts' && <div className="flex flex-col shadow-lg bg-white rounded-3xl border border-slate-400 p-8 w-[60%] mb-5">
                            <div className="flex flex-row mb">
                                <img className="h-16" src={tabName === 'posts' ? details.postAvatarUrl : ele.postAvatarUrl} alt="" />
                                <div className="ml-3">
                                    <div className="text-black text-1x1 font-semibold">{tabName === 'posts' ? details.name : ele.name}</div>
                                    <h1 className="text-sm">{followers} followers</h1>
                                </div>
                            </div>
                            <div className="text-sm flex flex-wrap my-5">
                                {tabName === 'posts' ? details.description : ele.description}
                            </div>
                            <div>
                                <img className="w-[100%]" src={tabName === 'posts' ? details.postUrl : ele.postUrl} alt="" />
                            </div>
                            <div className="flex justify-between mt-4">
                                <h1 className="text-sm">{tabName === 'posts' ? details.likes :ele.likes} Likes</h1>
                                <h1 className="text-sm">{tabName === 'posts' ? details.comment :ele.comment} comments</h1>
                            </div>
                        </div>
                        }
                    </div>
                    </>
                    }
                </div>
           
            <div className="flex flex-col border-l border-slate-400 p-6 w-[20%]">
                {tabName === 'posts' && <>
                    <div className="flex flex-col">
                        <div className="flex flex-col mb-10">
                            <h1 className="text-2xl font-semibold">Ranking</h1>
                            <h1 className="text-1x1 font-semibold">{ele.rannking ? ele.ranking : ''} </h1>
                        </div>
                        <div className="my-1">
                            <h1 className="text-2xl font-semibold m-1">Alumni</h1>
                            <div className="flex flex-row">
                            {ele.alumni.map((ele) => {
                                return <div className="flex flex-row">
                                <img src={ele.avatarUrl?ele.avatarUrl:"/Images/newElipse.svg"} className="h-10 ml-3" alt="" />
                            </div>
                            })}
                            </div>
                        </div>
                        <div className="my-1">
                            <h1 className="text-2xl font-semibold m-1">Labs</h1>
                            <div className="flex flex-row">
                                {ele.labs.map((ele) => {
                                    return <img src={ele.avatarUrl?ele.avatarUrl:"/Images/newElipse.svg"} className="h-10 mx-2" alt="" />
                                })}
                            </div>
                        </div>
                        <div className="my-1">
                            <h1 className="text-2xl font-semibold m-1">Clubs</h1>
                            <div className="flex flex-row">
                            {ele.clubs.map((ele) => {
                                    return <img src={ele.avatarUrl?ele.avatarUrl:"/Images/newElipse.svg"} className="h-10 mx-2" alt="" />
                                })}
                            </div>
                        </div>
                    </div>
                </>}
                {(tabName === 'clubs' || tabName === 'labs') && <>
                    <div className="flex flex-col">
                        {tabName === 'labs' && <div className="mt-1 mb-8">
                            <h1 className="text-2xl font-semibold m-1">Professor</h1>
                            <div className="flex flex-row">
                                <img src={details.professor.avatarUrl} className="h-10 mx-2" alt="" />
                            </div>
                        </div>}
                        <div className="mt-1 mb-8">
                            <h1 className="text-2xl font-semibold m-1">Members</h1>
                            <div className="flex flex-row">
                                {details.Members.map((ele) => {
                                    return <img src={ele.avatarUrl} className="h-10 mx-2" alt="" />
                                })}
                            </div>
                        </div>
                        <div className="mt-1 mb-8">
                            <h1 className="text-2xl font-semibold m-1">Achievements</h1>
                            <div className="flex flex-row">
                                {details.Achievements.map((ele, index) => {
                                    return <img src={ele[index]} className="h-10 mx-2" alt="" />
                                })}
                            </div>
                        </div>
                        <div className="mt-1">
                            <h1 className="text-2xl font-semibold mb-2">Projects</h1>
                            <div className="flex flex-col mb-3">
                                <div className="bg-white rounded-xl shadow-lg">
                                    <div className="relative z-10">
                                        <div className="relative">
                                            <img src="/Images/Rectangle2.png" alt="" className="w-full h-auto" />
                                                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4">
                                                    <div className="flex flex-row">
                                                        <h1 className="text-black text-xs font-bold">Project Name</h1>
                                                        <div className="text-black text-xs ml-4 bg-slate-100 p-1 rounded">12 Dec - 8 Jan</div>
                                                    </div>
                                                    <h2 className="text-black text-sm mt-1">Client Name</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <img
                                        className="absolute -mt-9 z-20 h-10"
                                        src="/Images/newElipse.svg"
                                        alt=""  
                                        /> */}
                                    <div>
                                        <div className="px-6 mt-10">
                                            {/* <div className="flex flex-col rounded ">
                                                <label htmlFor="">Due Task</label>
                                                <input className="w-full h-16 border border-solid border-gray-300 rounded" type="text" />
                                            </div>*/}
                                            <hr className="my-4 w-full" /> 
                                            <div className="flex flex-row right mb-2">
                                                <h1>Team</h1>
                                                <img src="/Images/teamImg.svg" alt="" />
                                                <img src="/Images/teamImg.svg" alt="" />
                                                <img src="/Images/teamImg.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </>}
                {tabName === 'startup' && <>
                    <div className="flex flex-col">
                        <div className="mt-1 mb-6">
                            <h1 className="text-2xl font-semibold m-1">Founders</h1>
                            <div className="flex flex-row">
                                {details.Founders.map((ele) => {
                                    return <img src={ele.avatarUrl} className="h-14" alt="" />
                                })}
                            </div>
                        </div>
                        <div className="my-1">
                            <h1 className="text-2xl font-semibold m-1">Members</h1>
                            <div className="flex flex-row">
                                {details.members.map((ele) => {
                                    return <img src={ele.avatarUrl} className="h-14" alt="" />
                                })}
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default PostCard;