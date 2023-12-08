import React, {useState} from "react";
import ClientMarketPlaceJson from './clientMarketPlace.json';
import PercentageCircle from "./PercentageCircle";

const ClientMarketPlaceComponent = () => {

    const recommendedTalent = "Recommended Talent";
    const recommendedTeams = "Recommnended Teams";
    const almaMatter = "Alma Mater";
    const[heading, setHeading] = useState(recommendedTalent);
    
    return (
        <div className="flex flex-col w-full mb-3 max-h-[90vh] overflow-scroll overflow-y-auto overflow-x-hidden">
            {/* <h1 className="text-blue-700 font-semibold text-3xl m-6 mt-0">Create a Project</h1>
            <div className="w-full h-3 rounded-full bg-blue-950"></div> */}
            <div className="rounded-xl bg-blue-100 p-8 w-full">
                <h1 className="text-2xl font-semibold">Invite Bids</h1>
                <div className="flex flex-row bg-white rounded-md mt-3">
                    <img className="p-2" src="/Images/Search_Icon.svg" alt="" />
                    <input className="h-10 w-full rounded m-2 outline-none"></input>
                </div>
                <div className="mt-4 rounded-md bg-white px-8 py-2">
                <div className="flex flex-row justify-self-start w-full my-3">
                    <h2
                        onClick={() => {
                        setHeading(recommendedTalent);
                        }}
                        className={`font-semibold text-2xl mx-8 cursor-pointer ${
                        heading === recommendedTalent ? 'text-blue-700' : 'text-black'
                        }`}
                    >
                        {recommendedTalent}
                    </h2>
                    <h2
                        onClick={() => {
                        setHeading(recommendedTeams);
                        }}
                        className={`font-semibold text-2xl mx-8 cursor-pointer ${
                        heading === recommendedTeams ? 'text-blue-700' : 'text-black'
                        }`}
                    >
                        {recommendedTeams}
                    </h2>
                    <h2
                        onClick={() => {
                        setHeading(almaMatter);
                        }}
                        className={`font-semibold text-2xl mx-8 cursor-pointer ${
                        heading === almaMatter ? ' text-blue-700' : 'text-black'
                        }`}
                    >
                        {almaMatter}
                    </h2>
                    </div>
                    <hr className="w-full"/>
                    <div className="flex flex-col px-8 py-3">
                    {ClientMarketPlaceJson[heading] && ClientMarketPlaceJson[heading].map((ele, index) => {
                        return <div className="flex justify-between m-3" key={index}>
                            <div className="flex flex-row">
                                <img className="mr-4" src={ele.profilePhoto} alt="" />
                                <div className="flex flex-col pt-2">
                                    <h1 className="text-2xl font-semibold">{ele.name}</h1>
                                    <h2 className="text-1xl font-semibold">{ele.role}</h2>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <img src="/Images/star.svg" alt="" />
                                <h1 className="pt-5 pl-4 text-1xl font-semibold">{ele.rating}</h1>
                            </div>
                            <h1 className="pt-5 text-1xl font-semibold">{ele.projects} projects</h1>
                            <div className="pt-3">
                                <PercentageCircle percentage={ele.percentage}/>
                            </div>
                            <h2 className="pt-5 text-1xl font-semibold text-green-700">Invite</h2>
                            <div className="flex flex-row">
                                <h1 className="pt-5 pr-3 text-1xl font-semibold">Chat</h1>
                                <img src="/Images/send-2.svg" alt="" />
                            </div>
                        </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientMarketPlaceComponent; 