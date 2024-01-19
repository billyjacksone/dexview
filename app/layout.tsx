

// 'use client'
// import React, { Children, ReactNode, useEffect, useState } from 'react';
// import './globals.css';
// import { AppContextProvider } from '@/lib/contexts';
// import NavigationHeader from './NavigationBar/Navigationheader';

// import NavigationTrending from './NavigationBar/pulsenavtrending';
// import NavigationTrending2 from './NavigationBar/Navigation';
// import SideBar from './SideBar/SideBar';
// import Table from '@/app/components/Table'; // Import your Table component
// import TopBar from './TopBar/Topbarelements';
// import { Metadata } from 'next';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';



// interface LayoutProps {
//   metadata: Metadata;
//   children: ReactNode;
// }

// const RootLayout: React.FC<LayoutProps> = ({ metadata, children }) => {
 

  
  
//   return (
//     <html lang="en">
//       <body>
//         <AppContextProvider>
//           <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative'  }}>
//            <div className='sticky top-0 z-10'>
//             <NavigationHeader isMetaMaskConnected={false} />

//            </div>

//             <div style={{display:'flex', alignItems: 'flex-start'}}>
//               {children}

//             </div>


//             <div style={{ borderTop: '1px solid #ddd', padding: '20px' }}>
//               {/* Additional content */}
//             </div>
//           </div>
//         </AppContextProvider>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;



"use client"
import React, { ReactNode } from 'react';
import './globals.css';
import { AppContextProvider } from '@/lib/contexts';
import NavigationHeader from './NavigationBar/Navigationheader';
import { Metadata } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

interface LayoutProps {
  metadata: Metadata;
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  

  return (
    <html>
      <body>
        <AppContextProvider>
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>

          <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-10">
              <NavigationHeader isMetaMaskConnected={false} />
            </div>

            <div className="flex flex-col md:flex-row">
              {/* <div className="flex-1 p-4"> */}
                {children}
              {/* </div> */}
            </div>

            <div className="border-t p-4">
              {/* Additional content */}
            </div>
          </div>
        </div>
        </AppContextProvider>
      </body>
    </html>
    
  );
};

export default RootLayout;
