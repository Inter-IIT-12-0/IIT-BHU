"use client"
import React, { useEffect, useState } from 'react'
import Navbar from "../../../components/Navbar"
import StudentSidebar from "../../../components/StudentSidebar"
import Edit_Icon from "../../../../public/Images/Edit_Icon.svg"
import Invitation_Icon from "../../../../public/Images/Invitation_Icon.svg"
import Search_Icon from "../../../../public/Images/SearchIcon.svg"
import PlusIcon from "../../../../public/Images/PlusIcon.svg"
import axios from 'axios';
import { useSession } from 'next-auth/react'
import { simpleSearch } from '../../../lib/SearchAlgo'
import FriendsSearchPopup from '../../../components/FriendsSearchPopup'
import BackArrow_Icon from "../../../../public/Images/BackArrow_Icon.svg"
import Folder_Icon from "../../../../public/Images/Folder_Icon.svg"
import createSubMilestones from "../../../pages/api/GPT/subMilestones"
import GeneratedSubmilestones from '../../../components/GeneratedSubmilestones'
import recommend from '../../../pages/api/recommendation/recommend'
import toast from 'react-hot-toast'
import {useRouter} from "next/navigation"
import Loading from '../../../components/Loading'

const CreateBid = ({ params }) => {
    // const num = 0
    const { id } = params
    const router = useRouter()

    const { data: session } = useSession();
    const [filter, setFilter] = useState('Past')
    const [pastTeamMembers, setPastTeamMembers] = useState([])
    const [recommended, setRecommended] = useState([])
    const [presentTeam, setPresentTeam] = useState({})
    const [teamName, setTeamName] = useState("")
    const [noOfTeams, setNoOfTeams] = useState(1)
    const [search, setSearch] = useState("");
    const [allUsers, setAllUsers] = useState([])
    const [popup, setPopup] = useState(false)
    const [nonApprovals, setNonApprovals] = useState(0)
    const [presentPage, setPresentPage] = useState(1)
    const [files, setFiles] = useState([])
    const [project, setProject] = useState()
    const [startDate, setStartDate] = useState("")
    const [loading, setLoading] = useState(false)
    const [milestones, setMilestones] = useState([
        {
            cost: '',
            duration: '',
            title: '',
            description: '',
            deliverables: ''
        }
    ])
    const [selectedMilestone, setSelectedMilestone] = useState(1)
    const [aiGenerated, setAiGenerated] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let prevMilestones = [...milestones]
        prevMilestones[selectedMilestone - 1][name] = value
        setMilestones(prevMilestones);
    };
    const handleFileChange2 = (e) => {
        const files = Array.from(e.target.files);
        let prevMilestones = milestones
        prevMilestones[selectedMilestone - 1].files = files
        setMilestones(prevMilestones);
    };

    const handleAddMilestone = () => {
        setMilestones([
            ...milestones,
            {
                cost: '',
                duration: '',
                title: '',
                description: '',
                deliverables: ''
            }
        ])
    }

    const handleGenerate = async () => {
        setLoading(true);
        const res = await createSubMilestones(milestones)
        setLoading(false)
        setAiGenerated(res)
        setPresentPage(prev => prev + 1)
    }
    const handleSubmit = () => {
        let modifiedMilestones = [...milestones]
        const submilestones = Object.values(aiGenerated).map((milestone, index1) => (
            milestone.Submilestones.map((submilestone, index2) => (
                {
                    title: `Submilestone ${index2}`,
                    isCompleted: false,
                    status: 'Not Started',
                    assignedTo: null,
                    description: submilestone.work,
                    startDate: "2023-01-01T00:00:00Z",
                    endDate: "2023-01-01T00:00:00Z",
                    Aitools: [{
                        tool: "",
                        url: "",
                        connectedOn: "2023-01-01T00:00:00Z",
                        connectedBy: "65660aa5f18e431b5603d698"
                    }],
                    work: {},
                    stickyNotes: []
                }
            ))
        ))
        modifiedMilestones = modifiedMilestones.map((milestone, index) => (
            {
                ...milestone,
                cost: Number(milestone.cost),
                duration: Number(milestone.duration),
                submilestones: submilestones[index]
            }
        ))
        console.log(modifiedMilestones)
        let proposal = {
            proposalScore: 0,
            acceptanceProbability: 78,
            bidAmount: milestones.reduce((acc, milestone) => acc + milestone.cost, 0),
            startDate: new Date(startDate),
            milestones: modifiedMilestones
        }
        let newTeam = {...presentTeam}
        newTeam.proposal = proposal
        newTeam.status = 'Pending'
        console.log(newTeam)
        axios.put(`/api/team/?teamId=${presentTeam._id}`, newTeam).then(res => {
            toast.success("Your Bid is submitted")
            // router.push("/marketplace")
        })


    }

    useEffect(() => {
        axios.get('/api/userprojects')
            .then(res => {
                let pastMembers = []
                res.data.forEach(proj => {
                    proj.assignedTeam.teamUserMap.forEach(map => {
                        const isUserInSet = Array.from(pastMembers).some(member => member.email === map.user.email);
                        if (!isUserInSet) {
                            pastMembers.push(map.user);
                        }
                    })
                })
                setPastTeamMembers(pastMembers)
            }).catch(console.log)

        axios.get(`/api/myteams/${id}`)
            .then(res => {
                let nonApprov = 0;
                res.data.teamUserMap.forEach(map => {
                    if (map.status !== 'Approved') nonApprov += 1
                })
                setNonApprovals(nonApprov);
                setPresentTeam(res.data)
                setTeamName(res.data.teamName ? res.data.teamName : '')
            }).catch(console.log)

        
        const fetchProject = async () => {
            try {
                const res1 = await axios.get(`/api/project/${id}`)
                const res2 = await axios.get('/api/allusers')
                
                setProject(res1.data);
                setAllUsers(res2.data);
                fetchFilter(res1.data, res2.data);
            }
            catch {
                console.error("Error fetching data");
            }
        }
        fetchProject();

        const fetchFilter = async (project, recommended) => {
            try {
                console.log(project, recommended)
                if (project && recommended) {
                    console.log(project.statement);
                    const obj = await recommend(project.statement);
                    setRecommended(recommended.filter(person => obj.includes(person.domain)));
                }

            }
            catch (error) {
                console.log("Error", error);
            }
        }

        // fetchFilter();


    }, [noOfTeams])

    const addToTeam = (member) => {
        try {
            if (presentTeam.teamUserMap.map(map => map.user.email).includes(member.email)) return console.log("Member already added")
            let newTeam = presentTeam;
            const teamUserMapNew = [...presentTeam.teamUserMap, {
                user: member._id,
                role: "Member",
                status: "Pending"
            }]
            newTeam.teamUserMap = teamUserMapNew
            axios.put(`/api/team/?teamId=${presentTeam._id}`, newTeam)
                .then(res => {
                    // console.log(res.data)
                }).catch(console.log)
            setNoOfTeams(prev => prev + 1)
        } catch (error) {
            console.log(error)
        }
    }

    const removeFromTeam = (member) => {
        const newArr = presentTeam.teamUserMap.filter(map => {
            return map.user.email !== member.email
        })
        let newTeam = presentTeam
        newTeam.teamUserMap = newArr
        axios.put(`/api/team/?teamId=${presentTeam._id}`, newTeam)
            .then(res => {
                console.log(res.data)
            }).catch(console.log)
        setNoOfTeams(prev => prev - 1)
    }

    const handleFileChange = (e) => {
        const newFiles = e.target.files;
        setFiles([...files, ...newFiles]);
    };

    const handleContinue = () => {
        let newTeam = presentTeam
        newTeam.teamName = teamName
        axios.put(`/api/team/?teamId=${presentTeam._id}`, newTeam).then(res => console.log(res.data)).catch(console.log)
        setPresentPage(prev => prev + 1)
    }

    // const removeMilesone = () => {
    //     let newMilestones = [...milestones]
    //     newMilestones.pop()
    //     console.log(newMilestones)
    //     if(selectedMilestone === milestones.length) setSelectedMilestone(prev => prev - 1)
    //     // setMilestones(newMilestones)
    // }

    return (
        <main className='w-[100vw] h-[100vh]'>
            <div className='flex flex-col w-full h-full'>
                <Navbar />
                <div className='flex w-full h-full'>
                    <StudentSidebar page={"marketplace"}/>
                    <div className='w-full h-full flex flex-col'>
                        {
                            presentPage === 1 ?
                                <>
                                    <div className='border-b-2 border-zinc-300 py-4 px-10 font-sans text-2xl font-bold'>Marketing Asset Creation
                                    </div>
                                    <div className='border-b-2 border-zinc-300 py-4 px-4 font-sans text-sky-700 font-semibold'>Create a Team</div>

                                    <div className='flex'>
                                        <div className='flex flex-col justify-between h-[560px] w-7/12'>
                                            <div className='w-full px-8 relative'>
                                                <div className='flex w-full items-center py-4'>
                                                    <div className='bg-blue-100 flex mr-5 w-full h-11 border-b-2 border-sky-800 items-center px-5'>
                                                        <input type="text" placeholder='Team Name' className='bg-blue-100 placeholder-neutral-700 w-full outline-none' value={teamName} onChange={e => setTeamName(e.target.value)}
                                                        />
                                                        <Edit_Icon />
                                                    </div>
                                                    <div className='bg-blue-100 h-10 flex justify-center items-center rounded-xl border-b-2 border-sky-800 w-1/3'> Winning Odds 60% </div>
                                                </div>
                                                <p className='text-lg ml-3'> Teammates </p>
                                                <div className='max-h-60 overflow-scroll overflow-y-auto overflow-x-hidden mb-8'>
                                                    {
                                                        session && Object.keys(presentTeam).length !== 0 && presentTeam.teamUserMap.map((map, index) => (
                                                            <div className='flex flex-col my-3' key={index}>
                                                                <div className={`ml-2 h-11 my-3 ${map.status === 'Approved' ? 'bg-sky-100' : map.status === 'Pending' ? 'bg-yellow-100' : 'bg-red-200'} w-11/12 pl-5 border-l-8  ${map.status === 'Approved' ? 'border-sky-700' : map.status === 'Pending' ? 'border-yellow-500' : 'border-red-500'} flex items-center`}>
                                                                    <img src={map.user.avatarUrl} alt="" className='rounded-full w-7 h-7 mr-4' />
                                                                    <div className='justify-between w-full pr-4 flex items-center'>
                                                                        <span className='text-neutral-700'> {map.user.name} {map.user.email === session.user.email ? '(Me)' : ''} </span>
                                                                        <div className='flex justify-between items-center'>
                                                                            <p className='px-3 shadow-2xl shadow-zinc-500 flex justify-center items-center py-1 bg-white rounded-xl' style={{ boxShadow: '0 2px #cddae2' }} > {map.user.domain} </p>
                                                                            {
                                                                                session.user.email !== map.user.email && <img src="/Images/Minus_Icon.png" alt="-" className='w-6 h-6 cursor-pointer ml-3' onClick={() => removeFromTeam(map.user)} />
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {
                                                                    session.user.email !== map.user.email &&
                                                                    <div className={`font-semibold ${map.status === 'Approved' ? 'text-green-600' : map.status === 'Pending' ? 'text-yellow-600' : 'text-red-500'} flex justify-end w-11/12 pr-3 -my-2`}>
                                                                        {map.status}
                                                                    </div>
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className='flex justify-evenly w-full'>
                                                    <div className='relative w-[40%] mx-4 border-2 border-dotted border-zinc-500 flex justify-center items-center py-1 rounded-lg cursor-pointer' onClick={() => setPopup(prev => !prev)}>
                                                        <span className='bg-zinc-300 w-6 flex justify-center items-center rounded-full mx-2'> + </span>  Add Another
                                                    </div>
                                                    {
                                                        popup && <FriendsSearchPopup users={allUsers} setPopup={setPopup} plusFunction={addToTeam} />
                                                    }
                                                    {/* <div className='mx-4 border-2 border-dotted border-zinc-500 flex justify-center items-center py-1 rounded-lg w-[40%] cursor-pointer' onClick={() => setPopup(prev => !prev)}>
                                                        <Invitation_Icon className="scale-75" /> <span>Invite Friends</span> </div> */}
                                                </div>
                                            </div>
                                            <div className='mb-3 flex justify-end px-8 text-white'>
                                                {
                                                    Object.keys(presentTeam).length !== 0 && <div className={`${nonApprovals !== 0 || teamName.length === 0 ? 'disabled bg-slate-400' : 'bg-sky-700 cursor-pointer'} w-32 text-center px-2 py-2 rounded-xl`} onClick={handleContinue}>Continue</div>
                                                }
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-5/12 border-l-2 border-gray-200'>
                                            <div className='flex mt-2 ml-6'>
                                                <div className='rounded-2xl px-2 py-2 flex items-center border-2 border-gray-200 m-3'>
                                                    <div className="w-4 h-4 mx-1 rounded-full border border-stone-300" />
                                                    <div>Invitations</div>
                                                </div>
                                                <div className='rounded-2xl px-2 py-2 flex items-center border-2 border-gray-200 m-3'>
                                                    <div className="w-4 h-4 mx-1 rounded-full border border-stone-300" />
                                                    <div>Requests</div>
                                                </div>
                                            </div>
                                            <div className='px-8 my-4'>
                                                <div className=' flex rounded-3xl bg-gray-200 w-5/6'>
                                                    <div className={`w-1/2 text-center rounded-3xl cursor-pointer ${filter === 'Past' ? 'bg-sky-700 text-white' : ''} h-full py-3`} onClick={() => setFilter('Past')}>Past Team Mates</div>
                                                    <div className={`w-1/2 text-center rounded-3xl cursor-pointer ${filter === 'Recommended' ? 'bg-sky-700 text-white' : ''} h-full py-3`} onClick={() => setFilter('Recommended')}>Recommended </div>
                                                </div>
                                            </div>
                                            <div className='flex w-3/4 mx-8 border-sky-800 border-2 border-dotted rounded-lg'>
                                                <Search_Icon className="mx-3 scale-75" />
                                                <input type="text" placeholder='Search' className='outline-none' value={search} onChange={e => {
                                                    e.target.value ? setSearch(e.target.value) : setSearch("")
                                                }
                                                } />
                                            </div>
                                            <div className='max-h-72 overflow-scroll overflow-y-auto overflow-x-hidden my-4'>
                                                {
                                                    session ?
                                                        filter === 'Past' && pastTeamMembers ?
                                                            pastTeamMembers.filter(member => {
                                                                return (member.email !== session.user.email) && ((simpleSearch(search, member.name) || (simpleSearch(search, member.institute))) || (simpleSearch(search, member.domain)))
                                                            }).map((member, index) => (
                                                                <div className='ml-2 pb-2 my-5 bg-white border-gray-200 border-b-2 w-11/12 px-5 flex items-center' key={index}>
                                                                    <img src={member.avatarUrl} alt={member.name} className='rounded-full w-7 h-7 mr-4' />
                                                                    <div className='flex justify-between w-full pr-4'>
                                                                        <div className='flex flex-col justify-center'>
                                                                            <span className='text-lg'> {member.name} </span>
                                                                            <span className='text-neutral-600 text-sm'> {member.institute} </span>
                                                                        </div>
                                                                        <div className='flex items-center'>
                                                                            <p className='px-3 shadow-2xl mx-2 shadow-zinc-500 flex justify-center items-center py-1 bg-white rounded-xl' style={{ boxShadow: '0 2px #cddae2' }} > {member.domain} </p>
                                                                            <PlusIcon onClick={() => {
                                                                                addToTeam(member)
                                                                            }} className="cursor-pointer" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )) :
                                                            filter === 'Recommended' && recommended && recommended.map((user, index) => (
                                                                <div className='ml-2 h-11 pb-2 my-5 bg-white border-gray-200 border-b-2 w-11/12 px-5 flex items-center' key={index}>
                                                                    <img src={user.avatarUrl} alt="" className='rounded-full w-7 h-7 mr-4' />
                                                                    <div className='flex justify-between w-full pr-4'>
                                                                        <span className='text-neutral-700'> {user.name} </span>
                                                                        <div className='flex'>
                                                                            <p className='px-3 shadow-2xl mx-2 shadow-zinc-500 flex justify-center items-center py-1 bg-white rounded-xl' style={{ boxShadow: '0 2px #cddae2' }} > {user.domain} </p>
                                                                            <PlusIcon />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )) : <></>
                                                }
                                            </div>
                                        </div>
                                    </div> : <></>
                                </> :
                                presentPage === 2 ?
                                    (loading ? <Loading /> : <>
                                        <div className='border-b-2 w-full border-zinc-300 py-4 px-10 items-center font-sans flex justify-between'>
                                            <div className='flex items-center font-bold text-2xl'>
                                                <BackArrow_Icon onClick={() => {
                                                    setPresentPage(prev => prev - 1)
                                                }} className="cursor-pointer" />
                                                <span className='ml-3'>Marketing Asset Creations</span>
                                            </div>
                                            <div className='flex text-lg'>
                                                <div className='bg-blue-100 h-10 flex justify-center items-center rounded-xl border-b-2 border-sky-800 w-24 px-2 mx-4'>
                                                    {presentTeam.teamName}
                                                </div>
                                                <div className='bg-blue-100 h-10 flex justify-center items-center rounded-xl border-b-2 border-sky-800 px-2 mx-4'>
                                                    80%
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-36 flex w-full justify-around pt-5 border-b-2 border-zinc-500'>
                                            <div className='flex flex-col items-center'>
                                                {
                                                    Object.keys(presentTeam).length !== 0 && <>
                                                        <img src={presentTeam.project.assignedBy.avatarUrl} alt="" className='w-20 h-20 rounded-full' />
                                                        <span> {presentTeam.project.assignedBy.name} </span>
                                                    </>
                                                }

                                            </div>
                                            <div className='w-2/3'>
                                                <h3 className='font-semibold'>Description</h3>
                                                <p>
                                                    {Object.keys(presentTeam).length !== 0 && presentTeam.project.statement}
                                                </p>
                                            </div>
                                            <div className='w-20 h-16 rounded-2xl flex flex-col items-center justify-center bg-indigo-50'>
                                                <span className='text-sky-700'>&#8377; {Object.keys(presentTeam).length !== 0 && presentTeam.project.clientRequirements.payment}</span>
                                                <span className='text-sky-700'>{Object.keys(presentTeam).length !== 0 && presentTeam.project.clientRequirements.paymentType} </span>
                                            </div>
                                        </div>
                                        <div className='w-full flex items-center font-semibold pl-6 pt-3 text-xl'>
                                            Create Milestones that will make it easier to work on this project
                                        </div>
                                        <div className='px-6 mt-4 font-semibold flex'>
                                            <span className='mx-4'>Start Date <span className='text-red-500'> * </span> </span>
                                            <input type="date" className='outline-none px-2 border-2 border-zinc-400 rounded-lg' required value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                        </div>
                                        <div className='flex flex-col w-full h-full px-6 my-3'>
                                            <div className='flex'>
                                                {
                                                    milestones.map((milestone, index) => (
                                                        <div key={index} className='pb-2 flex items-center' onClick={() => setSelectedMilestone(index + 1)}>
                                                            <span className={`h-full pt-2 cursor-pointer mx-3 px-3 ${selectedMilestone === index + 1 && 'bg-indigo-50'} `}>
                                                                Milestone {index + 1} {
                                                                    index === 0 && <span className='text-red-500'> * </span>
                                                                }
                                                                {/* {
                                                index === milestones.length - 1 && index !== 0 && <span className='bg-gray-300 rounded-full px-1' onClick={removeMilesone}> x </span>
                                            } */}
                                                            </span>
                                                        </div>
                                                    ))
                                                }
                                                <PlusIcon className="ml-3 cursor-pointer" onClick={handleAddMilestone} />
                                            </div>



                                            <div className='h-full bg-indigo-50 flex flex-col pb-8 max-h-72 overflow-scroll overflow-y-auto overflow-x-hidden'>
                                                <div className='flex w-full pt-4'>
                                                    <input type="number" name='cost' value={milestones[selectedMilestone - 1]['cost']} onChange={handleInputChange} placeholder='Expected cost &#8377;' className='mx-3 w-32 py-1 px-1 italic rounded-lg outline-none' required />
                                                    <input name='duration' value={milestones[selectedMilestone - 1]['duration']} onChange={handleInputChange} type="number" placeholder='Enter duration' className='mx-3 w-32 py-1 px-1 italic rounded-lg outline-none' required /> <span className='-ml-3'> Weeks </span>
                                                    {/* <div className='flex bg-white p-2 text-neutral-600 rounded-lg'>
                                                        <Folder_Icon className="mr-1" />
                                                        {
                                                            milestones[selectedMilestone-1].files.length !== 0 ?
                                                                files.map((file, index) => (
                                                                    <span key={index}> {file.name} </span>
                                                                )) :
                                                                <>
                                                                    <input
                                                                        id="fileInput"
                                                                        type="file"
                                                                        multiple
                                                                        onChange={handleFileChange2}
                                                                        className="hidden"
                                                                    />
                                                                    <label htmlFor='fileInput' className='cursor-pointer'>Add Attachment</label></>
                                                        }
                                                    </div> */}

                                                </div>
                                                <div className='flex flex-col px-6 my-4 '>
                                                    <div className='flex items-center'>
                                                        <span>Milestone Title</span>
                                                        <input name='title' value={milestones[selectedMilestone - 1]['title']} onChange={handleInputChange} type="text" placeholder='Enter Milestone title' className='w-2/3 mx-10 my-4 h-8 px-4 rounded-xl py-6 outline-none' required />
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <span>Description</span>
                                                        <input name='description' value={milestones[selectedMilestone - 1]['description']} onChange={handleInputChange} type="text" placeholder='Enter Description' className='w-2/3 mx-10 my-4 h-8 px-4 rounded-xl py-9 outline-none' />
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <span>Deliverables</span>
                                                        <input name='deliverables' value={milestones[selectedMilestone - 1]['deliverables']} onChange={handleInputChange} type="text" placeholder='Enter Deliverables' className='w-2/3 mx-10 my-4 h-8 px-4 rounded-xl py-9 outline-none' required />
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='w-full flex justify-end px-10 text-white'>
                                                <button className='bg-sky-700 px-2 py-3 rounded-3xl w-72 text-xl' onClick={handleGenerate}> Generate Submilestones </button>
                                            </div>
                                        </div>

                                    </>) :
                                    <>
                                        {/* <div> {aiGenerated['Milestone 0'].Submilestones[0].work} hi </div> */}
                                        {
                                            aiGenerated && milestones &&
                                            <GeneratedSubmilestones aiGenerated={aiGenerated} milestones={milestones} setAiGenerated={setAiGenerated} handleSubmit={handleSubmit} setPresentPage={setPresentPage}/>
                                        }
                                    </>
                        }


                    </div>
                </div>
            </div>
        </main>
    )
}

export default CreateBid
