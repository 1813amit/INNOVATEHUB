import React from 'react'
import IMG from "../Assest/IMG.png"

const Analaytics = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <h1  className='text-4xl font-bold w-3/6 text-center leading-snug'><span className='text-blue-600 text-4xl font-bold '>Analytics & Reporting</span> on Web-based Admin Dashboard </h1>
      </div>
      
      <div className='w-full lg:flex items-center justify-around bg-cyan-200'>
        <div className='lg:w-3/4 bg-red-400 flex items-center justify-center'>
            <img src={IMG} alt="" className='w-full mt-10' />
        </div>
        <div className='lg:w-2/4  p-10 flex flex-col space-y-2'>
           <div className=' bg-cyan-100 h-40 rounded-xl'>
           <div className='flex items-center space-x-6 p-1.5 '>
            <div className='w-16 h-16 rounded-full bg-cyan-300 flex items-center justify-center  '>
                logo
            </div>
            <div>
                <h2 className='font-semibold text-3xl'>Average Visit Time</h2>
            </div>
            </div>
            <p className='p-2 text-lg leading-6'>Get the average time that visitors spend in your building. Identify areas where visitors spend time or flow in your visitor registration process.</p>
           </div>
           <div className=' bg-cyan-100 h-40 rounded-xl'>
           <div className='flex items-center space-x-6 p-1.5 '>
            <div className='w-16 h-16 rounded-full bg-cyan-300 flex items-center justify-center  '>
                logo
            </div>
            <div>
                <h2 className='font-semibold text-3xl'>Average Visit Time</h2>
            </div>
            </div>
            <p className='p-2 text-lg leading-6'>Get the average time that visitors spend in your building. Identify areas where visitors spend time or flow in your visitor registration process.</p>
           </div>
           <div className=' bg-cyan-100 h-40 rounded-xl'>
           <div className='flex items-center space-x-6 p-1.5 '>
            <div className='w-16 h-16 rounded-full bg-cyan-300 flex items-center justify-center  '>
                logo
            </div>
            <div>
                <h2 className='font-semibold text-3xl'>Average Visit Time</h2>
            </div>
            </div>
            <p className='p-2 text-lg leading-6'>Get the average time that visitors spend in your building. Identify areas where visitors spend time or flow in your visitor registration process.</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default Analaytics
