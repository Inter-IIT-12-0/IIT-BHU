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
import { useRouter } from "next/navigation"
import Loading from '../../../components/Loading'
import validator from 'validator';


const TextEditor = ({ proposalText, setProposalText, handleSubmit, handleGenerateScores }) => {
    return (

        <div className='flex flex-col h-full items-center' >
            <div className="w-3/4 mt-5 mb-4 border border-gray-200 rounded-lg text-black">
                <div className="flex items-center justify-between px-3 py-2 border-b bg-sky-200">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                </svg>
                                <span className="sr-only">Attach file</span>
                            </button>
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                </svg>
                                <span className="sr-only">Embed map</span>
                            </button>
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                                <span className="sr-only">Upload image</span>
                            </button>
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                </svg>
                                <span className="sr-only">Format code</span>
                            </button>
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                                </svg>
                                <span className="sr-only">Add emoji</span>
                            </button>
                        </div>
                        <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4" />
                                </svg>
                                <span className="sr-only">Add list</span>
                            </button>
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                </svg>
                                <span className="sr-only">Settings</span>
                            </button>
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                                    <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                                </svg>
                                <span className="sr-only">Timeline</span>
                            </button>
                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Download</span>
                            </button>
                        </div>
                    </div>
                    <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" fill="" />
                        </svg>
                        <span className="sr-only">Full screen</span>
                    </button>
                    <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                        Show full screen
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-b-lg">
                    <label for="editor" className=" sr-only">Publish post</label>
                    <textarea value={proposalText} onChange={e => setProposalText(e.target.value)} id="editor" rows="8" className="outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0" placeholder="Write an article..." required></textarea>
                </div>
            </div>
            <div className='flex'>
                <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 mx-3" onClick={() => handleGenerateScores()}>
                    Generate Bid Score
                </button>
                <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={handleSubmit}>
                    Submit Bid
                </button>
            </div>
        </div>

    )
}

const CreateBid = ({ params }) => {
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
    const [proposalText, setProposalText] = useState("")
    const [teamProb, setTeamProb] = useState(null)
    const [teamRank, setTeamRank] = useState(null)

    const [milestones, setMilestones] = useState([
        {
            payment: '',
            duration: '',
            heading: '',
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

    function calculateDueDates(startDate, milestones) {
        const dueDates = [];

        milestones.forEach((milestone, index) => {
            const dueDate = new Date(startDate);
            dueDate.setDate(dueDate.getDate() + Number(milestone.duration) * 7);
            dueDates.push(dueDate);
        });

        return dueDates;
    }

    const handleAddMilestone = () => {
        setMilestones([
            ...milestones,
            {
                payment: '',
                duration: '',
                heading: '',
                description: '',
                deliverables: ''
            }
        ])
    }

    const generateScores = (teams) => { //! The Bid acceptance probability of the team is being generated through a flask API and being rendered to frontend
        teams = [
            {
                teamUserMap: presentTeam.teamUserMap,
                proposal: {
                    text: proposalText,
                    bidAmount: milestones.reduce((acc, milestone) => acc + Number(milestone.payment), 0)
                }
            },
            ...teams
        ]
        const obj = {
            prob_stat: project.statement,
            avg_scores: teams.map(team => team.teamUserMap.reduce((acc, map) => acc + map.user.rating, 0) / team.teamUserMap.length),
            proposals: teams.map(team => team.proposal.text),
            project_key: project.domain,
            team_key: teams.map(team => team.teamUserMap.map(map => map.user.domain.join(', '))[0]),
            amounts: teams.map(team => team.proposal.bidAmount)
        }
        const FLASK_APP_URL = process.env.NEXT_PUBLIC_FLASK_APP_URL + '/predict'
        axios.post(FLASK_APP_URL, obj).then(res => {
            setTeamProb(Math.floor(res.data.prediction[0] * 100))
            const teamScore = res.data.prediction[0]
            setTeamRank(res.data.prediction.sort((a, b) => b - a).indexOf(teamScore) + 1)
            console.log(res.data.prediction[0], res.data.prediction, res.data.prediction.sort((a, b) => b - a))
        }).catch(console.error)
    }

    const handleGenerateScores = () => {
        axios.get(`/api/bids/${id}`).then(res => {
            generateScores(res.data.teams)
        })
    }

    const handleGenerate = async () => { //! This generates the submilestones from the milestones given by user
        setLoading(true);
        const res = await createSubMilestones(milestones)
        setLoading(false)
        setAiGenerated(res)
        setPresentPage(prev => prev + 1)
    }

    const handleSubmit = () => { //! Bid submission is being done through the handleSubmit function by an API call
        let modifiedMilestones = [...milestones]
        const submilestones = Object.values(aiGenerated).map((milestone, index1) => (
            milestone.Submilestones.map((submilestone, index2) => (
                {
                    title: `Submilestone ${index2}`,
                    status: 'Not Started',
                    description: submilestone.work,
                    stickyNotes: []
                }
            ))
        ))
        const dueDates = calculateDueDates(startDate, milestones)
        modifiedMilestones = modifiedMilestones.map((milestone, index) => (
            {
                ...milestone,
                payment: Number(milestone.payment),
                duration: Number(milestone.duration),
                submilestones: submilestones[index],
                dueDate: dueDates[index],
            }
        ))
        let proposal = {
            acceptanceProbability: Number(teamProb.toFixed(2)),
            bidAmount: milestones.reduce((acc, milestone) => acc + Number(milestone.payment), 0),
            startDate: startDate,
            milestones: modifiedMilestones,
            text: proposalText
        }
        let newTeam = { ...presentTeam }
        newTeam.proposal = proposal
        newTeam.status = 'Pending'

        axios.patch(`/api/team/?teamId=${presentTeam._id}`, newTeam).then(res => {
            toast.success("Your Bid is submitted")
            router.push("/marketplace")
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
            }).catch(err => toast.error(err.response.data.error))


        axios.get(`/api/myteams/${id}`)
            .then(res => {
                let nonApprov = 0;
                res.data.teamUserMap.forEach(map => {
                    if (map.status !== 'Approved') nonApprov += 1
                })
                setNonApprovals(nonApprov);
                setPresentTeam(res.data)
                setTeamName(res.data.teamName ? res.data.teamName : '')
            }).catch(err => toast.error(err.response.data.error))



        const fetchProject = async () => {
            try {
                const res1 = await axios.get(`/api/project/${id}`)
                const res2 = await axios.get('/api/allusers')

                setProject(res1.data);
                setAllUsers(res2.data);
                fetchFilter(res1.data, res2.data);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchProject();

        const fetchFilter = async (project, recommended) => { //! Here the recommendation engine filters the tag using the problem statement and returns the recommended users
            try {
                if (project && recommended) {
                    const obj = await recommend(project.statement);
                    setRecommended(recommended.filter(person => person.domain.some(domain => obj.includes(domain))));

                }

            }
            catch (error) {
                console.log(error)
            }
        }

        // fetchFilter();

    }, [noOfTeams])

    const handleInvite = async (teamId, userId) => {
        try {
            const response = await axios.patch('/api/sendinvite', {
                userId,
                teamId,
                teamName,
            });
        } catch (error) {
            console.log(error)
        }
    };


    const addToTeam = async (member) => {
        try {
            if (presentTeam.teamUserMap.map(map => map.user.email).includes(member.email)) return toast.error("Member already added")
            let newTeam = presentTeam;
            const teamUserMapNew = [...newTeam.teamUserMap, {
                user: member._id,
                role: "Member",
                status: "Pending"
            }]
            newTeam.teamUserMap = teamUserMapNew
            newTeam.teamName = teamName
            await axios.patch(`/api/team/?teamId=${presentTeam._id}`, newTeam)
                .then(async res => {
                    setPresentTeam(res.data)
                    await handleInvite(res.data._id, member._id);
                }).catch(err => toast.error(err.response.data.error))

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
        let teamId = presentTeam._id;
        let userId = member._id;
        axios.patch(`/api/team/?teamId=${presentTeam._id}`, newTeam)
            .then(res => {
                axios.delete(`/api/deleteinvite/?teamId=${teamId}&userId=${userId}`).then(res => toast.error("Invite Deleted")).catch(err => toast.error(err.response.data.error))

            }).catch(err => toast.error(err.response.data.error))

        setNoOfTeams(prev => prev - 1)
    }

    const handleFileChange = (e) => {
        const newFiles = e.target.files;
        setFiles([...files, ...newFiles]);
    };

    const handleContinue = () => {
        let newTeam = presentTeam
        newTeam.teamName = teamName
        axios.patch(`/api/team/?teamId=${presentTeam._id}`, newTeam).then(res => console.log(res.data)).catch(err => toast.error(err.response.data.error))

        setPresentPage(prev => prev + 1)
    }

    return (
        <main className='w-[100vw] h-[100vh]'>
            <div className='flex flex-col w-full h-full'>
                <Navbar />
                <div className='flex w-full h-full'>
                    <StudentSidebar page={"marketplace"} />
                    <div className='w-full flex flex-col'>
                        {
                            presentPage === 1 ?
                                <>
                                    <div className='border-b-2 border-zinc-300 py-4 px-10 font-sans text-2xl font-bold'>Marketing Asset Creation
                                    </div>
                                    <div className='border-b-2 border-zinc-300 py-4 px-4 font-sans text-sky-700 font-semibold'>Create a Team</div>

                                    <div className='flex'>
                                        <div className='flex flex-col justify-between h-[450px] w-7/12'>
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
                                                                            <p className='px-3 shadow-2xl shadow-zinc-500 flex justify-center items-center py-1 bg-white rounded-xl' style={{ boxShadow: '0 2px #cddae2' }} > {map.user.domain[0]} </p>
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
                                                </div>
                                            </div>
                                            <div className='mb-3 flex justify-end px-8 text-white'>
                                                {
                                                    Object.keys(presentTeam).length !== 0 && <div className={`${nonApprovals !== 0 || teamName.length === 0 ? 'disabled bg-slate-400' : 'bg-sky-700 cursor-pointer'} w-32 text-center px-2 py-2 rounded-xl`} onClick={handleContinue}>Continue</div>
                                                }
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-5/12 border-l-2 border-gray-200'>
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
                                                                return (member.email !== session.user.email) && ((simpleSearch(search, member.name) || (simpleSearch(search, member.institute))) || (simpleSearch(search, member.domain[0])))
                                                            }).map((member, index) => (
                                                                <div className='ml-2 pb-2 my-5 bg-white border-gray-200 border-b-2 w-11/12 px-5 flex items-center' key={index}>
                                                                    <img src={member.avatarUrl} alt={member.name} className='rounded-full w-7 h-7 mr-4' />
                                                                    <div className='flex justify-between w-full pr-4'>
                                                                        <div className='flex flex-col justify-center'>
                                                                            <span className='text-lg'> {member.name} </span>
                                                                            <span className='text-neutral-600 text-sm'> {member.institute} </span>
                                                                        </div>
                                                                        <div className='flex items-center'>
                                                                            <p className='px-3 shadow-2xl mx-2 shadow-zinc-500 flex justify-center items-center py-1 bg-white rounded-xl' style={{ boxShadow: '0 2px #cddae2' }} > {member.domain[0]} </p>
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
                                                                            <p className='px-3 shadow-2xl mx-2 shadow-zinc-500 flex justify-center items-center py-1 bg-white rounded-xl' style={{ boxShadow: '0 2px #cddae2' }} > {user.domain[0]} </p>
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
                                                <p className='max-h-20 overflow-scroll overflow-y-auto overflow-x-hidden'>
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
                                        <div className='flex items-center'>
                                            <div className='px-6 mt-4 font-semibold flex'>
                                                <span className='mx-4'>Start Date <span className='text-red-500'> * </span> </span>
                                                <input type="date" className='outline-none px-2 border-2 border-zinc-400 rounded-lg' required value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                            </div>
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



                                            <div className='h-full bg-indigo-50 flex flex-col pb-8 max-h-60 overflow-scroll overflow-y-auto overflow-x-hidden'>
                                                <div className='flex w-full pt-4'>
                                                    <input type="number" name='payment' value={milestones[selectedMilestone - 1]['payment']} onChange={handleInputChange} placeholder='Expected payment &#8377;' className='mx-3 w-32 py-1 px-1 italic rounded-lg outline-none' required />
                                                    <input name='duration' value={milestones[selectedMilestone - 1]['duration']} onChange={handleInputChange} type="number" placeholder='Enter duration' className='mx-3 w-32 py-1 px-1 italic rounded-lg outline-none' required /> <span className='-ml-3'> Weeks </span>

                                                </div>
                                                <div className='flex flex-col px-6 my-4 '>
                                                    <div className='flex items-center'>
                                                        <span>Milestone heading</span>
                                                        <input name='heading' value={milestones[selectedMilestone - 1]['heading']} onChange={handleInputChange} type="text" placeholder='Enter Milestone heading' className='w-2/3 mx-10 my-4 h-8 px-4 rounded-xl py-6 outline-none' required />
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
                                    presentPage === 3 ?
                                        <>
                                            {/* <div> {aiGenerated['Milestone 0'].Submilestones[0].work} hi </div> */}
                                            {
                                                aiGenerated && milestones &&
                                                <GeneratedSubmilestones aiGenerated={aiGenerated} milestones={milestones} setAiGenerated={setAiGenerated} handleSubmit={handleSubmit} setPresentPage={setPresentPage} />
                                            }
                                        </> :
                                        <>
                                            <div className='flex w-full justify-center items-center mt-5'>
                                                <div className='mx-3'>
                                                    <span className='font-bold'>Bid Acceptance Probability:</span> <span> {teamProb} % </span>
                                                </div>
                                                <div className='mx-3'>
                                                    <span className='font-bold'>Rank:</span> <span> {teamRank} </span>
                                                </div>
                                            </div>
                                            <BackArrow_Icon onClick={() => {
                                                setPresentPage(prev => prev - 1)
                                            }} className="cursor-pointer" />
                                            <TextEditor setProposalText={setProposalText} handleSubmit={handleSubmit} handleGenerateScores={handleGenerateScores} />
                                        </>
                        }


                    </div>
                </div>
            </div>
        </main>
    )
}

export default CreateBid
