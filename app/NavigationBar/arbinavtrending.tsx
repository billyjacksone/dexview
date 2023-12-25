'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '../components/Trendingarbi';

const sampleTrendingElements = [
  { rank: 1, name: 'BOOP', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: 'DOWN', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'CLUB', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: 'GLORI', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  { rank: 5, name: 'ARJ', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  // { rank: 6, name: 'BOOP', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  // { rank: 7, name: 'RAISIN', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  // { rank: 8, name: 'AIGAMBLE', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  // { rank: 9, name: 'BABYCOQ', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  // { rank: 10, name: 'GLORI', Icon: () => <Image src="/arbitrum.png" width={20} height={20} alt="aoa" /> },
  // { rank: 11, name: 'GEMINI', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  // { rank: 12, name: 'FTX', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  // { rank: 13, name: 'BABYCOQ', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  // { rank: 14, name: 'CXDO', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  // { rank: 15, name: 'AMPERE', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  
];

interface TrendingItems {
  name: string;
}

const ethnavitrending = () => {

  const [getname, setnames] = useState<TrendingItems[]>([]);
  const getTokens = async () => {
    try {
      const res: TrendingItems[] = await axios.get('http://localhost:8000/coins/polymain');
      setnames(res.data.data.trendingList);
    } catch (error) {
      console.log(error);
    }
  };

  const { setTrendingElements } = useAppContext();

  useEffect(() => {
    setTrendingElements(sampleTrendingElements);
  }, []);

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

export default ethnavitrending;
