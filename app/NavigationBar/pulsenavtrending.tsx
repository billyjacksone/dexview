'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '../components/Trendingpulse';
import { TrendingElement } from '@/lib/types.common';
import axios from 'axios';

const sampleTrendingElements: TrendingElement[] = [
  { rank: 1, name: 'GENIE',symbol:'GENIE', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: 'TEDDY BEAR',symbol:'TEDDY BEAR', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'SDAI', symbol:'SDAI',Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: '9INCH',symbol:'9INCH', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 5, name: 'GRAPE',symbol:'GRAPE', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 6, name: 'JEDI', symbol:'JEDI',Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 7, name: '808', symbol:'808',Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
 
];

interface TrendingItems {
  name: string;
}

const Pulsenavitrending = () => {

  const [getname, setnames] = useState([]);

  // Custom hook from useAppContext
  const { setTrendingElements } = useAppContext();

  // useEffect hook for fetching data
  useEffect(() => {
    const getTokens = async () => {
      try {
        // Fetch data using axios
        const res = await axios.get(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/coins/polymain`);
        // Update state with fetched data
        setnames(res.data.data.trendingList);
      } catch (error) {
        console.log(error);
      }
    };

    // Call the getTokens function
    getTokens();

    // Set trending elements using the context
    setTrendingElements(sampleTrendingElements);
  }, [setTrendingElements]);


  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingInlineStart: 'var(--chakra-space-2)',
          paddingInlineEnd: 'var(--chakra-space-2)',
          background: 'rgb(22, 26, 30)',
          fontSize: 'var(--chakra-fontSizes-xs)',
          height: '48px',
        }}
      >
        <Trending />
      </div>
    </>
  );
};

export default Pulsenavitrending;
