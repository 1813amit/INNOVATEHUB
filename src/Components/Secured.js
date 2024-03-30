import React from "react";
import img1 from "../Assest/Frame 1171275852.png"
import { FaAngleRight } from "react-icons/fa6";

const Secured = () => {
  return (
    <>
     <div className="flex flex-col items-center justify-center ">
    <h2 className="text-4xl font-semibold">Access Control Advance System</h2>
    <h3  className="text-5xl font-bold leading-snug">Secured and Digital Entry for Your visitors & Employees</h3>
    </div>
   <div className="w-full bg-blue-500 p-10 lg:h-[600px]">

   

    <div className="lg:flex lg:items-center lg:justify-center border-red-950 h-full rounded-2xl bg-red-500 ">
    <div className="flex flex-col items-center justify-center w-1/3">
    <div className="flex flex-col items-center justify-between ">
    <div className="flex items-center justify-end">
        <h1 className="font-semibold text-2xl lg:-ml-24">Access Control App</h1>
        <FaAngleRight className="text-3xl lg:ml-36" />
     </div>
     <p className="w-3/4 lg:-ml-36 leading-6">Integrates with your existing hardware device to provide authorized users with access to specific areas in your building.</p>
     <h1 className="w-3/4 lg:-ml-36 h-0.5 bg-gray-300 mt-3"></h1>
    </div> 

    <div className="flex flex-col items-center justify-between ">
    <div className="flex items-center  justify-center">
        <h1 className="font-semibold text-center text-2xl lg:-ml-24 mt-4">Access Control App</h1>
        <FaAngleRight className="text-3xl lg:ml-36 mt-6" />
        
     </div>
     <h1 className="w-[340px] lg:-ml-36 h-0.5 bg-gray-300 mt-6"></h1>
    
    </div>

    <div className="flex flex-col items-center justify-between ">
    <div className="flex items-center  justify-center">
        <h1 className="font-semibold text-center text-2xl lg:-ml-24 mt-4">Access Control App</h1>
        <FaAngleRight className="text-3xl lg:ml-36 mt-6"/>
        
     </div>
     <h1 className="w-[340px] lg:-ml-36 h-0.5 bg-gray-300 mt-6"></h1>
    
    </div>

    <div className="flex flex-col items-center justify-between ">
    <div className="flex items-center  justify-center">
        <h1 className="font-semibold text-center text-2xl lg:-ml-24 mt-4">Access Control App</h1>
        <FaAngleRight className="text-3xl lg:ml-36 mt-6"/>
        
     </div>
     <h1 className="w-[340px] lg:-ml-36 h-0.5 bg-gray-300 mt-6"></h1>
    
    </div>

    
    </div>


    <div>
        <img src={img1} alt="" />
    </div>
   </div>
   </div>
   </>
  );
};

export default Secured;
