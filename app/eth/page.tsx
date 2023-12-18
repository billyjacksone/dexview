import React from 'react'
import TopBar from '@/app/TopBar/Eth/TopEthelements'
import Table2 from '../Tables/TablesETH/TableEth'

const page = () => {
  return (
    <div style={{flex: '1', overflow: 'scroll', paddingTop: '0 px', paddingBottom: '30px'}}>
      <TopBar />
    <div style={{ flex: '1', overflow: 'scrool', paddingTop: '50 %', paddingLeft: '0px'}}>
      <Table2 />
      {/* <p>Hey</p> */}
    </div>
    </div>
  )
}

export default page;
