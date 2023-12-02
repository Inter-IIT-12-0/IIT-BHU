import React from "react";

const Achievements = () => {
    return (
        <div className="mt-8 p-8 bg-blue-100 rounded">
            <h1 className="font-semibold text-2xl m-3">Achievements</h1>
            <div className="flex justify-between">
            
                <div className="bg-white rounded flex flex-col justify-center items-center w-48">
                    <img src="/Images/medal.png" alt="" />
                    <h1>Learner of the week</h1>
                    <h2>certified</h2>
                </div>
            
            
                <div className="bg-white rounded flex flex-col justify-center items-center w-48">
                    <img src="/Images/certified.png" alt="" />
                    <h1>Apollo.io</h1>
                    <h2>certified</h2>
                </div>
            
            
                <div className="bg-white rounded flex flex-col justify-center items-center w-48">
                    <img src="/Images/PPE.png" alt="" />
                    <h1>Pro Prompt Engineer</h1>
                    <h2>certified</h2>
                </div>
            
            
                <div className="bg-slate-300 rounded flex flex-col justify-center items-center w-48">
                    <img src="/Images/midjourney.png" alt="" />
                    <h1>MidJourney</h1>
                    <h2>Incomplete</h2>
                </div>
            
            
                <div className="bg-slate-300 rounded flex flex-col justify-center items-center w-48">
                    <img src="/Images/armorTick.png" alt="" />
                    <h1>ChatGPT</h1>
                    <h2>Incomplete</h2>
                </div>
            
            
                <div className="bg-slate-300 rounded flex flex-col justify-center items-center w-48">
                    <img src="/Images/medal.png" alt="" />
                    <h1>Learner of the Month</h1>
                    <h2>Incomplete</h2>
                </div>
            
            </div>
        </div>
    )
}

export default Achievements