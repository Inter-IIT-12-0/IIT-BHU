import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Export_Icon from "../../public/Images/export.svg"
import SearchIcon from "../../public/Images/SearchIcon.svg"
import ClientProjectComponent from './ClientProjectsComponent'
import ClientProjectsRightSidebar from './clientProjectsRightSidebar'



const ViewBids = ({ project_id }) => {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("select")
  const [bids, setBids] = useState({})
  const [openBid, setOpenBid] = useState(false)
  const [openingTeam, setOpenTeam] = useState({})
  useEffect(() => {
    axios.get(`/api/bids/${project_id}`).then(res => {
      console.log(res.data)
      setBids(res.data)
    }).catch(console.log)
  }, [])

  const handleView = (team) => {
    axios.put(`/api/team/?teamId=${team._id}`, {
      ...team,
      status: 'Reviewed'
    })
  }
  return (
    <>
      {
        !openBid ?
          <div className='flex flex-col py-5 px-16 w-full'>
            <h2 className='font-bold text-3xl'> {bids.projectTitle} </h2>
            <span className='font-semibold mt-10 text-2xl'> Received Bids: </span>
            <div className='flex'>
              <div className='flex items-center mt-5 mx-6 bg-gray-100 w-72 px-3 rounded-2xl py-1'>
                <SearchIcon className="scale-75" />
                <input type="text" name="" placeholder='Search for Projects or Users' className='mx-3 outline-none w-full h-full bg-gray-100' value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <div className='flex flex-col mx-6'>
                <span> Bid Status </span>
                <select value={status} onChange={e => setStatus(e.target.value)} className='outline-none border-2 border-gray-300 px-2 py-1 rounded-lg'>
                  <option value="select">Select</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="New"> New </option>
                </select>
              </div>
            </div>
            <table className='w-full mt-8 overflow-scroll overflow-y-auto overflow-x-hidden'>
              <thead className="text-xs text-gray-700 uppercase bg-sky-300">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Ranking
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Team Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bid Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Team Rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3" onClick={handleView} >
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  bids.teams && bids.teams.filter(team => {
                    if (team.teamName.toLowerCase().startsWith(search)) {
                      if (status === 'select') return true
                      if (status === 'Reviewed') return team.status === 'Reviewed'
                      return team.status === 'Pending'
                    }
                    return false

                  }).sort((a, b) => b.rating - a.rating).map((bid, index) => (
                    <tr className="bg-white border-y dark:border-gray-300">
                      <td className="flex justify-center items-center px-6 py-4">
                        <span className='flex justify-center items-center rounded-full p-1 border-2 border-gray-400 w-8 h-8 relative bottom-2'>
                          {index + 1}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {bid.teamName}
                      </td>
                      <td className="px-6 py-4 text-center">
                        &#8377; {bid.proposal.bidAmount}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {bid.rating} / 5.0
                      </td>
                      <td className="px-6 py-4 text-center">
                        {bid.status === 'Reviewed' ? <span className='bg-orange-200 text-orange-600 px-2 py-1 rounded-lg font-semibold'> Reviewed </span> : <span className='bg-sky-200 text-sky-700 font-semibold px-2 py-1 rounded-lg'> New </span>}
                      </td>
                      <td className="px-6 py-4 flex justify-center items-center">
                        <span onClick={() => {
                          setOpenTeam(bid)
                          setOpenBid(true)
                        }}> <Export_Icon className="scale-50 cursor-pointer" />
                        </span>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div> :
          <div className="flex flex-col py-5 px-16 w-full">
            <ClientProjectComponent team={openingTeam} />
            {/* <ClientProjectsRightSidebar  /> */}
          </div>
      }
    </>
  )
}

export default ViewBids