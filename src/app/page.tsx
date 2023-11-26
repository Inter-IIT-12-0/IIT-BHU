"use client"
// import styles from './page.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import GoogleButton from 'react-google-button';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <div>
        <Sidebar></Sidebar>
        {/* <h1 className='text-blue-500'>Home Page</h1>
        {session ? (
          <>
            <p>Welcome, {session.user?.name}!</p>
            <img src={session.user?.image!} alt="" />
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn('google')} > Sign In </button>
        )} */}
      </div>
    </main>
  );
}
