'use client'
import React, { ReactNode } from 'react';
import { AppContextProvider } from '@/lib/contexts';
import NavigationHeader from '@/components/Navigationheader';
import NavigationTrending from '@/components/Navigation';
import SideBar from '@/components/SideBar2';
import Table from '@/components/Table';
import TopBar from '@/components/Topbarelements';
import { Metadata } from 'next';

interface LayoutProps {
  metadata: Metadata;
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ metadata, children }) => {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavigationHeader />
            <NavigationTrending />

            <div style={{ display: 'flex', alignItems: 'flex-start', flex: '1', marginTop: '1px' }}> {/* Adjust marginTop */}
              <SideBar style={{ width: '200px', background: '#f0f0f0', padding: '20px' }} />
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', paddingLeft: '5px' }}>
                <TopBar />
                <div style={{ flex: '1', overflow: 'auto', paddingTop: '0 px' }}>
                  <Table />
                  {children}
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

