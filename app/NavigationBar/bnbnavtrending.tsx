'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '../components/Trendingbnb';
import { TrendingElement } from '@/lib/types.common';
import axios from 'axios';

const sampleTrendingElements: TrendingElement[] = [
  { rank: 1, name: 'GROOKGIRL', symbol: 'GROOKGIRL', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: '$GROKOLAUS', symbol: '$GROKOLAUS', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'BABYGROK', symbol: 'BABYGROK', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: 'BABYBONK', symbol: 'BABYBONK', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 5, name: 'BABYGROKX', symbol: 'BABYGROKX', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 6, name: 'BABYGRONK', symbol: 'BABYGRONK', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 7, name: 'OPX', symbol: 'OPX', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 8, name: 'NAZAR', symbol: 'NAZAR', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 9, name: 'KINGGROKX', symbol: 'KINGGROKX', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 10, name: 'AET', symbol: 'AET', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 11, name: 'DADA', symbol: 'DADA', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 12, name: 'GROOKDOGE', symbol: 'GROOKDOGE', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 13, name: 'SSP', symbol: 'SSP', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 14, name: 'FINC', symbol: 'FINC', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  // { rank: 15, name: 'AMPERE', symbol: 'AMPERE', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
];


interface TrendingItems {
  name: string;
}

const Bnbnavitrending = () => {

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

export default Bnbnavitrending;
