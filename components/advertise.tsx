// components/PairTable.tsx
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface PairData {
  baseCurrencyName: string;
  quoteCurrencyName: string;
  // Add other properties as needed
}

const PairTable: React.FC = () => {
  const [pairsData, setPairsData] = useState<PairData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1348&sort-field=txs24h&desc=true&page=1&pageSize=50'
        );
        // Extract the relevant data from the API response
        const extractedData: PairData[] = response.data.data.map((pair: any) => ({
          baseCurrencyName: pair.baseCurrencyName,
          quoteCurrencyName: pair.quoteCurrencyName,
          // Add other properties as needed
        }));
        setPairsData(extractedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pair Pages</h2>
      <table>
        <thead>
          <tr>
            <th>Base Currency</th>
            <th>Quote Currency</th>
            {/* Add other headers as needed */}
          </tr>
        </thead>
        <tbody>
          {pairsData.map((pair, index) => (
            <tr key={index}>
              <td>{pair.baseCurrencyName}</td>
              <td>{pair.quoteCurrencyName}</td>
              {/* Add other data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PairTable;
