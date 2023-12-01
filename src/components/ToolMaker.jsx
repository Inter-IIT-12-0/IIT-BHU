import React from 'react';
import Slider from './Slider';

const ToolMaker = () => {
    return (
        <div className="tool-maker-container rounded-lg overflow-hidden flex flex-col">
            <div className="section-1  items-center justify-between p-20 border-b border-gray-300 rounded-xl m-8" style={{ "backgroundColor": "#E8E8E8" }}>
                <h1 class="text-Text-Black text-center font-Lato text-3xl font-bold leading-normal tracking-tight">
                    Create your very own Personalized AI tool with Trumio
                </h1>
                <div className="w-full h-[30vh] flex space-x-4 flex-1 flex mb-10 mt-8">

                    <div className="flex-1  p-4 rounded-md bg-white">
                        <div class="text-Text text-center font-Lato text-xl font-normal leading-normal tracking-wider opacity-50 mt-20">
                            +Add Domain
                        </div>

                    </div>
                    <img className='h-12 w-12 mt-20 rounded-full' src="https://trumio.ai/wp-content/uploads/2023/07/Real-World-Expereinces-student.png"></img>

                    {/* Second Card */}
                    <div className="flex-1 bg-white rounded-md  p-4">

                        <div class="text-Text text-center font-Lato text-xl font-normal leading-normal tracking-wider opacity-50 mt-20">
                            +Add AI tool
                        </div>

                    </div>

                </div>
                <div className='flex flex-col content '>
                    <button className=' rounded-full text-white bg-blue-500 w-72 p-2'>Generate</button>
                    <p class="text-Text-Black text-center font-Lato text-base font-normal leading-normal tracking-wide">
                        You have 3 attempts remaining. Visit Arcade to earn more
                    </p>

                </div>
            </div>

            {/* Section 2 */}
            




        </div>
    );
};

export default ToolMaker;
