import React from 'react'
import LightningIcon from '@/public/lightning.svg'
import { TrendingElement } from '../../lib/types.common'
import { useAppContext } from '@/lib/contexts'

const Trending = () => {
    const {trendingElements} = useAppContext()
    return (
        <div className='flex gap-6 p-3 overflow-x-auto'>
          <div className='flex gap-2 items-center'>
            <LightningIcon className='w-6 h-6' color="#d0d1d2"/>
            <p className='text-[#d0d1d2] text-base font-semibold'>Trending</p>
          </div>
          <div className='flex gap-4 items-center'>
            {trendingElements.map((item: TrendingElement, index: number) => (
              <div className={`flex items-center gap-1 ${index < 3 ? 'text-[#ecc94b]' : 'text-white'}`} key={index}>
                <p className='text-sm'>
                  #{item.rank} {item.name}
                </p>
                <item.Icon />
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


export default Trending

// import React, { useState, useEffect, useRef } from 'react';
// import LightningIcon from '@/public/lightning.svg';
// import { TrendingElement } from '../../lib/types.common';
// import { useAppContext } from '@/lib/contexts';

// const Trending = () => {
//   const { trendingElements } = useAppContext();
//   const [activeElements, setActiveElements] = useState(trendingElements.slice(0, 5));
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = containerRef.current;
//     if (scrollContainer) {
//       const firstChild = scrollContainer.firstChild;
  
//       if (firstChild) {
//         const elementWidth = firstChild.offsetWidth;
//         const scrollDistance = activeElements.length * elementWidth;
  
//         const handleScroll = () => {
//           if (scrollContainer.scrollLeft >= scrollDistance) {
//             const newElements = trendingElements.slice(activeElements.length, activeElements.length + 5);
//             setActiveElements([...activeElements, ...newElements]);
//           }
//         };
  
//         scrollContainer.addEventListener('scroll', handleScroll);
//         return () => scrollContainer.removeEventListener('scroll', handleScroll);
//       }
//     }
//   }, [containerRef, activeElements, trendingElements]);

//   return (
//     <div className='css-qm29w9'>
//       {/* Constant first trending text and image */}
//       <div className='flex gap-2 items-center'>
//         <LightningIcon className='w-6 h-6' color='#d0d1d2' />
//         <p className='text-[#d0d1d2] text-base font-semibold'>Trending</p>
//       </div>

//       {/* Scrolling elements */}
//       <div
//         className='flex items-center trending-scroll overflow-x-scroll'
//         ref={containerRef}
//         style={{
//           animation: 'trendingScroll 30s linear infinite',
//         }}
//       >
//         {activeElements.map((item: TrendingElement, index: number) => (
//   <div
//     key={index}
//     className='css-qm29w9'
//     style={{ visibility: index < activeElements.length - 5 ? 'visible' : 'hidden' }}
//   >
//     <item.Icon className='w-4 h-4' />
//     <p className='text-sm text-[#ffffff]'>
//       #{item.rank} {item.name}
//     </p>
//   </div>
// ))}
//       </div>
//     </div>
//   );
// };

// export default Trending;











