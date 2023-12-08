"use client"
import SearchIcon from "../../public/Images/SearchIcon.svg"
import NotificationsIcon from "../../public/Images/NotificationsIcon.svg"
import Trumio_logo from "../../public/Images/Trumio_Logo.svg"
import Trumio_text from "../../public/Images/Trumio_text.svg"
import { useSession } from "next-auth/react"
import Link from "next/link"
import Footer from "./Footer"

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <div className="w-[100vw] h-16 shadow-md flex justify-between items-center border-b-2 opacity-100 z-50">
      <Link href={"/"} className="justify-start items-center inline-flex gap-4 ml-4 scale-75">
        <Trumio_logo />
        <div>
          <Trumio_text />
          <div className="w-28 h-2 bg-gradient-to-l from-[#00509f] to-white rounded-[0.1rem] flex flex-row-reverse font-bold font-['Montserrat'] text-white text-[0.3rem] pr-1 items-center" >
            UNIK
          </div>
        </div>
      </Link>
      <div className="flex">
        <SearchIcon className="mx-5" />
        <NotificationsIcon className="mx-5" />
        {
          session && 
          <Link href={`/profile/${session.user._id}`} >
          <img className="w-8 h-8 rounded-full bg-slate-400 mx-5" src={session.user.avatarUrl}>

          </img></Link>
        }
        <Footer />
      </div>
    </div>
  )
}

export default Navbar