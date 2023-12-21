// import React from 'react'
// import LightningIcon from '@/public/lightning.svg'
// import { TrendingElement } from '../../lib/types.common'
// import { useAppContext } from '@/lib/contexts'

// const Trending = () => {
//     const {trendingElements} = useAppContext()
//     return (
//         <div className='flex gap-6 p-3 overflow-x-auto'>
//           <div className='flex gap-2 items-center'>
//             <LightningIcon className='w-6 h-6' color="#d0d1d2"/>
//             <p className='text-[#d0d1d2] text-base font-semibold'>Trending</p>
//           </div>
//           <div className='flex gap-4 items-center'>
//             {trendingElements.map((item: TrendingElement, index: number) => (
//               <div className={`flex items-center gap-1 ${index < 3 ? 'text-[#ecc94b]' : 'text-white'}`} key={index}>
//                 <p className='text-sm'>
//                   #{item.rank} {item.name}
//                 </p>
//                 <item.Icon />
//               </div>
//             ))}
//           </div>
//           {/* Arrow at the end */}
//           <div className='flex items-center text-white cursor-pointer'>
//             <span className='material-icons'></span>
//           </div>
//         </div>
//       );
//     };


// export default Trending



import React from 'react';
import LightningIcon from '@/public/lightning.svg';
import { TrendingItem } from '../../lib/types.common';
import { useAppContext } from '@/lib/contexts';

interface TrendingProps {
  trendingElements: TrendingItem[];
}

const Trending = ({ trendingElements }: TrendingProps) => {
  const { trendingElements: contextTrendingElements } = useAppContext();
  const elementsToDisplay = trendingElements.length > 0 ? trendingElements : contextTrendingElements;

  return (
    <div className='flex gap-6 p-3 overflow-x-auto' style={{
      scrollbarWidth: 'thin', // Firefox
      scrollbarColor: 'transparent transparent', // Firefox
      overflow: '-moz-scrollbars-none', // Firefox
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
    }}>
      <style>
        {`
          /* Add the following CSS to hide the scrollbar */
          .trending-scroll::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className='flex gap-2 items-center'>
        <LightningIcon className='w-6 h-6' color="#d0d1d2"/>
        <p className='text-[#d0d1d2] text-base font-semibold'>Trending</p>
      </div>
        <div className='flex gap-10 items-center trending-scroll'  style={{
        WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
        overflowX: 'auto',
        }}>
        {elementsToDisplay.map((item: TrendingItem, index: number) => (
          <div className={`flex items-center gap-1 ${index < 3 ? 'text-[#ecc94b]' : 'text-white'}`} key={index}>
            <p className='text-sm'>
              #{item.rank}{item.symbol}
            </p>
            {/* Add your icon component here */}
          </div>
        ))}
      </div>
      {/* Arrow at the end */}
      <div className='flex items-center text-white cursor-pointer'>
        <span className='material-icons'></span>
      </div>
    </div>
  );
};

export default Trending;









