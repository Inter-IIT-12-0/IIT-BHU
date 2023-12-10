import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import Filterbar from './Filterbar'
import { useSession } from 'next-auth/react'
import { projectSearch } from '../lib/SearchAlgo'
import axios from 'axios'

const ClientMarketplace = ({projects, setOpenedProj, selected, setSelected}) => {
    const {data:session} = useSession()
    const [status, setStatus] = useState("select")
    const [payment, setPayment] = useState("select")
    const [domain, setDomain] = useState("select")
    const [search, setSearch] = useState("")
    const [myProjects, setMyProjects] = useState([])

    useEffect(() => {
        axios.get(`/api/clientprojects`)
        .then(res => {
            setMyProjects(res.data)
        }).catch(console.log)
    }, [])
    return (
        <div className='h-full overflow-x-hidden flex flex-col'>
            <Filterbar status={status} setStatus={setStatus} payment={payment} setPayment={setPayment} domain={domain} setDomain={setDomain} setSearch={setSearch} search={search} selected={selected} setSelected={setSelected} />
            <div className='h-full p-8 max-h-[70vh] overflow-scroll overflow-y-auto overflow-x-hidden'>
                {
                    session && (
                        selected === 'All' ? projects && projects.filter(project => {
                            return projectSearch(search, location, status, payment, domain, project)
                        }).map(project => {
                            return <ProjectCard key={project._id} project={project} setOpenedProj={setOpenedProj} selected={selected} />
                        }) : 
                        myProjects && myProjects.filter(bid => {
                            return !!!bid.assignedTeam && projectSearch(search, location, status, payment, domain, bid)
                        }).map(bid => {
                            return <ProjectCard key={bid._id} project={bid} setOpenedProj={setOpenedProj} selected={selected}/>
                        })
                    )
                }
            </div>
        </div>
    )
}

export default ClientMarketplace
