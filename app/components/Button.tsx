'use client'
import React, { useState } from 'react';
import MailIcon from '@/public/profile.svg';
import Image from 'next/image';
import Logo2 from '../components/Logo2';
import { ethers } from 'ethers';
import useMetaMaskConnection from './metamaskconnection';



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

 

  // interface WalletData {
  //   address: string;
  //   balance: string | null;
  // }
  
  // function App() {
  //   // useState for storing and retrieving wallet details
  //   const [data, setData] = useState<WalletData>({
  //     address: '',
  //     balance: null,
  //   });
  
  //   // Button handler button for handling a
  //   // request event for metamask
  //   const btnHandler = () => {
  //     // Asking if metamask is already present or not
  //     if (window.ethereum) {
  //       // res[0] for fetching a first wallet
  //       window.ethereum
  //         .request({ method: 'eth_requestAccounts' })
  //         .then((res: string[]) => accountChangeHandler(res[0]))
  //         .catch((error) => console.error('Error requesting accounts:', error));
  //     } else {
  //       alert('Install MetaMask extension!!');
  //     }
  //   };
  
  //   // getBalance function for getting a balance in
  //   // a right format with the help of ethers
  //   const getBalance = (address: string) => {
  //     // Requesting balance method
  //     window.ethereum
  //       .request({
  //         method: 'eth_getBalance',
  //         params: [address, 'latest'],
  //       })
  //       .then((balance) => {
  //         // Setting balance
  //         setData({
  //           ...data,
  //           balance: ethers.utils.formatEther(balance),
  //         });
  //       })
  //       .catch((error) => console.error('Error getting balance:', error));
  //   };
  
  //   // Function for handling all events
  //   const accountChangeHandler = (account: string) => {
  //     // Setting an address data
  //     setData({
  //       address: account,
  //       balance: null, // Reset balance when the address changes
  //     });
  
  //     // Setting a balance
  //     getBalance(account);
  //   };
  
  //   useEffect(() => {
  //     // Add any additional initialization or cleanup code here
  //     // This useEffect hook will run on mount and unmount
  //     return () => {
  //       // Cleanup code (if needed)
  //     };
  //   }, []); // Empty dependency array means this effect runs only once on mount
  

  const setIsMetaMaskConnected = useMetaMaskConnection();
  // const disconnectWallet = () => {
  //   setIsMetaMaskConnected(false);
  // };
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
          <Logo2 />
          <a href="#" className="text-white ml-2">
            
          </a>
        </div>

        <div style={{backgroundColor: '#161a1e', height:'120px', marginBottom:'10px'}}>
        <span>XXX</span> <br />
        <button
          // onClick={disconnectWallet}
          className="text-red px-2 py-1 rounded-md transition-all "
        >
          Disconnect
        </button>
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
        className="flex items-center justify-center rounded-full bg-zinc-800/30 w-10 h-10 text-[#FFFFFFCC] hover:bg-zinc-700 hover:border-blue-300 border hover:border-opacity-50 transition-all duration-300"
        onClick={handleConnectClick}
      >
        <MailIcon className="w-6 h-6" />
      </button>
      {isConnectBoxOpen && <ConnectBox onClose={() => setIsConnectBoxOpen(false)} />}
    </div>
  );
};

export default ConnectButton;
