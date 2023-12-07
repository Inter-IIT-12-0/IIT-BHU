"use client"
import Navbar from "../../../components/Navbar";
import StudentSidebar from "../../../components/StudentSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import recommendLounge from "../../pages/api/recommendation/loungeRecommend";

const Lounges = ({}) => {
  const [lounges, setLounges] = useState([])
  const {data:session} = useSession();
  const [alldomains,setDomains] = useState([]); 
  const [recommended,setRecommendation] = useState([]);

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
      const res = await recommendLounge(alldomains,session.user.domain);
      setRecommendation(filterAndRankLounges(lounges,res.data));

    } catch (err) {
      console.error(err);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/alllounges/');
      setLounges(res.data);
      setDomains(getAllDomainsFromLounges(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    recommendation();
  }, []);


  return (
    <div>

    </div>
  );

};

export default Project;
