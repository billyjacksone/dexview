'use client'
import { useState, useEffect } from 'react';

const useMetaMaskConnection = () => {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      try {
        // Check if MetaMask is installed
        if (window.ethereum) {
          // Request accounts to check if the user is connected
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });

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
