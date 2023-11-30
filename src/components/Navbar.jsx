"use client"
import SearchIcon from "../../public/Images/SearchIcon.svg"
import NotificationsIcon from "../../public/Images/NotificationsIcon.svg"
import Trumio_logo from "../../public/Images/Trumio_Logo.svg"
import Trumio_text from "../../public/Images/Trumio_text.svg"

const Navbar = () => {
  return (
    <div className="w-full h-16 shadow-md flex justify-between items-center pr-5 bg-cyan-100 opacity-100">
      <div className="justify-start items-center inline-flex gap-4 ml-4 scale-75">
        <Trumio_logo />
        <div>
          <Trumio_text />
          <div className="w-28 h-2 bg-gradient-to-l from-[#00509f] to-white rounded-[0.1rem] flex flex-row-reverse font-bold font-['Montserrat'] text-white text-[0.3rem] pr-1 items-center" >
            UNIK
          </div>
        </div>
      </div>
      <div className="flex">
        <SearchIcon className="mx-5" />
        <NotificationsIcon className="mx-5" />
        <div className="w-8 h-8 rounded-full bg-slate-400 mx-5"></div>
      </div>
    </div>
  )
}

export default Navbar