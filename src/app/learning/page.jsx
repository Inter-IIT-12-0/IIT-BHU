"use client"
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";
import Typewriter from 'typewriter-effect'
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import "prismjs/components/prism-javascript";
import codecheck from "../../pages/api/GPT/codecheck";
import SidebarUpskilling from "../../components/SidebarUpskilling";

const Learning = () => {

    useEffect(() => {
        Prism.highlightAll();
    })

    const [code, setCode] = useState(`cout<<"Your Text Input";`);

    const [language, setLanguage] = useState('cpp');
    const [Final, setChecker] = useState("");
    const [forceRender, setForceRender] = useState(false);
    const handleCodeChange = (event) => {
        setCode(event.target.value);

        // Manually highlight the code in the textarea
        const textarea = event.target;
        setForceRender(!forceRender);
        Prism.highlightElement(textarea, false, () => {
            // Do any additional post-processing if needed
        });
    };

    const [response, setResponse] = useState(false);
    const [firstTypewriterFinished, setFirstTypewriterFinished] = useState(false);
    const [secondTypewriter, setSecondTypewrite] = useState(false);
    const [secondResponse, setSecondResponse] = useState(false);
    async function fetchData() {
        try {

            const response = await codecheck(code);
            const data = await response;
            if (data) {
                setChecker("Excellent work!! Your tasks are completed for today. You did a great job, keep it up. Goodbye! see you tomorrow");

            }
            else {
                setChecker("Try again");
            }
            setResponse(true);

        } catch (error) {
            console.log(error)
            throw error;
        }
    }




    return (
        <div>
            <Navbar />
            <div className="flex flex-row">
                <SidebarUpskilling page="arcade" />
                <div className="flex flex-row w-[100%] overflow-y-hidden p-1">
                    <div className="flex flex-col w-[35%] max-h-[90vh] overflow-y-scroll rounded-3xl pr-1">
                        <div className="flex flex-row">
                            <img src="https://i.pinimg.com/originals/79/04/42/7904424933cc535b666f2de669973530.gif" className='h-32 pr-0' alt="" />
                            <div className="rounded-2xl shadow-xl border border-gray-500 mt-10 p-2 font-semibold h-20 pb-4">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        deleteSpeed: 10000000000000000000000000000,
                                        strings: ['Hello! I hope you are doing well. Your today\'s tasks is'],
                                        cursor: '',
                                    }}
                                    // Callback when initialization is complete
                                    onInit={() => {
                                        // Set a timeout to mark the first typewriter as finished after it completes
                                        setTimeout(() => {
                                            setFirstTypewriterFinished(true);
                                        }, 2000);
                                    }}
                                />
                            </div>
                            <hr className="my-1" />
                        </div>

                        {firstTypewriterFinished && (
                            <div className="p-3 rounded-3xl border border-gray-400 shadow-xl mt-5 ml-5 font-semibold">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        deleteSpeed: 10000000000000000000000000000,
                                        strings: [`
                                        Write a concise program in C++ programming language to display "Hello, World" on the screen. Ensure simplicity, readability, and correctness. Use a minimal number of lines to achieve the output`],
                                        cursor: '',
                                    }}
                                /></div>)}
                    </div>
                    <div className="bg-gray-600 w-[35%] h-full p-3 ml-3 ax-h-[90vh] overflow-y-scroll rounded-3xl mt-2">
                        {/* <SyntaxHighlighter key={language} language={language} style={docco}>
                            {code}
                        </SyntaxHighlighter> */}
                        <textarea
                            value={code}
                            className="w-[100%] h-[93%] rounded-2xl p-4 font-mono whitespace-pre-wrap bg-black text-white"
                            placeholder="Enter your code here..."
                            onChange={handleCodeChange}
                        ></textarea>

                        <div><button type="submit" className="text-white mb-4 py-1 px-3 rounded-full bg-black" onClick={() => fetchData()}>Submit</button></div>
                    </div>
                    <div className="bg-gray-800 w-[30%] h-full ml-3 ax-h-[90vh] overflow-y-scroll rounded-2xl p-3">
                        <div className="bg-black rounded-2xl p-2 h-[87vh]">
                            <div className="w-[100%] flex justify-center">
                                <h1 className="text-md text-white font-semibold">Responses</h1>
                            </div>
                            <div className="p-3 rounded-3xl border border-gray-400 shadow-xl mt-5 ml-2 font-semibold text-white">
                                {response &&
                                    <Typewriter options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        deleteSpeed: 10000000000000000000000000000,

                                        strings: [Final],
                                        cursor: ''
                                    }} />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learning;
