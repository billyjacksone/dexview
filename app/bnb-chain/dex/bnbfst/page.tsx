'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import TopBar from '@/app/TopBar/TopBnbelements'
import Table2 from '@/app/Tables/Tablesbnb/bnbfst'

import Navigation from '@/app/NavigationBar/bnbnavtrending'
import Sidebar from '@/app/SideBar/SideBar'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    // Apply overflow: hidden to the body element when isMobile is true
    document.body.style.overflow = isMobile ? 'hidden' : 'auto';

    // Cleanup the style when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile]);

  return (
    <div className='sticky' style={{ display: 'flex', overflow: 'hidden', flex: '1', flexDirection: 'column' }}>
      <Navigation />

      {isMobile ? (
        <div>
          <TopBar />
          {/* Your custom content for mobile view */}
          {/* <Sidebar2 /> */}
          <div style={{ overflowX: 'hidden', maxHeight: 'calc(100vh - 100px)' }}>
            {/* Set the max height to the desired value, adjust as needed */}
            <Table2 />
          </div>
        </div>
      ) : (
        <div className="sticky md:flex md:items-start md:flex-1 md:mt-2">
          <Sidebar />

          <div style={{ flex: '1', overflow: 'hidden', paddingTop: '0px', paddingLeft: '5px' }}>
            <TopBar />
            <div style={{ flex: '1', overflow: 'hidden', paddingTop: '2px', paddingLeft: '2px' }}>
              {/* Apply overflow: hidden to hide the scrollbar */}
              <div style={{ overflow: 'hidden' , overflowY:'auto'}}>
                <Table2 />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
