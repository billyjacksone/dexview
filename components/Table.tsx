"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

interface DataItem {
  id: number;
  baseTokenName: string;
  // Add other properties as needed
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  const getTokens = async () => {
    try {
      const res:DataItem[] = await axios.get('http://localhost:8000/coins')
      setData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTokens
  },[])
  
  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   try {
  //   //     const response = await axios.get(
  //   //       'https://api.coinmarketcap.com/data-api/v3/platformpage/trending-pairs/latest?platformId=14&limit=10&ranked=false',
  //   //       {
  //   //         headers: {
  //   //           'X-CMC_PRO_API_KEY': '54b0842c-1cc7-4a72-8850-62bc3be8c488',
  //   //         },
  //   //       }
  //   //     );

  //   //     // Make sure to check the actual structure of the data returned by the API
  //   //     setData(response.data.data);
  //   //     console.log(response.data.data);
  //   //   } catch (error) {
  //   //     console.error('Error fetching data:', error);
  //   //   }
  //   // const axios = require('axios');

  //   let response = null;
  //   new Promise(async (resolve, reject) => {
  //     try {
  //       response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
  //         headers: {
  //           'X-CMC_PRO_API_KEY': '54b0842c-1cc7-4a72-8850-62bc3be8c488',
  //         },
  //       });
  //     } catch(ex) {
  //       response = null;
  //       // error
  //       console.log(ex);
  //       reject(ex);
  //     }
  //     if (response) {
  //       // success
  //       const json = response.data;
  //       console.log(json);
  //       resolve(json);
  //     }
  //   });
    

  //   // fetchData();
  // }, []);

  return (
    <div className='flex flex-row'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Base Token Name</th>
            {/* Add other headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.baseTokenName}</td>
              {/* Add other data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
