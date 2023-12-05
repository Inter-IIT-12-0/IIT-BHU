"use client"
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

// import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import axios from 'axios';
import { deleteCookie } from 'cookies-next';
// import { CometChat } from "@cometchat/chat-sdk-javascript";


const login = () => {
    const { data: session } = useSession();
    
    // useEffect(() => {
    // },[])
    return (
        <main className="flex">
            {session ? (
                <>
                    <p>Welcome, {session.user?.name}!</p>
                    <img src={session.user?.avatarUrl} alt="" />
                    <button onClick={() => {
                        // CometChat.logout().then(() => {
                        //     console.log("Logged Out");
                        //     // signOut();
                        // })
                        deleteCookie("role")
                        deleteCookie("newUser")
                        signOut()
                        // Comet
                    }
                    }>Sign Out</button>
                </>
            ) : (
                <button onClick={() => {
                    console.log("CLicked")
                    signIn('google')
                }} > Sign in </button>
            )}
        </main>
    )
}

export default login