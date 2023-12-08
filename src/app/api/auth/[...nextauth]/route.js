import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import connectDb from "../../../../../middlewares/mongoose";
import User from "../../../../../models/User"
import { cookies } from "next/headers";
import { getCookie, getCookies, setCookie } from "cookies-next";

export const authOptions =  {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session }) {
            try {
                const sessionUser = await User.findOne({ email: session.user.email });
                session.user = sessionUser
                return session;
            } catch (error) {
                console.error(error)
            }
        },
        async signIn({ profile }) {
            try {
                console.log(profile)
                const {role} = getCookies({res, req})
                const existingUser = await User.findOne({ email: profile.email })
                if (!existingUser) {
                    const user = await User.create({
                        email: profile.email,
                        name: profile.name,
                        avatarUrl: profile.picture,
                        role
                    })
                    setCookie('newUser', true, {cookies})
                }
                else {
                    setCookie('newUser', false, {cookies})
                }
                return true
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
}

const handler = connectDb(
    async function auth(req, res) {
        // req.hi = "Hi"
        // console.log(req)
        return await NextAuth(req,res, {
            providers: [
                GoogleProvider({
                    clientId: process.env.GOOGLE_ID,
                    clientSecret: process.env.GOOGLE_SECRET
                })
            ],
            secret: process.env.NEXTAUTH_SECRET,
            callbacks: {
                async session({ session }) {
                    try {
                        const sessionUser = await User.findOne({ email: session.user.email });
                        session.user = sessionUser
                        return session;
                    } catch (error) {
                        console.error(error)
                    }
                },
                async signIn({ profile }) {
                    try {
                        console.log(profile)
                        const {role} = getCookies({res, req})
                        const existingUser = await User.findOne({ email: profile.email })
                        if (!existingUser) {
                            if (role === 'Student' || role === 'Client' || role === 'Professor') {
                                await User.create({
                                    email: profile.email,
                                    name: profile.name,
                                    avatarUrl: profile.picture,
                                    role
                                })
                            }
                            setCookie('newUser', true, {cookies})
                        }
                        else {
                            setCookie('newUser', false, {cookies})
                        }
                        return true
                    } catch (error) {
                        console.log(error)
                        return false;
                    }
                }
            }
        })
    }
)

export { handler as GET, handler as POST }