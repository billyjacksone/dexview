// // Import the necessary types from ethers.js
// import { Web3Provider } from '@ethersproject/providers';
// import { useState, useEffect } from 'react';

// // Extend the Window interface to include the ethereum property
// interface ExtendedWindow extends Window {
//   ethereum?: any; // Adjust the type if needed
// }

// // Update the type of the window object
// const windowWithEthereum = typeof window !== 'undefined' ? window as ExtendedWindow : null;

// const useMetaMaskConnection = () => {
//   const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

//   useEffect(() => {
//     const checkMetaMaskConnection = async () => {
//       try {
//         // Check if MetaMask is installed and if window is defined
//         if (windowWithEthereum && windowWithEthereum.ethereum) {
//           // Request accounts to check if the user is connected
//           const provider = new Web3Provider(windowWithEthereum.ethereum);
//           const accounts = await provider.listAccounts();

//           // If there are accounts, MetaMask is connected
//           if (accounts.length > 0) {
//             setIsMetaMaskConnected(true);
//           } else {
//             setIsMetaMaskConnected(false);
//           }
//         } else {
//           setIsMetaMaskConnected(false);
//         }
//       } catch (error) {
//         console.error('Error checking MetaMask connection:', error);
//         setIsMetaMaskConnected(false);
//       }
//     };

//     checkMetaMaskConnection();
//   }, []);

//   return isMetaMaskConnected;
// };

// export default useMetaMaskConnection;

import { useState, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';

interface MetaMaskConnection {
  isMetaMaskConnected: boolean;
  metaMaskAccount: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  account: string | null;
}

// Extend the global `Window` interface to include the ethereum property
interface ExtendedWindow extends Window {
  ethereum?: any; // Adjust the type if needed
}

// Update the type of the window object
const windowWithEthereum = typeof window !== 'undefined' ? (window as ExtendedWindow) : null;

const useMetaMaskConnection = (): MetaMaskConnection => {
  const [isMetaMaskConnected, setMetaMaskConnected] = useState(false);
  const [metaMaskAccount, setMetaMaskAccount] = useState<string | null>(null);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      if (windowWithEthereum && windowWithEthereum.ethereum) {
        const provider = new Web3Provider(windowWithEthereum.ethereum);
        const accounts = await provider.listAccounts();

        if (accounts.length > 0) {
          setMetaMaskConnected(true);
          setMetaMaskAccount(accounts[0]);
        }
      }
    } catch (error) {
      console.error('Error checking MetaMask connection:', error);
    }
  };

  const connectWallet = async () => {
    try {
      if (windowWithEthereum && windowWithEthereum.ethereum) {
        const accounts = await windowWithEthereum.ethereum.request({ method: 'eth_requestAccounts' });

        if (accounts.length > 0) {
          setMetaMaskConnected(true);
          setMetaMaskAccount(accounts[0]);
        }
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setMetaMaskConnected(false);
    setMetaMaskAccount(null);
  };

  return {
    isMetaMaskConnected,
    metaMaskAccount,
    connectWallet,
    disconnectWallet,
    account: metaMaskAccount, // Include the account property
  };
};

export default useMetaMaskConnection;
