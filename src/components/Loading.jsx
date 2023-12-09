"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Loading = () => {

    const dotStyle = {
        position: 'relative',
        width: '2rem',
        height: '2rem',
        margin: '0.8em',
        borderRadius: '50%',
    };

    const dotBeforeStyle = {
        position: 'absolute',
        content: '',
        width: '100%',
        height: '100%',
        background: 'inherit',
        borderRadius: 'inherit',
        animation: 'anime 2s ease-out infinite',
    };

    const keyframesStyle = `
    @keyframes anime {
      50%, 75% {
        transform: scale(2.5);
      }
      80%, 100% {
        opacity: 0;
      }
    }
  `;

    return (
        <div className="loading-screen flex flex-col w-full h-full justify-center items-center absolute top-0 left-0">
            <style>{keyframesStyle}</style>
            <div className="flex">
                <div className="dot" style={{ ...dotStyle, backgroundColor: '#0080ff' }}>
                    <div style={{ ...dotBeforeStyle, animationDelay: '0s' }}></div>
                </div>
                <div className="dot" style={{ ...dotStyle, backgroundColor: '#3399ff' }}>
                    <div style={{ ...dotBeforeStyle, animationDelay: '0.2s' }}></div>
                </div>
                <div className="dot" style={{ ...dotStyle, backgroundColor: '#66b2ff' }}>
                    <div style={{ ...dotBeforeStyle, animationDelay: '0.4s' }}></div>
                </div>
                <div className="dot" style={{ ...dotStyle, backgroundColor: '#99ccff' }}>
                    <div style={{ ...dotBeforeStyle, animationDelay: '0.6s' }}></div>
                </div>
                <div className="dot" style={{ ...dotStyle, backgroundColor: '#cce5ff' }}>
                    <div style={{ ...dotBeforeStyle, animationDelay: '0.8s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;