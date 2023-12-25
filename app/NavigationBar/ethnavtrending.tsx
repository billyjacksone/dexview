'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '@/app/components/Trending2';
import { useRouter } from 'next/navigation';

const sampleTrendingElements = [
  { rank: 1, name: '1CAT', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: 'OBTC', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'HEMULE', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: 'WEXO', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 5, name: 'MND', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 6, name: 'ENQAI', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 7, name: 'LEMON', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 8, name: 'DGEN', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 9, name: 'XMAS', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  { rank: 10, name: 'HRZN', Icon: () => <Image src="/ethereum.webp" width={20} height={20} alt="aoa" /> },
  // { rank: 11, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  // { rank: 12, name: 'AOA', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  // { rank: 13, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  
];

interface TrendingItems {
  name: string;
}

const ethnavitrending = () => {

  const router = useRouter();
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
