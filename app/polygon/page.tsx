import React from 'react'
import TopBar from '../TopBar/Topbarelements'
import Table2 from '../Tables/Tablepolygon';

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
