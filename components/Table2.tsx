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
  const [tokens, setTokens] = useState<DataItem[]>([]);
  const [currency, setCurrency] = useState<any[]>([]);

  const getTokens = async () => {
    try {
      const res: DataItem[] = await axios.get('http://localhost:8000/coins');
      setTokens(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurreny = async () => {
    try {
      const res: any[] = await axios.get('http://localhost:8000/coins/currency');
      setCurrency(res.data.data.pageList);
    } catch (error) {
      console.log(error);
    }
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
    <div style={{ overflowX: 'auto', background: 'rgb(22, 26, 30)', padding: 'var(--chakra-space-2)' }}>
      <div style={{ background: 'rgb(22, 26, 30)', padding: '0px', border: 'none' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontSize: 'var(--chakra-fontSizes-xs)', border: '1px solid #d0d1d2' }}>
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
            {tokens.map((item, index) => (
              <tr
                key={item.id}
                style={{
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  borderBottom: '1px solid #d0d1d2',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(169, 169, 169, 0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <td style={{ ...tableCellStyle, ...tableCellWithBorder, display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'rgb(22, 26, 30)',
                      color: '#FFFFFF',
                      borderRadius: '5px',
                      marginRight: '10px',
                      fontSize: 'var(--chakra-fontSizes-2xs)',
                    }}
                  >
                    #{index + 1}
                  </div>
                  {item.baseTokenName}
                </td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{Number(item.priceUsd).toFixed(4)}</td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{calculateAge(item.poolCreatedDate)}</td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{item.txns24h}</td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{item.volumeUsd24h}</td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{/* 6H */}</td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{/* 24H */}</td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{item.liquidity}</td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{Number(item.fdv).toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  background: 'rgb(22, 26, 30)',
  padding: '8px',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  borderRight: '1px solid #d0d1d2', // Add this line for Graystone 700 between columns
};

const tableCellStyle: React.CSSProperties = {
  padding: '8px',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  borderBottom: '1px solid #d0d1d2',
  borderRight: '1px solid #d0d1d2', // Add this line for Graystone 700 between columns
};

const tableCellWithBorder: React.CSSProperties = {
  borderRight: '1px solid #d0d1d2', // Add this line for Graystone 700 between cells
};

export default DataTable;
