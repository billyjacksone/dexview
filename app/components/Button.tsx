'use client'
import React, { useState, useEffect } from 'react';
import MailIcon from '@/public/profile.svg';
import Image from 'next/image';
import Logo2 from '../components/Logo2';
import { ethers } from 'ethers';
import useMetaMaskConnection from './metamaskconnection';

// Define ConnectElementProps interface
interface ConnectElementProps {
  name: string;
  link?: string;
  icon?: string;
  onClick?: () => void;
}

// ConnectElement component for individual connection options
const ConnectElement: React.FC<ConnectElementProps> = ({ name, link, icon, onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="bg-gray-700 bg-opacity-80  p-3 mb-0 flex items-center transition duration-300 hover:bg-gray-700">
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

// DarkOverlay component for the dark overlay when the ConnectBox is open
const DarkOverlay: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40" onClick={onClose}></div>
);

// ConnectBox component to display the MetaMask connection options
const ConnectBox: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { disconnectWallet, account } = useMetaMaskConnection();
  const [accountBalance, setAccountBalance] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = account || '';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  // Function to handle copy success
  const handleCopyClick = () => {
    copyToClipboard();
    setCopySuccess(true);

    // Reset copySuccess after 3 seconds
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };
  
  // Function to fetch account balance
  const fetchAccountBalance = async () => {
    if (account) {
      try {
        if ('ethereum' in window) {
          const provider = new ethers.providers.Web3Provider(window.ethereum as any);
          const balance = await provider.getBalance(account);
          setAccountBalance(ethers.utils.formatEther(balance));
        } else {
          console.error('MetaMask ethereum object not found on window');
        }
      } catch (error) {
        console.error('Error fetching account balance:', error);
      }
    }
  };

  useEffect(() => {
    fetchAccountBalance();
  }, [account]);

  return (
    <>
      <DarkOverlay onClose={onClose} />

      <div
        className="fixed top-0 right-0 z-50"
        style={{ backgroundColor: "#2d3748", height: "1000px", width: '320px', paddingLeft: '20px', paddingRight: '20px' }}
      >
        <button
          className="absolute top-2 right-2 hover:bg-gray-700 text-white cursor-pointer bg-gray-700 border-none rounded-md p-2"
          onClick={onClose}  
          aria-label="Close"
          style={{
            background: '#2d3748',
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
          <Logo2 />
          <a href="#" className="text-white ml-2">
          </a>
        </div>

        <div style={{ backgroundColor: '#161a1e', height: '100px', marginBottom: '10px', padding: '6px' }}>
        {account && (
            <div>
              <p>
                Account: {`${account.substring(0, 9)}...${account.slice(-4)}`}
                <button onClick={handleCopyClick} className="bg-blue-500 text-white px-1 py-1 rounded-md text-sm ml-2">
                  Copy
                </button>
                {copySuccess && <span className="text-green-500 ml-2">Copied!  </span>}
              </p>
              {accountBalance && (
                <p>
                  Balance: {' '}
                  <span className="text-green-500">{parseFloat(accountBalance).toFixed(3)} ETH</span>
                </p>
              )}
            </div>
          )}

        </div>

        <div className="text-left overflow-auto">
          <ConnectElement name="Advertise" link="#" icon="/advertise.svg" />
          <ConnectElement name="Wallet" link="#" icon="/wallet.svg" />
          <ConnectElement name="Last Updated" link="#" icon="/lastupadted.svg" />
          <ConnectElement name="Etherium Mainnet" link="/eth" icon="/etheriumpng.png" />
          <ConnectElement name="Bnb-chain" link="/bnb-chain" icon="/bnbpng.png" />
          <ConnectElement name="Arbiturium One" link="/arbitrum" icon="/arbitrum.png" />
          <ConnectElement name="Polygon" link="/polygon" icon="/polygon.png" />
          <ConnectElement name="PulseChain" link="/pulse" icon="/pulse.png" />
          <ConnectElement name="Shibarium" link="/shibarum" icon="/shibarium.png" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <ConnectElement name="Telegram" link="https://t.me/dexview" icon="/telegram.svg" />
          <ConnectElement name="Twitter" link="https://twitter.com/dexview" icon="/twitter.svg" />
        </div>
      </div>
    </>
  );
};

// ConnectButton component to handle MetaMask connection and display
const ConnectButton: React.FC = () => {
  const { isMetaMaskConnected, metaMaskAccount, connectWallet } = useMetaMaskConnection();
  const [isConnectBoxOpen, setIsConnectBoxOpen] = useState(false);

  const handleConnectClick = () => {
    setIsConnectBoxOpen(!isConnectBoxOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center rounded-full bg-zinc-800/30 w-10 h-10 text-[#FFFFFFCC] hover:bg-zinc-700 hover:border-blue-300 border hover:border-opacity-50 transition-all duration-300"
        onClick={handleConnectClick}
      >
        <MailIcon className="w-6 h-6" />
      </button>
      {isConnectBoxOpen && <ConnectBox onClose={() => setIsConnectBoxOpen(false)} />} {/* Pass the correct onClose function */}
    </div>
  );
};

export default ConnectButton;



