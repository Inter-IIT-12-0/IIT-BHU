"use client";

import { useEffect } from 'react';

const Bot = () => {

  return (
    <div className="rounded-full" style={{ overflow: "hidden", width: "3rem", height: "3rem" }}>
      <video id="globeVideo" src="/globe.mp4" autoPlay loop muted playsInline />
    </div>
  );
};

export default Bot;
