import React, { useEffect, useState } from "react";
import ClientProjectComponent from "./ClientProjectsComponent";
import ClientProjectsRightSidebar from "./clientProjectsRightSidebar";
import axios from "axios";

const ProjectNameComp = () => {

    const data =
        [
            {
                "availability": {
                    "preferredTimeZone": "UTC-07:00",
                    "daysAvailable": [
                        "Weekdays"
                    ],
                    "startTime": "09:00 AM",
                    "endTime": "05:00 PM",
                    "whichDays": [
                        "Mon",
                        "Wed",
                        "Fri"
                    ]
                },
                "_id": "656bcad2683ad8b246462cd7",
                "teamName": "Tech Innovators",
                "teamTagline": "Transforming Ideas into Reality",
                "teamIntroduction": "We are a dynamic team of innovators passionate about creating cutting-edge solutions.",
                "service": [
                    "Service1",
                    "Service3"
                ],
                "languagesSupported": [
                    "English",
                    "French",
                    "Spanish"
                ],
                "tools": [
                    "Tool1",
                    "Tool3",
                    "Tool5"
                ],
                "skills": [
                    "Skill2",
                    "Skill4",
                    "Skill5"
                ],
                "teamUrl": "https://example.com/tech-innovators",
                "proposal": {
                    "proposalScore": 85,
                    "acceptanceProbability": 0.75,
                    "bidAmount": 6000,
                    "startDate": "2023-12-01T10:00:00.000Z",
                    "milestones": [
                        {
                            "name": "Milestone 1",
                            "deliverableDetails": "Prototype development",
                            "description": "Create a functional prototype for the project.",
                            "_id": "65660d5bf18e431b5603d6b1"
                        },
                        {
                            "name": "Milestone 2",
                            "deliverableDetails": "Integration testing",
                            "description": "Conduct integration testing to ensure seamless functionality.",
                            "_id": "65660d5bf18e431b5603d6b2"
                        }
                    ],
                    "files": [
                        {
                            "type": "Buffer",
                            "data": [
                                112,
                                114,
                                111,
                                112,
                                111,
                                115,
                                97,
                                108,
                                45,
                                100,
                                111,
                                99,
                                46,
                                112,
                                100,
                                102
                            ]
                        },
                        {
                            "type": "Buffer",
                            "data": [
                                109,
                                105,
                                108,
                                101,
                                115,
                                116,
                                111,
                                110,
                                101,
                                45,
                                49,
                                45,
                                100,
                                111,
                                99,
                                46,
                                112,
                                100,
                                102
                            ]
                        }
                    ],
                    "_id": "65660d5bf18e431b5603d6b0"
                },
                "teamUserMap": [
                    {
                        "user": {
                            "expertise": {
                                "tools": [],
                                "certificates": [],
                                "skills": []
                            },
                            "_id": "656af2a4acba1f116ca953e6",
                            "name": "Varun Kolanu",
                            "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocI15oHqqqCHli7mCZtUOEGuYAP_qlXBhn5cmwKSIklyaOM=s96-c",
                            "email": "kolanuvarun739@gmail.com",
                            "languages": [],
                            "availableDays": [],
                            "projects": [
                                "65684d682dd359919a8da9af",
                                "656b6456683ad8b246462cd1"
                            ],
                            "paymentsCompleted": 0,
                            "projectsPosted": 0,
                            "rating": 0,
                            "educationDetails": [],
                            "socialMedia": [],
                            "createdAt": "2023-12-02T09:02:28.999Z",
                            "updatedAt": "2023-12-02T09:02:28.999Z",
                            "__v": 0,
                            "domain": "Product",
                            "institute": "IIT (BHU) Varansi"
                        },
                        "role": "Leader",
                        "status": "Approved",
                        "_id": "65660d5bf18e431b5603d6b3"
                    },
                    {
                        "_id": "656ca0d23e357de318df2be2",
                        "user": {
                            "expertise": {
                                "tools": [],
                                "certificates": [],
                                "skills": []
                            },
                            "_id": "656b678eaa8a02c5c87c8d89",
                            "name": "Kolanu Varun",
                            "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocINqCqmAqQ1mDX5yHus86EzVrjUJOCxeF1RkXCJaUnx=s96-c",
                            "email": "kolanu.varun.cse22@itbhu.ac.in",
                            "languages": [],
                            "availableDays": [],
                            "projects": [
                                "656b6456683ad8b246462cd1"
                            ],
                            "paymentsCompleted": 0,
                            "projectsPosted": 0,
                            "rating": 0,
                            "educationDetails": [],
                            "socialMedia": [],
                            "createdAt": "2023-12-02T17:21:18.132Z",
                            "updatedAt": "2023-12-02T17:21:18.132Z",
                            "__v": 0,
                            "domain": "Development",
                            "institute": "IIT (BHU) Varansi"
                        },
                        "role": "Member",
                        "status": "Not Approved"
                    },
                    {
                        "_id": "656ca0d23e357de318df2be3",
                        "user": {
                            "currentAddress": {
                                "streetAddress": "123 Main St",
                                "houseNumber": "Apt 456",
                                "zipCode": "12345",
                                "country": "USA",
                                "state": "California",
                                "city": "San Francisco"
                            },
                            "expertise": {
                                "tools": [
                                    "React",
                                    "Node.js"
                                ],
                                "certificates": [
                                    "Certified Developer"
                                ],
                                "skills": [
                                    "JavaScript",
                                    "HTML",
                                    "CSS"
                                ]
                            },
                            "fees": {
                                "preferredCurrency": "USD",
                                "hourlyRate": 50
                            },
                            "paymentsCompleted": 0,
                            "projectsPosted": 0,
                            "rating": 0,
                            "_id": "65660aa5f18e431b5603d698",
                            "name": "John Doe",
                            "avatarUrl": "https://www.text-image.com/samples/per_normal_face.jpg",
                            "mobileNumber": "+1234567890",
                            "email": "john.doe@example.com",
                            "tagline": "Passionate Developer",
                            "workExperienceYears": 5,
                            "workExperienceMonths": 8,
                            "professionalIntroduction": "Experienced developer with a passion for creating amazing software.",
                            "domain": "Developer",
                            "role": "Student",
                            "languages": [
                                "English",
                                "Spanish"
                            ],
                            "companyName": "ABC Corp",
                            "numOfJobsPosted": 10,
                            "sectorName": "Technology",
                            "educationDetails": [
                                {
                                    "nameOfCollegeOrUniversity": "University of XYZ",
                                    "degree": "Bachelor's in Computer Science",
                                    "_id": "65660aa5f18e431b5603d699"
                                }
                            ],
                            "preferredTimeZone": "UTC-05:00",
                            "daysAvailable": "Weekdays",
                            "availableDays": [
                                "Mon",
                                "Wed",
                                "Fri"
                            ],
                            "startTime": "09:00 AM",
                            "endTime": "05:00 PM",
                            "socialMedia": [
                                {
                                    "description": "LinkedIn",
                                    "url": "https://www.linkedin.com/in/johndoe/",
                                    "_id": "65660aa5f18e431b5603d69a"
                                }
                            ],
                            "lastLogin": "2023-11-28T12:00:00.000Z",
                            "createdAt": "2023-11-28T15:43:33.906Z",
                            "updatedAt": "2023-11-28T15:43:33.906Z",
                            "__v": 0,
                            "projects": [
                                "65661281749c5f585ddbf19c"
                            ],
                            "institute": "IIT Delhi"
                        },
                        "role": "Member",
                        "status": "Approved"
                    }
                ],
                "project": "65684d682dd359919a8da9af"
            },
            {
                "availability": {
                    "daysAvailable": [],
                    "whichDays": []
                },
                "_id": "656c0ea59677236775565308",
                "service": [],
                "languagesSupported": [],
                "tools": [],
                "skills": [],
                "teamUserMap": [
                    {
                        "user": {
                            "expertise": {
                                "tools": [],
                                "certificates": [],
                                "skills": []
                            },
                            "_id": "656af2a4acba1f116ca953e6",
                            "name": "Varun Kolanu",
                            "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocI15oHqqqCHli7mCZtUOEGuYAP_qlXBhn5cmwKSIklyaOM=s96-c",
                            "email": "kolanuvarun739@gmail.com",
                            "languages": [],
                            "availableDays": [],
                            "projects": [
                                "65684d682dd359919a8da9af",
                                "656b6456683ad8b246462cd1"
                            ],
                            "paymentsCompleted": 0,
                            "projectsPosted": 0,
                            "rating": 0,
                            "educationDetails": [],
                            "socialMedia": [],
                            "createdAt": "2023-12-02T09:02:28.999Z",
                            "updatedAt": "2023-12-02T09:02:28.999Z",
                            "__v": 0,
                            "domain": "Product",
                            "institute": "IIT (BHU) Varansi"
                        },
                        "role": "Leader",
                        "status": "Approved",
                        "_id": "656c0ea59677236775565309"
                    },
                    {
                        "user": {
                            "expertise": {
                                "tools": [],
                                "certificates": [],
                                "skills": []
                            },
                            "_id": "656b678eaa8a02c5c87c8d89",
                            "name": "Kolanu Varun",
                            "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocINqCqmAqQ1mDX5yHus86EzVrjUJOCxeF1RkXCJaUnx=s96-c",
                            "email": "kolanu.varun.cse22@itbhu.ac.in",
                            "languages": [],
                            "availableDays": [],
                            "projects": [
                                "656b6456683ad8b246462cd1"
                            ],
                            "paymentsCompleted": 0,
                            "projectsPosted": 0,
                            "rating": 0,
                            "educationDetails": [],
                            "socialMedia": [],
                            "createdAt": "2023-12-02T17:21:18.132Z",
                            "updatedAt": "2023-12-02T17:21:18.132Z",
                            "__v": 0,
                            "domain": "Development",
                            "institute": "IIT (BHU) Varansi"
                        },
                        "role": "Member",
                        "status": "Approved",
                        "_id": "656c201c761720187e9b7d4e"
                    }
                ],
                "project": "65684d682dd359919a8da9af",
                "status": "Pending",
                "teamRating": "4.5"
            }
        ]

    const [insideTeam, setInsideTeam] = useState(false);

    const [teamId, setTeamId] = useState(null)
    // const teamname = data.map((ele) => {
    //     return ele.teamName + " " + ele.proposal.bidAmount + "" + ele.status;
    // })


    const [allTeamsData, setAllTeamsData] = useState(null);
    const [bidAmount, setBidAmount] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/allteams/');
                setAllTeamsData(response.data);
                console.log(`Data is:`, response.data);
            } catch (error) {
                console.error("Error is:", error);
            }
        };

        fetchData(); // Call the async function
    }, []);

<<<<<<< HEAD
    const mtdata = allTeamsData && allTeamsData
        .filter((ele) => ele._id === teamId) // Filter by teamName
=======
    const myData = allTeamsData && allTeamsData
        .filter((ele) => ele.teamName === teamName) // Filter by teamName
>>>>>>> c52a28ba0400ee482742a160032b82f0f7f9d9cb
        .map((ele) => {
            return ele.teamUserMap
        });
        

    console.log("team name is", myData);


    const Recieved = allTeamsData && allTeamsData.length;

    return (
        <>
            {
                !insideTeam && <div className="flex flex-col p-8 w-full">
                    <div className="flex justify-between">
                        <div className="flex flex-row">
                            <h1 className="text-black text-2xl font-semibold mr-3">Project Name</h1>
                            <img className="h-7 mt-1" src="/Images/export.svg" alt="" />
                        </div>
                        <h1 className="text-black text-2xl font-semibold">Live Until: </h1>
                    </div>
                    <div className="flex flex-col bg-blue-100 rounded-md px-3 py-6 mt-8">
                        <div className="flex justify-between">
                            <h1 className="text-2xl text-black font-semibold my-2">Recieved Bids</h1>
                            <div className="flex flex-row">
                                <h1 className="text-1x1 text-black font-semibold my-2 mr-16">Recieved: {Recieved}</h1>
                                <h1 className="text-1x1 text-black font-semibold my-2 mr-10">Invited: </h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[70%]">
                                <h1 className="text-1x1 text-black font-semibold my-3">TruBot has ranked the bids received by you, take a look!</h1>
                                <div className="flex flex-row bg-white p-2 rounded-md">
                                    <img className="h-5 pt-1 px-2" src="/Images/Search_Icon.svg" alt="" />
                                    <input className="w-[100%] p-1" type="text" placeholder="Search for Teams or Talent" />
                                </div>
                            </div>
                            <img src="/Images/Filter2_Icon_UIA.svg" className="mt-8 cursor-pointer" alt="" />
                            <div className="flex flex-col mt-3">
                                <h1 className="text-black text-1x1 m-2">Bid Status</h1>
                                <div className="flex flex-row bg-white px-2 rounded-md">
                                    <input type="text" placeholder="Select Type" className="py-2 px-10 rounded-md border-r-0" />
                                    <img src="/Images/arrow-left.svg" className="h-7 pt-2" alt="" />
                                </div>
                            </div>
                            <img src="/Images/refresh-2.svg" className="mt-10" alt="" />
                        </div>
                        <div className="flex flex-col mt-6">
                            <div className="w-full px-4 py-3 bg-blue-900 flex justify-between">
                                <h1 className="text-white text-1x1 font-semibold">Ranking</h1>
                                <h1 className="text-white text-1x1 font-semibold">Team Name</h1>
                                <h1 className="text-white text-1x1 font-semibold">Bid Amount</h1>
                                <h1 className="text-white text-1x1 font-semibold">Team Rating</h1>
                                <h1 className="text-white text-1x1 font-semibold">Status</h1>
                                <h1 className="text-white text-1x1 font-semibold">View</h1>
                            </div>
                            {allTeamsData && allTeamsData.map((ele, index) => {
                                return <div className="flex justify-between px-6 py-4 bg-white">
                                    <h1 className="text-black font-semibold pt-1">{index+1}</h1>
                                    <div className="flex flex-row">
                                        <img className="h-9 mr-4" src="/Images/newElipse.svg" alt="" />
                                        <h1 className="text-black font-semibold pt-1">{ele.teamName ? ele.teamName : 'not found'}</h1>
                                    </div>
                                    <h1 className="text-black font-semibold pt-1 mr-10">${ele.proposal && ele.proposal.bidAmount ? ele.proposal.bidAmount : '500'}</h1>
                                    <h1 className="text-black font-semibold pt-1">{ele.teamRating ? ele.teamRating : '4.8'}/5.0</h1>
                                    <div className="text-black font-semibold pt-1 rounded-md">New</div>
                                    <img onClick={() => { setTeamId(ele._id); setInsideTeam(true); setBidAmount(ele.proposal && ele.proposal.bidAmount) }} className="cursor-pointer" src="/Images/eye.svg" alt="" />
                                </div>
                            })}
                            <hr className="w-full" />
                        </div>
                    </div>
                </div>
            }
            {
                insideTeam && <div className="flex flex-row w-full">
<<<<<<< HEAD
                    <ClientProjectComponent teamId = {teamId} bidAmount = {bidAmount}/>
                    <ClientProjectsRightSidebar mtdata = {mtdata} />
=======
                    <ClientProjectComponent teamName = {teamName} bidAmount = {bidAmount}/>
                    <ClientProjectsRightSidebar mydata = {myData} />
>>>>>>> c52a28ba0400ee482742a160032b82f0f7f9d9cb
                </div>
            }
        </>
    )
}

export default ProjectNameComp;