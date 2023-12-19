"use client"
import './globals.css'
import Provider from '../components/Provider'
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from 'react';

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
        <Dynamic>
            <Provider>
              <Toaster position="top-center" />
              {children}
            </Provider>
        </Dynamic>
      </body>
    </html>
  )
}
