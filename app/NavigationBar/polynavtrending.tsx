'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '../components/Trendingpoly';

const sampleTrendingElements = [
  { rank: 1, name: 'JUGNI', Icon: () => <Image src="/polygon.png" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: 'LK', Icon: () => <Image src="/polygon.png" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'GFR', Icon: () => <Image src="/polygon.png" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: 'DAI', Icon: () => <Image src="/polygon.png" width={20} height={20} alt="aoa" /> },
  
];

interface TrendingItems {
  name: string;
}

const Polynavitrending = () => {

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

export default Polynavitrending;
