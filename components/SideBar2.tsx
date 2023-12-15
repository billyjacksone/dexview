// components/Sidebar.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import ListIn from '../public/listin.svg';
import Advertise from '../public/advertise.svg';
import Arbitrum from '../public/arbitrum.svg';
import Polygon from '../public/polygon.svg';
import Wallet from '../public/wallet.svg';
import LastUpdated from '../public/lastupadted.svg';
import NewPairs from '../public/newpairs.svg';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SidebarListItemProps {
  name: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  src?: string;
  color?: string;
  link: string;
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ name, Icon, src, color, link }) => {
  return (
    <Link href={link}>
      <a className="flex items-center gap-2 text-white hover:text-gray-300 p-2 rounded-md transition-all">
        {Icon && <Icon className={`w-6 h-6`} color={color} />}
        {src && <Image alt="Icon" src={src} width={24} height={24} />}
        <p className="opacity-80 text-sm">{name}</p>
      </a>
    </Link>
  );
};

const SidebarListItems = [
  { name: 'Advertise', Icon: Advertise, color: '#d0d1d2', link: '/advertise' },
  { name: 'Wallet', Icon: Wallet, color: '#d0d1d2', link: '/advertise' },
  { name: 'Last Updated', Icon: LastUpdated, color: '#d0d1d2', link: '/advertise' },
  { name: 'New Pairs', Icon: NewPairs, color: '#0ecb81', link: '/advertise' },
  { name: 'Etherium Mainnet', src: '/etheriumpng.png', color: '#0ecb81', link: '/advertise' },
  { name: 'Bnb Chain', src: '/bnbpng.png', color: '#0ecb81', link: '/advertise' },
  { name: 'Arbiturium One', Icon: Arbitrum, color: '#0ecb81', link: '/advertise' },
  { name: 'Polygon', Icon: Polygon, color: '#d0d1d2', link: '/advertise' },
  { name: 'Pulse Chain', src: '/pulse.png', color: '#0ecb81', link: '/advertise' },
  { name: 'BitRock', Icon: NewPairs, color: '#0ecb81', link: '/advertise' },
  { name: 'Shibarium', Icon: Wallet, color: '#0ecb81', link: '/advertise' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#1e2025] text-white w-[15%] mt-3 py-1 items-center gap-3">
      <div className="flex w-[95%] border-b-[1px] border-[rgb(39,42,42)] py-4 items-center">
        <p className="flex-1 opacity-80 text-sm">Chains</p>
        <ListIn />
      </div>
      <div className="flex w-full px-3 flex-col gap-4">
        {SidebarListItems.map((item, index) => (
          <SidebarListItem
            key={index}
            name={item.name}
            Icon={item.Icon}
            color={item.color}
            link={item.link}
            src={item.src ? item.src : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
