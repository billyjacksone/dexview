// 'use client'
// import React, { ReactNode } from 'react';
// import './globals.css';
// import { AppContextProvider } from '@/lib/contexts';
// import NavigationHeader from '@/app/components/Navigationheader';
// import NavigationTrending from '@/app/components/Navigation';
// import SideBar from '@/app/components/SideBar2';
// import Table from '@/app/components/Table';
// import TopBar from '@/app/components/test';
// import { Metadata } from 'next';

// interface LayoutProps {
//   metadata: Metadata;
//   children: ReactNode;
// }

// const RootLayout: React.FC<LayoutProps> = ({ metadata, children }) => {


//   return (
//     <html lang="en">
//       <body>
//         <AppContextProvider>
//           <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//             <NavigationHeader />
//             <NavigationTrending />

//             <div style={{ display: 'flex', alignItems: 'flex-start', flex: '1', marginTop: '1px' }}> {/* Adjust marginTop */}
//               <SideBar style={{ width: '200px', background: '#f0f0f0', padding: '20px' }} />
//               <div style={{ flex: '1', display: 'flex', flexDirection: 'column', paddingLeft: '10px', paddingTop:'10px', paddingBottom: '20px' }}>
//                 <TopBar />
//                 <div style={{ flex: '1', overflow: 'scrool', paddingTop: '5px', paddingLeft: '0px'}}>
//                   {/* <Table /> */}
//                   {children}
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
import React, { ReactNode, useEffect, useState } from 'react';
import './globals.css';
import { AppContextProvider } from '@/lib/contexts';
import NavigationHeader from './NavigationBar/Navigationheader';
import NavigationTrending from './NavigationBar/Navigation';
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/coins/ethsushi`);
        setTableData(response.data.data.pageList);
      } catch (error) {
        console.error('Error fetching data from the backend:', error.message);
      }
    };

    if (selectedItem) {
      fetchData();
    }
  }, 
  [router.pathname, selectedItem]
  );

  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'  }}>
            <NavigationHeader />
            <NavigationTrending />

            <div style={{ display: 'flex', alignItems: 'flex-start', flex: '1', marginTop: '0px' }}>
              <SideBar style={{ width: '300px', background: '#f0f0f0', padding: '20px', overflow: 'hidden' }} />
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', paddingLeft: '10px', paddingTop: '10px', paddingBottom: '20px' }}>
                {/* <TopBar /> */}
                <div style={{ flex: '1', overflow: 'hidden', paddingTop: '5px', paddingLeft: '0px' }}>
                  
                  {selectedItem === null && children}
                </div>
              </div>
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



