"use client"
import Triangle from "../../public/Images/Triangle.svg"
import Send_Icon from "../../public/Images/Send_Icon.svg"
import React, { useState } from "react";
import { generate, stop } from "../pages/api/GPT/stream-response";

const ChatbotCard = ({ isOpen }) => {
    const [result, setResult] = useState("");
    const [inputValue, setInputValue] = useState('');
    const handleGenerate = async (domain, subdomain, formValues, result, setResult) => {
        await generate(domain, subdomain, formValues, result, setResult);
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (e) => {
        const obj ={
            query:inputValue
            
        }
        e.preventDefault();
        console.log(inputValue);
        
        handleGenerate("General","G",obj,result,setResult);
    }
    return (
        <div className={`${isOpen ? 'w-96 h-96 opacity-100' : 'w-0 h-0 opacity-0'}  bg-gradient-to-l from-emerald-200 to-emerald-100 rounded-3xl flex flex-col items-center pb-6 absolute bottom-20 -right-9 -z-10 transition-all duration-1000`}>
            <div className="text-teal-700 text-2xl font-normal font-['Nunito'] w-80 mt-8">Here is the top fintech startups of your institute </div>
            <div className="w-80 h-60 overflow-hidden mt-2">
                <div className="bg-white rounded-tl-3xl rounded-tr-3xl border-2 h-full overflow-hidden">
                    <div className="h-full overflow-auto ml-1">{result}</div>
                </div>
            </div>
            <form className="flex justify-around mt-3 w-80" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="rounded-lg w-60 h-11 pl-2"
                    value={inputValue}
                    onChange={handleInputChange}  
                />
                <button type="submit" className="rounded-full bg-white flex justify-center items-center p-3">
                    <Send_Icon />
                </button>
            </form>
            <Triangle className="absolute right-4 -bottom-[50px] "/>
        </div>
    );
}

export default ChatbotCard;