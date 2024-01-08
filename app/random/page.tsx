'use client'
import React, { useState } from 'react';
import MailIcon from '@/public/mail.svg';
import Image from 'next/image';
import Logo2 from '../components/Logo2';




const ConnectElement: React.FC<{ name: string; link?: string; icon?: string; onClick?: () => void }> = ({ name, link, icon, onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="bg-gray-700 bg-opacity-80  p-3 mb-0 flex items-center transition duration-300 hover:bg-gray-700" >
      {icon && (
        <div className="mr-2">
          <Image src={icon} alt="Icon" width={24} height={24} />
        </div>
      )}
      <a href={link} className="text-white">
        {name}
      </a>
    </div>
  );
};

const DarkOverlay: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div
    className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"
    onClick={onClose}
  ></div>
);

const ConnectBox: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // const { setMetaMaskConnected } = useMetaMask();


   return (
    <>
      <DarkOverlay onClose={onClose} />

      <div className="fixed top-0 right-0 z-50" style={{backgroundColor: "#2d3748", height: "1000px", width: '320px', paddingLeft:'20px', paddingRight: '20px'}}>
        <button
          className="absolute top-2 right-2 hover:bg-gray-700 text-white cursor-pointer bg-gray-700 border-none rounded-md p-2"
          onClick={onClose}
          aria-label="Close"
          style={{
            background: '#2d3748',
            // boxShadow: '0px 0px 0px 3px rgba(71, 91, 214, 0.8)',
            // borderRadius: '6px',
            // border: '2px lightblue',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4 flex items-center">
          <Logo2 className="w-6 h-6 text-white" />
          <a href="#" className="text-white ml-2">
            
          </a>
        </div>

        <div style={{backgroundColor: '#161a1e', height:'120px', marginBottom:'10px'}}>
          XXX
        </div>

        <div className="text-left overflow-auto">
          {/* Add the onClick handler to connect MetaMask */}
          <ConnectElement
            name="Advertise"
            link="#"
            icon="/advertise.svg"
            // onClick={connectWallet}
          />  
          <ConnectElement name="Wallet" link="/eth" icon="/wallet.svg"  />
          <ConnectElement
            name="Last Updated"
            link="#"
            icon="/lastupadted.svg"
          />
          <ConnectElement name="Etherium Mainnet" link="/eth" icon="/etheriumpng.png" />
          <ConnectElement name="Bnb-chain" link="/bnb-chain" icon="/bnbpng.png" />
          <ConnectElement name="Arbiturium One" link="/arbitrum" icon="/arbitrum.png" />
          <ConnectElement name="Polygon" link="/polygon" icon="/polygon.png" />
          <ConnectElement name="PulseChain" link="/pulse" icon="/pulse.png" />
          <ConnectElement name="Shibarium" link="/shibarum" icon="/shibarium.png" />
        </div>
          <div style={{marginTop: '10px'}}>
          <ConnectElement name="Telegram" link="https://t.me/dexview" icon="/telegram.svg" />
          <ConnectElement name="Twitter" link="https://twitter.com/dexview" icon="/twitter.svg" />
          </div>
      </div>
    </>
  );
};

const ConnectButton: React.FC = () => {
  const [isConnectBoxOpen, setIsConnectBoxOpen] = useState(false);
  // const { isMetaMaskConnected } = useMetaMask();


  const handleConnectClick = () => {
    setIsConnectBoxOpen(!isConnectBoxOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex gap-2 items-center ml-4 rounded-md bg-zinc-800/30 px-6 py-2 text-[#FFFFFFCC]"
        onClick={handleConnectClick}
      >
        <MailIcon />
        Connect
      </button>
      {isConnectBoxOpen && <ConnectBox onClose={() => setIsConnectBoxOpen(false)} />}
    </div>
  );
};

export default ConnectButton;
