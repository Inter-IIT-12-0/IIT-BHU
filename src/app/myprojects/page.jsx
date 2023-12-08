"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import StudentSidebar from "../../components/StudentSidebar";
import Navbar from "../../components/Navbar";
// import Projects from "../../models/FakeData/Project.json";
import MyProjectCard from "../../components/MyProjectCard.jsx";
import MyBidsCard from "../../components/MyBidsCard.jsx";
import axios from "axios";
import Loading from "../../components/Loading.jsx";
import { useSession } from "next-auth/react";

const MyProjects = () => {

	const [Projects, setProjects] = useState([]);
	const [selectedOption, setSelectedOption] = useState('Current');
	const [loading, setLoading] = useState(false)
	const { data: session } = useSession()

	useEffect(() => {
		setLoading(true);
		axios.get(`/api/myprojects`).then(res => {
			setProjects(res.data)
			setLoading(false)
		}).catch(console.error)
	}, [])

	return (

		<main className='w-[100vw]'>
			<div className='flex flex-col w-full h-full'>
				<Navbar />
				<div className='flex w-full h-full'>
					<StudentSidebar page={"myprojects"} />
					{
						loading ? <Loading /> :
							session && session.user.role === "Client" ?
								<div className='w-full h-[90vh] flex flex-col overflow-scroll overflow-y-auto overflow-x-hidden'>
									<div>
										<div className='flex ml-6 mt-3'>
											<button className={`flex justify-around items-center rounded-2xl ${selectedOption === 'Current' ? 'border border-sky-700 bg-sky-100' : 'border border-neutral-400'} px-3 py-1  mr-5`} onClick={() => setSelectedOption('Current')}>
												<div className={`${selectedOption === 'Current' ? 'bg-sky-700' : 'border-2 border-gray-300 '} rounded-full w-4 h-4 mx-2`}></div>
												<span className={`${selectedOption === 'Current' ? 'text-sky-700' : 'text-neutral-600'}`}> Current </span>
											</button>
											<button className={`flex justify-around items-center rounded-2xl ${selectedOption === 'Completed' ? 'border border-sky-700 bg-sky-100' : 'border border-neutral-400'} px-3 py-1 mr-5`} onClick={() => setSelectedOption('Completed')}>
												<div className={`${selectedOption === 'Completed' ? 'bg-sky-700' : 'border-2 border-gray-300 '} rounded-full w-4 h-4 mx-2`}></div>
												<span className={`${selectedOption === 'Completed' ? 'text-sky-700' : 'text-neutral-600'}`}> Completed </span>
											</button>
										</div>
									</div>
									{
										selectedOption === 'Current' && <h2 className="font-semibold text-xl ml-8 mt-8"> In Bidding </h2>
									}
									<div className='pl-8 flex w-full'>
										{
											Projects.filter(project => (selectedOption === "Completed" ? project.status === "Completed" : true) && !!!project.assignedTeam).map(project => {
												return <MyBidsCard key={project._id} project={project} />
											})
										}
									</div>
									{
										selectedOption === 'Current' &&
										<>
											<h2 className="font-semibold text-xl ml-8 mt-8"> Live Projects </h2>
											<div className=' pl-8 flex'>
												{
													Projects.filter(project => !!project.assignedTeam).map(project => {
														return <MyProjectCard key={project._id} project={project} />
													})
												}
											</div>
										</>
									}
								</div> :
								<div className='w-full h-[90vh] flex flex-wrap px-5'>
									{
										Projects.map(project => {
											return <MyProjectCard key={project._id} project={project} />
										})
									}
								</div>
					}
				</div>
			</div>
		</main>
	);
};

export default MyProjects;
