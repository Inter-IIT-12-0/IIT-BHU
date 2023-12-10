"use client"
import React from "react";
import Navbar from "../../components/Navbar";
import SidebarUpskilling from "../../components/SidebarUpskilling";
import TableOfTools from "../../../public/Images/TableOfTools.svg";
import AIArcade from "../../../public/Images/AIArcade.svg";
import Mentorship from "../../../public/Images/Mentorship.svg";
import GlossyCard from "../../components/GlossyCard";
import UpskillingCard from "../../components/UpskillingCard";
import Plus from "../../../public/Images/Plus.svg";
import Link from "next/link";
import Footer from "../../components/Footer";
import RightCard from "../../components/RightCard";

const Upskilling = () => {
  return (
    <main className='w-[100vw] h-[100vh] overflow-hidden'>
      <div className='flex flex-col w-full h-full'>
        <Navbar />
        <div className='flex w-full h-full'>
          <SidebarUpskilling page="dashboard"/>
          <div className="flex flex-col max-h-[85vh] overflow-scroll overflow-y-auto overflow-x-hidden w-full" >
            <div className="h-full bg-white rounded-2xl border border-zinc-300 relative top-24 pl-12 pt-4 flex flex-col justify-evenly pb-4 mx-5">
              <div className="text-black text-4xl font-medium font-['Helvetica Neue'] tracking-wide mb-3">
                Let's get started!{" "}
              </div>
              <div className="text-neutral-400 text-2xl font-normal font-['Helvetica Neue'] tracking-wide my-5">
                To start your learning journey select any one{" "}
              </div>
              <div className="w-full flex justify-between xl:pr-32 px-8">
                <UpskillingCard
                  heading="Table of Tools"
                  image={<TableOfTools  className="xl:scale-100 scale-75" />}
                  content="Explore and use different AI Tools"
                  url={"/toolsTable"}
                />
                <UpskillingCard
                  heading="AI Arcade"
                  image={<AIArcade  className="xl:scale-100 scale-75" />}
                  content="Learn AI tools through fun games"
                  url={"/homeArcade"}
                />
                <UpskillingCard
                  heading="Mentorship"
                  image={<Mentorship className="xl:scale-100 scale-75" />}
                  content="Get one on one mentorship from AI experts"
                  url={"/Mentorship"}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col w-[1200px] h-[500px] relative  top-24 pl-12 pt-4">
              <div className="text-sky-800 text-4xl font-medium font-['Helvetica Neue'] tracking-wide">
                Continue Learning{" "}
              </div>
              <div className="flex">
                <div className="xl:w-[600px] h-96 bg-white bg-opacity-50 rounded-2xl border-2 border-sky-800 border-dotted mt-5 flex flex-col justify-center items-center px-6">
                  <Plus className="scale-75 xl:scale-100" />
                  <div className="text-black text-base xl:text-2xl font-semibold font-['HelveticaNeueLTW06-97BlkCnObl'] tracking-wide">
                    You don't have any active courses yet{" "}
                  </div>
                  <Link
                    href="/resources"
                    className="mt-2 text-sky-800 text-3xl font-normal font-['Helvetica'] underline tracking-wide"
                  >
                    Explore Resources{" "}
                  </Link>
                </div>
                <div className="flex flex-col justify-evenly ml-2 xl:ml-28">
                  <RightCard />
                  <RightCard />
                  <RightCard />
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col h-[500px] relative top-24 pl-12 pt-4">
              <div className="text-sky-800 text-4xl font-medium font-['Helvetica Neue'] tracking-wide">
                Recommended Courses For You
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-3 grid-flow-row mt-8 ">
                <GlossyCard />
                <GlossyCard />
                <GlossyCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Upskilling;
