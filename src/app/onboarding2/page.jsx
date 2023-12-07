"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// components/GlassyCard.js

import { useState } from "react";


const OnBoarding = () => {
  const router = useRouter()
  const {data:session} = useSession()
  const [selectedCard, setSelectedCard] = useState("UI/UX Designing");
  const handleCardClick = (domain) => {
    setSelectedCard(domain);
  };
  const domains = ["UI/UX Designing", "Engineering", "Product Management", "Data Analysis", "Consultancy", "Research"]

  const handleDomainSubmit = () => {
    let user = session.user
    user.domain.push(selectedCard)
    axios.put(`/api/user/?userId=${session.user._id}`, user).then(res => router.push("/")).catch(console.log)

  }

  return (
    <div className="h-full w-full">
      <div class="bg-cover bg-center  " style={{ "background-image": "url('./Rectangle.png');" }}>
        <div className=" justify-center items-center w-100 ml-20 ">
          <div className="glass-card bg-white bg-opacity-80 rounded-md p-8 shadow-lg mt-2">
            <h1 className="text-2xl font-medium leading-normal ml-16 text-black-600 font-helvetica-neue text-center mb-12">
              Select your Domain of Interest
            </h1>
            <div className="grid grid-cols-3 ml-20 space-x- ">
              {/* Subcard 1 */}
              {
                domains.map(domain => (
                  <label
                    className={`flex-1 cursor-pointer relative p-4 m-2 rounded-lg hover:shadow-md w-64 h-52 flex justify-center items-center  ${selectedCard === domain ? "border-2 border-blue-500" : ""
                      }`}
                    onClick={() => handleCardClick(domain)}
                  >
                    <div className="flex">

                      <input
                        type="radio"
                        name="subcard"
                        className="mb-28 w-6 h-6" // Adjust the size as needed
                        checked={selectedCard === domain}
                        readOnly
                      />
                    </div>
                    <h1 className="text-2xl font-medium leading-normal ml-16 text-black font-helvetica-neue ">
                      {domain}
                    </h1>
                  </label>
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

export default OnBoarding;
