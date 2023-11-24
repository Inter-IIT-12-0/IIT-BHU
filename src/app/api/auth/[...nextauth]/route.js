import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import connectDb from "../../../../../middlewares/mongoose";
import User from "../../../../../models/User"


const handler = connectDb(NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks: {
        async session({session}) {
            const sessionUser = await User.findOne({email: session.user.email});
            session.user.id = sessionUser._id
            return session;
        },
        async signIn({profile}) {
            try {
                const existingUser = await User.findOne({email: profile.email})
                if(!existingUser) {
                    const user = await User.create({
                        email: profile.email,
                        name: profile.name,
                        avatarUrl: profile.picture
                    })
                }
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
}))

export { handler as GET, handler as POST}