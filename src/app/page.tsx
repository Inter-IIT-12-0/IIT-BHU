"use client";
// import styles from './page.module.css';
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import GoogleButton from "react-google-button";
import Sidebar from "@/components/Sidebar";
import ChatbotCard from "@/components/ChatbotCard";
import Bot from "@/components/Bot";
import ComparisonGraph from "@/components/ComparisonGraph";
import Footer from "@/components/Footer";
import LandingFooter from "@/components/LandingFooter";
import LandingHeader from "@/components/LandingHeader";
import Polygon from "../../public/Images/Polygon1.svg";
import Box from "../../public/Images/Box.svg";
import Rectangle from "../../public/Images/Rectangle 10.svg";
import Testimonial from "@/components/Testimonial";
import Man from "../../public/Images/Ellipse 4.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rectangle7 from "../../public/Images/Rectangle 7.svg";
import Polygon2 from "../../public/Images/Polygon 2.svg";
import Polygon3 from "../../public/Images/Polygon 3.svg";
import Inverted from "../../public/Images/Inverted.svg"
export default function Home() {
  const { data: session } = useSession();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const boxSize = {
    width: "500px", // Set your desired width
    height: "300px", // Set your desired height
  };

  const RectangleSize = {
    width: "1728px", // Set your desired width
    height: "200px", // Set your desired height
  };

  return (
    <div>



      <LandingHeader />
      <div className="mt-8">
      <div className="w-[548px] h-[350px] flex-col justify-start items-start gap-10 transform scale-50 inline-flex">
        <div className="text-sky-700 text-[73.24px] font-normal font-['Georgia']">
          Supercharge Innovation.
        </div>
        <div className="w-[548px] text-zinc-500 text-3xl font-normal font-['Helvetica Neue']">
          Unite university project teams worldwide for research and prototyping,
          providing students a cost-free channel to achieve real-world impact
          for global clients.
        </div>
      </div>
      </div>
      <div>
      <Image src="/public/Images/Upskilling.png" alt="Description" width={500} height={300} />
      </div>

<div className="text-right">
<div className="w-[548px] h-[350px] flex-col justify-end items-end gap-10 transform scale-50 inline-flex">
        <div className="text-sky-700 text-[73.24px] font-normal font-['Georgia']">
        Powered by AI
        </div>
        <div className="w-[548px] text-zinc-500 text-3xl font-normal font-['Helvetica Neue']">
        Fostering synergy among industry projects, students, and academia, propelled by the evolution of AI
        </div>
      </div>
</div>

<Rectangle style={RectangleSize}/>

      <div className="relative bg-white">
  <div className="w-full max-w-[699.39px] flex items-center justify-between gap-8 p-8">
    <div className="flex-shrink-0">
      <Box style={boxSize} />
    </div>
    <div className="flex-grow absolute right-3 text-right">
      <div className="text-sky-700 text-[50px] font-normal font-['Georgia']">Upskilling</div>
      <div className="text-zinc-500 text-xl text-right font-normal font-['Helvetica Neue']">Fostering synergy among industry projects, students, and academia, propelled by the evolution of AI.</div>
      <div className="mt-4">
        <div className="px-[39.24px] py-[19.62px] bg-cyan-300 rounded-md shadow shadow-inner justify-center items-center gap-[7.85px] inline-flex">
          <div className="text-white text-xl font-medium font-['Inter']">Know More</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="relative bg-white">
  <div className="w-full max-w-[699.39px] flex items-left justify-between gap-8 p-8">
    <div className="flex-grow absolute left-3 text-left">
      <div className="text-sky-700 text-[50px] font-normal font-['Georgia']">Upskilling</div>
      <div className="text-zinc-500 text-xl font-normal font-['Helvetica Neue']">Fostering synergy among industry projects, students, and academia, propelled by the evolution of AI.</div>
      <div className="mt-4">
        <div className="px-[39.24px] py-[19.62px] bg-cyan-300 rounded-md shadow shadow-inner justify-center items-center gap-[7.85px] inline-flex">
          <div className="text-white text-xl font-medium font-['Inter']">Know More</div>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 ml-auto">
      <Inverted style={boxSize} />
    </div>
  </div>
</div>





<div className="relative bg-white">
  <div className="w-full max-w-[699.39px] flex items-center justify-between gap-8 p-8">
    <div className="flex-shrink-0">
      <Box style={boxSize} />
    </div>
    <div className="flex-grow absolute right-3 text-right">
      <div className="text-sky-700 text-[50px] font-normal font-['Georgia']">Lounge</div>
      <div className="text-zinc-500 text-xl text-right font-normal font-['Helvetica Neue']">Fostering synergy among industry projects, students, and academia, propelled by the evolution of AI.</div>
      <div className="mt-4">
        <div className="px-[39.24px] py-[19.62px] bg-cyan-300 rounded-md shadow shadow-inner justify-center items-center gap-[7.85px] inline-flex">
          <div className="text-white text-xl font-medium font-['Inter']">Know More</div>
        </div>
      </div>
    </div>
  </div>
</div>







<div className="bg-white mt-8"></div>



      <div className="bg-blue-50 py-6">
        <div className="text-center text-sky-700 text-[50px] font-normal font-['Georgia']">
          Testimonials
        </div>
        <Slider {...settings}>
          <div className="max-w-xs mx-auto bg-white rounded-xl p-5 m-2">
            <p>
              {" "}
              Esther creates truly beautiful components, you should definitely
              work with her. The end results are always worth it. A great find!
            </p>
            <div className="mt-5 flex items-center">
              <Man />
              <div className="ml-3">
                <h3 className="font-semibold"> Lana Del Rey </h3>
                <p className="text-gray-500"> Singer/songwriter </p>
              </div>
            </div>
          </div>
          <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
            <p>
              {" "}
              Esther creates truly beautiful components, you should definitely
              work with her. The end results are always worth it. A great find!
            </p>
            <div className="mt-5 flex items-center">
              <Man />
              <div className="ml-3">
                <h3 className="font-semibold"> Lana Del Rey </h3>
                <p className="text-gray-500"> Singer/songwriter </p>
              </div>
            </div>
          </div>{" "}
          <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
            <p>
              {" "}
              Esther creates truly beautiful components, you should definitely
              work with her. The end results are always worth it. A great find!
            </p>
            <div className="mt-5 flex items-center">
              <Man />
              <div className="ml-3">
                <h3 className="font-semibold"> Lana Del Rey </h3>
                <p className="text-gray-500"> Singer/songwriter </p>
              </div>
            </div>
          </div>{" "}
          <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
            <p>
              {" "}
              Esther creates truly beautiful components, you should definitely
              work with her. The end results are always worth it. A great find!
            </p>
            <div className="mt-5 flex items-center">
              <Man />
              <div className="ml-3">
                <h3 className="font-semibold"> Lana Del Rey </h3>
                <p className="text-gray-500"> Singer/songwriter </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="w-full m-auto relative">
      
        <div className="text-center text-sky-700 text-[50px] mt-10 font-normal font-['Georgia']">
          Example Project Areas
        </div>

        <div className="w-full m-auto rounded-[9.98px] shadow relative">
          <Polygon2 className="absolute inset-0 w-full h-full" />
          <div className="mt-20 ">
            <Slider {...settings}>
              <div>
                <div>
                  <Rectangle7 />
                </div>
                <div>
                  <div className="text-sky-700 text-2xl font-medium font-['Helvetica Neue']">
                    Core Research
                  </div>
                  <div className="w-[306.08px] text-center text-zinc-600 text-xl font-normal font-['Helvetica Neue']">
                    Domain centric research and analysis
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <Rectangle7 />
                </div>
                <div>
                  <div className="text-sky-700 text-2xl font-medium font-['Helvetica Neue']">
                    Core Research
                  </div>
                  <div className="w-[306.08px] text-center text-zinc-600 text-xl font-normal font-['Helvetica Neue']">
                    Domain centric research and analysis
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <Rectangle7 />
                </div>
                <div>
                  <div className="text-sky-700 text-2xl font-medium font-['Helvetica Neue']">
                    Core Research
                  </div>
                  <div className="w-[306.08px] text-center text-zinc-600 text-xl font-normal font-['Helvetica Neue']">
                    Domain centric research and analysis
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <Rectangle7 />
                </div>
                <div>
                  <div className="text-sky-700 text-2xl font-medium font-['Helvetica Neue']">
                    Core Research
                  </div>
                  <div className="w-[306.08px] text-center text-zinc-600 text-xl font-normal font-['Helvetica Neue']">
                    Domain centric research and analysis
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <Rectangle7 />
                </div>
                <div>
                  <div className="text-sky-700 text-2xl font-medium font-['Helvetica Neue']">
                    Core Research
                  </div>
                  <div className="w-[306.08px] text-center text-zinc-600 text-xl font-normal font-['Helvetica Neue']">
                    Domain centric research and analysis
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="mt-10" />
      <LandingFooter />
    </div>
  );
}
