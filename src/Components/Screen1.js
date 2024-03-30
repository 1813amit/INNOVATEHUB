import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img from "../Assest/Frame 140.png"

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white container max-auto">

     <div className='lg:flex justify-between items-center'>
     <div className="relative isolate">
       
       <div className="mx-auto max-w-fit py-20 sm:py-20 lg:py-32">
         <div className="hidden sm:mb-8 sm:flex sm:justify-center">
           <div className="relative rounded-full px-3 py-1 p-4 -ml-64 text-sm leading-6 bg-teal-500 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
           visitor management Software
           </div>
         </div>
         <div className="text-center ">
           <h1 className="lg:w-[570px] lg:text-start sm:text-center text-4xl lg:ml-[130px]  font-bold tracking-tight text-gray-900 sm:text-6xl">
           The modern visitor management <span className='text-blue-600'>software</span>
           </h1>
           <p className="lg:w-[550px] lg:ml-[130px] text-[16px]  mt-6  text-start text-gray-600">
           Upgrade from the paper sign-in sheets to a digital visitor management system to register and track each guest entering your workplace.
           </p>
           <div className="mt-10 flex items-center justify-center ">
           <div className="sm:col-span-11">
              
              <div className="mt-2 w-96">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="    Enter Your Working Email here"
                  className=" w-full rounded-full border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button htmlFor="email" className="w-40 bg-blue-600 text-center flex items-center justify-center rounded-full -ml-20 mt-2 py-2 text-lg font-medium leading-6 text-gray-900  ">
                  <h6 className='flex items-center text-white'>Get Started</h6>
              </button>
           </div>
         </div>
       </div>
      
     </div>

   <div className='ml-12'>
       <img src={img} alt="" />
   </div>
     </div>
      
    </div>
  )
}

