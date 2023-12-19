import React from "react";
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";
import SidebarUpskilling from "../../components/SidebarUpskilling";

const Mentorship = () => {
    const onj = [
        {
          name: "Shri Shamendra",
          occupation: "UX Leader & Career Coach at Adobe",
          session: 26,
          experience: 4,
          reviews: 15,
          avatarUrl: "https://www.text-image.com/samples/per_normal_face.jpg"
        },
        {
          name: "John Doe",
          occupation: "Software Engineer",
          session: 20,
          experience: 3,
          reviews: 12,
          avatarUrl: 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg'
        },
        {
          name: "Alice Johnson",
          occupation: "Data Scientist",
          session: 30,
          experience: 5,
          reviews: 18,
          avatarUrl: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg'
        },
        {
          name: "Bob Smith",
          occupation: "Product Manager",
          session: 22,
          experience: 4,
          reviews: 14,
          avatarUrl: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
          name: "Elena Rodriguez",
          occupation: "Graphic Designer",
          session: 18,
          experience: 2,
          reviews: 10,
          avatarUrl: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'
        },
        {
          name: "Alex Turner",
          occupation: "Marketing Specialist",
          session: 28,
          experience: 6,
          reviews: 20,
          avatarUrl: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png'
        },
        {
          name: "Grace Lee",
          occupation: "Financial Analyst",
          session: 25,
          experience: 4,
          reviews: 16,
          avatarUrl: 'https://i.pinimg.com/originals/79/f9/56/79f956fa2ec7453cc9b02f85b7b6e40a.jpg'
        },
        {
          name: "Daniel Brown",
          occupation: "HR Manager",
          session: 24,
          experience: 3,
          reviews: 13,
          avatarUrl: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          name: "Sophie White",
          occupation: "UI Designer",
          session: 21,
          experience: 5,
          reviews: 17,
          avatarUrl: 'https://sguru.org/wp-content/uploads/2017/04/girl-profile-picture-for-facebook-1-1.jpg'
        }
      ];

    return (
        <div>
            <Navbar />
            <div className="flex flex-row">
                <SidebarUpskilling page="mentorship" />
                <div className="flex flex-col w-[100%] p-8 max-h-[90vh] overflow-scroll overflow-y-auto overflow-x-hidden">
                    <div className="flex flex-col w-[100%]">
                        <div className="relative w-[40%]">
                            <div className="absolute inset-y-0 top-2 flex pl-3 pointer-events-none">
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
                                id="simple-search"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            </input>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6">
                        <div className="py-2 px-6 rounded-xl shadow-lg mr-4 bg-blue-300">All</div>
                        <div className="py-2 px-6 rounded-xl shadow-lg mr-4 bg-white">Recommended</div>
                    </div>
                    <div className="grid xl:grid-cols-3 grid-cols-2 relative">
                        {onj.map((ele) => {
                            return <div className="bg-white relative shadow-xl my-6 mr-6">
                                <div className="relative z-10">
                                    <div className="relative">
                                        <img src="/Images/Rectangle2.png" alt="" className="w-full h-auto relative" />
                                        <div className="absolute top-2 left-0 right-0 flex flex-col justify-end p-4">
                                            <div className="flex justify-between relative">
                                                <div className="text-black bg-slate-100 p-1 rounded">Top Rated</div>
                                                <img src="/Images/Group_stars.svg" alt="" />
                                                <img
                                                    className="absolute right-3 2xl:top-16 xl:top-12 top-14 z-20 border border-red-400 w-24 h-24 rounded-full"
                                                    src={ele.avatarUrl}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-6 mt-10">
                                        <div className="flex flex-col rounded ">
                                            <h1 htmlFor="">{ele.name}</h1>
                                            <h1 className="w-full h-16 rounded">{ele.occupation}</h1>

                                        </div>
                                        <hr className="my-4 w-full" />
                                        <div className="flex justify-between right bg-slate-200 rounded-xl py-2 px-10 mb-3">
                                            <h1 className="text-sm font-semibold flex flex-wrap">Sessions {ele.session}</h1>
                                            <h1 className="text-sm font-semibold flex flex-wrap">Experience {ele.experience} years</h1>
                                            <h1 className="text-sm font-semibold flex flex-wrap">Reviews {ele.reviews}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentorship;