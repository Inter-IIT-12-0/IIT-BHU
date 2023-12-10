import React, { useEffect, useState } from "react";
import ClientMarketPlaceJson from './clientMarketPlace.json';
import PercentageCircle from "./PercentageCircle";
import axios from "axios";

const ClientMarketPlaceComponent = () => {

    const [data1, setData1] = useState(null);
    const [data, setData] = useState(null);
    const recommendedTalent = "Recommended Talent";
    const recommendedTeams = "Recommended Teams";
    const almaMatter = "Alma Mater";
    const [heading, setHeading] = useState(recommendedTalent);
    const [allTeams, setAllTeams] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    // const randomBid = Math.floor(Math.random()*10000);



    useEffect(() => {
        fetchTeams();
        fetchUsers();
        // if(data === null)
        // {
        //     setData(data1)
        // }
    }, [])

    const fetchTeams = async () => {
        try {
            const response = await axios.get(`/api/allteams`);
            setAllTeams(response.data);
        } catch (error) {
            console.log("error is:", error);
        }
    }

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`/api/allusers`);
            setAllUsers(response.data);
            setData1(response.data);
            setData(response.data)
        } catch (error) {
            console.log("error is:", error);
        }
    }

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue)
        const filteredData = data1.filter(users => users?.name?.toLowerCase().includes(inputValue.toLowerCase()))
        setData(filteredData);
    }

    const handleInputChange2 = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue)
        const filteredData = data1.filter(team => team?.teamName?.toLowerCase().includes(inputValue.toLowerCase()))
        setData(filteredData);
    }

    return (
        <div className="flex flex-col w-full mb-3 max-h-[90vh] overflow-scroll overflow-y-auto overflow-x-hidden">
            {/* <h1 className="text-blue-700 font-semibold text-3xl m-6 mt-0">Create a Project</h1>
            <div className="w-full h-3 rounded-full bg-blue-950"></div> */}
            <div className="rounded-xl bg-blue-100 p-8 w-full max-h-[60vh] overflow-scroll overflow-x-hidden overflow-y-auto">
                <h1 className="text-2xl font-semibold">Invite Bids</h1>
                <div className="flex flex-row bg-white rounded-md mt-3">
                    <img className="p-2" src="/Images/Search_Icon.svg" alt="" />
                    <input placeholder="Search for Talent or Team" className="h-10 w-full rounded m-2 outline-none" onChange={heading === recommendedTalent ? handleInputChange : handleInputChange2}></input>
                </div>
                <div className="mt-4 rounded-md bg-white px-8 py-2">
                    <div className="flex flex-row justify-self-start w-full my-3">
                        <h2
                            onClick={() => {
                                setHeading(recommendedTalent); setData1(allUsers); setData(allUsers);
                            }}
                            className={`font-semibold text-2xl mx-8 cursor-pointer ${heading === recommendedTalent ? 'text-blue-700' : 'text-black'
                                }`}
                        >
                            {recommendedTalent}
                        </h2>
                        <h2
                            onClick={() => {
                                setHeading(recommendedTeams); setData1(allTeams); setData(allTeams);
                            }}
                            className={`font-semibold text-2xl mx-8 cursor-pointer ${heading === recommendedTeams ? 'text-blue-700' : 'text-black'
                                }`}
                        >
                            {recommendedTeams}
                        </h2>
                        <h2
                            onClick={() => {
                                setHeading(almaMatter);
                            }}
                            className={`font-semibold text-2xl mx-8 cursor-pointer ${heading === almaMatter ? ' text-blue-700' : 'text-black'
                                }`}
                        >
                            {almaMatter}
                        </h2>
                    </div>
                    <hr className="w-full" />
                    {heading === recommendedTalent && <div className="flex flex-col px-8 py-3">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-3 px-6 text-left">Name</th>
                                    <th className="py-3 px-6 text-left">Role</th>
                                    <th className="py-3 px-6 text-left">Rating</th>
                                    <th className="py-3 px-6 text-left">Projects</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.map((ele, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                            <td className="py-4 px-6 font-semibold">{ele.name}</td>
                                            <td className="py-4 px-6 font-semibold">{ele.role}</td>
                                            <td className="py-4 px-6 font-semibold">{ele.rating}</td>
                                            <td className="py-4 px-6 font-semibold">{ele.projects && ele.projects.length} projects</td>
                                            <td className="py-4 px-6">
                                                <button className="text-green-700 font-semibold">Invite</button>
                                                <div className="flex flex-row">
                                                    <button className="pr-3 font-semibold">Chat</button>
                                                    <img src="/Images/send-2.svg" alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>}
                    {heading === recommendedTeams && <div className="flex flex-col px-8 py-3">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-3 px-6 text-left">Name</th>
                                    <th className="py-3 px-6 text-left">Skills</th>
                                    <th className="py-3 px-6 text-left">Rating</th>
                                    <th className="py-3 px-6 text-left">Bid Amount</th>
                                    <th className="py-3 px-6 text-left">Projects</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.map((ele, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                            <td className="py-4 px-6 font-semibold">{ele.teamName}</td>
                                            <td className="py-4 px-6 font-semibold">
                                                {ele.skills && ele.skills.map((ele) => {
                                                    return <h1 className="mx-1">{ele}</h1>
                                                })}
                                            </td>
                                            <td className="py-4 px-6 font-semibold">{ele.rating}</td>
                                            <td className="py-4 px-6 font-semibold">{ele.proposal ? ele.proposal.bidAmount : (index+1)*1000}</td>
                                            <td className="py-4 px-6 font-semibold">{ele.project && ele.project.length} projects</td>
                                            <td className="py-4 px-6">
                                                <button className="text-green-700 font-semibold">Invite</button>
                                                <div className="flex flex-row">
                                                    <button className="pr-3 font-semibold">Chat</button>
                                                    <img src="/Images/send-2.svg" alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ClientMarketPlaceComponent; 