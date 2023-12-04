import React, { useEffect, useState } from "react";
import UniversityCard from "./universityCard";
import axios from "axios";

const University = () => {

    const testData = [
        {
            "name": "University of Technology",
            "type": "Engineering",
            "members": [
              "65660aa5f18e431b5603d698",
              "65684b792dd359919a8da979"
            ],
            "professors": [
              "656af2a4acba1f116ca953e6",
              "656b678eaa8a02c5c87c8d89"
            ],
            "labcount": 10,
            "address": "123 University Ave, Cityville",
            "description": "A leading institute in technology education.",
            "domains": "Engineering, Computer Science",
            "sector": "Education",
            "followers": 5000,
            "projects": [
              "65684d682dd359919a8da9af",
              "656b6456683ad8b246462cd1"
            ],
            "about": "Committed to excellence in education and research.",
            "profileUrl": "https://www.example.com/university-profile",
            "backgroundUrl": "https://www.example.com/university-background",
            "_id": "656d99de953f85d0a7b7a02a",
            "createdAt": "2023-12-04T09:20:30.920Z",
            "updatedAt": "2023-12-04T09:20:30.920Z",
            "__v": 0
        }
    ]
    const test_university_id = "656d99de953f85d0a7b7a02a";
    const[universityData, setUniversityData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/university?id=${test_university_id}`);
                setUniversityData(response.data);
                console.log(`Data is:`, response.data);
            } catch (error) {
                console.error("Error is:", error);
            }
        };
        fetchData(); // Call the async function
    }, []);
    
    console.log("university data is:",universityData);

    return (
        <div className='flex-col flex w-full pt-8 px-6 overflow-x-hidden'>
            {universityData && universityData.map((ele) => {
                return <UniversityCard universityData = {ele}/>
            })}
        </div>
    )
}

export default University