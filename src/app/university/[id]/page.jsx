"use client"
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react'
import Navbar from "../../../components/Navbar";
import SidebarUpskilling from "../../../components/SidebarUpskilling";
import Script from 'next/script';
import { useState, useEffect } from "react";
import PostCard from '../../../components/postsCard';
import axios from 'axios';

const obj = {
  "url": "https://tse1.mm.bing.net/th?id=OIP.3l2nfzcHhMemSZooiH3B3AHaFj&pid=Api&rs=1&c=1&qlt=95&w=157&h=117",
  "name": "Hello",
  "description": "nice"
};

const arrayOfObjects = Array(8).fill(obj);
const Cards = ({ setOpenPostCard, tabName, ele, setDetails }) => {

  console.log("ontained element is:", ele['student'].name);

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (<>
    {ele[tabName].map((ele) => {
      return <div className="h-1/2 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-100 dark:border-gray-700 mx-4">
        <div className="flex flex-col items-center pb-10 mt-4 w-40 h-40 ">
          <img className="w-16 h-16 mb-3 rounded-full shadow-lg" src='' alt="" />
          <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white">{ele.name && ele.name.substring(0, 16)}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{tabName}</span>
          {(tabName !== 'alumni' && tabName !== 'student') && <button onClick={() => { setOpenPostCard(true); setDetails(ele); }} className="bg-blue-500 text-white px-4 py-2 rounded">
            View More
          </button>}
        </div>
      </div >
    })}
  </>);

}

const Upskilling = () => {

  const data = [
    {
      label: "posts",
      value: "html",
    },
    {
      label: "labs",
      value: "react",
    },

    {
      label: "clubs",
      value: "vue",
    },

    {
      label: "alumni",
      value: "angular",
    },

    {
      label: "student",
      value: "svelte",
    },
    {
      label: "startup",
      value: "new",
    },
  ];

  const test_id = "656ec391dd9fcbf216ae1b03"
  const [uniData, setUniData] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/university?id=${test_id}`);
        setUniData(response.data);
        console.log("fetched data is:", response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [])

  console.log("unidata is:", uniData);

  const [tabName, setTabName] = useState('posts');
  const [openPostcard, setOpenPostCard] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <SidebarUpskilling />
        {uniData && uniData.map((ele) => {
          return <div className="max-h-[90vh] overflow-scroll overflow-y-auto overflow-x-hidden ml-4 mt-8" >

            <div className="bg-white rounded-md shadow-lg w-screen">
              <div className="md:flex px-4 leading-none max-w-full mt-6 bg-blue-100 rounded-md">
                <div className="flex-none ">
                  <img
                    src={ele.profileUrl}
                    alt="pic"
                    className="h-72 w-72 rounded-3xl shadow-2xl transform -translate-y-4 border-4 border-gray-300 mr-12"
                  />
                </div>

                <div className="flex-col text-black p-2">

                  <p className="pt-4 text-2xl font-bold mb-8">{ele.name}</p>
                  <div className="bg-white w-full py-0.5 mb-8 rounded-2xl"></div>
                  <div className="text-md flex justify-between px-4 my-2">
                    <span className="font-bold">{ele.edType ? ele.edType : 'Higher Education'} | {ele.address ? ele.address : 'address'} |  {ele.followers} followers | {ele.alumni && ele.alumni.length} alumni</span>
                    <span className="font-bold"></span>
                  </div>

                  <p className="hidden md:block px-4 my-4 text-sm text-left">{ele.about}</p>

                  <p className="flex text-md px-4 my-2">
                    Est. {ele.establishedIn ? ele.establishedIn : '1864'}
                    <span className="font-bold px-2">|</span>
                    {ele.grade ? ele.grade : 'A'} Grade
                  </p>

                  <div className="text-xs">
                    {ele.tags && ele.tags.map((ele) => {
                      return <button type="button"
                        className="border bg-slate-300 border-blue-400 text-white-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white focus:outline-none focus:shadow-outline">{ele}</button>
                    })}
                  </div>
                </div>
              </div>
              <Tabs id="custom-animation" value="html" className="w-4/5">
                <TabsHeader className="bg-blue-100 mb-4 mt-2 w-[100%] p-2">
                  {data.map(({ label, value }) => (
                    <Tab key={value} value={value} onClick={() => { setTabName(label); setOpenPostCard(false) }}>
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                {!openPostcard && <TabsBody
                  animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                  className="mb-16"
                >
                  {data.map(({ value, label }) => (
                    <TabPanel key={value} value={value}>
                      <h1 className="font-bold mb-6">{label}</h1>
                      <div className="flex overflow-x-auto w-[1200px]">
                        <Cards setDetails={setDetails} key={ele._id + label} setOpenPostCard={setOpenPostCard} tabName={tabName} ele={ele} />
                      </div>
                    </TabPanel>
                  ))}
                </TabsBody>}
                {openPostcard &&
                  <PostCard details = {details} ele={ele} tabName={tabName} />
                }
              </Tabs>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default Upskilling;