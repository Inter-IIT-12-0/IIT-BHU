import React from "react";
import Navbar from "../../../components/Navbar";
import SidebarUpskilling from "../../../components/SidebarUpskilling";
import TableOfTools from "../../../public/Images/TableOfTools.svg";
import Calendar from "../../../public/Images/calendar.svg";
import MilestoneSideBar from "../../../components/Milestone_sidebar";
import Export from "../../../public/Images/export.svg";
import Link from "next/link";
import Milestone from "../../../components/Milestone";
import Footer from "../../../components/Footer";

const Upskilling = () => {
  return (
    <div className="flex bg-cyan-300 bg-opacity-30 h-[150vh]">
      <SidebarUpskilling />
      <div className="flex flex-col">
        <Navbar />
      </div>
      <div className="fixed top-0 right-0 h-full w-1/4 bg-neutral-50  text-black p-4">
        <div className="bg-gray-300 p-2 mb-4">
          {/* Your content for the box here */}
          Box Content dsfdfsd
        </div>

        <div className="flex items-center">
          <div>
            {/* Status Content */}
            <span
              style={{
                color: "black",
                fontSize: "1rem",
                fontWeight: "600",
                fontFamily: "Inter",
                lineHeight: "1.75",
              }}
            >
              Status:{" "}
            </span>
            <span
              style={{
                color: "red",
                fontSize: "1rem",
                fontWeight: "700",
                fontFamily: "Inter",
                lineHeight: "1.75",
              }}
            >
              Due Today
            </span>
          </div>

          <div className="ml-auto text-neutral-500 text-[10.33px] font-normal font-['Roboto'] underline leading-none">
            {/* View Calendar Content */}
            <div className="flex mt-1">
              View Calendar
              <Calendar />
            </div>
          </div>
        </div>

        <div className="w-[500px] h-[0.92px] mt-2 opacity-10 bg-black" />
        <div className="w-[335.21px] h-[140px] mt-3 bg-white rounded-[11.05px] shadow">
          <div className="flex items-center">
            <div className="text-neutral-400 text-xs mt-1 ml-2 font-medium font-inter leading-4">
              Milestone 1
            </div>

            <div className="ml-auto text-neutral-500 text-[10.33px] font-normal font-['Roboto'] underline leading-none">
              {/* View Calendar Content */}
              <div className="text-red-400 mr-2 text-xs font-normal font-inter leading-4">
                <span>Due Date: </span>
                <span>3 Dec</span>
              </div>
            </div>
          </div>
          <div className="w-[335px] h-[0.92px] mt-2 opacity-10 bg-black" />
          <div className="text-black text-sm ml-5 mt-2 font-semibold font-inter leading-tight">
            Heading of milestone
          </div>
          <div className="w-[296.53px] h-[55.25px] ml-6 mt-1 text-zinc-500 text-xs font-medium font-inter leading-4">
            Repudiandae aliquid omnis quaerat asperiores. Aut eos omnis
            molestiae quia ut sed dolorum dicta est. Qui sed molestiae
          </div>
          <div className="text-black text-[9.21px] font-medium font-['Inter'] underline leading-[13.81px] text-center">
            <div>Show Full In Workspace</div>
          </div>
          <Milestone/>
        </div>

        
      </div>

      <Footer />
    </div>
  );
};

export default Upskilling;
