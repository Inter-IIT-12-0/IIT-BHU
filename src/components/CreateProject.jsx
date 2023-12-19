"use client"
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import ClientMarketPlaceComponent from './ClientMarketPlaceComp';
import BackArrowIcon from "../../public/Images/BackArrow_Icon.svg"
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import axios from 'axios';
import createStatement from '../pages/api/GPT/statementBreakdown';
import Loading from './Loading';
import { useRouter } from "next/navigation"
import validator from 'validator';
import Skills from '../../models/Skills.json'
import Domains from '../../models/Domains.json'


const Form1 = () => {
    const [domains, setDomains] = useState(Domains)
    const [skills, setSkills] = useState(Skills)
    const { data: session } = useSession()
    const [progress, setProgress] = useState(50);
    const [loading, setLoading] = useState(false)
    const [domainsOpen, setDomainsOpen] = useState(false)
    const [skillsOpen, setSkillsOpen] = useState(false)
    const [inputSkill, setInputSkill] = useState("")
    const [inputDomain, setInputDomain] = useState("")
    const router = useRouter()

    const [formData, setFormData] = useState({
        title: '',
        from: '',
        to: '',
        description: '',
        industry: [],
        skills: [],
        location: 'Remote',
        workdays: [],
        aiDescription: '',
        payment: '',
        paymentType: 'Fixed',
        docName: '',
        docUrl: ''
    });

    const isValidUrl = (url) => {
        return validator.isURL(url, { require_protocol: true });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const domainHandler = (domain) => {
        let newFormData = { ...formData }
        newFormData.industry = [
            ...newFormData.industry,
            domain
        ]
        setDomains(domains.filter(dom => dom !== domain))
        setFormData(newFormData);
        setDomainsOpen(false)
        setInputDomain("")
    }

    const skillHandler = (skill) => {
        let newFormData = { ...formData }
        newFormData.skills = [
            ...newFormData.skills,
            skill
        ]
        setSkills(skills.filter(ski => ski !== skill))
        setFormData(newFormData);
        setSkillsOpen(false)
        setInputSkill("")
    }

    const handleSubmit = async (e) => { //! Genertes optimized description of the problem PS input by the client
        e.preventDefault();
        if (formData.industry.length === 0) return toast.error("Domains can't be empty")
        if (formData.skills.length === 0) return toast.error("Skills can't be empty")
        if (progress !== 100) {
            if (progress === 50) {
                if (!isValidUrl(formData.docUrl)) {
                    toast.error("Please enter a valid url");
                    return
                }
                if ((new Date(formData.to)) <= (new Date(formData.from))) {
                    toast.error("End Date should be greater")
                    return
                }
                setLoading(true);
                const aiGen = await createStatement(JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    skills: formData.skills
                }))
                let newFormData = { ...formData }
                newFormData.aiDescription = aiGen.newstatement
                setFormData(newFormData)
                setLoading(false);
            }
            setProgress(prev => prev + 50);
        }
        else {
            if (Number(formData.payment) <= 0) return toast.error("Payment must be positive")
            const data = {
                title: formData.title,
                statement: formData.aiDescription,
                startDate: (new Date(formData.from)).toISOString(),
                endDate: (new Date(formData.to)).toISOString(),
                assignedBy: session.user._id,
                clientRequirements: {
                    paymentType: formData.paymentType,
                    payment: Number(formData.payment),
                    workDays: formData.workdays,
                    requiredTools: formData.skills,
                    file: {
                        title: formData.docName,
                        url: formData.docUrl
                    }
                },
                duration: Math.floor(((new Date(formData.to)) - (new Date(formData.from))) / (1000 * 60 * 60 * 24 * 7)),
                domain: formData.industry,
                location: formData.location,
            }
            axios.post('/api/project', data).then(res => {
                axios.patch(`/api/user/?userId=${session?.user._id}`, {
                    projects: [
                        ...session?.user.projects,
                        res.data._id
                    ],
                    projectsPosted: session?.user.projectsPosted + 1
                }).then(res => {
                    toast.success('Project created successfully')
                    router.push("/marketplace")
                }).catch(err => toast.error(err.response.data.error))

            }).catch(err => {
                toast.error(err.response.data.error)
            })
        }
    };

    const handleWorkdays = e => {
        const { name } = e.target
        let newFormData = { ...formData }
        if (e.target.checked) {
            if (!newFormData.workdays.includes(name)) {
                newFormData.workdays.push(name)
                setFormData(newFormData)
            }
        }
        else {
            newFormData.workdays = newFormData.workdays.filter(day => day !== e.target.name)
            setFormData(newFormData)
        }
    }

    const handleRemoveDomain = domain => {
        let newFormData = { ...formData }
        newFormData.industry = newFormData.industry.filter(industry => industry !== domain)
        setFormData(newFormData)
        let newDomains = [...domains]
        let indexOfDomain = Domains.indexOf(domain)
        newDomains.splice(indexOfDomain, 0, domain);
        setDomains(newDomains)
    }

    const handleRemoveSkill = skill => {
        let newFormData = { ...formData }
        newFormData.skills = newFormData.skills.filter(ski => ski !== skill)
        setFormData(newFormData)
        let newSkills = [...skills]
        let indexOfSkill = Skills.indexOf(skill)
        newSkills.splice(indexOfSkill, 0, skill);
        setSkills(newSkills)
    }

    return (
        <>
            {
                loading ? <Loading /> :

                    <div
                        tabIndex="-1"
                        aria-hidden="true"
                        className="relative inset-0 overflow-y-auto overflow-x-hidden flex items-center justify-center w-full bg-gray-200"
                    >
                        {
                            progress > 50 && <BackArrowIcon className="absolute top-3 left-6 cursor-pointer" onClick={() => {
                                if (progress > 50)
                                    setProgress(prev => prev - 50)
                            }} />
                        }

                        <div className=" p-4 w-full mt-3">
                            {/* Modal content */}
                            <div className=" p-4 rounded-lg shadow sm:p-5 w-full bg-gray-200">
                                {/* Modal header */}
                                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                                    <h3 className="text-xl font-semibold text-gray-700">
                                        Project Details
                                    </h3>

                                </div>
                                <div className="w-full border-2 border-gray-300 rounded-full h-2.5">
                                    <div
                                        className="bg-sky-600 h-full rounded-full"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                                <div className='justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5'>
                                    <div
                                        id="defaultModal"
                                        tabIndex="-1"
                                        aria-hidden="true"
                                        className="justify-center items-center w-full md:inset-0 h-modal md:h-full"
                                    >
                                        <div className={classNames({ "hidden": progress !== 50 }, "relative p-4 w-full h-full md:h-auto")}>
                                            <div className="relative p-4 rounded-lg  sm:p-5 w-full">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                                        <div>
                                                            <label
                                                                htmlFor="title"
                                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                                            >
                                                                Project Title
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="title"
                                                                value={formData.title}
                                                                name='title'
                                                                onChange={handleInputChange}
                                                                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <label
                                                                htmlFor="duration"
                                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                                            >
                                                                Expected Project Duration
                                                            </label>
                                                            <div className='flex items-center'>
                                                                <input
                                                                    type="date"
                                                                    id="duration"
                                                                    name='from'
                                                                    value={formData.from}
                                                                    onChange={handleInputChange}
                                                                    className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                                    required
                                                                />
                                                                <span className='mx-3'>To</span>
                                                                <input
                                                                    type="date"
                                                                    value={formData.to}
                                                                    name='to'
                                                                    onChange={handleInputChange}
                                                                    className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="sm:col-span-2">
                                                            <label
                                                                htmlFor="description"
                                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                                            >
                                                                Brief Project Description
                                                            </label>
                                                            <textarea
                                                                id="description"
                                                                name="description"
                                                                rows="4"
                                                                value={formData.description}
                                                                onChange={handleInputChange}
                                                                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                                required
                                                            ></textarea>
                                                            <div className='text-sm text-neutral-600 italic'>
                                                                Mention all your requirements. Trubot would elaborate your brief into a detailed description
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                htmlFor='docName'
                                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                                            >
                                                                Upload Requirements Document
                                                            </label>
                                                            <div className='flex flex-col'>
                                                                <input id='docName' type="text" placeholder='Document Name' name='docName' className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-1/2 p-2.5 outline-none my-1" value={formData.docName} onChange={handleInputChange} required />
                                                                <input type="text" placeholder='Document Url' name='docUrl' className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none my-1 h-20" value={formData.docUrl} onChange={handleInputChange} />
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col justify-between'>
                                                            <div className='relative'>
                                                                <label
                                                                    htmlFor="industry"
                                                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                                                >
                                                                    Domains of the Project (Max 3)
                                                                </label>
                                                                <div className='flex px-3 py-2 bg-white rounded-md overflow-scroll overflow-x-auto overflow-y-auto'>
                                                                    {
                                                                        formData.industry.map((indus) => (
                                                                            <div key={indus} className='flex items-center bg-sky-500 py-1 px-2 mr-2 rounded-xl text-white'>
                                                                                <span>
                                                                                    {indus}
                                                                                </span>
                                                                                <span className='p-1 rounded-full flex justify-center cursor-pointer items-center ml-2' onClick={() => handleRemoveDomain(indus)}> x </span>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                    {
                                                                        formData.industry.length < 3 &&
                                                                        <input type="text" value={inputDomain} onChange={e => setInputDomain(e.target.value)} placeholder='Domain' className='px-2 outline-none rounded-xl py-1' onClick={() => setDomainsOpen(prev => !prev)} />
                                                                    }
                                                                </div>
                                                                {
                                                                    domainsOpen &&
                                                                    <div className="absolute top-20 right-0 z-10 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 max-h-32 overflow-scroll overflow-y-auto overflow-x-hidden">
                                                                        {
                                                                            domains.filter(dom => dom.toLowerCase().includes(inputDomain.toLowerCase())).map((domain, i) => (
                                                                                <div className='my-2 py-1 px-1 hover:bg-sky-100 transition-all duration-300 cursor-pointer' onClick={() => {
                                                                                    domainHandler(domain)
                                                                                }} key={i}> {domain} </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                }
                                                            </div>
                                                            <div className='relative'>
                                                                <label
                                                                    htmlFor="skills"
                                                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                                                >
                                                                    Top Skills Required (Max 3)
                                                                </label>
                                                                <div className='flex px-3 py-2 bg-white rounded-md overflow-scroll overflow-x-auto overflow-y-auto'>
                                                                    {
                                                                        formData.skills.map((skill) => (
                                                                            <div key={skill} className='flex items-center bg-sky-500 py-1 px-2 mr-2 rounded-xl text-white'>
                                                                                <span>
                                                                                    {skill}
                                                                                </span>
                                                                                <span className='p-1 rounded-full flex justify-center cursor-pointer items-center ml-2' onClick={() => handleRemoveSkill(skill)}> x </span>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                    {
                                                                        formData.skills.length < 3 &&
                                                                        <input type="text" value={inputSkill} onChange={e => setInputSkill(e.target.value)} placeholder='Skill' className='px-2 outline-none rounded-xl py-1' onClick={() => setSkillsOpen(prev => !prev)} />
                                                                    }
                                                                </div>
                                                                {
                                                                    skillsOpen &&
                                                                    <div className="absolute bottom-12 right-0 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 max-h-32 overflow-scroll overflow-y-auto overflow-x-hidden">
                                                                        {
                                                                            skills.filter(ski => ski.toLowerCase().includes(inputSkill.toLowerCase())).map((skill, i) => (
                                                                                <div className='my-2 py-1 px-1 hover:bg-sky-100 transition-all duration-300 cursor-pointer' onClick={() => {
                                                                                    skillHandler(skill)
                                                                                }} key={i}> {skill} </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='flex gap-8'>
                                                        <div
                                                            className="border border-sky-700 px-8 py-2 rounded-3xl text-sky-700 cursor-pointer"
                                                            onClick={() => {
                                                                setFormData({
                                                                    title: '',
                                                                    from: '',
                                                                    to: '',
                                                                    description: '',
                                                                    industry: [],
                                                                    skills: [],
                                                                    location: 'Remote',
                                                                    workdays: [],
                                                                    aiDescription: '',
                                                                    payment: '',
                                                                    paymentType: 'Fixed',
                                                                    docName: '',
                                                                    docUrl: ''
                                                                })
                                                            }}
                                                        >
                                                            Clear
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="bg-sky-700 px-8 py-2 rounded-3xl text-white"
                                                        >
                                                            Next
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>



                                        <div className={classNames({ "hidden": progress !== 100 }, "relative p-4 w-full h-full md:h-auto")}>
                                            <div className="relative p-4 rounded-lg sm:p-5 w-full">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="gap-4 mb-4">
                                                        <div className="sm:col-span-2 mb-3">
                                                            <div
                                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                                            >
                                                                Brief Description
                                                            </div>
                                                            <div
                                                                id="description"
                                                                className="border max-h-16 overflow-scroll overflow-y-auto overflow-x-hidden border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-100"
                                                            >
                                                                {formData.description}
                                                            </div>
                                                        </div>
                                                        <div className="sm:col-span-2">
                                                            <label
                                                                htmlFor="aiDescription"
                                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                                            >
                                                                Detailed Description
                                                            </label>
                                                            <textarea
                                                                id="aiDescription"
                                                                name="aiDescription"
                                                                rows="5"
                                                                value={formData.aiDescription}
                                                                onChange={handleInputChange}
                                                                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                            ></textarea>
                                                        </div>
                                                        <div className='grid grid-cols-3 mt-3'>
                                                            <div className='pr-8'>
                                                                <label
                                                                    htmlFor="paymentType"
                                                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                                                >
                                                                    Payment Type
                                                                </label>
                                                                <select name="paymentType" id="paymentType" value={formData.paymentType} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none" required>
                                                                    <option value="Fixed">Fixed</option>
                                                                    <option value="Installment">Installment</option>
                                                                </select>
                                                            </div>
                                                            <div className='pr-8'>
                                                                <label
                                                                    htmlFor="payment"
                                                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                                                >
                                                                    Total Payment (&#8377;)
                                                                </label>
                                                                <div className='flex items-center'>
                                                                    <input
                                                                        type="number"
                                                                        id="payment"
                                                                        name='payment'
                                                                        value={formData.payment}
                                                                        onChange={handleInputChange}
                                                                        className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className='pr-8'>
                                                                <label
                                                                    htmlFor='location'
                                                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                                                >
                                                                    Location
                                                                </label>
                                                                <input
                                                                    type='text'
                                                                    id='location'
                                                                    name='location'
                                                                    value={formData.location}
                                                                    onChange={handleInputChange}
                                                                    className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg  p-2.5 outline-none w-full flex justify-center items-center"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col justify-between mt-3'>
                                                            <div>
                                                                <label
                                                                    htmlFor="workDays"
                                                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                                                >
                                                                    Preferred Meet Days
                                                                </label>
                                                                <div id='workDays' className='flex flex-wrap gap-3 items-center h-full'>
                                                                    <input type="checkbox" id="monday" name="Mon" value={formData.workdays.includes("Mon")} onChange={handleWorkdays} className='mx-3 hidden' />
                                                                    <label htmlFor="monday" className={`px-4 py-1 text-gray-500 cursor-pointer rounded-2xl ${formData.workdays.includes("Mon") ? 'bg-gray-400 text-white' : 'border border-gray-400'} `} >Monday</label>

                                                                    <input type="checkbox" id="tuesday" name="Tue" value={formData.workdays.includes("Tue")} onChange={handleWorkdays} className='mx-3 hidden' />
                                                                    <label htmlFor="tuesday" className={`px-4 py-1 text-gray-500 cursor-pointer rounded-2xl ${formData.workdays.includes("Tue") ? 'bg-gray-400 text-white' : 'border border-gray-400'} `}>Tuesday</label>

                                                                    <input type="checkbox" id="wednesday" name="Wed" value={formData.workdays.includes("Wed")} onChange={handleWorkdays} className='mx-3 hidden' />
                                                                    <label htmlFor="wednesday" className={`px-4 py-1 text-gray-500 cursor-pointer rounded-2xl ${formData.workdays.includes("Wed") ? 'bg-gray-400 text-white' : 'border border-gray-400'} `}>Wednesday</label>

                                                                    <input type="checkbox" id="thursday" name="Thur" value={formData.workdays.includes("Thur")} onChange={handleWorkdays} className='mx-3 hidden' />
                                                                    <label htmlFor="thursday" className={`px-4 py-1 text-gray-500 cursor-pointer rounded-2xl ${formData.workdays.includes("Thur") ? 'bg-gray-400 text-white' : 'border border-gray-400'} `}>Thursday</label>

                                                                    <input type="checkbox" id="friday" name="Fri" value={formData.workdays.includes("Fri")} onChange={handleWorkdays} className='mx-3 hidden' />
                                                                    <label htmlFor="friday" className={`px-4 py-1 text-gray-500 cursor-pointer rounded-2xl ${formData.workdays.includes("Fri") ? 'bg-gray-400 text-white' : 'border border-gray-400'} `}>Friday</label>

                                                                    <input type="checkbox" id="saturday" name="Sat" value={formData.workdays.includes("Sat")} onChange={handleWorkdays} className='mx-3 hidden' />
                                                                    <label htmlFor="saturday" className={`px-4 py-1 text-gray-500 cursor-pointer rounded-2xl ${formData.workdays.includes("Sat") ? 'bg-gray-400 text-white' : 'border border-gray-400'} `}>Saturday</label>

                                                                    <input type="checkbox" id="sunday" name="Sun" value={formData.workdays.includes("Sun")} onChange={handleWorkdays} className='mx-3 hidden' />
                                                                    <label htmlFor="sunday" className={`px-4 py-1 text-gray-500 cursor-pointer rounded-2xl ${formData.workdays.includes("Sun") ? 'bg-gray-400 text-white' : 'border border-gray-400'} `}>Sunday</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='flex gap-8 mt-8'>
                                                        <div
                                                            className="border border-sky-700 px-8 py-2 rounded-3xl text-sky-700 cursor-pointer"
                                                            onClick={() => {
                                                                setProgress(prev => prev - 50)
                                                            }}
                                                        >
                                                            Back
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="bg-sky-700 px-8 py-2 rounded-3xl text-white"
                                                        >
                                                            Save and List Project
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Form1;
