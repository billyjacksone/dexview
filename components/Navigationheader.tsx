'use client'

import React from 'react'
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';
import SearchInput from './searchbar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navigationheader = () => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <>
      <div className="w-full h-20 bg-zinc-900 sticky top-0 ali left-0">
        <div className='flex relative flex-grow-1 flex-shrink-1 flex-basis:0 w-full'> 
          <div className="container mx-auto px-4 h-full">
            <div className="flex gap-3 items-center h-full right-0">
              <Image 
              src="/Logo.jpg"
              alt="Logo"
              width={width < 1024 ? "150" : "250"}
              height={width < 1024 ? "45" : "74"}
              className="relative"
              />
               <SearchInput />
              <ul className="hidden md:flex gap-x-8 text-white">
                <li>
                  <Link href="/docs">
                    <p>Docs</p>
                  </Link>
                </li>
                <li>
                  <Link href="/advertise">
                    <p>Advertise</p>
                  </Link>
                </li>
                <li>
                  <Link href="/wallet">
                    <p>Wallet</p>
                  </Link>
                </li>
              </ul>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigationheader;
