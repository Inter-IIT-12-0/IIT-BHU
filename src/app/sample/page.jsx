import React from 'react'

const page = () => {
  return (
    <main className='w-[100v] h-[100vh]'>
    <div className="p-8 w-[75%]">
      <div className="flex justify-between">
        <div className="flex flex-row">
          <img src="" alt="" />
          <h1 className="text-2x1 text-black font-semibold text-2xl">Team1 </h1>
        </div>
        <h1 className="text-2xl text-black font-semibold"> 4.5/5.0</h1>
      </div>
      <div className="flex flex-col p-8 bg-blue-100 rounded-md mt-6">
        <h1 className="text-2xl text-black font-semibold">Bid Details</h1>
        <div className="flex justify-between">
          <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
            <div className="flex flex-row mr-20">
              <h1 className="text-2x1 text-black font-semibold mr-2">Total Bid Amount</h1>
              <div className="pt-1">
                <img className="h-4" src="/Images/info-circle.png" alt="" />
              </div>
            </div>
            <div className="text-back text-2xl font-semibold"> &#8377;2000</div>
          </div>
          <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
            <div className="flex flex-row mr-20">
              <h1 className="text-2x1 text-black font-semibold mr-2">Expected Duration</h1>
              <div className="pt-1">
                <img className="h-4" src="/Images/info-circle.png" alt="" />
              </div>
            </div>
            <div className="text-back text-2xl font-semibold">3 Weeks</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-blue-100 rounded-md p-8 mt-6 w-full">
        <h1 className=" text-black text-2xl font-semibold">Milestone Details</h1>
        {/* <div className="flex flex-col mt-4 w-full"> */}
        <table className="min-w-full bg-white border border-blue-900">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="py-2 px-6 font-semibold">Sr. No</th>
              <th className="py-2 px-6 font-semibold">Milestone Name</th>
              <th className="py-2 px-6 font-semibold">Milestone Amount</th>
              <th className="py-2 px-6 font-semibold">Duration</th>
              <th className="py-2 px-6 font-semibold">View</th>
            </tr>
          </thead>
          <tbody>
            {[1,2].map((milestone, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-6 text-center">{index + 1}</td>
                <td className="py-2 px-6 text-center">Mil</td>
                <td className="py-2 px-6 text-center">200</td>
                <td className="py-2 px-6 text-center">3</td>
                <td className="py-2 px-6 flex justify-center">
                  <img src="/Images/eye.svg" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="w-[100%]" />
        {/* </div> */}
      </div>
    </div>
    </main>
  )
}

export default page