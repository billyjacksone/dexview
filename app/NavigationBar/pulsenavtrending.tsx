'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '../components/Trendingpulse';

const sampleTrendingElements = [
  { rank: 1, name: 'GENIE', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: 'TEDDY BEAR', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'SDAI', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: '9INCH', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 5, name: 'GRAPE', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 6, name: 'JEDI', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
  { rank: 7, name: '808', Icon: () => <Image src="/pulse.png" width={20} height={20} alt="aoa" /> },
 
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
        const res = await axios.get('http://localhost:8000/coins/polymain');
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
