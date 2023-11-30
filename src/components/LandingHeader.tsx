"use client";
import Image from "next/image";
import Trumio_text from "../../public/Images/Trumio_text.svg";
import Trumio_logo from "../../public/Images/Trumio_Logo.svg";

export default function LandingHeader() {
  return (
    <div className="fixed top-0 z-10 w-full mt-3">
    <div className="w-[1728px] h-[75px] flex">
      <div className="flex ml-10 mt-5 items-start justify-start">
        <div className="w-5 h-5">
          <Trumio_logo className="transform scale-75" />
        </div>
        <div className="w-18 h-5">
          <Trumio_text className="transform scale-75" />
        </div>
      </div>
      <div className="w-[1000px] h-9 ml-20 justify-center items-start gap-[125px] mt-6 inline-flex">
        <div className="text-neutral-500 text-xl font-normal font-['Helvetica Neue']">
          UPSKILL
        </div>
        <div className="text-neutral-500 text-xl font-normal font-['Helvetica Neue']">
          MARKETPLACE
        </div>
        <div className="text-neutral-500 text-xl font-normal font-['Helvetica Neue']">
          LOUNGE
        </div>
        <div className="text-neutral-500 text-xl font-normal font-['Helvetica Neue']">
          ABOUT US
        </div>
      </div>
      <div className="w-48 h-16 flex-col justify-start items-center transform scale-75 inline-flex">
        <div className="px-10 py-5 mt-2 bg-cyan-300 rounded-md shadow shadow-inner justify-center items-center gap-2 inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="text-white text-xl font-medium font-['Inter']">
              Get Started
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
