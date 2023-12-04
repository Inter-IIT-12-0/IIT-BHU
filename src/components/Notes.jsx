import React from 'react'
import Send_Icon from "../../public/Images/Send_Icon.svg"


const Notes = ({submilestone}) => {
    return (
        <div>
            <div className='absolute right-20 top-0 bg-indigo-50 w-80 h-72 pb-8 rounded-bl-3xl'>
                <div className='flex justify-center items-center'>
                    <p className='border-b border-zinc-300 py-4 w-full flex justify-center items-center font-semibold  text-3xl'>
                        Notes
                    </p>
                </div>
                <div className='overflow-x-hidden overflow-y-auto overflow-scroll h-36'>
                    {
                        submilestone.stickyNotes.map((note, index) => (
                            <div className='flex my-5 pl-8 text-zinc-600' key={index}>
                                <span> {index + 1}. </span>
                                <div className="text-base font-normal pl-2">
                                    {note}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <form className="flex justify-around mt-3 w-80 mb-4 pr-8 items-center">
                    <input type="text" className="rounded-3xl w-full h-11 pl-4 mx-3 outline-none" placeholder='Write a comment' />
                    <button type="submit" className="rounded-full bg-slate-400 text-white font-bold flex justify-center items-center w-11 h-8">
                        <span className='text-xl flex relative bottom-1'> + </span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Notes