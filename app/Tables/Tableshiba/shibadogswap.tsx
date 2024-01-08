'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DataItem {
  id: number;
  baseTokenName: string;
  baseTokenSymbol: string;
  quotoTokenSymbol: string;
  priceUsd: string;
  txns24h: string;
  volumeUsd24h: string;
  quotePrice1h: number;
  quoteChange24h: number;
  priceQuote: string;
  fdv: number;
  liquidity: string;
  poolCreatedDate: number;
}

const DataTable: React.FC = () => {
  const [tokens, setTokens] = useState<DataItem[]>([]);

  const getTokens = async () => {
    try {
      const response = await axios.get('http://localhost:8000/coins/shibdogswap');
      const data = response.data.data.pageList; 
  
      setTokens(data);
    } catch (error) {
      console.log(error);
    }
  };


  const renderTextColor = (value: number) => {
    return value >= 0 ? 'green' : 'red';
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

  useEffect(() => {
    getTokens();
  }, []);

  const formatValue = (value: string | number) => {
    const num = Number(value);
    if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(2)}B`;
    } else if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(2)}M`;
    } else if (num >= 1_000) {
      return `${(num / 1_000).toFixed(2)}K`;
    } else {
      return value;
    }
  };

  return (
    <div className="css-1wde6zi" style={{  flex: '1 1 0%', overflow: 'vissible', width: '100%' }}>
      <div style={{ background: 'rgb(22, 26, 30)', padding: '0px', border: '1px solid #363636', overflow: 'hidden' }}>
        <table style={{ width: '100%',border: '1px solid #363636', borderCollapse: 'collapse',
         fontSize: '14px',  borderRadius: '0px' , paddingLeft: '0px', paddingTop: '10px'}}>
          <thead>
          <tr>
              <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>TOKEN</th>
              <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>PRICE</th>
              {/* <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>AGE</th> */}
              <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>TXNS</th>
              <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>VOLUME</th>
              <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>6H</th>
              <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>24H</th>
              <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>LIQUIDITY</th>
              <th style={{ ...tableHeaderStyle, background: '#1A1C21' }}>FDV</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((item, index) => (
              <tr
                key={item.id}
                style={{
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  borderBottom: '1px solid graystone500',
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
                      color: '#ffff',
                      borderRadius: '15px',
                      marginRight: '10px',
                      fontSize: 'var(--chakra-fontSizes-2xs)',
                    }}
                  >
                    #{index + 1}
                  </div>
                  <span style={{ fontSize: '14px', color: '#ffffff' }}>
                    {item.baseTokenSymbol}
                  </span>
                  /
                  <span style={{ fontSize: '14px', color: '#b0b0b0', marginRight:'10px' }}>
                    {item.quotoTokenSymbol}
                  </span>{' '} {item.baseTokenName}
                </td>
                {/* <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{item.baseTokenSymbol}{item.quotoTokenSymbol}{Number(item.priceUsd).toFixed(4)}</td> */}
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>
                 {Number(item.priceUsd).toFixed(4)}
                </td>

                {/* <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{calculateAge(item.poolCreatedDate)}</td> */}
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{item.txns24h}</td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}> {parseFloat(String(formatValue(item.volumeUsd24h))).toFixed(3)}</td>
                {/* <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{Number(item.quotePrice1h).toFixed(3)}</td> */}
                <td style={{ ...tableCellStyle, ...tableCellWithBorder, color: renderTextColor(item.quotePrice1h) }}>
            {Number(item.quotePrice1h).toFixed(3)} </td>
            <td style={{ ...tableCellStyle, ...tableCellWithBorder, color: renderTextColor(item.quoteChange24h) }}>
            {Number(item.quoteChange24h).toFixed(3)}
          </td>
                <td style={{ ...tableCellStyle, ...tableCellWithBorder }}> {parseFloat(String(formatValue(item.volumeUsd24h))).toFixed(3)}</td>
                <td style={{ ...tableCellStyle , ...tableCellWithBorder }}> {parseFloat(String(formatValue(item.volumeUsd24h))).toFixed(3)}</td>
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
  borderRight: '1px solid graystone500',
  border: '1px solid #363636'
};

const tableCellStyle: React.CSSProperties = {
  padding: '8px',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  borderBottom: '1px solid graystone500',
  borderRight: '1px solid graystone500',
};

const tableCellWithBorder: React.CSSProperties = {
  borderRight: '1px solid graystone500',
  border: '1px solid #363636'
};

export default DataTable;

