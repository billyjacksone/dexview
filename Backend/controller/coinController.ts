import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';

async function getAllTokens(req: Request, res: Response) {
  try {
    // Make a GET request to the CoinMarketCap API
    // const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/trending-pairs?platform=14',{
      const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
          'X-CMC_PRO_API_KEY': '54b0842c-1cc7-4a72-8850-62bc3be8c488',
        },
      });

    // Extract data from the response
    const data = response.data;

    // Process the data as needed
    // For example, send it in the response
    res.json(data);
  } catch (error) {
    // Handle errors
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Export the function
export { getAllTokens };
