import React from 'react'
import rec from "../Assest/Rectangle 5764.png"


const Keyfeature = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-20 w-full'>
        
        <h1 className='text-6xl font-bold leading-normal text-center w-4/5'>Manage visitors across all your workplace <span className='text-blue-600'>locations</span></h1>
      </div>

      <div className='w-full'>
        <div className='w-full '>
            <div className='flex flex-col items-center justify-center  p-16'>
                <div className='flex items-center justify-center space-x-5' >
                    <h2 className='text-lg font-bold '>Workplace Campus</h2>
                    <h2 className='text-lg font-bold'>Standalone Building</h2>
                    <h2 className='text-lg font-bold'>Tech/Business Park</h2>
                </div>
                <div className='w-2/5 mt-3' >
                    <h2 className='h-1 w-2/6 bg-blue-700'></h2>
                    <h2 className='h-0.5 w-full bg-gray-400'></h2>
                    
                </div>
            </div>
            <div className='flex items-center w-full justify-evenly'>
            <div className='mb-16 w-full flex items-center justify-center'><img src={rec} alt="" /></div>

            <div className='flex flex-col w-full items-center justify-start  '>
                <h2 className='text-4xl w-5/6 font-bold leading-normal'>Manage Visitors to Your Self-Contained Campus</h2>
                <p className='text-2xl w-3/5 -ml-40 mt-4 mb-4 text-start text-gray-400'>Manage your multiple buildings and a high volume of visitors with UrSpayce Visitor Management Software.</p>
            </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Keyfeature
