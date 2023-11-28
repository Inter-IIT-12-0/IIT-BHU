"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import StudentSidebar from "../../../components/StudentSidebar";
import Navbar from "../../../components/Navbar";
// import Projects from "../../../models/FakeData/Project.json";
import ProjectCard from "../../components/ProjectCard.jsx";

const MyProjects = () => {
	const Projects = [
		{
			"id": 1,
			"title": "Project 1",
			"statement": "This is a sample project statement.",
			"logo": "https://i.gadgets360cdn.com/products/large/vivo-t2-5g-db-709x800-1681200173.jpg",
			"startDate": "2023-12-01T00:00:00.000Z",
			"endDate": "2023-12-05T00:00:00.000Z",
			"clientName": "Google",
			"milestones": [
				{
					"dueDate": "2023-12-01T00:00:00.000Z",
					"heading": "Milestone 1",
					"submissionLink": "https://sample-submission-link.com",
					"feedbackLink": "https://sample-feedback-link.com",
					"subMilestones": [
						{
							"heading": "SubMilestone 1",
							"isCompleted": false
						},
						{
							"heading": "SubMilestone 2",
							"isCompleted": true
						}
					],
					"isCompleted": false,
					"status": "Not Started"
				},
				{
					"dueDate": "2023-12-15T00:00:00.000Z",
					"heading": "Milestone 2",
					"submissionLink": "https://sample-submission-link.com",
					"feedbackLink": "https://sample-feedback-link.com",
					"subMilestones": [
						{
							"heading": "SubMilestone 1",
							"isCompleted": true
						},
						{
							"heading": "SubMilestone 2",
							"isCompleted": true
						}
					],
					"isCompleted": true,
					"status": "Completed"
				}
			],
			"userAgreement": {},
			"assignedTeam": "60a72b7c56f18a53bce5a0c1"
		},
		{
			"id": 2,
			"title": "Project2",
			"statement": "This is a sample project statement.",
			"logo": "https://i.gadgets360cdn.com/products/large/vivo-t2-5g-db-709x800-1681200173.jpg",
			"startDate": "2023-12-01T00:00:00.000Z",
			"endDate": "2023-12-05T00:00:00.000Z",
			"clientName": "Facebook",
			"milestones": [
				{
					"dueDate": "2023-12-01T00:00:00.000Z",
					"heading": "Milestone 1",
					"submissionLink": "https://sample-submission-link.com",
					"feedbackLink": "https://sample-feedback-link.com",
					"subMilestones": [
						{
							"heading": "SubMilestone 1",
							"isCompleted": false
						},
						{
							"heading": "SubMilestone 2",
							"isCompleted": true
						}
					],
					"isCompleted": false,
					"status": "Not Started"
				}
			],
			"userAgreement": {},
			"assignedTeam": "60a72b7c56f18a53bce5a0c1"
		}
	]

	const [selectedOption, setSelectedOption] = useState('option1');

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (

		<div className=" bg-opacity-30">
			{/* <Sidebar /> */}
			<StudentSidebar />
			<Navbar />
			<div className="relative left-96 top-20 flex flex-col">
				<div className=" bg-gray-100 flex justify-end items-end w-3/5">
					<div className="container mx-auto bg-indigo-500 bg-opacity-30 backdrop-blur-lg rounded-lg p-6">
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
							<ProjectCard key={project.id} project={project} />
						))
					}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MyProjects;
