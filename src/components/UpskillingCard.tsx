import React from 'react'

interface CardProps {
    heading: string;
    image: any;
    content: string;
}

const UpskillingCard: React.FC<CardProps> = ({ image, content, heading }) => {
    return (
        <div className="w-64 h-64 rounded-2xl border-2 border-zinc-300 flex flex-col items-center justify-evenly p-2 cursor-pointer hover:scale-110 transition-all duration-500" >
            <div className="text-black text-2xl font-medium font-['Helvetica Neue']tracking-wide pb-1">{heading}</div>
            {image}
            <div className="text-center text-neutral-400 text-lg font-normal font-['Helvetica Neue'] tracking-tight">{content} </div>
        </div>
    )
}

export default UpskillingCard