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
		axios.get(`/api/myprojects`).then(res => console.log(res.data)).catch(console.error)
	}, [])

	return (

		<main className='w-[100vw]'>
			<div className='flex flex-col w-full h-full'>
				<Navbar />
				<div className='flex w-full h-full'>
					<StudentSidebar page={"myprojects"}/>
					<div className='w-full max-h-[90vh] overflow-scroll overflow-y-auto overflow-x-hidden flex flex-col'>
						<h2 className="font-semibold text-xl pl-20 my-3"> In Bidding </h2>
						<div className='h-full p-8 flex'>
							{
								Projects.filter(project => !!project.assignedTeam).map(project => {
									return <MyProjectCard key={project._id} project={project} />
								})
							}
						</div>
						<h2 className="font-semibold text-xl pl-20 my-3"> Live Projects </h2>
						<div className='h-full p-8 flex'>
							{
								Projects.filter(project => !!!project.assignedTeam).map(project => {
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
