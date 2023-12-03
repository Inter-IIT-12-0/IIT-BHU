import React, { useEffect } from "react";

const ClientProjectsRightSidebar = ({mtdata}) => {
    const name = mtdata.map((ele) => {
        return ele.map((ele2) => {
            return ele2
        })
    })
    const myData = [
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
    ]
    
    const newData = myData.map((ele) => {
        return ele.user.name
    })

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

    console.log("new name is:",newData)
    console.log("new name is 2:",mtdata)
    return (
        <div className="p-4 bg-blue-100 w-[25%]">
            
            <h1 className="text-3xl text-blue-700 font-semibold">Team Details</h1>
            <hr className="w-[100%] my-2" />
            <div className="bg-white rounded-md p-4 mt-8">
                <h1 className="text-black font-semibold text-2xl">Team Members</h1>
                <div className="rounded-full bg-black w-full h-px my-3"></div>
                {myData && myData.map((ele) => {
                    console.log("element is:",ele.user.name)
                    return <div>
                        <div className="flex justify-between p-3">
                        <div className="flex flex-row">
                            <img src="/Images/newProf.svg" alt="" />
                            <div className="flex flex-col ml-5">
                                <h1 className="text-black text-1x1 font-semibold">{ele.user.name}</h1>
                                <h2>{ele.role}</h2>
                            </div>
                        </div>
                        <div>
                            <div className="bg-yellow-400 bg-opacity-40 flex flex-row p-2 rounded-md mt-2">
                                <img src="/Images/star.svg" alt="" />
                                <h1 className="text-black text-1x1 font-semibold ml-3">{ele.user.rating}</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                })}
            </div>
            <h1 className="text-3xl text-blue-700 font-semibold mt-6">Other Bids</h1>
            <hr className="w-[100%] my-2" />
            <div className="bg-white rounded-md p-4 mt-8">
                <h1 className="text-black font-semibold text-2xl">Recieved Bids</h1>
                <div className="rounded-full bg-black w-full h-px my-3"></div>
                <div className="flex justify-between p-3">
                    <div className="flex flex-row">
                        <img src="/Images/newProf.svg" alt="" />
                        <div className="flex flex-col ml-5">
                            <h1 className="text-black text-1x1 font-semibold">Aditya Rai</h1>
                            <h2>Buissness Analyst</h2>
                        </div>
                    </div>
                    <div>
                        <div className="bg-yellow-400 bg-opacity-40 flex flex-row p-2 rounded-md mt-2">
                            <img src="/Images/star.svg" alt="" />
                            <h1 className="text-black text-1x1 font-semibold ml-3">4.2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientProjectsRightSidebar