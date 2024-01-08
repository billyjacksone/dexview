import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';

async function getethuniv3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1348&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function getethuniswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1069&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function getethshibaswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1408&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function getethdefiswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1688&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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


async function getethkyberswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=2796&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function getethfraxswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=2796&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function getethswaper(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1383&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function getethradio(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1649&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbpan(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1344&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbpanv3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=6706&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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


async function bnbape(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1281&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbbiswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1445&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbmedx(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1329&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbbaby(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1395&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbfst(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1685&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbkyber(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1480&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbnomi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1657&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbknight(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1584&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbcone(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1623&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbbakery(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1302&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbw3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1739&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bnbbaryon(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1698&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function arbimain(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function arbiuniswapv3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=1478&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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
async function arbisushi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=1464&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function arbikyber(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=3627&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function arbicamelot(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=5101&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function arbialien(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=6082&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function arbizyber(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=5834&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function arbioreo(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=5558&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function arbiarbi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=5558&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function arbisharky(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=6093&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function polymain(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1567&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function polyuniswapv3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1567&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function polymmf(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1704&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function polyquickswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1293&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function polysushi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1417&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function polykyber(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1695&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function polyape(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1466&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function pulsemain(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function pulseXv1(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function pulseXv2(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7342&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function bitmain(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function shibdogswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=201&dexer-id=8167&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function shibwoofswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=201&dexer-id=8172&sort-field=txs24h&desc=true&page=1&pageSize=50',{
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

async function getchartvalue(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0xae790e2a4785298cb18150f3dc4a60bd81fcd274&t=1703087594114',{
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

interface TrendingItem {
  slug: string;
  // Add other properties as needed
}

interface platformMap{
  Ethereum: TrendingItem[];
  BNB: TrendingItem[];
  Arbitrum: TrendingItem[];
  Polygon: TrendingItem[];
  PulseChain: TrendingItem[];
  Shibarium: TrendingItem[];
}

async function platformname(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/data-api/v3/cryptocurrency/spotlight?dataType=9&limit=30',{
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

async function platform(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/data-api/v3/cryptocurrency/spotlight?dataType=9&limit=30');
    const data = response.data.data.trendingList;

    let platformMap : platformMap = {
      Ethereum: [],
      BNB: [],
      Arbitrum: [],
      Polygon: [],
      PulseChain: [],
      Shibarium: [],
    };

    for (const item of data) {
      const platformName = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=${item.slug}&limit=1`;

      try {
        const platformResponse = await axios.get(platformName);
        const platformData = platformResponse.data.data.marketPairs;

        if (platformData && platformData.length > 0) {
          const platform = platformData[0].platformName;

          if (platform === 'Ethereum') {
            platformMap.Ethereum.push(item as TrendingItem);
          } else if (platform === 'BSB') {
            platformMap.BNB.push(item as TrendingItem);
          } else if (platform === 'Arbitrum') {
            platformMap.Arbitrum.push(item as TrendingItem);
          } else if (platform === 'Polygon') {
            platformMap.Polygon.push(item as TrendingItem);
          } else if (platform === 'PulseChain') {
            platformMap.PulseChain.push(item as TrendingItem);
          } else if (platform === 'Shibarium') {
            platformMap.Shibarium.push(item as TrendingItem);
          }
        }
      } catch (error) {
        console.error(`Error fetching data for ${item.slug}:`, error);
      }
    }

    res.json({ data: platformMap });
  } catch (error) {
    console.error('Error fetching data from CoinMarketCap:', (error as AxiosError).message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function getJUGNI(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=polygon&address=0x330c4e8db11fac97f981979de6d83a911c753d9e&t=1703231859640'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/25/8640850?reverse-order=true'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getLK(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=polygon&address=0xd1f43b27e8a5336bf13bfea5816e498c9f515964&t=1703231960175'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/25/8472792?reverse-order=true'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getGFR(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=polygon&address=0x06a00e7ebc7383a9d4261f991c357a228cfd3602&t=1703232042478'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/25/8600878?reverse-order=true'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getDAI(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=polygon&address=0x254aa3a898071d6a2da0db11da73b02b4646078f&t=1703232213191'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/25/1557387?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function get1CAT(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0xae790e2a4785298cb18150f3dc4a60bd81fcd274&t=1703087594114'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/8644674?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getHEMULE(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0xae790e2a4785298cb18150f3dc4a60bd81fcd274&t=1703087594114'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/8644674?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getOGGY(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-list?base-address=0x7e877b99897d514da01bd1d177e693ec639961af&start=1&limit=10&platform-id=1'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/7769739?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getETE(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0xc20e1f914a7d1626c8b1371c37b2e812c7530dc0&t=1703087250539'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/7691247?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getPALAI(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0x7fa640483993c968abc3d17b012f822441d1217e&t=1703087763906'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/8603412?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTAMA(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0xe20745b629df6456dc8840ff4bc6e275459b3edf&t=1703088209934'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/2945704?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getLEMON(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0x7e54d586e6980b409915a984c370f597db62a30b&t=1703090552999'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/8701361?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function getCHAT(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0x45feeb2738020eb69974ecb8a9dd6fcfeb478a70&t=1703076357631'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/8732714?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getPALM(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0xa7f098116e0ec8087022a22608aae0a61dcf62ae&t=1703228250326'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/8336492?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getHRZN(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=ethereum&address=0x102cbca736270fa849d936b7d5b7ff6afc1324e6&t=1703227812359'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/1/8681857?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getBOOP(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=arbitrum&address=0x184fb097196a4e2be8dfd44b341cb7d13b41ea7e&t=1703230966144'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/51/8700545?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getDOWN(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=arbitrum&address=0x627446929e02198c0adad59442149a2a8079d933&t=1703231054698'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/51/8690580?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getCLUB(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xb6f8ed94c0ab7ff8b374857e1b48c978a5ea4986&t=1703231323280'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/7096020?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getGLORI(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=arbitrum&address=0x40e31344ff322ff3c03770a28ff66ae36280d616&t=1703231503035'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/51/8672338?reverse-order=true'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getARJ(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=arbitrum&address=0x4251c0627e3804e22ccc635a5e61a91855e15ab6&t=1703231633971'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/51/8690508?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getGENIE(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=pulsechain&address=0x77b60e7dea87dd14327fc3e9c4db93c1bbc1153f&t=1703233564368'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/189/8594061?reverse-order=true'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTEDDYBEAR(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=pulsechain&address=0x0486e0fed8f213e57a41815909e65d8c700113aa&t=1703233709676'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/189/7775209?reverse-order=true'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getSDAI(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=pulsechain&address=0x9b461d6786b01b3bb7b090050e28564ace9d9ad6&t=1703233852261'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/189/7543816?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function get9INCH(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=pulsechain&address=0x9c6d2721b50fd7d3471e131ff6e84f1d62d57700&t=1703233947260'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/189/7978960?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getGRAPE(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=pulsechain&address=0x8faa79d9d5939bcbda29c40fe0e401340d068ea7&t=1703234047769'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/189/7286366?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getJEDI(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=pulsechain&address=0xf72e22dd58f1adc7c97b9abe63bf272c115d5e06&t=1703234164912'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/189/8241058?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function get808(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=pulsechain&address=0x11a3614e418f17d10c0b52d80e81580a59c00323&t=1703234230495'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/189/8249946?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getGROOKGIRL(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0x7e8ff11e76d305a4eb953c5028e123d18bdfcf6a&t=1703228546281'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8602662?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function get$GROKOLAUS(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xfb71c0d3ae1e7b8a88f08ac14885f37e7c836a0a&t=1703228778777'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8594424?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getBABYGROK(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xda574013e8e67e822d0547d9cd9e8e1075827e3a&t=1703228923091'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8301826?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getBABYBONK(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xf2b4c08e43f389190372a80c83655cb8ce0c2f94&t=1703229071847'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8672440?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getBABYGROKX(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0x4ecdea276f885233a9e80c0addba5474c67eb751&t=1703229168283'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8436225?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getBABYGRONK(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xda574013e8e67e822d0547d9cd9e8e1075827e3a&t=1703229409931'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8301826?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getOPX(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xb61f03fda7693623940178a74e5966f577dffc54&t=1703229477073'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8560454?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getNAZAR(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xc6faa3a3ab04139374095564999629a7b9e06d3f&t=1703229538377'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8413277?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getKINGGROKX(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xcb85866385422d89eb8f63720cb1b99e1705893c&t=1703229963755'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8520524?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAET(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xc8d2591d56d1f2585291ff7ff4c6f63ba30308fd&t=1703230419322'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8671229?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getDADA(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0xbe64a7c6eb92fa264af68e00757683689f420919&t=1703230520470'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8681814?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getGROOKDOGE(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0x11bf311dc6017095d1c16659f0180ce812d97da7&t=1703230612807'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8689977?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getSSP(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0x9c6da6dcca89e8fc7176d84220bbb8eeea582c2d&t=1703230693681'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8643637?reverse-order=false'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getFINC(req: Request, res: Response) {
  try {
    // Make multiple requests concurrently using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get('https://api.coinmarketcap.com/dexer/v3/dexer/pair-info?dexer-platform-name=bsc&address=0x8c3d217950b53eee101cd104a61847ef5284c63c&t=1703230759260'),
      axios.get('https://api.coinmarketcap.com/kline/v3/k-line/transactions/14/8592697?reverse-order=true'),
    ]);

    const data1 = response1.data;
    const data2 = response2.data;

    // Send the combined data as the response
    res.json({ data1, data2 });
  } catch (error) {
    const e = error as AxiosError;
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}






// Export the function
export { getethuniv3,getethuniswap,getethsushi,getethpan, getethshibaswap, getethdefiswap, getethkyberswap,
getethfraxswap, getethswaper, getethradio,bnbbaryon,bnbw3,bnbbakery,bnbcone,bnbknight, bnbnomi,  bnbkyber,bnbfst,bnbbaby,bnbmedx, bnbpan ,bnbape,bnbbiswap,bnbpanv3, 
arbimain, arbiuniswapv3,arbisushi,arbikyber,arbicamelot,arbialien,arbizyber, arbioreo, arbiarbi,arbisharky,
polymain,polyuniswapv3,polymmf,polyquickswap,polysushi,polykyber,polyape,
pulsemain,pulseXv1,pulseXv2,
bitmain,
shibdogswap,shibwoofswap,
platformname, platform,getchartvalue,
getJUGNI,getLK,getGFR,getDAI,
get1CAT,getHEMULE,getOGGY,getETE,getPALAI,getTAMA,getLEMON,getCHAT,getPALM,getHRZN,
getBOOP,getDOWN,getCLUB,getGLORI,getARJ,
getGENIE,getTEDDYBEAR,getSDAI,get9INCH,getGRAPE,getJEDI,get808,
getGROOKGIRL,get$GROKOLAUS,getBABYGROK,getBABYBONK,getBABYGROKX,getBABYGRONK,getOPX,getNAZAR,getKINGGROKX,getAET,
getDADA,getGROOKDOGE,getSSP,getFINC,
};
