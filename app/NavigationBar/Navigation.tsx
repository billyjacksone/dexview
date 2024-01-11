'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '@/lib/contexts';
import Trending from '@/app/components/Trendingmain';

interface TrendingItem {
  rank: number;
  name: string;
  Icon: React.ComponentType<any>;
}

const Navigation = () => {
  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([]);
  const { setTrendingElements } = useAppContext();

  const getTokens = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/coins/platformname`);
      const data = response.data.data.trendingList;

      const fetchedTrendingItems = data.map((item: any, index: number) => ({
        rank: index + 1,
        symbol: item.symbol,
      }));

      setTrendingItems(fetchedTrendingItems);
      setTrendingElements(fetchedTrendingItems);
    } catch (error) {
      console.error('Error fetching trending items:', error);
    }
  };

  useEffect(() => {
    // Add getTokens to the dependency array
    getTokens();
  }, [setTrendingElements, getTokens]);


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
        {/* Pass the fetched trendingItems as a prop to the Trending component */}
        <Trending  />
      </div>
    </>
  );
};

export default Navigation;





