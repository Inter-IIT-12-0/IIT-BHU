import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import University from './University';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Slider from './slider';

const People = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [users, setUser] = useState(null);
    const [domain, setDomain] = useState('');
    const [type, setType] = useState('');
    const [role, setRole] = useState('Client');
    const [state, setState] = useState(true);

    const [filteredPeople, setFilteredPeople] = useState(users);

    const fetchData2 = async () => {
        try {
            const response = await axios.get('/api/allusers/');
            setUser(response.data.filter(person => person.role === role));
            setFilteredPeople(response.data.filter(person => person.role === role));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/allusers/');
                setUser(response.data.filter(person => person.role === 'Student'));
                setFilteredPeople(response.data.filter(person => person.role === 'Student'));
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    const [showDomainDropdown, setShowDomainDropdown] = useState(false);
    const toggleDomainDropdown = () => {
        setShowDomainDropdown((prevState) => !prevState);
    };
    const toggleFilterDropdown = () => {
        setShowFilterDropdown((prevState) => !prevState);
    };
    const [searchQuery, setSearchQuery] = useState('');
    const handleDomainClick = (option) => {
        setDomain(option);
        setShowDomainDropdown(false);
        if (searchQuery) {
            const usersWithTargetDomain = users.filter(person =>
                person.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).filter(person => person.domain.includes(option));
            setFilteredPeople(usersWithTargetDomain);
        }
        else {
            const usersWithTargetDomain = users.filter(person => person.domain.includes(option));
            setFilteredPeople(usersWithTargetDomain);
        }
    };

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : users.length - 2));
    };

    const handleNextClick = () => {
        // Assuming you have 5 items in the carousel
        setActiveIndex((prevIndex) => (prevIndex < (users.length - 1) ? prevIndex + 1 : 0));
    };


    const handleInputChange = (event) => {

        const inputValue = event.target.value;
        setSearchQuery(inputValue);

        // Filter users based on the input value

        {
            if (domain) {
                const filteredPeopleResult = users.filter(person =>
                    person.name.toLowerCase().includes(inputValue.toLowerCase())
                ).filter(person => person.domain.includes(domain));
                setFilteredPeople(filteredPeopleResult);
            }
            else {
                const filteredPeopleResult = users.filter(person =>
                    person.name.toLowerCase().includes(inputValue.toLowerCase())
                );
                setFilteredPeople(filteredPeopleResult);
            }
        }

        // Update the state with the filtered result

    };

    const [onUniversity, setOnUniversity] = useState(false)

    return (
        <>
            {!onUniversity && (<div className='flex-col flex pt-8 px-8 w-[100%] max-h-[92vh] overflow-scroll overflow-y-auto overflow-x-hidden bg-white'>
                <div className='flex flex-row'>
                    <div className={`flex flex-row items-center justify-center my-6 mr-6 border border-slate-200 py-4 pl-4 pr-10 cursor-pointer rounded-xl ${!state ? 'bg-blue-200' : ''}`}>
                            <img className='h-6 mx-3 my-2' src="/Images/newElipse.svg" alt="" />
                            <h1 className='text-black text-1x1 font-semibold rounded-md border-slate-400' onClick={() => { setRole('Student'); fetchData2(); setState(false) }}>Client</h1>
                        </div>
                    <div className={`flex flex-row items-center justify-center my-6 mr-6 border border-slate-200 py-4 pl-4 pr-10 cursor-pointer rounded-xl ${state ? 'bg-blue-200' : ''}`}>
                        <img className='h-6 mx-3 my-2' src="/Images/newElipse.svg" alt="" />
                        <h1 className='text-black text-1x1 font-semibold rounded-md border-slate-400 ' onClick={() => { setRole('Client'); fetchData2(); setState(true) }}>Talent</h1>
                    </div>
                    <div className={`flex flex-row items-center justify-center my-6 mr-6 border border-slate-200 py-4 pl-4 pr-10 cursor-pointer rounded-xl ${role === 'University' ? 'bg-blue-200' : ''}`}>
                        <img className='h-6 mx-3 my-2' src="/Images/newElipse.svg" alt="" />
                        <h1 className='text-black text-1x1 font-semibold rounded-md border-slate-400' onClick={() => { setOnUniversity(true) }}>University</h1>
                    </div>
                </div>
                <h1 className='text-black text-2xl font-bold mb-5'>Top Performers</h1>
                <div id="controls-carousel" className="relative w-full" data-carousel="static">
                    <div className="relative h-auto rounded-lg md:h-96 ">

                        <Slider users={filteredPeople} />

                    </div>

                </div>

                <section className=" flex items-center w-full bg-white">
                    <div className="flex-col flex w-full">
                        <section className="  flex items-center w-full">
                            <div className=" px-4 mx-auto w-full">
                                <div className="relative bg-white shadow-md sm:rounded-lg">
                                    <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4 w-full">
                                        <div className="w-full md:w-1/2">
                                            <form className="flex items-center">
                                                <div className="relative w-full">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <input type="text"
                                                        placeholder="Enter your search query"
                                                        value={searchQuery}
                                                        onChange={handleInputChange}
                                                        id="simple-search"
                                                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-blue-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-blue-200 dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500"></input>
                                                </div>
                                            </form>
                                        </div>
                                        <img src="/Images/Filter2_Icon_UIA.svg" alt="" />
                                        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                                            <div className="flex items-center w-full space-x-3 md:w-auto">
                                                <button
                                                    id="DomainDropdownButton"
                                                    data-dropdown-toggle="DomainDropdown"
                                                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-blue-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-blue-200 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-200"
                                                    type="button"
                                                    onClick={toggleDomainDropdown}
                                                >
                                                    <svg
                                                        className="-ml-1 mr-1.5 w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            clipRule="evenodd"
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        />
                                                    </svg>
                                                    Type
                                                </button>
                                                <button
                                                    id="DomainDropdownButton"
                                                    data-dropdown-toggle="DomainDropdown"
                                                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-blue-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-blue-200 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-200"
                                                    type="button"
                                                    onClick={toggleDomainDropdown}
                                                >
                                                    <svg
                                                        className="-ml-1 mr-1.5 w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            clipRule="evenodd"
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        />
                                                    </svg>
                                                    Sector
                                                </button>
                                                <button
                                                    id="DomainDropdownButton"
                                                    data-dropdown-toggle="DomainDropdown"
                                                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-blue-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-blue-200 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-200"
                                                    type="button"
                                                    onClick={toggleDomainDropdown}
                                                >
                                                    <svg
                                                        className="-ml-1 mr-1.5 w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            clipRule="evenodd"
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        />
                                                    </svg>
                                                    Domain
                                                </button>
                                                <div
                                                    id="DomainDropdown"
                                                    className={`z-10 ${showDomainDropdown ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-blue-200 dark:divide-gray-600`}
                                                >
                                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="DomainDropdownButton">
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-white" onClick={() => handleDomainClick('Domain 1')}>
                                                                Domain 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white" onClick={() => handleDomainClick('UX/UI Designer')}
                                                            >
                                                                UX/UI Designer
                                                            </a>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="bg-white  mt-10">
                    <div className="pb-5 px-4 mx-auto max-w-screen-xl lg:pb-6 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center mb-5 lg:mb-8">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Peoples</h2>
                        </div>
                        <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-2 xl:grid-cols-3">
                            {filteredPeople && filteredPeople.map((person, index) => {
                                return <div key={index} className="flex justify-between items-center bg-white shadow sm:flex dark:bg-blue-200 dark:border-gray-700 border rounded-2xl border-slate-500 pr-6">
                                    <div className='flex flex-col ml-5 top-0 items-center pt-6 h-full'>
                                            <img className="h-12 w-12 rounded-full m-0 p-0" src={person.avatarUrl} alt={`${person.name} Avatar`} />
                                        <h1>Domain</h1>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold tracking-tight text-gray-700">
                                            <a href="#">{person.name}</a>
                                        </h3>
                                        <h1>{role === 'Student' ? person.companyName : person.institute}</h1>
                                        <span className="text-gray-600">{person.domain.map(dom => (
                                            <span> {dom}, </span>
                                        ))}</span>
                                        {/* <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{person.email}</p> */}
                                        <ul className="flex space-x-4 sm:mt-0">
                                            {person.socialMedia.map((social, socialIndex) => (
                                                <li key={socialIndex}>
                                                    <a href={social.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 15.543c-1.684 0-3.097-.751-4.115-1.865.212-.353.797-1.734.797-3.291 0-2.505-1.487-3.833-3.622-3.833-1.691 0-3.128 1.17-3.655 2.914-.061.158-.07.335-.046.515.054.453.077.957.066 1.508C6.338 16.44 8.655 18 11.2 18c3.284 0 5.862-2.168 5.862-5.067v-.062c0-.336-.029-.675-.083-1.008.57-.443 1.088-1 1.532-1.652-.176.827-.56 1.528-1.064 2.073.487-.057.967-.186 1.437-.376-.334.575-.749 1.079-1.225 1.477z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <button className='mt-5 py-1 px-6 rounded-full bg-sky-500 text-white font-semibold'>View Profile</button>
                                    </div>
                                    <div className='flex flex-col py-5 justify-between h-full'>
                                        <h1>{person.rating}/5.0</h1>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
            </div>
            )}
            {onUniversity && <University />}
        </>
    );
};

export default People;
