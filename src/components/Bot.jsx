"use client";

import React, { useEffect } from 'react';

const Bot = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    window
  }, [])

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  }
  return (
      <div className="rounded-full w-12 h-12 overflow-hidden z-50" onClick={handleClick}>
        <video id="globeVideo" src="/Videos/globe.mp4" autoPlay loop muted playsInline />
      </div>
  );
};

export default Bot;
