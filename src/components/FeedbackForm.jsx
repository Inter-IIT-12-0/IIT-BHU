import React, { useState, useEffect } from "react";
import axios from "axios";

const FeedbackForm = () => {
    const [showDomainDropdown, setShowDomainDropdown] = useState(false);

    const toggleDomainDropdown = () => {
        setShowDomainDropdown((prevState) => !prevState);
    };

    const[domain, setDomain] = useState(null);
    const[name, setName] = useState('Name Surname');
    const handleDomainClick = (domain, name) => {
        setDomain(domain);
        setName(name);
        setShowDomainDropdown(false);
    }

    const [inputValue, setInputValue] = useState(7); // Set initial value as needed

    // Function to handle changes to the input value
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const [inputValue2, setInputValue2] = useState(6); // Set initial value as needed

    // Function to handle changes to the input value
    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };

    const[project, setProject] = useState(null);

    const id = "65684d682dd359919a8da9af";
    useEffect(() => {
        axios.get(`/api/project/${id}`)
          .then(res => {
            setProject(res.data);
          }).catch(err => console.log(err));
      }, [])

    //   console.log(project);

    //   console.log("input values are:",inputValue," ",inputValue2);
      let requestBody = {
        "user_id":domain,
        "collabRating":parseInt(inputValue2),
        "skillRating":parseInt(inputValue)
      }

      const submitFeedbackForm = () => {
        try {
            axios.put(`/api/user/`,requestBody).then(console.log("request made successfully"));
        } catch (error) {
            console.log(`error is ${error}`);
        }
      }

      console.log("request body is:",requestBody);

    return (
        <>
        {project && 
            <div className="flex flex-col p-8 w-[100%]">
            <h1 className="text-3xl font-semibold">{project.title} - Team Feedback</h1>
            <hr className="w-[100%] mt-4" />
            <div className="flex flex-row p-8 w-[100%]">
                <h1 className="mr-5">Select Team Member</h1>
                <div className="flex flex-col">
                    <button
                        id="DomainDropdownButton"
                        data-dropdown-toggle="DomainDropdown"
                        className="flex items-center justify-center w-52 pl-4 pr-36 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-blue-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-blue-200 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-200 "
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
                        {name}
                    </button>
                    <div
                        id="DomainDropdown"
                        className={`z-10 ${showDomainDropdown ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded shadow w-72 mr-2 dark:bg-blue-200 dark:divide-gray-600 absolute mt-10`}
                    >
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="DomainDropdownButton">
                            {project.assignedTeam.teamUserMap.map((ele) => {
                                return <li>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-white" onClick={() => handleDomainClick(ele.user._id, ele.user.name)}>
                                    {ele.user.name}
                                </a>
                            </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className="font-semibold">Based on the following parameters rate the members accordingly</h1>
            <h1 className="text-2xl font-semibold mt-10">Level of Skill and knowledge base exhibited</h1>
            <h1 className="text-sm font-semibold mt-3">Rate on the level of skill and knowledge of the Student</h1>

            <div className="relative mb-6 w-[80%]">
                <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                <input id="labels-range-input" type="range" value={inputValue} onChange={handleInputChange} min="0" max="10" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">10</span>
            </div>

            <h1 className="text-2xl font-semibold mt-5">Ease of Collaboration</h1>
            <h1 className="text-sm font-semibold mt-3">Rate how easy it was for you to collaborate with the students</h1>
            <div className="relative mb-6 w-[80%]">
                <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                <input id="labels-range-input" type="range" value={inputValue2} min="0" max="10" onChange={handleInputChange2} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">10</span>
            </div>
            <h1 className="text-2xl font-semibold mt-5">Detailed Feedback</h1>
            <input className="width-[90%] p-3 text-2xl h-32 border rounded-3xl border-gray-400 my-3" type="text" />
            <div className="flex justify-between items-center w-[100%]">
                <button onClick={submitFeedbackForm} type="submit" className="text-white font-semibold py-2 px-4 rounded-full bg-gray-800 ml-[40%]">Submit Feedback</button>
            </div>
        </div>
        }
        </>
    )
}

export default FeedbackForm

