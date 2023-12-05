import React from "react";

const Achievements = ({achievements}) => {
    return (
        <div className="mt-8 p-8 bg-blue-100 rounded">
            <h1 className="font-semibold text-2xl m-3">Achievements</h1>
            <div className="flex justify-row">
            
                {achievements.map((ele) => {
                        return <div className={`${ele.status !== 'Incomplete' ? 'bg-white' : 'bg-gray-400'} rounded-xl flex flex-col justify-center items-center w-48 p-6 mr-5`}>
                        <img className="h-20" src={ele.badgeImage} alt="" />
                        <h1>{ele.badgeName}</h1>
                        <h2>{ele.status}</h2>
                    </div>
                })}      
            
            </div>
        </div>
    )
}

export default Achievements