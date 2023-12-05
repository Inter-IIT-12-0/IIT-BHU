"use client";

// components/GlassyCard.js

import { useState } from "react";

const OnBoarding = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
  };

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
              <label
                className={`flex-1 cursor-pointer relative p-4 m-2 rounded-lg hover:shadow-md w-64 h-52   ${selectedCard === 1 ? "border-2 border-blue-500" : ""
                  }`}
                onClick={() => handleCardClick(1)}
              >
                <div className="flex">

                  <input
                    type="radio"
                    name="subcard"
                    className="mb-28 w-6 h-6" // Adjust the size as needed
                    checked={selectedCard === 1}
                    readOnly
                  />
                </div>
                <h1 className="text-2xl font-medium leading-normal ml-16 text-black font-helvetica-neue ml-16 ">
                  Domain 1
                </h1>
              </label>

              {/* Subcard 2 */}
              <label
                className={`flex-1 cursor-pointer relative p-4 m-2 rounded-lg hover:shadow-md w-64 h-52  transition ${selectedCard === 2 ? "border-2 border-blue-500" : ""
                  }`}
                onClick={() => handleCardClick(2)}
              >
                <div className="flex">
                  <input
                    type="radio"
                    name="subcard"
                    className="mb-28 w-6 h-6" // Adjust the size as needed
                    checked={selectedCard === 2}
                    readOnly
                  />
                </div>
                <h1 className="text-2xl font-medium leading-normal ml-16 text-black font-helvetica-neue">
                  Domain 2
                </h1>
              </label>

              {/* Subcard 3 */}
              <label
                className={`flex-1 cursor-pointer relative p-4 m-2 rounded-lg hover:shadow-md w-64 h-52 mr-16 transition ${selectedCard === 3 ? "border-2 border-blue-500" : ""
                  }`}
                onClick={() => handleCardClick(3)}
              >
                <div className="flex">
                  <input
                    type="radio"
                    name="subcard"
                    className="mb-28 w-6 h-6" // Adjust the size as needed
                    checked={selectedCard === 3}
                    readOnly
                  />
                </div>
                <h1 className="text-2xl font-medium leading-normal ml-16 text-black font-helvetica-neue">
                  Domain 3
                </h1>
              </label>
              <label
                className={`flex-1 cursor-pointer relative p-4 m-2 rounded-lg hover:shadow-md w-64 h-52 mr-16 transition ${selectedCard === 4 ? "border-2 border-blue-500" : ""
                  }`}
                onClick={() => handleCardClick(4)}
              >
                <div className="flex">
                  <input
                    type="radio"
                    name="subcard"
                    className="mb-28 w-6 h-6" // Adjust the size as needed
                    checked={selectedCard === 4}
                    readOnly
                  />
                </div>
                <h1 className="text-2xl font-medium leading-normal ml-16 text-black font-helvetica-neue">
                  Domain 5
                </h1>
              </label>
              <label
                className={`flex-1 cursor-pointer relative p-4 m-2 rounded-lg hover:shadow-md w-64 h-52 mr-16 transition ${selectedCard === 5 ? "border-2 border-blue-500" : ""
                  }`}
                onClick={() => handleCardClick(5)}
              >
                <div className="flex">
                  <input
                    type="radio"
                    name="subcard"
                    className="mb-28 w-6 h-6" // Adjust the size as needed
                    checked={selectedCard === 5}
                    readOnly
                  />
                </div>
                <h1 className="text-2xl font-medium leading-normal ml-16 text-black font-helvetica-neue">
                  Domain 5
                </h1>
              </label>
              <label
                className={`flex-1 cursor-pointer relative p-4 m-2 rounded-lg hover:shadow-md w-64 h-52 mr-16 transition ${selectedCard === 6 ? "border-2 border-blue-500" : ""
                  }`}
                onClick={() => handleCardClick(6)}
              >
                <div className="flex">
                  <input
                    type="radio"
                    name="subcard"
                    className="mb-28 w-6 h-6" // Adjust the size as needed
                    checked={selectedCard === 6}
                    readOnly
                  />
                </div>
                <h1 className="text-2xl font-medium leading-normal ml-16 text-black font-helvetica-neue">
                  Domain 5
                </h1>
              </label>
            </div>
            <div className="flex flex-col justify-center items-center p-4">
              <button className="w-44 bg-gradient-to-br from-blue-500 via-blue-500 to-aqua-700 text-white py-2 px-4 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 mb-4">
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
