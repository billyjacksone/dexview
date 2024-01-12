
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';
import Button from '../components/connectbutton';
import SearchInput from '../components/searchbar';
import Trending from '../components/Trending2'; // Import Trending component
import { useAppContext } from '@/lib/contexts';
import useMetaMaskConnection from '../components/meta';
import Button2 from '../components/Button';





interface NavigationheaderProps {
  isMetaMaskConnected: boolean;
}

const Navigationheader: React.FC<NavigationheaderProps> = () => {
  const isMetaMaskConnected = useMetaMaskConnection();
  
  const [width, setWidth] = useState(0);

  // const { isMetaMaskConnected } = useAppContext();

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const navLinks = [
    { name: 'Docs', link: '/docs' },
    { name: 'Advertise', link: '/advertise' },
    { name: 'New Pairs', link: '/newpair' },
    { name: 'Multichart', link: '/advertise' },
    { name: 'Wallet', link: '/advertise' },
  ];

  return (
    <>
      <div
        className="w-full flex h-13 bg-zinc-900"
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingInlineStart: 'var(--chakra-space-2)',
          paddingInlineEnd: 'var(--chakra-space-2)',
          paddingTop: 'var(--chakra-space-2)',
          paddingBottom: 'var(--chakra-space-2)',
          gap: 'var(--chakra-space-6)',
          background: 'rgb(22, 26, 30)',
          WebkitBoxAlign: 'center',
          alignItems: 'center',
        }}
      >
        <div className="flex justify-start items-center h-full w-full">
          <div className="flex gap-3 items-center h-full w-full px-3">
            <Logo />
            <SearchInput />
            <ul className="hidden md:flex gap-x-8 text-white">
              {navLinks.map((link) => (
                <li key={link.name} className="flex items-center">
                  <Link href={link.link}>
                    <p className="hover:text-blue-400 text-center whitespace-nowrap text-[#FFFFFFCC]">
                      {link.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Conditionally render ConnectButton or profile button based on MetaMask connection */}
            {isMetaMaskConnected ? (
              <Button2 />
            ) : (
              <Button />
            )}
          </div>
        </div>
      </div>
      {/* Include Trending component here */}
      {/* <Trending /> */}
    </>
  );
};

export default Navigationheader;