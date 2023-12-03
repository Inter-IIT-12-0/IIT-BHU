import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const People = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [users, setUser] = useState([]);
    const [domain, setDomain] = useState('');
    const [type, setType] = useState('');


    const [filteredPeople, setFilteredPeople] = useState(users);
    useEffect(() => {
        axios.get('/api/allusers/')
            .then(res => { // Log the response to the console
                console.log("hello");
                
                setUser(res.data.filter(person => person.role === 'Student'));
                setFilteredPeople(res.data.filter(person => person.role === 'Student'));

            })
            .catch(err => console.log(err));

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
        console.log(option);
        setDomain(option);
        setShowDomainDropdown(false);
        if (searchQuery) {
            const usersWithTargetDomain = users.filter(person =>
                person.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).filter(person => person.domain === option);
            setFilteredPeople(usersWithTargetDomain);
        }
        else {
            const usersWithTargetDomain = users.filter(person => person.domain === option);
            setFilteredPeople(usersWithTargetDomain);

        }
        // Perform any other actions based on the selected option
    };

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : users.length-2));
    };

    const handleNextClick = () => {
        // Assuming you have 5 items in the carousel
        setActiveIndex((prevIndex) => (prevIndex < (users.length-1) ? prevIndex + 1 : 0));
    }; 


    const handleInputChange = (event) => {

        const inputValue = event.target.value;
        setSearchQuery(inputValue);

        // Filter users based on the input value

        {
            if (domain) {

                const filteredPeopleResult = users.filter(person =>
                    person.name.toLowerCase().includes(inputValue.toLowerCase())
                ).filter(person => person.domain === domain);
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

    return (
        <div className='flex-col flex'>
            <div id="controls-carousel" className="relative w-full" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {users.map((user,index) => (
                        <div
                            key={index}
                            className={`${index === activeIndex ? 'duration-700 ease-in-out' : 'hidden'
                                }`}
                            data-carousel-item={index === activeIndex ? 'active' : ''}
                        >
                            <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                {/* Replace the image tag with your card component */}
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <p>{user.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none bg-slate-300"
                    onClick={handlePrevClick}
                    data-carousel-prev
                >
                    {/* Your previous button content */}
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none bg-slate-300"
                    onClick={handleNextClick}
                    data-carousel-next
                >
                    {/* Your next button content */}
                </button>
            </div>

            <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center">
                <div className="flex-col flex">
                    <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center">
                        <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
                            <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                                <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
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
                                                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></input>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                                        <button
                                            type="button"
                                            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                        >
                                            <svg
                                                className="h-3.5 w-3.5 mr-2"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                />
                                            </svg>
                                            Add product
                                        </button>
                                        <div className="flex items-center w-full space-x-3 md:w-auto">
                                            <button
                                                id="DomainDropdownButton"
                                                data-dropdown-toggle="DomainDropdown"
                                                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                                                className={`z-10 ${showDomainDropdown ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                                            >
                                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="DomainDropdownButton">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleDomainClick('Domain 1')}>
                                                            Domain 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => handleDomainClick('UX/UI Designer')}
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
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
                        </p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {filteredPeople.map((person, index) => (
                            <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="w-60 h-40  rounded-lg sm:rounded-none sm:rounded-l-lg" src={person.avatarUrl} alt={`${person.name} Avatar`} />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">{person.name}</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">{person.domain}</span>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{person.email}</p>
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default People;
