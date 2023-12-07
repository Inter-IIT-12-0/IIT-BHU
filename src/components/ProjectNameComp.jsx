import React, { useEffect, useState } from "react";
import ClientProjectComponent from "./ClientProjectsComponent";
import ClientProjectsRightSidebar from "./clientProjectsRightSidebar";
import axios from "axios";

const ProjectNameComp = () => {

    const [insideTeam, setInsideTeam] = useState(false);

    const [teamId, setTeamId] = useState(null)

    const [allTeamsData, setAllTeamsData] = useState(null);
    const [bidAmount, setBidAmount] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/allteams/');
                setAllTeamsData(response.data);
                console.log(`Data is:`, response.data);
            } catch (error) {
                console.error("Error is:", error);
            }
        };

        fetchData(); // Call the async function
    }, []);

    const test_user_id = '656af2a4acba1f116ca953e6';

    // Filter teams containing the target userId
    const teams = allTeamsData && allTeamsData.filter(project =>
        project.teamUserMap.some(ele => ele.user._id === test_user_id)
    );

    const mtdata = teams && teams
        .filter((ele) => ele._id === teamId) // Filter by teamName
        .map((ele) => {
            return ele.teamUserMap
        });



    const Recieved = teams && teams.length;

    return (
        <>
            {
                !insideTeam && <div className="flex flex-col p-8 w-full">
                    <div className="flex justify-between">
                        <div className="flex flex-row">
                            <h1 className="text-black text-2xl font-semibold mr-3">Project Name</h1>
                            <img className="h-7 mt-1" src="/Images/export.svg" alt="" />
                        </div>
                        <h1 className="text-black text-2xl font-semibold">Live Until: </h1>
                    </div>
                    <div className="flex flex-col bg-blue-100 rounded-md px-3 py-6 mt-8">
                        <div className="flex justify-between">
                            <h1 className="text-2xl text-black font-semibold my-2">Recieved Bids</h1>
                            <div className="flex flex-row">
                                <h1 className="text-1x1 text-black font-semibold my-2 mr-16">Recieved: {Recieved}</h1>
                                <h1 className="text-1x1 text-black font-semibold my-2 mr-10">Invited: </h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[70%]">
                                <h1 className="text-1x1 text-black font-semibold my-3">TruBot has ranked the bids received by you, take a look!</h1>
                                <div className="flex flex-row bg-white p-2 rounded-md">
                                    <img className="h-5 pt-1 px-2" src="/Images/Search_Icon.svg" alt="" />
                                    <input className="w-[100%] p-1" type="text" placeholder="Search for Teams or Talent" />
                                </div>
                            </div>
                            <img src="/Images/Filter2_Icon_UIA.svg" className="mt-8 cursor-pointer" alt="" />
                            <div className="flex flex-col mt-3">
                                <h1 className="text-black text-1x1 m-2">Bid Status</h1>
                                <div className="flex flex-row bg-white px-2 rounded-md">
                                    <input type="text" placeholder="Select Type" className="py-2 px-10 rounded-md border-r-0" />
                                    <img src="/Images/arrow-left.svg" className="h-7 pt-2" alt="" />
                                </div>
                            </div>
                            <img src="/Images/refresh-2.svg" className="mt-10" alt="" />
                        </div>
                        <div className="mt-6">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-blue-900 text-white">
                                        <th className="px-4 py-3 text-center">Ranking</th>
                                        <th className="px-4 py-3 text-center">Team Name</th>
                                        <th className="px-4 py-3 text-center">Bid Amount</th>
                                        <th className="px-4 py-3 text-center">Team Rating</th>
                                        <th className="px-4 py-3 text-center">Status</th>
                                        <th className="px-4 py-3 text-center">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teams && teams.map((ele, index) => (
                                        <tr key={ele._id} className="bg-white border-t">
                                            <td className="px-6 py-4 flex justify-center">
                                                <span className='flex justify-center items-center rounded-full p-1 border-2 border-gray-400 w-8 h-8 relative bottom-2'>
                                                    {index + 1}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-center">
                                                    <img className="h-9 mr-4" src="/Images/newElipse.svg" alt="" />
                                                    <span className="font-semibold">{ele.teamName ? ele.teamName : 'not found'}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">${ele.proposal && ele.proposal.bidAmount ? ele.proposal.bidAmount : '500'}</td>
                                            <td className="px-6 py-4 text-center">{ele.teamRating ? ele.teamRating : '4.8'}/5.0</td>
                                            <td className="px-6 py-4 text-center rounded-md">New</td>
                                            <td className="px-6 py-4 flex justify-center">
                                                <img
                                                    onClick={() => {
                                                        setTeamId(ele._id);
                                                        setInsideTeam(true);
                                                        setBidAmount(ele.proposal && ele.proposal.bidAmount);
                                                    }}
                                                    className="cursor-pointer"
                                                    src="/Images/eye.svg"
                                                    alt=""
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <hr className="w-full" />
                        </div>

                    </div>
                </div>
            }
            {
                insideTeam && <div className="flex flex-row w-full">
                    <ClientProjectComponent teamId={teamId} bidAmount={bidAmount} />
                    <ClientProjectsRightSidebar mtdata={mtdata} />
                </div>
            }
        </>
    )
}

export default ProjectNameComp;