"use client"
import Navbar from "../../components/Navbar";
import StudentSidebar from "../../components/StudentSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import recommendLounge from "../../pages/api/recommendation/loungeRecommend";
import SidebarUpskilling from "../../components/SidebarUpskilling";

const Lounges = ({ }) => {
  const [lounges, setLounges] = useState([])
  const { data: session } = useSession();
  const [alldomains, setDomains] = useState([]);
  const [recommended, setRecommendation] = useState([]);

  function filterAndRankLounges(lounges, domainList) {
    const filteredLounges = lounges.filter((lounge) =>
      lounge.domains.some((domain) => domainList.includes(domain))
    );
    const rankedLounges = filteredLounges.sort((a, b) => {
      const countA = a.domains.filter((domain) => domainList.includes(domain)).length;
      const countB = b.domains.filter((domain) => domainList.includes(domain)).length;
      return countB - countA;
    });

    return rankedLounges;
  }

  function getAllDomainsFromLounges(lounges) {
    const allDomains = new Set();
    lounges.forEach((lounge) => {
      if (lounge.domains && Array.isArray(lounge.domains)) {
        lounge.domains.forEach((domain) => {
          allDomains.add(domain);
        });
      }
    });

    return Array.from(allDomains);
  }

  const recommendation = async () => {
    try {
      if(session) {
        const res = await recommendLounge(alldomains,session.user.domain);
      setRecommendation(filterAndRankLounges(lounges,res.data));
      }
      

    } catch (err) {
      toast.error(err.response.data.error)
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/alllounges/');
      setLounges(res.data);
      setDomains(getAllDomainsFromLounges(res.data));
    } catch (err) {
      toast.error(err.response.data.error)
    }
  };

  useEffect(() => {
    fetchData();
    recommendation();
  }, []);

  const arrOficons = [
    {
      img: "/Images/i1.png",
      tag: "All Domains"
    },
    {
      img: "/Images/i2.png",
      tag: "Coding"
    },
    {
      img: "/Images/i3.png",
      tag: "Product"
    },
    {
      img: "/Images/i4.png",
      tag: "Design"
    },
    {
      img: "/Images/i6.png",
      tag: "Marketing"
    },
    {
      img: "/Images/i7.png",
      tag: "Finance"
    },
    {
      img: "/Images/i5.png",
      tag: "Research"
    },
  ]

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <SidebarUpskilling />
        <div className="flex flex-col gap-5 p-6 w-[100%] max-h-[91vh] overflow-scroll overflow-y-scroll overflow-x-hidden">
          <div className="rounded-xl w-[100%] h-screen flex flex-col gap-8 items-center justify-center p-4 pt-10" style={{ backgroundColor: '#111827' }}>
            <h1 className="text-white text-2xl font-bold">What discussion would you dive in today</h1>
            <div className="relative w-[70%]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input type="text"
                placeholder="Enter your search query"
                id="simple-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-blue-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-blue-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></input>
            </div>
            <div className="flex flex-row gap-12">
                {arrOficons.map((ele) => {
                  return <div className="flex flex-col items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                    <img className="h-10 w-10 rounded-full" src={ele.img} alt="" />
                  </div>
                  <h1 className="font-semibold text-white">{ele.tag}</h1>
                </div>
                })}
            </div>
          </div>
          <h1 className="text-2xl font-semibold">My Discussion</h1>
          <div className="grid grid-cols-4 gap-4">
            <div className="rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center gap-4 h-60">
              <h1>+ New Discussion</h1>
            </div>
            <div className="rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center gap-4 h-60">
              <h1>AI and Blockchain Management</h1>
              <img src="/Images/icon.svg" alt="" />
              <button className="px-5 py-2 rounded-full border border-blue-300">Enter Discussion</button>
            </div>
          </div>
          <h1 className="text-2xl font-semibold">Discuss openly with people across diverse domains</h1>
            {lounges.map((ele) => {
              return<> <h1 className="my-2 font-bold">{ele.title}</h1>
              <div className="grid grid-cols-4 gap-4">
              {ele.domains.map((ele) => {
                return <div className="rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center gap-4 h-60">
                <h1>{ele}</h1>
                <img src="/Images/icon.svg" alt="" />
                <button className="px-5 py-2 rounded-full border border-blue-300">Enter Discussion</button>
              </div>
              })}
              </div>
              </>
            })}
        </div>
      </div>
    </div>
  );

};

export default Lounges;
