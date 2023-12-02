import React from "react";

const EarningStats = () => {
    return (
        <div className="w-full h-[42%] p-8 bg-blue-100 rounded">
            <h1 className="font-semibold text-2xl">Earning Stats</h1>
            <p className="py-3">Here's Your overall performance</p>
            <div className="flex flex-row justify-evenly space-x-12">
                <div className="px-24 justify-center items-center bg-white rounded py-2">
                    <img src="/Images/electric_icon.png" alt="" />
                    <div className="flex flex-col justify-center items-center">
                        <h2>Current Streak</h2>
                        <h1 className="text-1x1 font-semibold">14 days</h1>
                    </div>
                </div>
                <div className="justify-center items-center bg-white px-24 rounded py-2">
                    <img src="/Images/hourlyRate_icon.png" alt="" />
                    <div className="flex flex-col justify-center items-center">
                        <h2>Hourly Rate</h2>
                        <h1 className="text-1x1 font-semibold">14 days</h1>
                    </div>
                </div>
                <div className="px-16 justify-center items-center bg-white rounded py-2">
                    <img src="/Images/projectsCompleted_icon.png" alt="" />
                    <div className="flex flex-col items-center">
                        <h2>Projects Completed</h2>
                        <h1 className="text-1x1 font-semibold">4</h1>
                    </div>
                </div>
                <div className="px-24 justify-center items-center bg-white rounded py-2 px">
                    <img src="/Images/electric_icon.png" alt="" />
                    <div className="flex flex-col justify-center items-center">
                        <h2>Earnings</h2>
                        <h1 className="text-1x1 font-semibold">$545</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EarningStats