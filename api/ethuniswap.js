
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50');
    
    // Assuming the response.data contains the data you want
    const records = response.data;
    
    res.status(200).json(records);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
