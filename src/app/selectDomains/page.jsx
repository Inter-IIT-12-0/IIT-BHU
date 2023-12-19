"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import domains from "../../../models/Domains.json"
import toast from "react-hot-toast";
import { useState } from "react";


const OnBoarding2 = () => {
  const router = useRouter()
  const {data:session} = useSession()
  const [selectedCards, setSelectedCards] = useState([domains[0]]);
  const handleCardClick = (domain) => {
    if(selectedCards.includes(domain)) {
      if(selectedCards.length === 1) return
      setSelectedCards(prev => prev.filter(c => c !== domain))
    }
    else {
      if(selectedCards.length === 3) return
      let newSelCards = [...selectedCards]
      setSelectedCards([
        ...newSelCards,
        domain
      ]);
    }
  };

  const handleDomainSubmit = () => {
    let user = session.user
    user.domain = (selectedCards)
    axios.patch(`/api/user/?userId=${session.user._id}`, user).then(res => router.push("/")).catch((err) =>{
      toast.error(err.response.data.error)
    })
  }

  return (
    <div className="h-full w-full">
      <div class="bg-cover bg-center  " style={{ "backgroundImage": "url('./Rectangle.png');" }}>
        <div className=" justify-center items-center w-100 ml-20 ">
          <div className="glass-card bg-white bg-opacity-80 rounded-md p-8 shadow-lg mt-2">
            <h1 className="text-2xl font-medium leading-normal ml-16 text-black-600 font-helvetica-neue text-center mb-12">
              Select your Domains of Interest (Max 3)
            </h1>
            <div className="grid xl:grid-cols-4 grid-cols-3 ml-2">
              {/* Subcard 1 */}
              {
                domains.map(domain => (
                  <div
                    className={`flex-1 cursor-pointer relative p-4 m-2 rounded-lg hover:shadow-md w-48 h-28 flex justify-center items-center  ${selectedCards.includes(domain) ? "border-2 border-blue-500" : ""
                      }`}
                    onClick={() => handleCardClick(domain)}
                  >
                    <div className="flex">

                      <input
                        type="radio"
                        name={domain}
                        className="ml-5 w-6 h-6"
                        checked={selectedCards.includes(domain)}
                        readOnly
                      />
                    </div>
                    <h1 className="text-base font-medium leading-normal ml-16 text-black font-helvetica-neue mr-5">
                      {domain}
                    </h1>
                  </div>
                ))
              }


            </div>
            <div className="flex flex-col justify-center items-center p-4">
              <button className="w-44 bg-gradient-to-br from-blue-500 via-blue-500 to-aqua-700 text-white py-2 px-4 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 mb-4" onClick={handleDomainSubmit}>
                Gateway to App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding2;
