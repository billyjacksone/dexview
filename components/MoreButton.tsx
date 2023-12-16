// // components/Button.tsx
// import React, { useState } from 'react';
// import MailIcon from '@/public/mail.svg';

// const ConnectBox: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   // Add your logic for handling the connect box content

//   return (
//     <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-md shadow-md p-6 max-w-[400px]">
//       {/* Add your content here */}
//       <ul className="text-blue-500 hover:underline space-y-2">
//         <li>Connect to wallet</li>
//         <li>MetaMask</li>
//         <li>Coinbase wallet</li>
//         <li>Trust Wallet</li>
//         <li>Wallet Connect</li>
//         <li>SafePal</li>
//         <li>Rabby Wallet</li>
//       </ul>
//       <button className="text-blue-500 hover:underline mt-4" onClick={onClose}>
//         Close
//       </button>
//     </div>
//   );
// };

// const MoreButton: React.FC = () => {
//   const [isConnectBoxOpen, setIsConnectBoxOpen] = useState(false);

//   const handleConnectClick = () => {
//     setIsConnectBoxOpen(!isConnectBoxOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="flex gap-2 items-center ml-4 rounded-md bg-zinc-800/30 px-4 py-2 text-[#FFFFFFCC]"
//         onClick={handleConnectClick}
//       >
//         <MailIcon />
//         Connect
//       </button>
//       {isConnectBoxOpen && <ConnectBox onClose={() => setIsConnectBoxOpen(false)} />}
//     </div>
//   );
// };

// export default MoreButton;

// MoreButton.tsx

import React from 'react';

interface MoreButtonProps {
  elements: { text: string; icon?: string }[];
  handleClick: () => void;
}

const MoreButton: React.FC<MoreButtonProps> = ({ elements, handleClick }) => {
  return (
    <div className="more-button" onClick={handleClick}>
      More
      {/* Render the dropdown list */}
      <ul className="dropdown-list">
        {/* {elements.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))} */}
        <li>Hello</li>
      </ul>
    </div>
  );
};

export default MoreButton;

