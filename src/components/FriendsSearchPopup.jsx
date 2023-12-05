import React, { useState } from 'react'
import PlusIcon from "../../public/Images/PlusIcon.svg"
import {simpleSearch} from '../lib/SearchAlgo'

const FriendsSearchPopup = ({users, setPopup, plusFunction}) => {
    const [search, setSearch] = useState("")
    return (
        <div className='absolute bottom-8 bg-zinc-300 rounded-xl w-96 h-72 flex flex-col items-center'>
            <div className='flex justify-between w-3/4 items-center'>
            <input type="text" placeholder='Search' className='outline-none py-2 w-11/12 my-3 rounded-md px-2 mx-3' value={search} onChange={e => setSearch(e.target.value)} />
            <span className='w-10 h-8 bg-black text-white rounded-full flex justify-center items-center cursor-pointer' onClick={() => setPopup(false)}> X </span>
            </div>
            <div className='w-11/12 h-48 overflow-scroll overflow-y-auto overflow-x-hidden'>
                {
                    users.filter(user => {
                        return simpleSearch(search, user.name) || (user.institute? simpleSearch(search, user.institute) : false)
                    }).map((user, index) => (
                        <div className='flex justify-between h-16 pb-2 border-zinc-200 border-b-2 w-11/12 px-5 items-center' key={index}>
                            <img src={user.avatarUrl} alt={(user.name)[0].toLocaleUpperCase()} className='rounded-full w-7 h-7 mr-4'/>
                            <div className='flex flex-col '>
                            <span className='font-semibold'> {user.name} </span>
                            <span className='text-sm'> {user.institute} </span>
                            </div>
                            <PlusIcon onClick={() => plusFunction(user)} className="cursor-pointer"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FriendsSearchPopup