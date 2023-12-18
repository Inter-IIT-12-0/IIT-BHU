import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Export_Icon from "../../public/Images/export.svg"
import SearchIcon from "../../public/Images/SearchIcon.svg"
import ClientProjectsComponent from './ClientProjectsComponent'
import ClientProjectsRightSidebar from './clientProjectsRightSidebar'
import Bid from './Bid'



const ViewBids = ({ project_id }) => {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("select")
  const [bids, setBids] = useState([])
  const [openBid, setOpenBid] = useState(false)
  const [openingTeam, setOpenTeam] = useState({})
  useEffect(() => {
    axios.get(`/api/bids/${project_id}`).then(res => {
      setBids(res.data.teams)
    }).catch(err => toast.error(err.response.data.error))

  }, [])

  const handleView = (team) => {
    axios.patch(`/api/team/?teamId=${team._id}`, {
      ...team,
      status: 'Reviewed'
    }).then(res => {
      setOpenTeam(team);
      setOpenBid(true)
    })
  }
  return (
    <>
      {
        !openBid ?
          <div className="flex flex-col p-8 w-full bg-gray-200">
            <div className="flex justify-between">
              <div className="flex flex-row">
                <h1 className="text-black text-2xl font-semibold mr-3">Project Name</h1>
                <img className="h-7 mt-1" src="/Images/export.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col rounded-md px-3 py-6 mt-8">
              <div className="flex justify-between">
                <h1 className="text-2xl text-black font-semibold my-2">Bids Recieved</h1>
                <div className="flex flex-row">
                  <h1 className="text-1x1 text-black font-semibold my-2 mr-16">Recieved: {bids && bids.length} </h1>
                  <h1 className="text-1x1 text-black font-semibold my-2 mr-10">Reviewed: {bids && bids.filter(bid => bid.status === 'Reviewed').length} </h1>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="w-[70%]">
                  <h1 className="text-1x1 text-black font-semibold my-3">TruBot has ranked the bids received by you, take a look!</h1>
                  <div className="flex flex-row bg-white p-2 rounded-2xl">
                    <img className="h-5 pt-1 px-2" src="/Images/Search_Icon.svg" alt="" />
                    <input className="w-[100%] p-1" type="text" placeholder="Search for Teams" value={search} onChange={e => setSearch(e.target.value)} />
                  </div>
                </div>
                <select className="flex flex-col mt-3 w-1/4 h-1/2 outline-none rounded-3xl px-3 pt-3 bg-gray-300" value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="select"> Bid Status </option>
                  <option value="Pending"> New </option>
                  <option value="Reviewed"> Reviewed </option>
                </select>
              </div>
              <div className="mt-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="px-4 py-3 text-center">Ranking</th>
                      <th className="px-4 py-3 text-center">Team Name</th>
                      <th className="px-4 py-3 text-center">Bid Amount</th>
                      <th className="px-4 py-3 text-center">Team Rating</th>
                      <th className="px-4 py-3 text-center">Status</th>
                      <th className="px-4 py-3 text-center">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids && bids.filter(bid => bid.teamName.toLowerCase().includes(search.toLowerCase()) && (status === 'select' || bid.status === status)).map((bid, index) => (
                      <tr key={index} className="bg-white border-t">
                        <td className="px-6 py-4 flex justify-center">
                          <span className='flex justify-center items-center rounded-full p-1 border-2 border-gray-400 w-8 h-8 relative bottom-2'>
                            {index + 1}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center">
                            <span className="font-semibold">{bid.teamName}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">&#8377; {bid.proposal.bidAmount}</td>
                        <td className="px-6 py-4 text-center">{bid.rating?bid.rating:0}/5.0</td>
                        <td className="px-6 py-4 text-center rounded-md"> {bid.status === 'Reviewed' ? <span className='bg-orange-200 text-orange-600 px-2 py-1 rounded-lg font-semibold'> Reviewed </span> : <span className='bg-sky-200 text-sky-700 font-semibold px-2 py-1 rounded-lg'> New </span>} </td>
                        <td className="px-6 py-4 flex justify-center">
                          <img
                            onClick={() => handleView(bid)}
                            className="cursor-pointer"
                            src="/Images/eye.svg"
                            alt=""
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <hr className="w-full" />
              </div>

            </div>
          </div> :
          <div className="flex py-5 px-16 w-full bg-gray-200">
            <Bid team={openingTeam} setOpenBid={setOpenBid}/>
            {/* <ClientProjectsRightSidebar  mtdata={openingTeam.teamUserMap}/> */}
          </div>
      }
    </>
  )
}

export default ViewBids