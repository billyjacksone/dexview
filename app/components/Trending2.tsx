import React from 'react'
import LightningIcon from '@/public/lightning.svg'
import { TrendingElement } from '../../lib/types.common'
import { useAppContext } from '@/lib/contexts'

const Trending = () => {
    const {trendingElements} = useAppContext()
    return (
        <div className='flex gap-6 p-3'>
            <div className='flex gap-2 items-center'>
                <LightningIcon className='w-6 h-6' color="#d0d1d2"/>
             <p className='text-[#d0d1d2] text-base font-semibold'>Trending</p>
         </div>
         <div className='flex gap-4 items-center'>
                {trendingElements.map((item : TrendingElement, index : number) => (
                    <div className='flex items-center gap-1' key={index}>
                     <p className='text-sm text-[#ecc94b] '>#{item.rank} {item.name}</p>
                     <item.Icon />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending