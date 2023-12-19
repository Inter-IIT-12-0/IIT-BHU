import React from 'react';

const AppCard = ({ project }) => {

    return (
        <>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-900 uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            App
                        </th>
                        <th scope="col" className="px-6 py-3">
                            LINK TO FILES
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CONNECTED ON
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CONNECTED BY
                        </th>
                    </tr>
                </thead>
                <tbody className='relative overflow-x-auto'>
                    {project.connectedApps.map((connectedApp, appIndex) => (
                        // <div className="relative overflow-x-auto">


                        <tr className="bg-white ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                <img className='h-16 w-16' src={connectedApp.tool}></img>
                            </th>
                            <td className="px-6 py-4"><a href={connectedApp.link} className='text-blue-500 cursor-pointer'>Click here</a></td>
                            <td className="px-6 py-4">{(new Date(connectedApp.connectedOn)).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>

    );
};

export default AppCard;
