import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';

async function getAllTokens(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/trending-pairs?platform=14',{
        headers: {
        },
      });

    const data = response.data;

    res.json(data);
  } catch (error) {
    
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getCurrency(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
          'X-CMC_PRO_API_KEY': '54b0842c-1cc7-4a72-8850-62bc3be8c488',
        },
      });

    const data = response.data;
    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getetheriumus(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1069&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    // Handle errors
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getethsushi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=6746&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getethpan(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=6707&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}




export { getAllTokens,getCurrency,getetheriumus,getethsushi,getethpan };
