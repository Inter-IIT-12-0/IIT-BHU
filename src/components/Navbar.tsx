"use client"
import SearchIcon from "../../public/Images/SearchIcon.svg"
import NotificationsIcon from "../../public/Images/NotificationsIcon.svg"


const Navbar = () => {
  return (
    <div className="w-full h-16 shadow-md flex justify-end items-center pr-5 bg-cyan-100 fixed top-0 left-0 z-10 opacity-100">
        <SearchIcon className="mx-5"/>
        <NotificationsIcon className="mx-5"/>
        <div className="w-8 h-8 rounded-full bg-slate-400 mx-5"></div>
    </div>
  )
}

export default Navbar