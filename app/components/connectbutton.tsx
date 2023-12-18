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

const ConnectBox: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] justify-center text-center">
      {/* First Part */}
      <div className="mb-4 bg-gray-700 bg-opacity-80 rounded-md p-4 flex items-center">
        <MailIcon className="w-6 h-6 text-white" />
        <a href="#" className="text-white ml-2">
          Connect to wallet
        </a>
      </div>

      {/* Second Part */}
      <div className="bg-gray-700 bg-opacity-80 rounded-md p-6 text-left">
        <ConnectElement name="MetaMask" link="https://metamask.io/download/" icon="/MetaMask.svg" />
        <ConnectElement name="Coinbase wallet" link="#" icon="/coinbase.svg" />
        <ConnectElement
          name="Trust Wallet"
          link="https://link.trustwallet.com/open_url?coin_id=20000714&url=https://dexview.com/"
          icon="/trust.svg"
        />
        <ConnectElement name="Wallet Connect" link="#" icon="/walletconnect.svg" />
        <ConnectElement name="SafePal" link="#" icon="/safepal.svg" />
        <ConnectElement name="Rabby Wallet" link="https://rabby.io/" icon="/rabby.svg" />
      </div>

      <button className="text-blue-500 hover:underline mt-4 px-6 py-2 bg-gray-700 bg-opacity-80 rounded-md" onClick={onClose}>
        Close
      </button>
    </div>
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
