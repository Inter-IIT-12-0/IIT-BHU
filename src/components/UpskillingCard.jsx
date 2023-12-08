"use client"
import React from 'react'

const UpskillingCard = ({ image, content, heading }) => {
    return (
        <div className="xl:w-64 xl:h-64 w-64 h-56 mx-3 rounded-2xl border-2 border-zinc-300 flex flex-col items-center justify-evenly p-2 cursor-pointer hover:scale-110 transition-all duration-500" >
            <div className="text-black text-2xl font-medium font-['Helvetica Neue']tracking-wide pb-1">{heading}</div>
            {image}
            <div className="text-center text-neutral-400 text-lg font-normal font-['Helvetica Neue'] tracking-tight">{content} </div>
        </div>
    )
}

export default UpskillingCard