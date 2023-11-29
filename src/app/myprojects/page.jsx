"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import StudentSidebar from "../../components/StudentSidebar";
import Navbar from "../../components/Navbar";
// import Projects from "../../models/FakeData/Project.json";
import ProjectCard from "../../components/ProjectCard.jsx";
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
			setProjects(res.data)
		})
		.catch(err => {
			console.log(err);
		})
	}, [])
	return (

		<div className=" bg-opacity-30 overflow-x-hidden">
			{/* <Sidebar /> */}
			<StudentSidebar />
			<Navbar />
			<div className="pl-96 pt-20 flex flex-col">
				<div className=" bg-gray-100 flex justify-end items-end w-[800px]">
					<div className="container mx-auto bg-indigo-500 bg-opacity-30 backdrop-blur-lg rounded-lg p-6 w-[800px] z-20">
						<form>
							<h1 className="text-center font-bold text-white text-4xl mb-8">Find your project</h1>
							<div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
								<input className="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search your domain name" />
								<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
									<select id="Com" className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg" defaultValue={"com"}>
										<option value="com">In Progress</option>
										<option value="net">Completed</option>
										<option value="org">Conflicted</option>
									</select>
									<button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="w-3/5 flex mt-20">
					{
						Projects.map(project => (
							// <div key={project.id}> {project.title} </div>
							<ProjectCard key={project._id} project={project} />
						))
					}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MyProjects;
