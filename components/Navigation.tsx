"use client";
import React, { useEffect } from 'react'
import Navigationheader from './Navigationheader';
import Image from 'next/image';
import Trending from './Trending';
import { useAppContext } from '@/lib/contexts';

const sampleTrendingElements = [
  {rank: 1, name: 'AOA', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa"/>},
  {rank: 2, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa"/>},
]

const Navigation = () => {
  const {setTrendingElements} = useAppContext();
  useEffect(() => {
    setTrendingElements(sampleTrendingElements);
  }, []);
  return (
    <> <Navigationheader/> <Trending /> </>
  )
}

export default Navigation;
