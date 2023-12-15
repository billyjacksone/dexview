// pages/index.tsx
'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface PairData {
  // Define the structure of your data here
  baseTokenName: string;
  quoteTokenName: string;
  // Add other properties as needed
}

const HomePage: React.FC = () => {
  const [pairsData, setPairsData] = useState<PairData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50');
  
        if (response.status === 200) {
          // Extract the relevant data from the API response
          const extractedData: PairData[] = response.data.data.map((pair: any) => ({
            baseTokenName: pair.baseCurrencyName,
            quoteTokenName: pair.quotoTokenName,
            // Add other properties as needed
          }));
  
          setPairsData(extractedData);
        } else {
          console.error('Failed to fetch data. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Trending Pairs</h1>
      <table>
        <thead>
          <tr>
            <th>Base Token</th>
            <th>Quote Token</th>
            {/* Add other headers as needed */}
          </tr>
        </thead>
        <tbody>
          {pairsData.map((pair, index) => (
            <tr key={index}>
              <td>{pair.baseTokenName}</td>
              <td>{pair.quoteTokenName}</td>
              {/* Add other data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
