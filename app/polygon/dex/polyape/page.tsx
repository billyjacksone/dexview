import React from 'react'
import TopBar from '@/app/TopBar/polygonTopbar'
import Table2 from '@/app/Tables/Tablespoly/polyape';

const page = () => {
  return (
    <div style={{flex: '1', overflow: 'hidden', paddingTop: '0 px', paddingBottom: '30px'}}>
      <TopBar />
    <div style={{ flex: '1', overflow: 'hidden', paddingTop: '50 %', paddingLeft: '0px'}}>
      <Table2 />
      {/* <p>Hey</p> */}
    </div>
    </div>
  )
}

export default page;
