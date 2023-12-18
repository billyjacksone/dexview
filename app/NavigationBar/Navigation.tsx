import React, { useEffect } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '../components/Trending2';

const sampleTrendingElements = [
  { rank: 1, name: 'AOA', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 2, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
];

const Navigation = () => {
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
          position: 'static',
          top: '56px',
          zIndex: '998',
          height: '48px',
        }}
      >
        <Trending />
      </div>
    </>
  );
};

export default Navigation;