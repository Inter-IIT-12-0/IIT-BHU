"use client"
import styles from './page.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import GoogleButton from 'react-google-button';
import Bot from '@/components/Bot';
import ComparisonGraph from '@/components/ComparisonGraph';
import GlassyCard from '@/components/OnBoarding';
import GlossyCard from '@/components/GlossyCard';
import RightCard from '@/components/RightCard';
export default function Home() {
  const { data: session } = useSession();

  return (
    <main className={styles.main}>
      {/* <div className={styles.description}>
        <h1 className='text-blue-500'>Home Page</h1>
        {session ? (
          <>
            <p>Welcome, {session.user?.name}!</p>
            <img src={session.user?.image!} alt="" />
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn('google')} > Sign In </button>
        )}
      </div>
      <Bot />
      <ComparisonGraph /> */}
      <RightCard />
    </main>
  );
}
