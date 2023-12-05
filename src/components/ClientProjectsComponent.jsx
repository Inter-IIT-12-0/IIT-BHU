import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientProjectComponent = ({ team }) => {
    console.log(team)

    const duration = 5
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:3000/api/clientprojects?clientId=${test_client_Id}`);
    //             setProjectData(response.data);
    //             console.log(`Data is:`, response.data);
    //         } catch (error) {
    //             console.error("Error is:", error);
    //         }
    //     };
    //     fetchData(); // Call the async function
    // }, []);

    // const duration = projectData && projectData.filter((ele) => ele.assignedTeam.teamName === teamName)
    // .map((ele) => {
    //     return ele.duration
    // })

    // const milestone = projectData && projectData.filter((ele) => ele.assignedTeam.teamName === teamName).map((ele) => {
    //     return ele.assignedTeam.proposal && ele.assignedTeam.proposal.milestones.map((ele2) => {
    //         return ele2
    //     })
    // });

    // console.log("milestones are:",milestone);

    // console.log("my team name is:", duration)

    return (
        <div className="p-8 w-[75%]">
            <div className="flex justify-between">
                <div className="flex flex-row">
                    <img src="" alt="" />
                    <h1 className="text-2x1 text-black font-semibold text-2xl">{team.teamName}</h1>
                </div>
                <h1 className="text-2xl text-black font-semibold">{team.rating} /5.0</h1>
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
                        <div className="text-back text-2xl font-semibold"> &#8377;{team.proposal.bidAmount}</div>
                    </div>
                    <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
                        <div className="flex flex-row mr-20">
                            <h1 className="text-2x1 text-black font-semibold mr-2">Expected Duration</h1>
                            <div className="pt-1">
                                <img className="h-4" src="/Images/info-circle.png" alt="" />
                            </div>
                        </div>
                        <div className="text-back text-2xl font-semibold">{duration} Weeks</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-blue-100 rounded-md p-8 mt-6 w-full">
                <h1 className=" text-black text-2xl font-semibold">Milestone Details</h1>
                {/* <div className="flex flex-col mt-4 w-full"> */}
                <table className="px-5 py-3 ">
                    <thead className="bg-blue-900 w-full">
                        <tr>
                            <th className="text-white text-1xl font-semibold px-6 py-2">Sr. No</th>
                            <th className="text-white text-1xl font-semibold px-6 py-2">Milestone Name</th>
                            <th className="text-white text-1xl font-semibold px-6 py-2">Milestone Amount</th>
                            <th className="text-white text-1xl font-semibold px-6 py-2">Duration</th>
                            <th className="text-white text-1xl font-semibold px-6 py-2">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team.proposal.milestones.map((milestone, index) => (
                                <tr className="flex justify-between py-5 px-9 bg-white w-full">
                                    <td className="text-black text-1xl font-semibold px-10 py-2"> {index + 1} </td>
                                    <td className="text-black text-1xl font-semibold px-10 py-2">{milestone.name}</td>
                                    <td className="text-black text-1xl font-semibold px-10 py-2"> {milestone.bidAmount} </td>
                                    <td className="text-black text-1xl font-semibold px-10 py-2"> {milestone.duration} </td>
                                    <img src="/Images/eye.svg" alt="" />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <hr className="w-[100%]" />
                {/* </div> */}
            </div>
        </div>
    )
}

export default ClientProjectComponent;