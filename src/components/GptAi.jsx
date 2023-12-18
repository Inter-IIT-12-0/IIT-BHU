// /app/gpt/page.tsx
"use client"
import { useState } from "react";
import { generate, stop } from "../pages/api/GPT/stream-response";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Subdomain = ({ domain, subdomain }) => {
    const [formValues, setFormValues] = useState({});
    const [controller, setController] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [result, setResult] = useState("")

    const handleGenerate = async (domain, subdomain, formValues, result, setResult) => {
        await generate(domain, subdomain, formValues, result, setResult);
    };
    //! This is a generative AI function which responds to the user's request considering its subdomain (DEMO)

    const handleStop = () => {
        stop(controller, setResult);
    };

    const handleInputChange = (name, value) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        handleGenerate(domain, subdomain.name, formValues, result, setResult);
    };

    return (
        <div className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-3">{subdomain.name}</h3>
            {
                isSubmitted ?
                    (result && (
                        <div className="mt-4">
                            <div className="p-4 rounded bg-gray-100">
                                <pre className="whitespace-pre-line">
                                    <code>
                                        {result}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    ))
                    :
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {subdomain.formFields.map((field) => (
                            <label key={field.name} className="block mr-4 text-sm text-neutral-600">
                                {field.label}:
                                <input
                                    type={field.type}
                                    value={formValues[field.name] || ''}
                                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                                    className="p-2 w-11/12 outline-none border-2 border-gray-400 ml-4 rounded-lg mt-1"
                                    required="true"
                                />
                            </label>
                        ))}
                        <div className="flex justify-center items-center">
                            <button type="submit" className="bg-sky-600 text-white px-4 py-2 hover:bg-sky-700 transition-all duration-500 w-1/3 rounded-xl">
                                Generate
                            </button>
                        </div>
                    </form>
            }
        </div>
    );
};

const GptAi = ({ setAiOpen }) => {
    const [result, setResult] = useState("");
    const [selectedDomain, setSelectedDomain] = useState('select');
    const [selectedSubdomain, setSelectedSubdomain] = useState(null);
    const [submittedData, setSubmittedData] = useState(null);
    const { data: session } = useSession()

    const domains = [ //! Contains the domains and subdomains offered by Generative AI
        /* case "Write Technical Specifications":
        return `Provide detailed technical specifications based on the given requirements (${input.businessRequirements}), systems involved (${input.systemsInvolved}), and best practices (${input.bestPractices}).`;
    
        case "Bug Report":
          return `Describe the bug you encountered. Include any context (${input.context}) or steps to reproduce the issue if available.`; */
        {
            name: 'Engineering',
            subdomains: [
                {
                    name: 'Generate Code Snippet',
                    formFields: [
                        { name: 'codeTask', label: 'Code task', type: 'text' },
                        { name: 'codeLanguage', label: 'Code language', type: 'text' },
                    ],
                },
                {
                    name: 'Bug Report',
                    formFields: [
                        { name: 'context', label: 'Your Context', type: 'text' },

                    ],
                },
                {
                    name: 'Write Technical specifications',
                    formFields: [
                        { name: 'businessRequirements', label: 'Business requirements', type: 'text' },
                        { name: 'systemsInvolved', label: 'Systems involved', type: 'text' },
                        { name: 'bestPractices', label: 'Best practices', type: 'text' },
                    ],
                },
                {
                    name: 'Penetration Test Report',
                    formFields: [
                        { name: 'testScope', label: 'Test scope', type: 'text' },
                        { name: 'systemArchitecture', label: 'System architecture', type: 'text' },
                        { name: 'testResults', label: 'Test results', type: 'text' },
                    ],
                },
                {
                    name: 'Help Documentation',
                    formFields: [
                        { name: 'feature', label: 'Feature', type: 'text' },
                        { name: 'product', label: 'Product', type: 'text' },
                    ],
                },
                {
                    name: 'Test Plan',
                    formFields: [
                        { name: 'businessRequirements', label: 'Business requirements', type: 'text' },
                        { name: 'systemsInvolved', label: 'Systems involved', type: 'text' },
                        { name: 'technicalDesign', label: 'Technical design', type: 'text' },
                        { name: 'outputCategory', label: 'Output category', type: 'text' },
                        { name: 'testingType', label: 'Testing type', type: 'text' },
                    ],
                }
            ],
        },
        {
            name: 'Research Documentation',
            subdomains: [
                {
                    name: 'Summarizes Text',
                    formFields: [
                        { name: 'text', label: 'Text', type: 'text' },
                    ],
                },
                {
                    name: 'Analyses and Finds Resources',
                    formFields: [
                        { name: 'useCase', label: 'Use case', type: 'text' },
                    ],
                },
            ],
        },
        // Add more domains if needed
    ];
    const handleDomainSelect = (selectedDomain) => {
        setSelectedDomain(selectedDomain);
        setSelectedSubdomain(null);
        setSubmittedData(null);
    };

    const handleSubdomainSelect = (subdomain) => {
        setSelectedSubdomain(subdomain);
        setSubmittedData(null);
    };

    function processName(inputName) {
        const parts = inputName.split('-');  // Split the name into parts using hyphens
        const processedParts = [];
    
        for (const part of parts) {
            if (part.length >= 3) {
                processedParts.push(part.slice(0, 3));  // Take the first three letters of each part
            } else {
                processedParts.push(part);  // If the part is less than 3 characters, keep it as it is
            }
        }
    
        const processedName = processedParts.join('-');  // Join the processed parts back into a name
        return processedName;
    }

    return (
        <main className="overflow-hidden absolute right-0 top-0 z-50 w-[100vw] h-[100vh] bg-gray-800 bg-opacity-50 flex justify-center">
            <div className="w-8 h-8 flex justify-center items-center absolute top-10 right-20 cursor-pointer bg-black rounded-full text-white" onClick={() => setAiOpen(false)}> X </div>
            <div className="mx-auto relative top-24 w-[600px]">
                <div className="w-full h-12 bg-gray-100 rounded-xl grid grid-cols-4" >
                    <div className="flex justify-center items-center">
                        <button className='bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-1 text-white rounded-2xl cursor-auto'> AI </button>
                    </div>
                    {
                        session && session.user.aiTools.map((tool, index) => (
                            <div className="flex justify-center items-center">
                                <Link href={`/customTool/${tool.name}`} target="_blank" className="flex items-center justify-center" >
                                    <button className="px-3 py-1 border border-sky-700 text-sky-700 rounded-xl"> {processName(tool.name)} </button>
                                </Link>
                            </div>
                        ))
                    }
                    {
                        session && session.user.aiTools.length < 3 &&
                        <Link href="/toolsTableMarketplace" className="flex items-center justify-center">
                            <div className="bg-sky-600 hover:bg-sky-700 transition-all duration-500 text-white rounded-md px-2 py-1 cursor-pointer">Add tool</div>
                        </Link>
                    }
                </div>
                <div className="bg-gray-100 w-full max-h-[400px] my-8 rounded-xl overflow-scroll overflow-y-auto overflow-x-hidden px-6 flex flex-col">
                    {selectedSubdomain ?
                        (
                            <div className="p-4 relative">
                                <div className="w-8 h-8 flex justify-center items-center absolute top-3 right-3 cursor-pointer bg-black rounded-full text-white" onClick={() => setSelectedSubdomain(null)}> X </div>
                                <Subdomain
                                    domain={selectedDomain}
                                    subdomain={selectedSubdomain}
                                />
                            </div>
                        ) :
                        <>
                            <div>
                                <select
                                    value={selectedDomain}
                                    onChange={(e) => handleDomainSelect(e.target.value)}
                                    className="bg-indigo-50 border-gray-300 border-2 p-1 rounded-md my-2 outline-none"
                                >
                                    <option value="select" className="text-neutral-300" >Select a domain</option>
                                    {domains.map((domain) => (
                                        <option key={domain.name} value={domain.name}>
                                            {domain.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {selectedDomain !== 'select' && (
                                <div className="mt-4 grid grid-cols-3">
                                    {domains
                                        .find((domain) => domain.name === selectedDomain)
                                        .subdomains.map((subdomain) => (
                                            <button
                                                key={subdomain.name}
                                                onClick={() => handleSubdomainSelect(subdomain)}
                                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
                                            >
                                                {subdomain.name}
                                            </button>
                                        ))}
                                </div>
                            )}
                        </>
                    }
                </div>
            </div>
        </main>
    );
};

export default GptAi;
