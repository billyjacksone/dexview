import React from 'react'
import TopBar from '@/app/TopBar/TopBnbelements'
import Table2 from '@/app/Tables/Tablesbnb/bnbpanv3'

import Navigation from '@/app/NavigationBar/bnbnavtrending'
import Sidebar from '@/app/SideBar/SideBar'

const page = () => {
  return (
    <div style={{display: 'flex', overflow:'hidden',flex: '1', flexDirection: 'column'  }}>
      <Navigation />
      <div style={{display: 'flex', alignItems: 'flex-start', flex: '1', marginTop: '8px'}}>
        {/* <Sidebar style={{width: '300px', background: '#f0f0f0', padding: '10px', overflow: 'hidden'}}/> */}
        <Sidebar />
        <div style={{flex:'1', overflow:'hidden', paddingTop: '20 px', paddingLeft: '5px'}}>
            <TopBar />
          <div style={{ flex: '1', overflow: 'hidden', paddingTop: '5px', paddingLeft: '8 px'}}>
             <Table2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;
