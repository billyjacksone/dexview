import React from 'react'
import TopBar from '@/app/TopBar/newpairTopbar2'
import TopBar2 from '@/app/TopBar/newpairTopbar1'
import Table2 from '../Tables/Tablepolygon';
import Sidebar from '../SideBar/SideBar';

const page = () => {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start', flex: '1', marginTop: '8px'}}>
        {/* <Sidebar style={{width: '300px', background: '#f0f0f0', padding: '10px', overflow: 'hidden'}}/> */}
        <Sidebar />
    <div style={{flex: '1', overflow: 'hidden', paddingTop: '0 px', paddingBottom: '30px'}}>
      <TopBar />
      <div style={{flex: '1', overflow: 'hidden', paddingTop: '0 px', paddingBottom: '30px'}}>
        <TopBar2 />
    <div style={{ flex: '1', overflow: 'hidden', paddingTop: '50 %', paddingLeft: '0px'}}>
      <Table2 />
      {/* <p>Hey</p> */}
    </div>
    </div>
    </div>
    </div>
  )
}

export default page;
