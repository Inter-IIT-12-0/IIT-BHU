"use client";
// import styles from './page.module.css';
import { useSession, signIn, signOut } from "next-auth/react";
import GoogleButton from "react-google-button";
import Sidebar from "../components/Sidebar";
import ChatbotCard from "../components/ChatbotCard";
import Bot from "../components/Bot";
import ComparisonGraph from "../components/ComparisonGraph";
import GlossyCard from "../components/GlossyCard";
import RightCard from "../components/RightCard";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectCard";
import ProjectCard from "../components/MyProjectCard";
import Calendar from "../components/Calendar";
import TaskList from "../components/TaskList";
import Clickup from "../components/Clickup";
export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex">
      {/* {session ? (
          <>
            <p>Welcome, {session.user?.name}!</p>
            <img src={session.user.image} alt="" />
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn('google')} > Sign In </button>
        )} */}
      {/* <Calendar /> */}
      <div className="w-full h-full flex justify-end relative">
        <div className="w-96 h-96 relative flex">
          <div className="w-64 h-16 bg-blue-400 bg-opacity-0 rounded-lg shadow border border-blue-400" />
          <div className="text-black text-3xl font-normal font-['Lato'] tracking-tight">
            Interested
          </div>
          <div className="text-black text-4xl font-black font-['Lato'] tracking-tight">
            Marketing Asset Creation
          </div>
          <div className="text-black text-4xl font-black font-['Lato'] tracking-tight">
            Requirement Details
          </div>
          <div className="text-black text-4xl font-black font-['Lato'] tracking-tight">
            Description
          </div>
          <div className="text-black text-4xl font-black font-['Lato'] tracking-tight">
            Attachments
          </div>
          <div className="w-72 text-center text-neutral-700 text-3xl font-bold font-['Lato'] tracking-wide">
            About the Client
          </div>
          <div className="w-72 text-center text-neutral-700 text-4xl font-bold font-['Lato'] tracking-wide">
            Share
          </div>
          <div className="w-72 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Expected Duration - 8 W{" "}
          </div>
          <div className="w-28 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Mumbai
          </div>
          <div className="w-72 text-neutral-700 text-xl font-light font-['Lato'] tracking-tight">
            Listing Live till 13th December
          </div>
          <div className="w-7 h-6">
            <div className="w-7 h-6 opacity-0 bg-slate-600 border border-slate-600" />
          </div>
          <div className="w-44 text-neutral-700 text-xl font-light font-['Lato'] tracking-tight">
            Posted 3 Days Ago
          </div>
          <div className="w-5 h-5 justify-center items-center inline-flex">
            <div className="w-5 h-5 relative"></div>
          </div>
          <div className="w-64 h-9 text-neutral-700 text-3xl font-bold font-['Lato'] tracking-wide">
            Jayeshsingh Rathod
          </div>
          <div className="w-52 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Axiomatic Ventures
          </div>
          <div className="w-20 h-20 bg-zinc-300 rounded-full" />
          <div className="w-12 h-12" />
          <div className="w-12 h-12"></div>
          <div className="w-80 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Sector: DeepTech
          </div>
          <div className="w-96 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Develop a mobile application that connects environmentally conscious
            individuals and organizations in a virtual eco-community. The
            EcoConnect app aims to foster a sense of environmental awareness and
            collaboration by providing users with a platform to share
            sustainable practices, eco-friendly tips, and local initiatives.
            Users can create profiles, join discussion forums, and participate
            in challenges that promote green living.{" "}
          </div>
          <div className="w-60 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Projects Posted: 12
          </div>
          <div className="w-80 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Active Since: February 2023
          </div>
          <div className="w-80 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Payments Completed: $2680
          </div>
          <div className="w-20 text-neutral-700 text-3xl font-normal font-['Lato'] tracking-wide">
            Skills
          </div>
          <div className="w-96 text-sky-700 text-3xl font-normal font-['Lato'] tracking-wide">
            Business Requirement Document
          </div>
          <div className="w-36 h-9 ">
            <div className="w-28 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
              Favourite
            </div>
            <div className="w-6 h-6 " />
            <div className="w-36 h-9 bg-blue-400 bg-opacity-0 rounded-lg shadow border border-blue-400" />
          </div>
          <div className="w-6 h-6 justify-center items-center inline-flex">
            <div className="w-6 h-6 relative"></div>
          </div>
          <div className="w-56 h-5 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Sales and Marketing{" "}
          </div>
          <div className="w-44 h-28 ">
            <div className="w-44 h-28 bg-zinc-300 rounded-3xl" />
            <div className="w-32 text-neutral-700 text-3xl font-bold font-['Lato'] tracking-wide">
              $2200
            </div>
            <div className="w-32 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
              Fixed Price
            </div>
          </div>
          <div className="w-96 h-16">
            <div className="w-96 h-16 bg-zinc-300" />
            <div className="w-10 text-neutral-700 text-lg font-normal font-['Lato'] tracking-tight">
              Mon
            </div>
            <div className="w-7 text-neutral-700 text-lg font-normal font-['Lato'] tracking-tight">
              Tue
            </div>
            <div className="w-10 text-neutral-700 text-lg font-normal font-['Lato'] tracking-tight">
              Wed
            </div>
            <div className="w-8 text-neutral-700 text-lg font-normal font-['Lato'] tracking-tight">
              Thu
            </div>
            <div className="w-7 text-neutral-700 text-lg font-normal font-['Lato'] tracking-tight">
              Sat
            </div>
            <div className="w-9 text-neutral-700 text-lg font-normal font-['Lato'] tracking-tight">
              Sun
            </div>
            <div className="w-6 text-neutral-700 text-lg font-normal font-['Lato'] tracking-tight">
              Fri
            </div>
            <div className="w-3.5 h-3.5 bg-white rounded-full" />
            <div className="w-3.5 h-3.5 bg-white rounded-full" />
            <div className="w-3.5 h-3.5 bg-white rounded-full" />
            <div className="w-3.5 h-3.5 bg-white rounded-full" />
            <div className="w-3.5 h-3.5 bg-white rounded-full" />
            <div className="w-3.5 h-3.5 bg-green-500 rounded-full" />
            <div className="w-3.5 h-3.5 bg-green-500 rounded-full" />
          </div>
          <div className="w-12 h-11 justify-center items-center inline-flex">
            <div className="w-12 h-11 relative"></div>
          </div>
          <div className="w-32 text-neutral-700 text-3xl font-normal font-['Lato'] tracking-wide">
            Product{" "}
          </div>
          <div className="w-32 text-neutral-700 text-3xl font-normal font-['Lato'] tracking-wide">
            Research
          </div>
          <div className="w-32 text-neutral-700 text-3xl font-normal font-['Lato'] tracking-wide">
            Marketing
          </div>
          <div className="w-60 text-neutral-700 text-2xl font-normal font-['Lato'] tracking-wide">
            Open in new window
          </div>
          <div className="text-black text-base font-semibold font-['Lato'] tracking-tight">
            Slack
          </div>
          <div className="text-black text-base font-semibold font-['Lato'] tracking-tight">
            WhatsApp
          </div>
          <div className="text-black text-base font-semibold font-['Lato'] tracking-tight">
            Copy Link
          </div>
          <div className="w-12 h-12 flex-col justify-start items-start inline-flex">
            <div className="w-20 h-20 relative"></div>
          </div>
          <div className="w-8 h-8">
            <div className="w-8 h-8 bg-zinc-300" />
          </div>
        </div>
      </div>
    </main>
  );
}
