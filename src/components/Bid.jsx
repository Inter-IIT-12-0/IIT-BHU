import React from 'react'

const Bid = () => {
    const teamName = "c"
    const bidAmount = 1000
    const duration = 3
  return (
    <div className="p-8 w-[75%]">
            <div className="flex justify-between">
                <div className="flex flex-row">
                    <img src="" alt="" />
                    <h1 className="text-2x1 text-black font-semibold text-2xl">{teamName}</h1>
                </div>
                <h1 className="text-2xl text-black font-semibold">4.1/5.0</h1>
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
                        <div className="text-back text-2xl font-semibold">${bidAmount}</div>
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
            <div className="flex flex-col bg-blue-100 rounded-md p-8 mt-6">
                <h1 className=" text-black text-2xl font-semibold">Milestone Details</h1>
                <table className="flex flex-col mt-4">
                    <thead className="flex justify-between bg-blue-900 px-5 py-3">
                        <td className="text-white text-1xl font-semibold">Sr. No</td>
                        <td className="text-white text-1xl font-semibold">Milestone Name</td>
                        <td className="text-white text-1xl font-semibold">Milestone Amount</td>
                        <td className="text-white text-1xl font-semibold">Duration</td>
                        <td className="text-white text-1xl font-semibold">View</td>
                    </thead>
                    
                    {
                        milestone && milestone.map((ele) => {
                            // console.log("milestone element is:",ele)
                            return <div>
                                {ele.map((ele) => {
                                    return <div className="flex justify-between py-5 px-9 bg-white">
                                    <h1 className="text-black text-1xl font-semibold">1</h1>
                                    <h1 className="text-black text-1xl font-semibold">{ele.name}</h1>
                                    <h1 className="text-black text-1xl font-semibold">6387</h1>
                                    <h1 className="text-black text-1xl font-semibold">jekswiue</h1>
                                    <img src="/Images/eye.svg" alt="" />
                                </div>
                                })}
                            
                            </div>
                        })
                    }
                    
                    <hr className="w-[100%]"/>
                </table>
            </div>
        </div>   
  )
}

export default Bid