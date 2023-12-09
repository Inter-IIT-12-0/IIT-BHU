import React, { useEffect } from "react";
import axios from "axios";

const ClientProjectsRightSidebar = ({ mtdata }) => {

    const newData = mtdata.map((ele) => {
        return ele.user && ele.user.name
    })

    console.log("kya mera data aaya:",mtdata);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/allteams/');
                // setAllTeamsData(response.data);
                console.log(`Data is:`, response.data);
            } catch (error) {
                console.error("Error is:", error);
            }
        };

        fetchData(); // Call the async function
    }, []);

    console.log("new name is:", newData)
    // console.log("new name is 2:",mtdata)
    return (
        <div className="p-4 bg-blue-100 w-[25%] h-[90vh] max-h-[90vh] overflow-scroll overflow-y-auto overflow-x-hidden hidden xl:block ">

            <h1 style={{fontSize:'2vw'}} className="text-blue-700 font-semibold">Team Details</h1>
            <hr className="my-2" />
            <div className="bg-white rounded-md p-4 mt-8">
                <h1 style={{fontSize:'2vw'}} className="text-black font-semibold">Team Members</h1>
                <div className="rounded-full bg-black w-full h-px my-3"></div>
                {mtdata && mtdata.map((ele) => {
                    console.log("element is:", ele.user)
                    return <>
                        {ele.map((ele) => {
                            return <div key={ele.user && ele.user._id}>
                            <div className="flex justify-between p-3">
                                <div className="flex flex-row">
                                    <img className="h-[3vw] w-[3vw] rounded-full" src={ele.user && ele.user.avatarUrl} alt="" />
                                    <div className="flex flex-col ml-5">
                                        <h1 style={{fontSize:'1vw'}} className="text-black font-semibold">{ele.user && ele.user.name}</h1>
                                        <h2 style={{fontSize:'1vw'}}>{ele.role}</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-yellow-400 bg-opacity-40 flex flex-row p-1 rounded-md mt-2">
                                        <img src="/Images/star.svg" alt="" />
                                        <h1 style={{fontSize:'1vw'}} className="text-black font-semibold ml-3">{ele.user && ele.user.rating}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        })}
                    </>
                })}
            </div>
        </div>
    )
}

export default ClientProjectsRightSidebar