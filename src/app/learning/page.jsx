"use client"
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";
import Typewriter from 'typewriter-effect'
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-cpp";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Learning = () => {

    useEffect(() => {
        Prism.highlightAll();
    })

    const [code, setCode] = useState(`function greet() {
        console.log('Hello, world!');
      }`);

    const [language, setLanguage] = useState('javascript');
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

    console.log("the value of code is:", code);

    return (
        <div>
            <Navbar />
            <div className="flex flex-row">
                <StudentSidebar />
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
                                        Write a concise program in any programming language to display "Hello, World!" on the screen. Ensure simplicity, readability, and correctness. Use a minimal number of lines to achieve the output`],
                                        cursor: '',
                                    }}
                                /></div>)}
                        {response && <>
                            <div className="p-3 rounded-3xl border border-gray-400 shadow-xl mt-5 ml-5 font-semibold">
                                <Typewriter options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 30,
                                    deleteSpeed: 10000000000000000000000000000,
                                    strings: ['Well Done!! your first task is completed its time for your second task. Here it is...'],
                                    cursor: ''
                                }}
                                    onInit={() => {
                                        setTimeout(() => {
                                            setSecondTypewrite(true);
                                        }, 2000);
                                    }} />

                            </div>
                            {secondTypewriter &&
                                <div className="p-3 rounded-3xl border border-gray-400 shadow-xl mt-5 ml-5 font-semibold">
                                    <Typewriter options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        deleteSpeed: 10000000000000000000000000000,
                                        strings: [`Write a concise program in any programming language to generate the Fibonacci sequence. Ensure it calculates and displays the first few terms of the sequence accurately. Optimize your code for efficiency`],
                                        cursor: ''
                                    }} />
                                </div>
                            }
                            {secondResponse &&
                                <div className="p-3 rounded-3xl border border-gray-400 shadow-xl mt-5 ml-5 font-semibold">
                                    <Typewriter options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 30,
                                        deleteSpeed: 10000000000000000000000000000,
                                        strings: ['Excellent work!! Your tasks are completed for today. You did a great job, keep it up. Goodbye! see you tomorrow'],
                                        cursor: ''
                                    }} />
                                </div>
                            }
                        </>
                        }
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

                        <div><button type="submit" className="text-white mt-2 py-1 px-3 rounded-full bg-black">Submit</button></div>
                    </div>
                    <div className="bg-gray-800 w-[30%] h-full ml-3 ax-h-[90vh] overflow-y-scroll rounded-2xl p-3">
                        <div className="bg-black rounded-2xl p-2 h-[87vh]">
                            <div className="w-[100%] flex justify-center">
                                <h1 className="text-md text-white font-semibold">Responses</h1>
                            </div>
                            <div className="p-3 rounded-3xl border border-gray-400 shadow-xl mt-5 ml-2 font-semibold text-white">
                                <Typewriter options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 30,
                                    deleteSpeed: 10000000000000000000000000000,

                                    strings: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ullam?'],
                                    cursor: ''
                                }} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learning;