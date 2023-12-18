import React from 'react'
import PlusIcon from "../../public/Images/PlusIcon.svg"
import BackArrow_Icon from "../../public/Images/BackArrow_Icon.svg"
const GeneratedSubmilestones = ({ aiGenerated, milestones, setAiGenerated, setPresentPage }) => {
  return (

    <div className=' w-full py-4 px-10 font-sans '>
      <BackArrow_Icon onClick={() => setPresentPage(prev => prev - 1)} className="cursor-pointer"/>
      <div className='max-h-[70vh] overflow-scroll overflow-y-auto overflow-x-hidden'>
        {
          Object.values(aiGenerated).map((milestone, index1) => (
            <div key={index1} className='flex flex-col justify-around bg-zinc-200 shadow-lg p-4 rounded-xl my-3'>
              <h2 className='mb-3'> <span className='font-bold text-xl'> Milestone Title: </span> <span className='text-xl'> {milestones[index1]?.heading} </span> </h2>
              {
                milestone.Submilestones.map((submilestone, index2) => (
                  <div key={index2} className='flex my-2'>
                    <img src="/Images/Minus_Icon.png" alt="-" className='w-6 h-6 cursor-pointer mr-3' onClick={() => {
                      let aiGen = { ...aiGenerated }
                      aiGen[`Milestone ${index1}`].Submilestones = aiGen[`Milestone ${index1}`].Submilestones.filter(sub => sub.work !== submilestone.work)
                      setAiGenerated(aiGen)
                    }} />
                    <span className='w-48'> Submilestone {index2 + 1} </span>
                    <input type="text" value={submilestone.work} onChange={e => {
                      let newAiGen = { ...aiGenerated }
                      newAiGen[`Milestone ${index1}`]["Submilestones"][index2]["work"] = e.target.value
                      setAiGenerated(newAiGen)
                    }} className='w-full px-2 py-1 outline-none rounded-md' />
                  </div>
                ))
              }
              <div className='flex justify-center'>
                <PlusIcon className="cursor-pointer" onClick={() => {
                  let aiGen = { ...aiGenerated }
                  aiGen[`Milestone ${index1}`].Submilestones.push({
                    "work": "",
                    "isCompleted": false
                  })
                  setAiGenerated(aiGen)
                }} />
              </div>
            </div>
          ))
        }
      </div>
      <div className='w-full flex justify-end px-10 text-white'>
        <button className='bg-sky-700 px-2 py-3 rounded-3xl w-40 text-xl' onClick={() => setPresentPage(prev => prev + 1)}> Create Proposal </button>
      </div>
    </div>
  )
}

export default GeneratedSubmilestones