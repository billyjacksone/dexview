'use client'

import React from 'react'
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';
import SearchInput from './searchbar';
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

  const navLinks = [{ name: 'Docs', link: '/docs' },
   {name: 'Advertise', link: '/advertise'}, 
   {name: 'New Pairs', link: '/advertise'}, 
   {name: 'Multichart', link: '/advertise'},
   {name: 'Wallet', link: '/advertise'}]

  return (
    <>
      <div className="w-full flex h-13 bg-zinc-900 sticky top-0">
          <div className="flex justify-start items-center h-full w-full">
            <div className="flex gap-3 items-center h-full w-full px-3">
              <Logo />
               <SearchInput />
              <ul className="hidden md:flex gap-x-8 text-white">
                {navLinks.map((link) => (
                  <li key={link.name} className='flex items-center'>
                    <Link href={link.link}>
                      <p className="hover:text-blue-400 text-center whitespace-nowrap text-[#FFFFFFCC]">{link.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button />
            </div>
          </div>
        </div>
    </>
  );
};

export default Navigationheader;
