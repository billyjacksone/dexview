import React, { useState } from 'react'

const page = () => {
  return (
    <div className='flex gap-2 w-fit flex-start p-4'>
     <div className="flex flex-col gap-3">
        <div className="flex flex-col bg-yellow-200">
            Box1
        </div>
        <div className='flex flex-col bg-yellow-200'>
            <div className='flex gap-2 '>
                <span>24H</span>
                <span>RUG-CHECK</span>
                <span>TOKENOMICS</span>
            </div>
            Box2
        </div>
        <div className='flex flex-col bg-yellow-200'>Box3</div>
        <div className='flex flex-col bg-yellow-200'>Box4</div>
     </div>
     <div className='flex flex-col gap-3'>
        <div className='bg-yellow-200'>
            Graph Box
        </div>
        <div className='bg-yellow-200'>
            Table Box
        </div>
     </div>
     <div className='flex gap-2'>
        Button Box : Basic Button Design
        <button className={`text-sm rounded-[6px] w-[75px] h-[29px] px-4 py-1 text-white ${true ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#1e98f4]' : 'bg-[#161a1e] opacity-80'}`}>
            Hello
        </button>
        <button className={`text-sm rounded-[6px] text-white w-[75px] h-[29px] px-4 py-1 ${false ? 'bg-[#f6465d]' : 'bg-[#161a1e] opacity-80'}`}>
            Hello
        </button>
     </div>
    </div>
  )
}

export default page