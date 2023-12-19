import React, { useEffect, useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";

const ClientProjectComponent = ({ teamId, bidAmount }) => {
    const test_client_Id = "656af2a4acba1f116ca953e6";
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        const fetchData = async (req, res) => {
            try {
                const session = await getSession();
                const id = session.user._id;
                const response = await axios.get(`/api/clientprojects?clientId=${id}`);
                setProjectData(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);


    return (
        // <></>
        <div className="w-[75%]">   
            {projectData && projectData.filter((ele) => ele.assignedTeam._id === teamId).map((ele) => {
                return <div className="p-8">
                    <div className="flex justify-between">
                        <div className="flex flex-row">
                            <img src="" alt="" />
                            <h1 className="text-2x1 text-black font-semibold text-2xl">{ele.assignedTeam.teamName}</h1>
                        </div>
                        <h1 className="text-2xl text-black font-semibold">{ele.assignedTeam.rating} /5.0</h1>
                    </div>
                    <div className="flex flex-col p-8 bg-blue-100 rounded-md w-[100%] mt-6">
                        <h1 className="text-2xl text-black font-semibold">Bid Details</h1>
                        <div className="flex justify-between">
                            <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
                                <div className="flex flex-row">
                                    <h1 className="text-2xl text-black font-semibold mr-2">Total Bid Amount - </h1>
                                </div>
                                <div className="text-back text-2xl font-semibold"> &#8377;{ele.assignedTeam.proposal.bidAmount}</div>
                            </div>
                            <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
                                <div className="flex flex-row">
                                    <h1 className="text-2xl text-black font-semibold mr-2">Expected Duration - </h1>
                                </div>
                                <div className="text-back text-2xl font-semibold">{ele.assignedTeam.duration} Weeks</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-blue-100 rounded-md p-8 mt-6 w-full">
                        <h1 className=" text-black text-2xl font-semibold">Milestone Details</h1>
                        <table className="bg-white border border-blue-900">
                            <thead className="bg-blue-900 text-white">
                                <tr>
                                    <th className="py-2 px-6 font-semibold">Sr. No</th>
                                    <th className="py-2 px-6 font-semibold">Milestone Name</th>
                                    <th className="py-2 px-6 font-semibold">Milestone Amount</th>
                                    <th className="py-2 px-6 font-semibold">Duration</th>
                                    <th className="py-2 px-6 font-semibold">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ele.assignedTeam.proposal.milestones.map((milestone, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="py-2 px-6">{index + 1}</td>
                                        <td className="py-2 px-6">{milestone.name}</td>
                                        <td className="py-2 px-6">{milestone.bidAmount}</td>
                                        <td className="py-2 px-6">{milestone.duration}</td>
                                        <td className="py-2 px-6">
                                            <img src="/Images/eye.svg" alt="" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <hr className="" />
                    </div>
                </div>
            })}
        </div>
    )
}

export default ClientProjectComponent;