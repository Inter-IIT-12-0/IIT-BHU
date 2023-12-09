"use client"
import SearchIcon from "../../public/Images/SearchIcon.svg"
import NotificationsIcon from "../../public/Images/NotificationsIcon.svg"
import Trumio_logo from "../../public/Images/Trumio_Logo.svg"
import Trumio_text from "../../public/Images/Trumio_text.svg"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import { deleteCookie } from 'cookies-next';
import {useRouter} from 'next/navigation'

const Navbar = () => {
  const { data: session } = useSession()
  const [click, setClick] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    deleteCookie("role")
    deleteCookie("newUser")
    signOut()
    router.push('/onboarding')
  }

  useEffect(() => {
    // if(!session) {
    //   router.push('/onboarding')
    // }
  }, [])

  return (
    <div className="w-[100vw] h-16 shadow-md flex justify-between items-center border-b-2 opacity-100 z-40 pt-2">
      <Link href={"/"} className="justify-start items-center inline-flex gap-4 ml-4 scale-75">
        <div className="z-0"><Trumio_logo/></div>
        <div>
          <Trumio_text />
          <div className="w-28 h-2 bg-gradient-to-l from-[#00509f] to-white rounded-[0.1rem] flex flex-row-reverse font-bold font-['Montserrat'] text-white text-[0.3rem] pr-1 items-center z-0" >
            UNIK
          </div>
        </div>
      </Link>
      <div className="flex">
        <SearchIcon className="mx-5" />
        <NotificationsIcon className="mx-5" />
        {
          session &&
            <div onClick={() => setClick(prev => !prev)} className="cursor-pointer relative w-16 mr-8">
              <img className="w-8 h-8 rounded-full bg-slate-400 mx-5" src={session.user.avatarUrl}>

              </img>
              {
                click &&
                <div className="flex flex-col absolute top-10 w-32 -left-6 px-5 py-2 rounded-b-xl bg-sky-600 text-white">
                  <Link href={`/profile/${session.user._id}`}>
                    View Profile
                  </Link>
                  <div onClick={handleLogout}> Logout </div>
                </div>
              }
            </div>
        }
        <Footer />
      </div>
    </div>
  )
}

export default Navbar