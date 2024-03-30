import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img from "../Assest/Frame 1171275770.png"
import img1 from "../Assest/Vector (17).png"
import img2 from "../Assest/Vector (18).png"
import img3 from "../Assest/c.png"


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className=" flex items-center justify-center p-20">

     <div className='lg:flex justify-between items-center  bg-blue-400 rounded-2xl'>

     <div className='ml-12'>
      <div className='flex flex-col space-y-20 items-center justify-center w-full'>
       <div className='w-full flex items-center justify-center ml-16'>
          <div className=''>
          <img className='mb-4' src={img3} alt="" />
          <p className='font-semibold leading-5'>End-to-end data encryption</p>
          </div>
          <div>
          <img className='mb-4' src={img1} alt="" />
          <p className='font-semibold leading-5'>Two-factor authentication</p>
          </div>
          <div>
          <img className='mb-4' src={img2} alt="" />
          <p className='font-semibold leading-5'>Role-based access control</p>
          </div>
       </div> 
       <div>
          <img src={img} alt="" />
       </div>
      </div>
   </div>

     <div className="relative isolate">
       
       <div className="mx-auto max-w-fit py-20 sm:py-20 lg:py-32">
         <div className="hidden sm:mb-8 sm:flex sm:justify-center">
           <div className="relative rounded-full px-3 py-1 p-4 -ml-96  text-sm leading-6 bg-teal-500 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
           Security
           </div>
         </div>
         <div className="text-center ">
           <h1 className="lg:w-[570px] -mt-6 lg:text-start sm:text-center text-4xl lg:ml-[130px]  font-bold tracking-tight text-gray-900 sm:text-6xl">
           Enterprise Level  Security. 
           </h1>
           <p className="lg:w-[500px] lg:ml-[130px] text-[22px]  mt-6  text-start text-gray-600">
           UrSpayce complies with industry-leading data security standards to protect your data from unauthorized access, use, or disclosure.
           </p>

         </div>
       </div>
      
     </div>

   
     </div>
      
    </div>
  )
}

