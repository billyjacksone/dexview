'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '../components/Trendingbnb';

const sampleTrendingElements = [
  { rank: 1, name: 'GROOKGIRL', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: '$GROKOLAUS', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'BABYGROK', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: 'BABYBONK', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 5, name: 'BABYGROKX', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 6, name: 'BABYGRONK', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 7, name: 'OPX', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 8, name: 'NAZAR', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 9, name: 'KINGGROKX', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 10, name: 'AET', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 11, name: 'DADA', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 12, name: 'GROOKDOGE', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 13, name: 'SSP', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  { rank: 14, name: 'FINC', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  // { rank: 15, name: 'AMPERE', Icon: () => <Image src="/bnbpng.png" width={20} height={20} alt="aoa" /> },
  
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
