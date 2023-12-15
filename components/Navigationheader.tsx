
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './connectbutton';
import SearchInput from './searchbar';
import Trending from './Trending2'; // Import Trending component
import { useAppContext } from '@/lib/contexts';

const Navigationheader = () => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const navLinks = [
    { name: 'Docs', link: '/docs' },
    { name: 'Advertise', link: '/advertise' },
    { name: 'New Pairs', link: '/advertise' },
    { name: 'Multichart', link: '/advertise' },
    { name: 'Wallet', link: '/advertise' },
  ];

  return (
    <>
      <div
        className="w-full flex h-13 bg-zinc-900 sticky top-0"
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingInlineStart: 'var(--chakra-space-2)',
          paddingInlineEnd: 'var(--chakra-space-2)',
          paddingTop: 'var(--chakra-space-2)',
          paddingBottom: 'var(--chakra-space-2)',
          gap: 'var(--chakra-space-6)',
          background: 'rgb(22, 26, 30)',
          WebkitBoxAlign: 'center',
          alignItems: 'center',
        }}
      >
        <div className="flex justify-start items-center h-full w-full">
          <div className="flex gap-3 items-center h-full w-full px-3">
            <Logo />
            <SearchInput />
            <ul className="hidden md:flex gap-x-8 text-white">
              {navLinks.map((link) => (
                <li key={link.name} className="flex items-center">
                  <Link href={link.link}>
                    <p className="hover:text-blue-400 text-center whitespace-nowrap text-[#FFFFFFCC]">
                      {link.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Button />
          </div>
        </div>
      </div>
      {/* Include Trending component here */}
      {/* <Trending /> */}
    </>
  );
};

export default Navigationheader;


// Navigationheader.tsx
// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Logo from './Logo';
// import Button from './connectbutton';
// import SearchInput from './searchbar';
// import Trending from './Trending2'; // Import Trending component
// import { useAppContext } from '@/lib/contexts';

// const Navigationheader = () => {
//   const [width, setWidth] = useState(0);

//   const updateWidth = () => {
//     const newWidth = window.innerWidth;
//     setWidth(newWidth);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', updateWidth);
//     updateWidth();

//     // Cleanup function to remove the event listener
//     return () => {
//       window.removeEventListener('resize', updateWidth);
//     };
//   }, []);

//   const navLinks = [
//     { name: 'Docs', link: '/docs' },
//     { name: 'Advertise', link: '/advertise' },
//     { name: 'New Pairs', link: '/advertise' },
//     { name: 'Multichart', link: '/advertise' },
//     { name: 'Wallet', link: '/advertise' },
//   ];

//   return (
//     <>
//       <div
//         className="w-full flex h-13 bg-zinc-900 sticky top-0"
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           paddingInlineStart: 'var(--chakra-space-2)',
//           paddingInlineEnd: 'var(--chakra-space-2)',
//           paddingTop: 'var(--chakra-space-2)',
//           paddingBottom: 'var(--chakra-space-2)',
//           gap: 'var(--chakra-space-6)',
//           background: 'rgb(22, 26, 30)',
//           WebkitBoxAlign: 'center',
//           alignItems: 'center',
//           position: 'sticky',
//           top: '0px',
//           zIndex: '999',
//           maxHeight: '56px',
//         }}
//       >
//         <div className="flex justify-start items-center h-full w-full">
//           <div className="flex gap-3 items-center h-full w-full px-3">
//           <Link href="/" as="/" passHref>
//             <Logo
//               style={{
//                 transitionProperty: 'var(--chakra-transition-property-common)',
//                 transitionDuration: 'var(--chakra-transition-duration-fast)',
//                 transitionTimingFunction: 'var(--chakra-transition-easing-ease-out)',
//                 cursor: 'pointer',
//                 textDecoration: 'none',
//                 outline: 'transparent solid 2px',
//                 outlineOffset: '2px',
//                 color: 'inherit',
//                 maxWidth: '120px', // Adjust the max-width as needed
//               }}
//             />
//           </Link>
//             <SearchInput
//               style={{
//                 flex: '1 1 0%',
//                 width: '10vw',
//               }}
//             />
//             <ul className="hidden md:flex gap-x-8 text-white">
//               {navLinks.map((link) => (
//                 <li key={link.name} className="flex items-center">
//                   <Link href={link.link}>
//                     <p className="hover:text-blue-400 text-center whitespace-nowrap text-[#FFFFFFCC]">
//                       {link.name}
//                     </p>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <Button />
//           </div>
//         </div>
//       </div>
//       {/* Include Trending component here */}
//       {/* <Trending /> */}
//     </>
//   );
// };

// export default Navigationheader;
