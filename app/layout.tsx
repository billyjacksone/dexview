// 'use client'
// import React, { ReactNode, useEffect, useState } from 'react';
// import './globals.css';
// import { AppContextProvider } from '@/lib/contexts';
// import NavigationHeader from './NavigationBar/Navigationheader';
// import NavigationTrending from './NavigationBar/polynavtrending';
// import NavigationTrending2 from './NavigationBar/Navigation';
// import SideBar from './SideBar/SideBar';
// import { Metadata } from 'next';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// interface LayoutProps {
//   metadata: Metadata;
//   children: ReactNode;
// }

// const RootLayout: React.FC<LayoutProps> = ({ metadata, children }) => {
//   const [selectedItem, setSelectedItem] = useState<string | null>(null);
//   const [tableData, setTableData] = useState<any[]>([]); // Add state for table data

//   const router = useRouter();

  
  
//   return (
//     <html lang="en">
//       <body>
//         <AppContextProvider>
//           <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative'  }}>
//            <div className='sticky top-0 z-10'>
//             <NavigationHeader />
//             <NavigationTrending />
//            </div>

//             <div style={{ display: 'flex', alignItems: 'flex-start', flex: '1' }}>
//               <SideBar style={{ width: '300px', background: '#f0f0f0', padding: '20px', overflow: 'hidden' , paddingTop: '10px'}} />
//               <div style={{ flex: '1', display: 'flex', flexDirection: 'column', paddingLeft: '6px', paddingTop: '4px', paddingBottom: '20px' }}>
//                 {/* <TopBar /> */}
//                 <div >
                  
//                   {selectedItem === null && children}
//                 </div>
//               </div>
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


'use client'
import React, { Children, ReactNode, useEffect, useState } from 'react';
import './globals.css';
import { AppContextProvider } from '@/lib/contexts';
import NavigationHeader from './NavigationBar/Navigationheader';
import NavigationTrending from './NavigationBar/pulsenavtrending';
import NavigationTrending2 from './NavigationBar/Navigation';
import SideBar from './SideBar/SideBar';
import Table from '@/app/components/Table'; // Import your Table component
import TopBar from './TopBar/Topbarelements';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface LayoutProps {
  metadata: Metadata;
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ metadata, children }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [tableData, setTableData] = useState<any[]>([]); // Add state for table data

  const router = useRouter();

  
  
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative'  }}>
           <div className='sticky top-0 z-10'>
            <NavigationHeader />

           </div>

            {/* <div style={{ display: 'flex', alignItems: 'flex-start', flex: '1', marginTop: '0px' }}>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', paddingLeft: '0px', paddingTop: '0px', paddingBottom: '10px' }}>
                <div style={{ flex: '1', overflow: 'hidden', paddingTop: '0px', paddingLeft: '0px' }}>
                  
                  {selectedItem === null && children}
                </div>
              </div>
            </div> */}
            <div style={{display:'flex', alignItems: 'flex-start'}}>
              {children}

            </div>


            <div style={{ borderTop: '1px solid #ddd', padding: '20px' }}>
              {/* Additional content */}
            </div>
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;



