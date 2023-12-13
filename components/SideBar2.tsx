'use client'

import React from 'react'
import Link from 'next/link';
import ListIn from '../public/listin.svg'
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

  const navLinks = [{ name: 'Advertise', link: '/docs' },
   {name: 'Wallet', link: '/advertise'}, 
   {name: 'Last Updated', link: '/advertise'}, 
   {name: 'New Pairs', link: '/advertise'},
   {name: 'Etherium Mainnet', link: '/advertise'},
   {name: 'Bnb Chain', link: '/advertise'},
   {name: 'Arbiturium One', link: '/advertise'},
   {name: 'Polygon', link: '/advertise'},
   {name: 'Pulse Chain', link: '/advertise'},
   {name: 'BitRock', link: '/advertise'},
   {name: 'Shibarium', link: '/advertise'}
   
  ]

  return (
    <>
      <div className='flex flex-col bg-[#1e2025] text-white w-[15%] mt-3 py-1 items-center gap-3'>
        <div className="flex w-[95%] border-b-[1px] border-[rgb(39,42,42)] py-4 items-center">
          <p className='flex-1 opacity-80 text-sm'>Chains</p>
              <ListIn />
        </div>

        <div className='flex w-full px-3 flex-col gap-4'>
              <ul className="hidden md:flex gap-x-8 text-white">
                {navLinks.map((link) => (
                  <li key={link.name} className='flex items-center'>
                    <Link href={link.link}>
                      <div className="hover:text-blue-400 text-center whitespace-nowrap text-[#FFFFFFCC]">{link.name}</div>
                      
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    </>
  );
};

export default Navigationheader;
