import React from 'react';
import { useRouter } from 'next/navigation';
import LightningIcon from '@/public/lightning.svg';
import { TrendingElement } from '../../lib/types.common';
import { useAppContext } from '@/lib/contexts';
import { useState } from 'react';

const Trending = () => {
  const { trendingElements } = useAppContext();
  const router = useRouter();
  const [clickedName, setClickedName] = useState(null);

  const handleItemClick = (name: string) => {
    // Navigate to the corresponding page when an element is clicked
    router.push(`/polygon/${name}`);
    // setClickedName(name);
  };

  return (
    <div className='flex gap-6 p-3 overflow-x-auto' style={{ scrollbarWidth: 'thin', overflow: '-moz-scrollbars-none', WebkitOverflowScrolling: 'touch' }}>
      <style>
        {`
          /* Add the following CSS to hide the scrollbar */
          .trending-scroll::-webkit-scrollbar {
            display: none;
          }

          /* Add hover effect and change cursor */
          .trending-item {
            cursor: pointer;
          }

          
        `}
      </style>
      <div className='flex gap-2 items-center'>
        <LightningIcon className='w-6 h-6' color="#d0d1d2" />
        <p className='text-[#d0d1d2] text-base font-semibold'>Trending</p>
      </div>
      <div className='flex gap-8 items-center trending-scroll' style={{ WebkitOverflowScrolling: 'touch', overflowX: 'auto' }}>
        {trendingElements.map((item: TrendingElement, index: number) => (
          <div
            className={`flex items-center gap-1 ${index < 3 ? 'text-[#ecc94b]' : 'text-white'} trending-item`}
            key={index}
            onClick={() => handleItemClick(item.name)}
          >
            <p className='text-sm'>
              #{item.rank}_{item.name}
            </p>
            {item.Icon && <item.Icon />}
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