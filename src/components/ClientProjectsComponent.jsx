import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientProjectComponent = ({ teamId, bidAmount }) => {
    console.log("the data that I wanted is:", teamId, bidAmount);
    const test_client_Id = "656af2a4acba1f116ca953e6";
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/clientprojects?clientId=${test_client_Id}`);
                setProjectData(response.data);
                console.log(`Data is:`, response.data);
            } catch (error) {
                console.error("Error is:", error);
            }
        };
        fetchData(); // Call the async function
    }, []);

    console.log("project data is:", projectData);

    return (
        <div>
            {projectData && projectData.filter((ele) => ele.assignedTeam._id === teamId).map((ele) => {
                console.log("me chal rha hu")
                return <div className="p-8 w-[75%]">
                    <div className="flex justify-between">
                        <div className="flex flex-row">
                            <img src="" alt="" />
                            <h1 className="text-2x1 text-black font-semibold text-2xl">{ele.assignedTeam.teamName}</h1>
                        </div>
                        <h1 className="text-2xl text-black font-semibold">{ele.assignedTeam.rating} /5.0</h1>
                    </div>
                    <div className="flex flex-col p-8 bg-blue-100 rounded-md mt-6">
                        <h1 className="text-2xl text-black font-semibold">Bid Details</h1>
                        <div className="flex justify-between">
                            <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
                                <div className="flex flex-row mr-20">
                                    <h1 className="text-2x1 text-black font-semibold mr-2">Total Bid Amount</h1>
                                    <div className="pt-1">
                                        <img className="h-4" src="/Images/info-circle.png" alt="" />
                                    </div>
                                </div>
                                <div className="text-back text-2xl font-semibold"> &#8377;{ele.assignedTeam.proposal.bidAmount}</div>
                            </div>
                            <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
                                <div className="flex flex-row mr-20">
                                    <h1 className="text-2x1 text-black font-semibold mr-2">Expected Duration</h1>
                                    <div className="pt-1">
                                        <img className="h-4" src="/Images/info-circle.png" alt="" />
                                    </div>
                                </div>
                                <div className="text-back text-2xl font-semibold">{ele.assignedTeam.duration} Weeks</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-blue-100 rounded-md p-8 mt-6 w-full">
                        <h1 className=" text-black text-2xl font-semibold">Milestone Details</h1>
                        {/* <div className="flex flex-col mt-4 w-full"> */}
                        <table className="min-w-full bg-white border border-blue-900">
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

                        <hr className="w-[100%]" />
                        {/* </div> */}
                    </div>
                </div>
            })}
        </div>
    )
}

export default ClientProjectComponent;