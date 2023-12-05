import React, { useEffect } from "react";

const ClientProjectsRightSidebar = ({mtdata}) => {
    console.log("mt data is:", mtdata);
    
    const newData = mtdata.map((ele) => {
        return ele.user && ele.user.name
    })

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

    console.log("new name is:",newData)
    console.log("new name is 2:",mtdata)
    return (
        <div className="p-4 bg-blue-100 w-[25%]">
            
            <h1 className="text-3xl text-blue-700 font-semibold">Team Details</h1>
            <hr className="w-[100%] my-2" />
            <div className="bg-white rounded-md p-4 mt-8">
                <h1 className="text-black font-semibold text-2xl">Team Members</h1>
                <div className="rounded-full bg-black w-full h-px my-3"></div>
                {mtdata && mtdata.map((ele) => {
                    console.log("element is:",ele.user)
                    return <div>
                         {ele.map((ele) => {
                            return <div className="flex justify-between p-3">
                            <div className="flex flex-row">
                                <img src="/Images/newProf.svg" alt="" />
                                <div className="flex flex-col ml-5">
                                    <h1 className="text-black text-1x1 font-semibold">{ele.user && ele.user.name}</h1>
                                    <h2>{ele.role}</h2>
                                </div>
                            </div>
                            <div>
                                <div className="bg-yellow-400 bg-opacity-40 flex flex-row p-2 rounded-md mt-2">
                                    <img src="/Images/star.svg" alt="" />
                                    <h1 className="text-black text-1x1 font-semibold ml-3">{ele.user && ele.user.rating}</h1>
                                </div>
                            </div>
                        </div>
                         })} 
                    </div>
                })}
            </div>
            <h1 className="text-3xl text-blue-700 font-semibold mt-6">Other Bids</h1>
            <hr className="w-[100%] my-2" />
            <div className="bg-white rounded-md p-4 mt-8">
                <h1 className="text-black font-semibold text-2xl">Recieved Bids</h1>
                <div className="rounded-full bg-black w-full h-px my-3"></div>
                <div className="flex justify-between p-3">
                    <div className="flex flex-row">
                        <img src="/Images/newProf.svg" alt="" />
                        <div className="flex flex-col ml-5">
                            <h1 className="text-black text-1x1 font-semibold">Aditya Rai</h1>
                            <h2>Buissness Analyst</h2>
                        </div>
                    </div>
                    <div>
                        <div className="bg-yellow-400 bg-opacity-40 flex flex-row p-2 rounded-md mt-2">
                            <img src="/Images/star.svg" alt="" />
                            <h1 className="text-black text-1x1 font-semibold ml-3">4.2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientProjectsRightSidebar