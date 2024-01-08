
'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import ListIn from '@/public/listin.svg';
import Advertise from '@/public/advertise.svg';
import Wallet from '@/public/wallet.svg';
import LastUpdated from '@/public/lastupadted.svg';
import NewPairs from '@/public/newpairs.svg';
import Icon1 from '@/public/telegram.svg';
import Icon2 from '@/public/twitter.svg';

interface SidebarListItemProps {
  name: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  src?: string;
  color?: string;
  link: string;
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ name, Icon, src, color, link }) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleItemClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isActive) {
      e.currentTarget.style.background = 'rgba(169, 169, 169, 0.1)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isActive) {
      e.currentTarget.style.background = 'transparent';
    }
  };

  return (
    <Link href={link}>
      <div
        className={`flex items-center gap-2 text-gray-300 p-2 rounded-md transition-all ${
          isActive ? 'bg-[#0e0e0e]' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleItemClick}
      >
        {Icon && <Icon className={`w-8 h-8 ${isActive ? 'mr-10' : ''}`} />}
        {src && <Image alt="Icon" src={src} width={26} height={26} />}
        <p className={`opacity-80 text-sm ${isActive ? 'text-white  ' : ''}`}>{name}</p>
      </div>
    </Link>
  );
};




const SidebarListItems = [
  {
    name: 'Advertise',
    Icon: Advertise,
    color: '#d0d1d2',
    link:
      'https://a-ads.com/campaigns/new?selected_site_id=679718&selected_source_type=site&partner=2177768&__cf_chl_tk=.iiJ1gcK4ug1Oo7.qmqz91QiTBl0k9OTp8TIERY_pcI-1702894103-0-gaNycGzNDdA',
  },
  { name: 'Wallet', Icon: Wallet, color: '#d0d1d2', link: '/wallet' },
  { name: 'Last Updated', Icon: LastUpdated, color: '#d0d1d2', link: '/last-updated' },
  { name: 'New Pairs', Icon: NewPairs, color: '#0ecb81', link: '/newpair' },
  { name: 'Etherium Mainnet', src: '/etheriumpng.png', color: '#0ecb81', link: '/eth' },
  { name: 'Bnb Chain', Icon: () => <Image alt="Icon" src="/bnbpng.png" width={26} height={26} />, color: '#0ecb81', link: '/bnb-chain' },
  { name: 'Arbiturium One',Icon: () => <Image alt="Icon" src="/arbitrum.png" width={26} height={26} />,  color: '#0ecb81', link: '/arbitrum' },
  { name: 'Polygon',Icon: () => <Image alt="Icon" src="/polygon.png" width={26} height={26} />,  color: '#d0d1d2', link: '/polygon' },
  { name: 'PulseChain',Icon: () => <Image alt="Icon" src="/pulse.png" width={26} height={26} />,  color: '#d0d1d2', link: '/pulse' },
  // { name: 'BitRock',Icon: () => <Image alt="Icon" src="/brock.png" width={26} height={26} />,  color: '#d0d1d2', link: '/bitrock' },
  { name: 'Shibarium',Icon: () => <Image alt="Icon" src="/shibarium.png" width={26} height={26} />,  color: '#d0d1d2', link: '/shibarum' },
];

const Sidebar: React.FC = () => {
  return (
    <div className={`flex flex-col bg-[#1e2025] text-white  items-center gap-1`} style={{ background: 'rgb(22, 26, 30)', height: '650px', width: '190px' }}>
      <div
        className={`flex w-[95%] border-b-[1px] border-[rgb(39,42,42)] py-2 items-center cursor-pointer`}
        style={{ background: 'rgb(22, 26, 30)' }}
      >
        {/* <p className={`flex-1 opacity-80 text-xs`}>Chains</p> */}
        <ListIn className={`w-6 h-6`} />
      </div>
      <div className="flex w-full px-1 flex-col gap-0.5 " style={{ background: 'rgb(22, 26, 30)' }} >
        {SidebarListItems.map((item, index) => (
          <React.Fragment key={index}>
            <SidebarListItem name={item.name} Icon={item.Icon} color={item.color} link={item.link} src={item.src ? item.src : ''} />
            {index === SidebarListItems.length - 1 && (
              <div className="border-b-[1px] border-[rgb(39,42,42)]" style={{ background: 'rgb(22, 26, 30)' }} />
            )}
          </React.Fragment>
        ))}
        {/* Additional elements */}
        <SidebarListItem name="Telegram" Icon={Icon1} color="#d0d1d2" link="https://t.me/dexview" />
        <SidebarListItem name="Twitter" Icon={Icon2} color="#d0d1d2" link="https://twitter.com/dexview" />
        <div className="border-b-[1px] border-[rgb(39,42,42)]" style={{ background: 'rgb(22, 26, 30)' }} />
      </div>
    </div>
  );
};

export default Sidebar;
