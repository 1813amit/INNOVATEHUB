import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img3 from "../Assest/Frame 1171275829.png"
import { TiTick } from "react-icons/ti";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white lg:p-36 lg:-mt-52  ">

     <div className=' lg:flex justify-between items-center bg-blue-200 rounded-xl '>
     <div className="relative isolate">
       
       <div className="mx-auto max-w-fit py-20 sm:py-20 lg:py-32 ">
        
         <div className="text-center ">
           <h1 className="lg:w-[480px] lg:text-start sm:text-center lg:2xl lg:ml-[50px] lg:-mt-12  font-bold tracking-tight text-gray-900 sm:text-4xl">
           Replace Manual Data Entry with a Self-Check-in Kiosk App
           </h1>
           <p className="lg:w-[480px] lg:ml-[44px] text-[20px]  mt-2  text-start text-gray-600">
           Elevate visitor experiences and enhance workplace security with UrSpayce's self-check-in kiosk app.
           </p>
           <h1 className='text-2xl font-bold text-start ml-10 mt-6'>Features:</h1>
           <div className='flex items-center justify-center space-x-2 mt-5 -ml-28'>
           
           <div className='w-5 h-5 rounded-full  bg-green-200 ' >
           <TiTick className='text-xl text-green-700 text' />
           </div>
           <div className='w-36  text-start'>
            <p>Collect Personal Information. </p>
           </div>
           <div className='w-5 h-5 rounded-full  bg-green-200 ' >
           <TiTick className='text-xl text-green-700 text' />
           </div>
           <div className='w-36  text-start'>
            <p>Collect Personal Information. </p>
           </div>
           
           </div>
           <div className='flex items-center justify-center space-x-2 mt-5 -ml-28'>
           <div className='w-5 h-5 rounded-full  bg-green-200 ' >
           <TiTick className='text-xl text-green-700 text' />
           </div>
           <div className='w-36  text-start'>
            <p>Collect Personal Information. </p>
           </div>
           <div className='w-5 h-5 rounded-full  bg-green-200 ' >
           <TiTick className='text-xl text-green-700 text' />
           </div>
           <div className='w-36  text-start'>
            <p>Collect Personal Information. </p>
           </div>
           
           </div>

           <div className="mt-10 flex items-center justify-center ">
           
            <button htmlFor="email" className="w-40 bg-blue-600  flex items-center justify-center rounded-full -ml-72 py-2 text-lg font-medium leading-6 text-gray-900  ">
                  <h6 className=' text-white'>Get Started</h6>
              </button>
           </div>
         </div>
       </div>
      
     </div>

   <div className=" -mt-7 w-full flex items-center justify-center">
       <img src={img3} alt="" />
   </div>
     </div>
      
    </div>
  )
}


