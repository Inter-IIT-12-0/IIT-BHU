import React from "react";
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";
import SidebarUpskilling from "../../components/SidebarUpskilling";

const Challenges = () => {

    const obj = [];

    const challengeData = [
        {
            name: "CodeMaster Challenge",
            desc: "Solve complex coding problems and showcase your programming skills. Challenge yourself with algorithmic puzzles and coding exercises."
        },
        {
            name: "Product Innovation Challenge",
            desc: "Bring your creative ideas to life! Develop innovative products, improve existing solutions, and present your unique approach to solving real-world problems."
        },
        {
            name: "UI/UX Design Sprint",
            desc: "Immerse yourself in the world of user interface and user experience design. Create stunning prototypes, design user-friendly interfaces, and enhance the overall user experience."
        },
        {
            name: "Data Science Hackathon",
            desc: "Dive into the realm of data science! Analyze datasets, build predictive models, and derive meaningful insights. Participate in challenges that test your data analysis and machine learning skills."
        },
        {
            name: "Cybersecurity Capture The Flag",
            desc: "Embark on a cybersecurity adventure! Test your hacking and defense skills in a simulated environment. Solve challenges to capture flags and secure virtual systems."
        },
        {
            name: "Blockchain Challenge",
            desc: "Explore the world of blockchain technology. Design and implement decentralized solutions, develop smart contracts, and tackle challenges related to blockchain development."
        },
        {
            name: "Mobile App Development Sprint",
            desc: "Create cutting-edge mobile applications! Develop feature-rich apps, implement intuitive user interfaces, and optimize performance. Join the challenge to showcase your mobile app development expertise."
        },
        {
            name: "Game Development Quest",
            desc: "Embark on a game development journey! Design, code, and optimize captivating games. Test your game development skills by participating in challenges that span various gaming genres."
        },
        {
            name: "Data Visualization Showcase",
            desc: "Visualize data in innovative ways! Create compelling data visualizations, explore storytelling through data, and present insights that resonate. Join the challenge to master the art of data visualization."
        }
    ];

    for (let i = 0; i < 9; i++) {
        const fakeObject = {
            stickerImg: "/Images/newRectangle.png",
            img: "/Images/Ellipse_2.svg",
            name1: challengeData[i].name,
            desc: challengeData[i].desc
        };

        obj.push(fakeObject);
    }

    console.log(obj);


    const arrayOfObjs = [
        {
            name: "CodeMaster Challenge",
            desc: "Solve complex coding problems and showcase your programming skills. Challenge yourself with algorithmic puzzles and coding exercises.",
            stickerImg: "/Images/newRectangle.png",
            img: "/Images/Ellipse_2.svg"
        },
        {
            name: "Product Innovation Challenge",
            desc: "Bring your creative ideas to life! Develop innovative products, improve existing solutions, and present your unique approach to solving real-world problems.",
            stickerImg: "/Images/newRectangle.png",
            img: "/Images/Ellipse_2.svg"
        },
        {
            name: "UI/UX Design Sprint",
            desc: "Immerse yourself in the world of user interface and user experience design. Create stunning prototypes, design user-friendly interfaces, and enhance the overall user experience.",
            stickerImg: "/Images/newRectangle.png",
            img: "/Images/Ellipse_2.svg"
        }
    ]
    const otherArray = Array(3).fill(obj);

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <div className="flex flex-row">
                <SidebarUpskilling page={"challenges"} />
                <div className="flex flex-col p-5 max-h-[90vh] overflow-y-auto overflow-x-hidden bg-blue-100 ">
                    <h1 className="mb-5 text-3xl font-semibold">Challenges</h1>
                    <div className="flex flex-row">
                        {arrayOfObjs.map((ele) => {
                            return <div className='flex flex-col h-62 bg-white shadow-lg rounded-3xl p-8 justify-center w-[25%] mr-5'>
                                <img className="h-10 w-10" src={ele.stickerImg} alt="" />
                                <h1 className='text-md font-semibold my-3'>{ele.name1}</h1>
                                <h1 className='text-sm my-3'>{ele.desc}</h1>
                                <div className='flex flex-row my-4'>
                                    <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                    <img className='rounded-full h-10 w-10' src='https://www.text-image.com/samples/per_normal_face.jpg' alt="/Images/Ellipse_2.svg" />
                                    <img className='rounded-full h-10' src='https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg' alt="/Images/Ellipse_2.svg" />
                                    <img className='rounded-full h-10' src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg' alt="/Images/Ellipse_2.svg" />
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="flex flex-row my-6 ml-8">
                        <h1 className="text text-2xl font-semibold mr-10">All</h1>
                        <h1 className="text text-2xl font-semibold mr-10">Domain</h1>
                        <h1 className="text text-2xl font-semibold mr-10">Research</h1>
                        <h1 className="text text-2xl font-semibold mr-10">Design</h1>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3 w-[100%]">
                        {
                            obj.map((ele) => {
                                return <div className='flex flex-col bg-white shadow-lg rounded-3xl p-8 justify-center'>
                                    <div className="flex justify-between">
                                        <div>
                                            <img className="h-10 w-10" src={ele.stickerImg} alt="" />
                                            <h1 className='text-md font-semibold my-3'>{ele.name1}</h1>
                                        </div>
                                        <div className="flex flex-row">
                                            <img src="/Images/Group_stars.svg" alt="" />
                                        </div>
                                    </div>
                                    <h1 className='text-sm my-3'>{ele.desc}</h1>
                                    <div className='flex flex-row my-4'>
                                        <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                        <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                        <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                        <img className='rounded-full h-10' src={ele.img} alt="/Images/Ellipse_2.svg" />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challenges