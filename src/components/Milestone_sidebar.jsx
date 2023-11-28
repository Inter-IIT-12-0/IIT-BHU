"use client";
import Image from "next/image";

export default function MilestoneSideBar() {
  return (
    <div>
    <span style={{ color: 'black', fontSize: '1.5rem', fontWeight: '600', fontFamily: 'Inter', lineHeight: '1.75' }}>
      Status:{" "}
    </span>
    <span style={{ color: 'red', fontSize: '1.5rem', fontWeight: '700', fontFamily: 'Inter', lineHeight: '1.75' }}>
      Due Today
    </span>
  </div>
  
  );
}
