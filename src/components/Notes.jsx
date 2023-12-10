import React, { useEffect, useState } from 'react'
import Send_Icon from "../../public/Images/Send_Icon.svg"
import axios from 'axios'


const Notes = ({submilestone, project}) => {

    const [note, setNote] = useState("")
    const [notes, setNotes] = useState(submilestone.stickyNotes)
    const handleNotes = (e) => {
        e.preventDefault()
        let newMilestones = [...project.milestones]
        let mil, submil
        let got = false
        for (let i=0; i<newMilestones.length; i++) {
            for (let j=0; j<newMilestones[i].submilestones.length; j++) {
                if((newMilestones[i].submilestones)[j]._id === submilestone._id) {
                    mil = i
                    submil = j
                    got = true
                    break
                }
            }
            if (got) break
        }
        newMilestones[mil].submilestones[submil].stickyNotes.push(note)
        console.log(newMilestones)
        axios.patch(`/api/project/${project._id}`, {
            milestones: newMilestones
        }).then(res => {
            let newNotes = [...notes]
            newNotes.push(note)
            setNotes(newNotes)
        }).catch(console.error)
    }

    useEffect(() => {

    }, [notes])
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
                        notes.map((note, index) => (
                            <div className='flex my-5 pl-8 text-zinc-600' key={index}>
                                <span> {index + 1}. </span>
                                <div className="text-base font-normal pl-2">
                                    {note}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <form className="flex justify-around mt-3 w-80 mb-4 pr-8 items-center" onSubmit={handleNotes}>
                    <input type="text" className="rounded-3xl w-full h-11 pl-4 mx-3 outline-none" placeholder='Write a Note' value={note} onChange={e => setNote(e.target.value)}/>
                    <button type="submit" className="rounded-full bg-slate-400 text-white font-bold flex justify-center items-center w-11 h-8">
                        <span className='text-xl flex relative bottom-1'> + </span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Notes