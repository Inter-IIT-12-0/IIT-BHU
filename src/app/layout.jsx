"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '../components/Provider'
import { Toaster } from "react-hot-toast";
// import NoSSR from 'react-no-ssr'

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {/* <NoSSR> */}
          <Provider>
          <Toaster position="top-center" />
            {children}
          </Provider>
        {/* </NoSSR> */}
      </body>
    </html>
  )
}
