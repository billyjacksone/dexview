'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '../components/Trendingarbi';
import { TrendingElement } from '@/lib/types.common';
import axios from 'axios';

const sampleTrendingElements: TrendingElement[] = [
  { rank: 1, name: 'BOOP', symbol: 'BOOP', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: 'DOWN', symbol: 'DOWN', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'CLUB', symbol: 'CLUB', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: 'GLORI', symbol: 'GLORI', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  { rank: 5, name: 'ARJ', symbol: 'ARJ', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
];


interface TrendingItems {
  name: string;
}

const Arbinavtrending = () => {
  // State hook for storing trending item names
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

  // Return the JSX for the component
  return (
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
      {/* Render the Trending component */}
      <Trending />
    </div>
  );
};

// Export the component
export default Arbinavtrending;