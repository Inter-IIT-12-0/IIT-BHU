"use client";

import React , { Dispatch, SetStateAction, useEffect } from 'react';

const Bot = ({isOpen, setIsOpen}) => {
  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  }
  return (
    <div className="rounded-full w-12 h-12 overflow-hidden" onClick={handleClick}>
      <video id="globeVideo" src="/Videos/globe.mp4" autoPlay loop muted playsInline />
    </div>
  );
};

export default Bot;
