"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '../components/Provider'
// import NoSSR from 'react-no-ssr'

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {/* <NoSSR> */}
          <Provider>
            {children}
          </Provider>
        {/* </NoSSR> */}
      </body>
    </html>
  )
}
