import React from 'react'
import Accept from "../../public/Images/Accept.svg"
import Reject from "../../public/Images/Reject.svg"
import axios from 'axios'

const Notifications = ({ notifs }) => {
    const handleAccept = (notif) => {
        axios.patch(`/api/myInvites/?teamId=${notif.id}`).then(res => window.location.reload()).catch(err => toast.error(err.response.data.error))

    }
    const handleReject = (notif) => {
        axios.delete(`/api/myInvites/?teamId=${notif.id}`).then(res => window.location.reload()).catch(err => toast.error(err.response.data.error))

    }
    return (
        <div className='absolute top-12 right-3 bg-sky-100 w-96 h-72 p-3 z-40'>
            {
                notifs.length !== 0 ? notifs.map(notif => (
                    <div className='my-2 h-12 w-full flex justify-between'>
                        <span>Team {notif.name} requests you to join the team </span>
                        <Accept className="mx-2 cursor-pointer" onClick={() => handleAccept(notif)} />
                        <Reject className="mx-2 cursor-pointer" onClick={() => handleReject(notif)} />
                    </div>
                )) : <div className="w-full h-full flex justify-center items-center"> No Notifications Found </div>
            }
        </div>
    )
}

export default Notifications