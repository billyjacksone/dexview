// components/DataTable.tsx
'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

const DataTable: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [currency, setCurrency] = useState<any[]>([]);

  const getTokens = async () => {
    try {
      const res: DataItem[] = await axios.get('http://localhost:8000/coins');
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurreny = async () => {
    try {
      const res: any[] = await axios.get('http://localhost:8000/coins/curreny');
      setCurrency(res);
      console.log(res);
    } catch (error) {}
  };

  useEffect(() => {
    getCurreny();
    getTokens();
  }, []);

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

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>TOKEN</th>
            <th style={tableHeaderStyle}>PRICE</th>
            <th style={tableHeaderStyle}>AGE</th>
            <th style={tableHeaderStyle}>TXNS</th>
            <th style={tableHeaderStyle}>VOLUME</th>
            <th style={tableHeaderStyle}>6H</th>
            <th style={tableHeaderStyle}>24H</th>
            <th style={tableHeaderStyle}>LIQUIDITY</th>
            <th style={tableHeaderStyle}>FDV</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={tableCellStyle}>{item.baseTokenName}</td>
              <td style={tableCellStyle}>{Number(item.priceUsd).toFixed(4)}</td>
              <td style={tableCellStyle}>{calculateAge(item.poolCreatedDate)}</td>
              <td style={tableCellStyle}>{item.txns24h}</td>
              <td style={tableCellStyle}>{item.volumeUsd24h}</td>
              <td style={tableCellStyle}>{/* 6H */}</td>
              <td style={tableCellStyle}>{/* 24H */}</td>
              <td style={tableCellStyle}>{item.liquidity}</td>
              <td style={tableCellStyle}>{Number(item.fdv).toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  background: '#070707',
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  whiteSpace: 'nowrap', // prevent text wrapping
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const tableCellStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  whiteSpace: 'nowrap', // prevent text wrapping
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export default DataTable;
