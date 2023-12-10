"use client"
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { getCookie, getCookies, setCookie } from "cookies-next";
import { useEffect } from 'react';
import {useRouter} from "next/navigation"

const Provider= ({ children, session }) => {
  
  const router = useRouter()
  useEffect(() => {
    const loggedIn = getCookie('loggedIn')
    if (loggedIn !== "true") {
      return router.push('/onboarding')
    }
  }, []);
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Provider;
