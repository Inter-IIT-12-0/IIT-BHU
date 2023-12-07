import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import ClientMarketPlaceComponent from './ClientMarketPlaceComp';
import BackArrowIcon from "../../public/Images/BackArrow_Icon.svg"
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import axios from 'axios';
import createStatement from '../pages/api/GPT/statementBreakdown';
import Loading from './Loading';
import {useRouter} from "next/navigation"

const Form1 = () => {
    const { data: session } = useSession()
    const [progress, setProgress] = useState(33);
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const [formData, setFormData] = useState({
        title: '',
        from: '',
        to: '',
        description: '',
        industry: '',
        Skill1: '',
        Skill2: '',
        Skill3: '',
        files: [],
        location: 'Remote',
        workdays: [],
        aiDescription: '',
        payment: 0,
        paymentType: 'Fixed'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData((prevData) => ({
            ...prevData,
            files: files
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (progress != 99) {
            if (progress === 33) {
                setLoading(true);
                const aiGen = await createStatement(JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    skills:[formData.Skill1, formData.Skill2, formData.Skill3]
                }))
                let newFormData = {...formData}
                newFormData.aiDescription = aiGen.newstatement
                setFormData(newFormData)
                setLoading(false);
            }
            setProgress(prev => prev + 33);
        }
        else {
            const data = {
                title: formData.title,
                statement: formData.aiDescription,
                startDate: (new Date(formData.from)).toISOString(),
                endDate: (new Date(formData.to)).toISOString(),
                assignedBy: session.user._id,
                clientRequirements: {
                    paymentType: formData.paymentType,
                    payment: formData.payment,
                    workdays: formData.workdays,
                    requiredTools: [
                        formData.Skill1,
                        formData.Skill2,
                        formData.Skill3
                    ]
                    // files: formData.files
                },
                duration: Math.floor(((new Date(formData.to)) - (new Date(formData.from))) / (1000 * 60 * 60 * 24 * 7)),
                domain: formData.industry,
                location: formData.location
            }
            axios.post('/api/project', data).then(res => {
                toast.success('Project created successfully')
                router.push("/marketplace")
            }).catch(err => {
                toast.error(err.response.data.error)
            })
        }
    };

    const handleWorkdays = e => {
        if (e.target.checked) {
            formData.workdays.push(e.target.name)
        }
        else {
            formData.workdays = formData.workdays.filter(day => day !== e.target.name)
        }
    }

    return (
        <>
            {/* Modal toggle */}
            {/* <div className="flex justify-center m-5">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="block text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="button"
                >
                    Create product
                </button>
            </div> */}

            {/* Main modal */}
            {
                loading ? <Loading /> :
            
            <div
                tabIndex="-1"
                aria-hidden="true"
                className="relative inset-0 overflow-y-auto overflow-x-hidden flex items-center justify-center w-full"
            >
                {
                    progress > 33 && <BackArrowIcon className="absolute top-3 left-6 cursor-pointer" onClick={() => {
                        if (progress > 33)
                            setProgress(prev => prev - 33)
                    }} />
                }

                <div className=" p-4 w-full mt-3">
                    {/* Modal content */}
                    <div className=" p-4 bg-white rounded-lg shadow sm:p-5 w-full">
                        {/* Modal header */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                            <h3 className="text-lg font-semibold text-sky-700">
                                Create a Project
                            </h3>
                            {/* <button
                                    onClick={closeModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-black"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button> */}

                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-sky-600 h-2.5 rounded-full"
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
                                <div className={classNames({ "hidden": progress !== 33 }, "relative p-4 w-full h-full md:h-auto")}>
                                    <div className="relative p-4 bg-indigo-100 rounded-lg shadow sm:p-5 w-full">
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
                                                    ></textarea>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor='file'
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Upload Required Documents
                                                    </label>
                                                    <label htmlFor="file">
                                                        <div className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg  p-2.5 outline-none h-5/6 w-full flex justify-center items-center text-lg">
                                                            {formData.files.map((file, index) => (
                                                                <div key={index} >
                                                                    {file.name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id='file'
                                                        name='files'
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                        required
                                                    />
                                                </div>
                                                <div className='flex flex-col justify-between'>
                                                    <div>
                                                        <label
                                                            htmlFor="industry"
                                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                                        >
                                                            Industry of Project
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="industry"
                                                            name='industry'
                                                            value={formData.industry}
                                                            onChange={handleInputChange}
                                                            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            htmlFor="skills"
                                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                                        >
                                                            Top 3 Skills Required
                                                        </label>
                                                        {/* <input
                                                            type="text"
                                                            id="skills"
                                                            name='skills'
                                                            value={formData.skills}
                                                            onChange={handleInputChange}
                                                            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                            required
                                                        /> */}
                                                        <div className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5 outline-none flex justify-around'>
                                                            <input type="text" placeholder='Skill 1' onChange={handleInputChange} name='Skill1' className='outline-none border border-gray-300 w-16 rounded-lg text-center py-1' value={formData.Skill1}/>
                                                            <input type="text" placeholder='Skill 2' onChange={handleInputChange} name='Skill2' className='outline-none border border-gray-300 w-16 rounded-lg text-center py-1' value={formData.Skill2}/>
                                                            <input type="text" placeholder='Skill 3' onChange={handleInputChange} name='Skill3' className='outline-none border border-gray-300 w-16 rounded-lg text-center py-1' value={formData.Skill3}/>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <button
                                                type="submit"
                                                className="bg-sky-500 px-4 py-2 rounded-xl text-white"
                                            >
                                                Next
                                            </button>
                                        </form>
                                    </div>
                                </div>



                                <div className={classNames({ "hidden": progress !== 66 }, "relative p-4 w-full h-full md:h-auto")}>
                                    <div className="relative p-4 bg-indigo-100 rounded-lg shadow sm:p-5 w-full">
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                                <div className="sm:col-span-2">
                                                    <label
                                                        htmlFor="aiDescription"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        AI enhanced Project Description
                                                    </label>
                                                    <textarea
                                                        id="aiDescription"
                                                        name="aiDescription"
                                                        rows="4"
                                                        value={formData.aiDescription}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                    ></textarea>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="paymentType"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Payment Type
                                                    </label>
                                                    <select name="paymentType" id="paymentType" value={formData.paymentType} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none" required>
                                                        <option value="fixed">Fixed</option>
                                                        <option value="installment">Installment</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="payment"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Total Payment
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

                                                <div>
                                                    <label
                                                        htmlFor='location'
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Location
                                                    </label>
                                                    {/* <label htmlFor="file">
                                                        <div className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg  p-2.5 outline-none h-5/6 w-full flex justify-center items-center text-lg">
                                                            {formData.files.map((file, index) => (
                                                                <div key={index} >
                                                                    {file.name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </label> */}
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
                                                <div className='flex flex-col justify-between'>
                                                    <div>
                                                        <label
                                                            htmlFor="workDays"
                                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                                        >
                                                            Work days
                                                        </label>
                                                        <div id='workDays' className='flex items-center h-full'>
                                                            <input type="checkbox" id="monday" name="Mon" value={formData.workdays.includes("Mon")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="monday">Mon</label>

                                                            <input type="checkbox" id="tuesday" name="Tue" value={formData.workdays.includes("Tue")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="tuesday">Tue</label>

                                                            <input type="checkbox" id="wednesday" name="Wed" value={formData.workdays.includes("Wed")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="wednesday">Wed</label>

                                                            <input type="checkbox" id="thursday" name="Thur" value={formData.workdays.includes("Thur")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="thursday">Thur</label>

                                                            <input type="checkbox" id="friday" name="Fri" value={formData.workdays.includes("Fri")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="friday">Fri</label>
                                                            <input type="checkbox" id="friday" name="Sat" value={formData.workdays.includes("Sat")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="saturday">Sat</label>
                                                            <input type="checkbox" id="saturday" name="Sun" value={formData.workdays.includes("Sun")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="friday">Sun</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <button
                                                type="submit"
                                                className="bg-sky-500 px-4 py-2 rounded-xl text-white"
                                            >
                                                Next
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className={classNames({ "hidden": progress !== 99 }, "relative p-4 w-full h-full md:h-auto flex flex-col items-center justify-between")}>
                                    <ClientMarketPlaceComponent />
                                    <button
                                        className="bg-sky-500 px-4 py-2 rounded-xl w-1/4 text-white mt-5"
                                        onClick={handleSubmit}
                                    >
                                        Save and List project
                                    </button>
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
