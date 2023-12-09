import React from "react";

const EarningStats = ({EarningStats}) => {
    return (
        <div className="w-full p-8 bg-blue-100 rounded">
            <h1 className="font-semibold text-2xl">Earning Stats</h1>
            <p className="py-3">Here's Your overall performance</p>
            <div className="flex flex-row">
                {EarningStats.map((ele) => {
                    return <div className="px-20 justify-center items-center bg-white rounded py-2 mr-5 w-72">
                    <img className="h-28" src={ele.image} alt="" />
                    <div className="flex flex-col justify-center items-center">
                        <h2>Current Streak</h2>
                        <h1 className="text-1x1 font-semibold">{ele.data} days</h1>
                    </div>
                </div>
                })}
            </div>
        </div>
    )
}

export default EarningStats