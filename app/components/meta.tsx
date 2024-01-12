// Import the necessary types from ethers.js
import { Web3Provider } from '@ethersproject/providers';
import { useState, useEffect } from 'react';

// Extend the Window interface to include the ethereum property
interface ExtendedWindow extends Window {
  ethereum?: any; // Adjust the type if needed
}

// Update the type of the window object
const windowWithEthereum = typeof window !== 'undefined' ? window as ExtendedWindow : null;

const useMetaMaskConnection = () => {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      try {
        // Check if MetaMask is installed and if window is defined
        if (windowWithEthereum && windowWithEthereum.ethereum) {
          // Request accounts to check if the user is connected
          const provider = new Web3Provider(windowWithEthereum.ethereum);
          const accounts = await provider.listAccounts();

          // If there are accounts, MetaMask is connected
          if (accounts.length > 0) {
            setIsMetaMaskConnected(true);
          } else {
            setIsMetaMaskConnected(false);
          }
        } else {
          setIsMetaMaskConnected(false);
        }
      } catch (error) {
        console.error('Error checking MetaMask connection:', error);
        setIsMetaMaskConnected(false);
      }
    };

    checkMetaMaskConnection();
  }, []);

  return isMetaMaskConnected;
};

export default useMetaMaskConnection;