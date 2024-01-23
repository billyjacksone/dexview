'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '@/app/components/Trending2';
import { TrendingElement } from '@/lib/types.common';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const sampleTrendingElements: TrendingElement[] = [
  { rank: 1, name: '1CAT', symbol: '1CAT', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: 'OGGY', symbol: 'OGGY', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'ETE', symbol: 'ETE', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: 'PALAI', symbol: 'PALAI', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 5, name: 'TAMA', symbol: 'TAMA', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 6, name: 'HEMULE', symbol: 'HEMULE', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 7, name: 'LEMON', symbol: 'LEMON', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 8, name: 'CHAT', symbol: 'CHAT', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 9, name: 'PALM', symbol: 'PALM', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 10, name: 'HRZN', symbol: 'HRZN', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  // { rank: 11, name: 'IGRAIL', symbol: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  // { rank: 12, name: 'AOA', symbol: 'AOA', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  // { rank: 13, name: 'IGRAIL', symbol: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
];


interface TrendingItems {
  name: string;
}

const Ethnavitrending = () => {

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

export default Ethnavitrending;
