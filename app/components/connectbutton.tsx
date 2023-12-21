// components/connectbutton.tsx
import React, { useState } from 'react';
import MailIcon from '@/public/mail.svg';
import Image from 'next/image'; // Import Image component

const ConnectElement: React.FC<{ name: string; link: string; icon?: string }> = ({ name, link, icon }) => {
  return (
    <div className="bg-gray-700 bg-opacity-80 rounded-md p-2 mb-2 flex items-center transition duration-300 hover:bg-gray-600">
      {icon && (
        <div className="mr-2">
          <Image src={icon} alt="Icon" width={24} height={24} /> {/* Use Image component for images */}
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
    onClick={onClose} // Close the ConnectBox when clicking on the overlay
  ></div>
);

const ConnectBox: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <>
     <DarkOverlay onClose={onClose} />
    
    <div className="fixed top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] bg-gray-800 bg-opacity-80 rounded-md justify-center text-center p-4 z-50">
      {/* Close button (cross icon) */}
      <button
        className="absolute top-2 right-2 text-white cursor-pointer bg-gray-700 border-none rounded-md p-2"
        onClick={onClose}
        aria-label="Close"
        style={{
          background: '#2d3748',
          boxShadow: '0px 0px 0px 3px rgba(71, 91, 214, 0.8)',
          borderRadius: '6px',
          border: '2px lightblue',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* First Part */}
      <div className="mb-4 flex items-center">
        <MailIcon className="w-6 h-6 text-white" />
        <a href="#" className="text-white ml-2">
          Connect to wallet
        </a>
      </div>

      {/* Second Part */}
      <div className="text-left">
        <ConnectElement name="MetaMask" link="https://metamask.app.link/dapp/dexview.com/" icon="/MetaMask.svg" />
        <ConnectElement name="Coinbase wallet" link="#" icon="/coinbase.svg" />
        <ConnectElement
          name="Trust Wallet"
          link="https://link.trustwallet.com/open_url?coin_id=20000714&url=https://dexview.com/"
          icon="/trust.svg"
        />
        <ConnectElement name="Wallet Connect" link="#" icon="/walletconnect.svg" />
        <ConnectElement name="SafePal" link="#" icon="/safepal.svg" />
        <ConnectElement name="Rabby Wallet" link="https://rabby.io/" icon="/rabby.svg" />
        {/* Add other ConnectElement components here */}
      </div>

      {/* Close button at the bottom (optional) */}
      {/* <button
        className="text-blue-500 hover:underline mt-4 px-6 py-2 bg-gray-700 bg-opacity-80 rounded-md"
        onClick={onClose}
      >
        Close
      </button> */}
    </div>
    </>
  );
};

const ConnectButton: React.FC = () => {
  const [isConnectBoxOpen, setIsConnectBoxOpen] = useState(false);

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
