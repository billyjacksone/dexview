"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

// components/DataTable.tsx
import React from 'react';

interface DataItem {
  id: number;
  baseTokenName: string;
  baseTokenSymbol: string;
  priceUsd: string;
  txns24h: string;
  volumeUsd24h: string;
  priceQuote: string;
  fdv: number;
  liquidity: string;
  poolCreatedDate: number; 
}



interface ApiResponse {
  data: {
    data: DataItem[];
  };
}

const DataTable: React.FC = () => {
  const [data, setData] = React.useState<DataItem[]>([]);
  const [currency, setCurrency] = React.useState<any[]>([]);

  const getTokens = async () => {
    try {
      const res:DataItem[] = await axios.get('http://localhost:8000/coins')
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCurreny = async () => {
    try {
      const res:any[] = await axios.get('http://localhost:8000/coins/curreny');
      setCurrency(res)
      console.log(res);
    } catch (error) {
      
    }
  }

  React.useEffect(() => {
    getCurreny();
    getTokens();
  }, []);

  // return (
  //   <div className='flex flex-row'>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Base Token Name</th>
  //           {/* Add other headers as needed */}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {data.map((item) => (
  //           <tr key={item.id}>
  //             <td>{item.id}</td>
  //             <td>{item.baseTokenName}</td>
  //             {/* Add other data cells as needed */}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>TOKEN</th>
            <th>PRICE</th>
            <th>AGE</th>
            <th>BUYS</th>
            <th>SELLS</th>
            <th>TXNS</th>
            <th>VOLUME</th>
            <th>5M</th>
            <th>1H</th>
            <th>6H</th>
            <th>24H</th>
            <th>LIQUIDITY</th>
            <th>FDV</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.baseTokenName}</td>
              <td>{item.priceUsd}</td>
              <td>{calculateAge(item.poolCreatedDate)}</td>
              <td>{/* BUYS */}</td>
              <td>{/* SELLS */}</td>
              <td>{item.txns24h}</td>
              <td>{item.volumeUsd24h}</td>
              <td>{/* 5M */}</td>
              <td>{/* 1H */}</td>
              <td>{/* 6H */}</td>
              <td>{/* 24H */}</td>
              <td>{item.liquidity}</td>
              <td>{item.fdv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const calculateAge = (timestamp: number) => {
  const currentTime = Date.now();
  const ageInMilliseconds = currentTime - timestamp;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;

  if (ageInDays >= 1) {
    return `${Math.floor(ageInDays)} days`;
  } else if (ageInHours >= 1) {
    return `${Math.floor(ageInHours)} hours`;
  } else if (ageInMinutes >= 1) {
    return `${Math.floor(ageInMinutes)} minutes`;
  } else {
    return `${Math.floor(ageInSeconds)} seconds`;
  }

};

export default DataTable;
