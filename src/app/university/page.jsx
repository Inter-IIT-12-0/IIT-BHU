"use client"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import SidebarUpskilling from "../../components/SidebarUpskilling";
import Script from 'next/script';
import { useState } from "react";

const obj = {
  "url": "https://tse1.mm.bing.net/th?id=OIP.3l2nfzcHhMemSZooiH3B3AHaFj&pid=Api&rs=1&c=1&qlt=95&w=157&h=117",
  "name": "Hello",
  "description": "nice"
};



const arrayOfObjects = Array(8).fill(obj);
const Cards = ({ object }) => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (<div class="h-1/2 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-100 dark:border-gray-700 mx-4">
    <div class="flex flex-col items-center pb-10 mt-4 w-40 h-40 ">
      <img class="w-16 h-16 mb-3 rounded-full shadow-lg" src={object.url} alt="" />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{object.name}</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">{object.description}</span>
      <button onClick={openPopup} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Popup
      </button>
      {isPopupOpen && (
        <div className=" flex items-center justify-center bg-black bg-opacity-0 backdrop-filter backdrop-blur-sm">
          {/* <div className="tagembed-container" style={{ width: '100%', height: '100%', overflow: 'auto' }}>
            <div className="tagembed-socialwall" data-wall-id="127688" view-url="https://widget.tagembed.com/127688"></div>
            <Script src="//widget.tagembed.com/embed.min.js" type="text/javascript" />
          </div> */}
          <button onClick={closePopup} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
        
      )}
  </div>
  </div >);

}

const Upskilling = () => {

  const data = [
    {
      label: "HTML",
      value: "html",
    },
    {
      label: "React",
      value: "react",
    },

    {
      label: "Vue",
      value: "vue",
    },

    {
      label: "Angular",
      value: "angular",
    },

    {
      label: "Svelte",
      value: "svelte",
    },
    {
      label: "New",
      value: "new",
    },
  ];


  return (
    <div>
      <Navbar />
      <div className="flex">
        <SidebarUpskilling />
        <div className="max-h-[90vh] overflow-scroll overflow-y-auto overflow-x-hidden ml-4 mt-8" >

          <div class="bg-white rounded-md shadow-lg w-screen">
            <div class="md:flex px-4 leading-none max-w-full mt-6 bg-blue-100 rounded-md">
              <div class="flex-none ">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.jrwYEpDsu8Svl8jDGPTZpQHaHh&pid=Api&rs=1&c=1&qlt=95&w=95&h=96"
                  alt="pic"
                  class="h-72 w-72 rounded-3xl shadow-2xl transform -translate-y-4 border-4 border-gray-300 mr-12"
                />
              </div>

              <div class="flex-col text-black p-2">

                <p class="pt-4 text-2xl font-bold mb-8">Indian Institue of Technology</p>
                <div className="bg-white w-full py-0.5 mb-8 rounded-2xl"></div>
                <div class="text-md flex justify-between px-4 my-2">
                  <span class="font-bold">Higher Education | Alleppey, Kerala, India |  210,900 followers | 14,000 alumni</span>
                  <span class="font-bold"></span>
                </div>

                <p class="hidden md:block px-4 my-4 text-sm text-left">We use the power of our education and research to create a sustainable, healthy and socially just future.</p>

                <p class="flex text-md px-4 my-2">
                  Est. 1864
                  <span class="font-bold px-2">|</span>
                  A Grade
                </p>

                <div class="text-xs">
                  <button type="button"
                    class="border bg-slate-300 border-blue-400 text-white-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white focus:outline-none focus:shadow-outline">Engineering</button>

                  <button type="button"
                    class="border bg-slate-300 border-blue-400 text-white-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white focus:outline-none focus:shadow-outline">Engineering</button>

                  <button type="button"
                    class="border bg-slate-300 border-blue-400 text-white-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white focus:outline-none focus:shadow-outline">Engineering</button>
                </div>

              </div>
            </div>
            <Tabs id="custom-animation" value="html" className="w-4/5">
              <TabsHeader className="bg-blue-100 mb-4 mt-2 w-full p-2">
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody
                animate={{
                  initial: { y: 250 },
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
                className="mb-16"
              >
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    <h1 className="font-bold mb-6">Clubs</h1>
                    <div className="flex overflow-x-auto w-[1200px]">
                      {arrayOfObjects.map((object, index) => (
                        <Cards key={index} object={object} />
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upskilling;