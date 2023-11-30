"use client";
import Image from "next/image";
import Trumio_text from "../../public/Images/Trumio_text.svg";
import Trumio_logo from "../../public/Images/Trumio_Logo.svg";
import Facebook from "../../public/Images/facebook.svg";
import Gmail from "../../public/Images/gmail.svg";
import LinkedIn from "../../public/Images/linkedin.svg";

export default function LandingFooter() {
  return (
    <div className="footer-container h-[175px] bg-blue-50">
      <div className="flex ml-10 mt- items-start justify-start">
        <div className="w-5 h-5">
          <Trumio_logo className="transform scale-75" />
        </div>
        <div className="w-18 h-5">
          <Trumio_text className="transform scale-75" />
        </div>
      </div>
      <div className="text-neutral-600 text-[12px] mt-6 ml-10 w-61 font-normal font-['Helvetica Neue']">
        Trumio is headquartered in San Jose, California.
      </div>
      <div className="text-neutral-600 text-[12px] ml-10 w-61 font-normal font-['Helvetica Neue']">
        Our team works virtually from across the world.
      </div>
      <div className="ml-10 mt-6">
        <span
          style={{
            color: "#999999",
            fontSize: "12px",
            fontWeight: "normal",
            fontFamily: "Helvetica Neue",
          }}
        >
          For questions and support:{" "}
        </span>
        <span
          style={{
            color: "#999999",
            fontSize: "12px",
            fontWeight: "normal",
            fontFamily: "Georgia",
            textDecoration: "underline",
          }}
        >
          support@trumio.ai
        </span>
      </div>
      <div>
  <div className="relative">
    <div className="w-[319.91px] transform scale-50 justify-end items-start gap-[40px] md-10 inline-flex absolute bottom-0 right-0">
      <div className="relative">
        <Facebook />
      </div>
      <div className="w-[50px] h-[73.30px] relative" />
      <div className="w-[73.30px] h-[73.30px] relative">
        <LinkedIn />
      </div>
      <div className="w-[73.30px] h-[73.30px] relative" />
      <div className="w-[73.30px] h-[73.30px] relative">
        <Gmail />
      </div>
    </div>
  </div>
  <div className="text-black text-[12px] absolute mr-20 md-50 right-0 font-normal font-['Helvetica Neue'] ">
    © 2023 by Trumio Inc.
  </div>
</div>

    </div>
  );
}
