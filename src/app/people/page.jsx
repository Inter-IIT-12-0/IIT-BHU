"use client"
import People from "../../components/People"
import Navbar from "../../components/Navbar"
import StudentSidebar from "../../components/StudentSidebar"
// import University from "../../components/University"

const people = () => {
    return (
        <main className='h-[100vh] w-[100%] overflow-hidden'>
            <div className='flex flex-col w-full h-full '>
                <Navbar />
                <div className='flex h-full'>
                    <StudentSidebar page={"people"} />
                    <People />
                </div>
            </div>
        </main>
    )
}

export default people