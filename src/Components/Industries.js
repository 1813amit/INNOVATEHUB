import React from 'react'
import sp1 from "../Assest/space-ship_8672389 7.png"
import sp2 from "../Assest/space-ship_8672389 14.png"
import sp3 from "../Assest/space-ship_8672389 15.png"
import sp4 from "../Assest/space-ship_8672389 16.png"
import sp5 from "../Assest/space-ship_8672389 17.png"
import sp6 from "../Assest/space-ship_8672389 18.png"
import sp7 from "../Assest/space-ship_8672389 19.png"
import sp8 from "../Assest/space-ship_8672389 20.png"

const Industries = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-4 w-full'>
        
        <h2 className='text-5xl w-4/6 font-bold leading-snug text-center'>UrSpayce Visitor Management Software for <span className="text-blue-600">All Industries</span></h2>
        <p className='text-xl w-3/6 text-center font-semibold mt-6'>Our cloud-based visitor management system is designed to meet the needs of businesses of all sizes and in all industries. </p>
      </div>
      <div className='flex items-center justify-center -space-x-8'>
      <div className='flex  p-10 space-x-3 mt-16'>
      <div className='flex flex-col items-center justify-center  h-32 w-32 rounded-xl'>
            <img src={sp1} alt="" className='mt-5'/>
            <h1 className='text-sm text-center '>Aerospace & Defense</h1>
        </div>
      <div className='flex flex-col items-center justify-center  h-32 w-32 rounded-xl'>
            <img src={sp3} alt="" />
            <h1 className='text-sm text-center'>Food & Beverage</h1>
        </div>
      <div className='flex flex-col items-center justify-center  h-32 w-32 rounded-xl'>
            <img src={sp2} alt="" className='mt-5'/>
            <h1 className='text-sm text-center'>Transportation & Logistics
</h1>
        </div>
      <div className='flex flex-col items-center justify-center  h-32 w-32 rounded-xl'>
            <img src={sp4} alt="" />
            <h1 className='text-sm text-center'>Government</h1>
        </div>
      <div className='flex flex-col items-center justify-center  h-32 w-32 rounded-xl'>
            <img src={sp5} alt="" />
            <h1 className='text-sm text-center'>Education</h1>
        </div>
      <div className='flex flex-col items-center justify-center  h-32 w-32 rounded-xl'>
            <img src={sp6} alt="" />
            <h1 className='text-sm text-center'>Manufacturing</h1>
        </div>
      <div className='flex flex-col items-center justify-center  h-32 w-32 rounded-xl'>
            <img src={sp7} alt="" />
            <h1 className='text-sm text-center'>Professional services</h1>
        </div>
      <div className='flex flex-col items-center justify-center  h-32 w-32 rounded-xl'>
            <img src={sp8} alt="" />
            <h1 className='text-sm text-center'>Pharma & Biotech</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Industries