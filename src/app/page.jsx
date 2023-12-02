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
import SubMilestoneCard from "../components/SubMilestoneCard";
import SubMilestoneSidebar from "../components/SubMilestoneSidebar";
import ProjectDashboard from "../components/ProjectDashboard";
import RoundedProgressBar from "../components/RoundedProgressBar";
import ToolMaker from "../components/ToolMaker";
import StudentSidebar from "../components/StudentSidebar";
import Navbar from "../components/Navbar";
import SidebarUpskilling from "../components/SidebarUpskilling";
// import Slider from "../components/Slider";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex overflow-x-hidden">
      {/* {session ? (
          <> 
            <p>Welcome, {session.user?.name}!</p>
            <img src={session.user.image} alt="" />
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn('google')} > Sign In </button>
        )}
      {/* <Calendar /> */}

{/*       <Clickup /> */}
{/* <ProjectDashboard/> */}
{/* <RoundedProgressBar /> */}
      <div>
      <div className="w-screen">
      <Navbar/>
      </div>
      <div className="flex flex-row">
          <div>
          <SidebarUpskilling/>
          </div>
          <ToolMaker/>
      </div>
      </div>
    </main>
  );
}
