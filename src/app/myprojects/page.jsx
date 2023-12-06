"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import StudentSidebar from "../../components/StudentSidebar";
import Navbar from "../../components/Navbar";
// import Projects from "../../models/FakeData/Project.json";
import MyProjectCard from "../../components/MyProjectCard.jsx";
import axios from "axios";

const MyProjects = () => {
	// const Projects = [
	// 	{
	// 		"id": 1,
	// 		"title": "Sample Project",
	// 		"statement": "This is a sample project statement.",
	// 		"milestones": [
	// 			{
	// 				"dueDate": "2023-12-31T23:59:59.999Z",
	// 				"heading": "Milestone 1",
	// 				"submissionLink": "http://sample-submission-link.com",
	// 				"feedbackLink": "http://sample-feedback-link.com",
	// 				"subMilestones": [
	// 					{
	// 						"title": "SubMilestone 1",
	// 						"isCompleted": false,
	// 						"status": "Not Started",
	// 						"dueDate": "2023-12-15T23:59:59.999Z",
	// 						"assignedTo": "<User ObjectId>",
	// 						"description": "Description of SubMilestone 1",
	// 						"startDate": null,
	// 						"endDate": null,
	// 						"Aitools": ["Engineering"],
	// 						"connectedApps": [["Figma", "http://figma.com"]],
	// 						"work": {
	// 							"fileType": "file",
	// 							"file": "<Buffer Data>"
	// 						},
	// 						"stickyNotes": ["Note 1", "Note 2"]
	// 					},
	// 				],
	// 				"isCompleted": false,
	// 				"status": "Not Started"
	// 			}
	// 		],
	// 		"userAgreement": {
	// 		},
	// 		"assignedTeam": {
	// 			"name": "Development Team",
	// 			"users": [
	// 				{
	// 					"username": "user1",
	// 					"email": "user1@example.com"
	// 				},
	// 			]
	// 		},
	// 		"assignedBy": {
	// 			"username": "admin",
	// 			"email": "admin@example.com"
	// 		},
	// 		"logo": "https://aemi.ie/wp-content/uploads/2021/10/Project-Arts-Centre-Logo-Black-1-scaled.jpg",
	// 		"health": {
	// 			"progress": 0
	// 		},
	// 		"startDate": "2023-01-01T00:00:00.000Z",
	// 		"endDate": "2023-12-31T23:59:59.999Z",
	// 		"activity": [
	// 			{
	// 				"submilestone": "<SubMilestone ObjectId>",
	// 				"type": "CREATE",
	// 				"timestamp": "2023-01-01T12:00:00.000Z",
	// 				"user": "<User ObjectId>",
	// 				"message": "Created the project."
	// 			}
	// 		],
	// 		"clientRequirements": {
	// 		},
	// 		"work": {
	// 			"fileType": "file",
	// 			"file": "<Buffer Data>"
	// 		},
	// 		"subMilestone": {
	// 			"title": "SubMilestone 3",
	// 			"isCompleted": false,
	// 			"status": "Not Started",
	// 		}
	// 	}
	// ]

	const [Projects, setProjects] = useState([]);
	const [selectedOption, setSelectedOption] = useState('option1');

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
	};


	useEffect(() => {
		axios.get(`/api/userprojects`)
			.then(res => {
				console.log(res.data)
				setProjects(res.data)
			})
			.catch(err => {
				console.log(err);
			})
	}, [])

	console.log("projects are:",Projects);

	return (

		<main className='w-[100vw]'>
			<div className='flex flex-col w-full h-full'>
				<Navbar />
				<div className='flex w-full h-full'>
					<StudentSidebar />
					<div className='w-full h-full flex flex-col'>
						<div className='h-full p-8 flex'>
							{
								Projects.map(project => {
									return <MyProjectCard key={project._id} project={project} />
								})
							}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MyProjects;
