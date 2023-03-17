import React from 'react'
import Image from 'next/image'

const SideBar = () => {
  return (
    <div className="bg-purplishColor h-screen w-[260px]">
      {/* user profile */}
      <div className='flex items-center gap-4'>
        <div>
          <img src="/woman.png" className="w-[55px] h-[55px]" />
        </div>

        <div>
          <h3 className='font-bold text-darkBlueColor '>Mrs Selina</h3>
          <p className='font-normal text-lightGray '>@igaspar</p>
        </div>
      </div>
  
       {/* navigation links */}
       <div>
         

         
       </div>

    </div>
  );
}

export default SideBar