import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import Filterbar from './Filterbar'
import { getSession, useSession } from 'next-auth/react'
import { projectSearch } from '../lib/SearchAlgo'
import axios from 'axios'

const StudentMarketplace = ({projects, setOpenedProj, selected, setSelected}) => {
    const {data:session} = useSession()
    const [location, setLocation] = useState("select")
    const [status, setStatus] = useState("select")
    const [payment, setPayment] = useState("select")
    const [domain, setDomain] = useState("select")
    const [search, setSearch] = useState("")
    const [myBids, setMyBids] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async (req, res) => {
        try {
            if(session) {
                const response1 = await axios(`/api/mybids`);
                setMyBids(response1.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full h-full overflow-x-hidden flex flex-col'>
            <Filterbar status={status} setStatus={setStatus} payment={payment} setPayment={setPayment} domain={domain} setDomain={setDomain} setSearch={setSearch} search={search} selected={selected} setSelected={setSelected} />
            <div className='h-full p-8 max-h-[70vh] overflow-scroll overflow-y-auto overflow-x-hidden'>
                {
                    session && (
                        selected === 'All' ? projects.length !== 0 ? projects.filter(project => {
                            return projectSearch(search, location, status, payment, domain, project)
                        }).map(project => {
                            return <ProjectCard key={project._id} project={project} setOpenedProj={setOpenedProj} selected={selected}/>
                        }) : <div className="w-full h-full flex justify-center items-center"> No Projects Found </div> : 
                        myBids && myBids.length !== 0 ? myBids.filter(bid => {
                            return projectSearch(search, location, status, payment, domain, bid.project)
                        }).map(bid => {
                            return <ProjectCard key={bid._id} project={bid.project} setOpenedProj={setOpenedProj} selected={selected}/>
                        }) : <div className="w-full h-full flex justify-center items-center"> No Bids Found </div>
                    )
                }
            </div>
        </div>
    )
}

export default StudentMarketplace