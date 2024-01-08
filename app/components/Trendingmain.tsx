import React from 'react';
import LightningIcon from '@/public/lightning.svg';
// import { TrendingItem } from '../../lib/types.common';
import { useAppContext } from '@/lib/contexts';
import { useRouter } from 'next/navigation';

// interface TrendingProps {
//   trendingElements: TrendingItem[];
// }




const Trending = () => {
  const { trendingElements } = useAppContext();
  // const elementsToDisplay = trendingElements.length > 0 ? trendingElements : contextTrendingElements;
  const router = useRouter();

  const handleItemClick = (name: string) => {
    // Navigate to the corresponding page when an element is clicked
    router.push(`/eth/${name}`);
    // setClickedName(name);
  };

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
        <p className='text-[#d0d1d2] text-base font-bold'>Trending</p>
      </div>
        <div className='flex gap-6 items-center trending-scroll'  style={{
        WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
        overflowX: 'auto',
        }}>
        {trendingElements.map((item: TrendingItem, index: number) => (
          <div className={`flex items-center gap-1 ${index < 3 ? 'text-[#ecc94b]' : 'text-white'}`} key={index} onClick={() => handleItemClick(item.name)}>
            <p className='text-sm'>
              #{item.rank}_{item.symbol}
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

