// components/Sidebar.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ListIn from '../public/listin.svg';
import Advertise from '../public/advertise.svg';
import Arbitrum from '../public/arbitrum.svg';
import Polygon from '../public/polygon.svg';
import Wallet from '../public/wallet.svg';
import LastUpdated from '../public/lastupadted.svg';
import NewPairs from '../public/newpairs.svg';

interface SidebarListItemProps {
  name: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  src?: string;
  color?: string;
  link: string;
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ name, Icon, src, color, link }) => {
  const [showIconsOnly, setShowIconsOnly] = useState(false);

  return (
    <Link href={link}>
      <div className={`flex items-center gap-1 text-gray-300 p-2 rounded-md transition-all hover:bg-[#1a1a1a]`} style={{ background: 'rgb(22, 26, 30)' }}>
        {Icon && <Icon className="w-8 h-8" />}
        {src && <Image alt="Icon" src={src} width={26} height={26} />}
        {!showIconsOnly && <p className="opacity-80 text-xs">{name}</p>}
      </div>
    </Link>
  );
};

const SidebarListItems: SidebarListItemProps[] = [
  { name: 'Advertise', Icon: Advertise, color: '#d0d1d2', link: '/advertise' },
  { name: 'Wallet', Icon: Wallet, color: '#d0d1d2', link: '/wallet' },
  { name: 'Last Updated', Icon: LastUpdated, color: '#d0d1d2', link: '/last-updated' },
  { name: 'New Pairs', Icon: NewPairs, color: '#0ecb81', link: '/new-pairs' },
  { name: 'Etherium Mainnet', src: '/etheriumpng.png', color: '#0ecb81', link: '/etherium-mainnet' },
  { name: 'Bnb Chain', src: '/bnbpng.png', color: '#0ecb81', link: '/bnb-chain' },
  { name: 'Arbiturium One', src: '/arbitrum.png', color: '#0ecb81', link: '/arbiturium-one' },
  { name: 'Polygon', src: '/polygon.png', color: '#d0d1d2', link: '/polygon' },
  { name: 'PulseChain', src: '/pulse.png', color: '#d0d1d2', link: '/polygon' },
  { name: 'BitRock', src: '/brock.png', color: '#d0d1d2', link: '/polygon' },
  { name: 'Shibarium', src: '/shibarium.png', color: '#d0d1d2', link: '/polygon' },
];

const Sidebar: React.FC = () => {
  const [showIconsOnly, setShowIconsOnly] = useState(false);

  const handleToggleSidebar = () => {
    setShowIconsOnly(!showIconsOnly);
  };

  return (
    <div className={`flex flex-col bg-[#1e2025] text-white w-[12%] mt-3 items-center gap-2 ${showIconsOnly ? 'max-w-[40px]' : ''}`} style={{ background: 'rgb(22, 26, 30)' }}>
      <div className={`flex w-[95%] border-b-[1px] border-[rgb(39,42,42)] py-1 items-center cursor-pointer`} onClick={handleToggleSidebar} style={{ background: 'rgb(22, 26, 30)' }}>
        <p className="flex-1 opacity-80 text-xs">Chains</p>
        <ListIn className="w-6 h-6" />
      </div>
      <div className="flex w-full px-1 flex-col gap-1" style={{ background: 'rgb(22, 26, 30)' }}>
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
