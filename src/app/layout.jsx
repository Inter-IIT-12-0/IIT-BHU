"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '../components/Provider'
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from 'react';
// import NoSSR from 'react-no-ssr'

const Dynamic = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default function RootLayout({
  children,
}) {
  // if (typeof (window) === "undefined") return null
  return (
    <html lang="en">
      <body>
        {/* <NoSSR> */}
        <Dynamic>
          <Provider>
            <Toaster position="top-center" />
            {children}
          </Provider>
        </Dynamic>
        {/* </NoSSR> */}
      </body>
    </html>
  )
}
