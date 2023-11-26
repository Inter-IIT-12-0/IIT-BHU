"use client"
import Image from "next/image";
import Trumio_logo from "../Images/Trumio_Logo.svg";
import Trumio_text from "../Images/Trumio_Text.svg";
import Projects_Icon from "../Images/Projects_icon.svg"
import My_Learnings_Icon from "../Images/My_Learnings_Icon.svg"
import Discussion_Icon from "../Images/Discussion_Icon.svg"
import Mentorship_Icon from "../Images/Mentorship_Icon.svg"
import Skill_Test_Icon from "../Images/Skill_Test_Icon.svg"
import Settings_Icon from "../Images/Settings_Icon.svg"


export default function Sidebar() {

    return (
        // <div className="w-72 h-[100vh] flex flex-col bg-slate-100">
        //     <div className="flex justify-center mt-3">
        //         <Image src={Trumio_logo} alt="Trumio" />
        //         <div>
        //             <Image src={Trumio_text} alt="Trumio" />
        //             <div className="w-28 h-2 bg-gradient-to-l from-sky-800 to-white rounded-sm flex flex-row-reverse font-bold font-['Montserrat'] text-white text-[0.3rem] pr-1 items-center" >
        //                 UNIK
        //             </div>
        //         </div>
        //     </div>
        //     <div>
        //         <svg xmlns={Projects_Icon}/>
        //         Projects
        //     </div>
        //     <div></div>
        //     <div></div>
        //     <div></div>
        //     <div></div>
        // </div>
        <div className="w-60 h-full relative bg-white shadow-2xl pb-3">
            {/* <div className="w-6 h-6 left-[16px] top-[976px] absolute" /> */}
            <div className="left-[16px] top-[25px] absolute justify-start items-center gap-4 inline-flex">
                <Trumio_logo />
                <div>
                    <Trumio_text />
                    <div className="w-28 h-2 bg-gradient-to-l from-[#00509f] to-white rounded-[0.1rem] flex flex-row-reverse font-bold font-['Montserrat'] text-white text-[0.3rem] pr-1 items-center" >
                        UNIK
                    </div>
                </div>
            </div>
            <div className="left-8 top-[121px] absolute justify-start items-center gap-8 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                    <Projects_Icon />
                </div>
                <div className="text-black text-base font-normal font-sans">Projects</div>
            </div>
            <div className="left-8 top-[176px] absolute justify-start items-center gap-8 inline-flex hover-background">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <My_Learnings_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-normal font-sans">My Learnings</div>
            </div>
            <div className="left-8 top-[232px] absolute justify-start items-center gap-8 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Discussion_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-normal font-sans">Discussion</div>
            </div>
            <div className="left-8 top-[288px] absolute justify-start items-center gap-8 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Mentorship_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-normal font-sans">Mentorship</div>
            </div>
            <div className="left-8 top-[344px] absolute justify-start items-center gap-8 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Skill_Test_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-normal font-sans">Skill Test</div>
            </div>
            <div className="left-8 top-[978px] absolute text-black text-base font-normal font-sans justify-start items-center gap-8 inline-flex pb-3">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <Settings_Icon />
                    </div>
                </div>
                <div className="text-black text-base font-normal font-sans">Settings</div>
            </div>
            <div className="w-80 h-px left-0 top-[952px] absolute border border-stone-300"></div>
        </div>
    );
}
