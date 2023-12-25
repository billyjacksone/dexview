

'use client'
// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TradingView from '@/app/components/Graph';
import Sidebar from '@/app/SideBar/SideBar';
import Navigation from '@/app/NavigationBar/pulsenavtrending';
import { useRouter } from 'next/navigation';

interface DataItem {
  totalSupply: number;
  priceUsd: number;
}

const Page = ({ params }: { params: { name: string } }) => {
  const [token, setToken] = useState<DataItem | null>(null);
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState('main'); // 'main' or 'history'
  const [showHistory, setShowHistory] = useState(false);
  const router = useRouter();

  const getToken = async () => {
    try {
      const res = await axios.get<DataItem>('http://localhost:8000/coins/chartvalue');
      const data = res.data.data;

      console.log('API Response:', data);
      setToken(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setView('main'); // Reset the view to 'main' whenever a button is clicked
    setShowHistory(false); // Hide the history box
  };

  const handleHistoryClick = () => {
    setView('history'); // Set the view to 'history'
    setShowHistory(true); // Show the history box
  };

  const handleBackClick = () => {
    setView('main'); // Set the view back to 'main'
    setShowHistory(false); // Hide the history box
  };

  return (
    <div style={{ display: 'flex', overflow: 'hidden', flex: '1', flexDirection: 'column' }}>
      <Navigation style={{ display: 'flex', overflow: 'hidden', flex: '1', flexDirection: 'column' }} />
      <div className='flex gap-2 w-fit flex-start' style={{ display: 'flex', paddingTop: '8px' }}>
        <Sidebar />
        <div className="flex flex-col gap-1" style={{ display: 'flex' }}>
          <div className="flex flex-col p-2 text-sm" style={{ backgroundColor: '#161a1e', display: 'flex', height: '100px', width: '300px' }}>
            {loading ? (
              <span>Loading...</span>
            ) : error ? (
              <span>Error: {error}</span>
            ) : (
              <>
                <div>
                  <span>Total Supply: {token?.totalSupply} </span>
                  <br />
                  <span>Price:<br /> ${token?.priceUsd}</span>
                  <br />
                  <span>Market Cap: </span>
                </div>
              </>
            )}
          </div>
          <div className='flex flex-col text-sm p-2' style={{ backgroundColor: '#161a1e', width: '300px' }}>
            <span>Social Profile + Logo
              <a
                href="#"
                onClick={() => handleButtonClick('Edit')}
                className={`text-sm text-blue-500 text-right mt-2 ${activeButton === 'Edit' ? 'hover:underline' : ''}`}
              >
                Edit
              </a>
            </span>
            <span>
              <a
                href="/200"
                onClick={() => handleButtonClick('SwapTelegram')}
                className={`text-sm text-blue-500 text-right mt-2 ${activeButton === 'SwapTelegram' ? 'hover:underline' : ''}`}
              >
                🤖 Swap Faster with Telegram
              </a>
            </span>

            <div className='flex gap-2 '>
              <button
                onClick={() => handleButtonClick('24H')}
                className={`text-xs rounded-[6px] px-4 py-1 text-white ${activeButton === '24H' ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#1e98f4]' : 'bg-[#161a1e] opacity-80'}`}
              >
                24H
              </button>
              <button
                onClick={() => handleButtonClick('RUG-CHECK')}
                className={`text-xs rounded-[6px] px-4 py-1 text-white ${activeButton === 'RUG-CHECK' ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#1e98f4]' : 'bg-[#161a1e] opacity-80'}`}
              >
                RUG_CHECK
              </button>
              <button
                onClick={() => handleButtonClick('TOKENOMICS')}
                className={`text-xs rounded-[6px] px-4 py-1 text-white ${activeButton === 'TOKENOMICS' ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#1e98f4]' : 'bg-[#161a1e] opacity-80'}`}
              >
                TOKENOMICS
              </button>
              
            </div>
            Box2
          </div>
          
          <div className='flex flex-col' style={{ backgroundColor: '#161a1e' }}>Box4</div>
        </div>
        <div className='flex flex-col gap-3' style={{ backgroundColor: '#161a1e' }}>
          <div className='p-2' style={{ backgroundColor: '#161a1e', height: '550px', width: '650px' }}>
            Name:
            <TradingView
              symbol={
                (() => {
                  if (params.name === 'GENIE') {
                    return "UNISWAP:GENIEWETH_F21D9D";
                  }
                  if (params.name === 'TEDDY%20BEAR') {
                    return "UNISWAP:TEDWETH_0F8D03";
                  }
                  if (params.name === 'SDAI') {
                    return "UNISWAP3ETH:SDAIGOHM_E7997E.USD";
                  }
                  if (params.name === '9INCH') {
                    return "UNISWAP3ETH:9INCHWETH";
                  }
                  if (params.name === 'JEDI') {
                    return "UNISWAP:JEDIWETH_252BA9";
                  }
                  if (params.name === '808') {
                    return "";
                  }
                  
                })() || "MIL:1CAT"
              }
            />
          </div>
          <div className='flex gap-2 p-2 py-9 ' style={{height: '100px', width:'650px'}}>
          <button
                onClick={handleHistoryClick}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${showHistory ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#1e98f4]' : 'bg-[#161a1e] opacity-80'}`}
              >
                History
              </button>
              <button
                onClick={() => handleButtonClick('YOURTXS')}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${activeButton === 'YOURTXS' ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#f6465d]' : 'bg-[#161a1e] opacity-80'}`}
              >
                Your TXs
              </button>
              <button
                onClick={() => handleButtonClick('BUYERS')}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${activeButton === 'BUYERS' ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#1e98f4]' : 'bg-[#161a1e] opacity-80'}`}
              >
                Buyers
              </button>
              <button
                onClick={() => handleButtonClick('SELLERS')}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${activeButton === 'SELLERS' ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#1e98f4]' : 'bg-[#161a1e] opacity-80'}`}
              >
                Sellers
              </button>
              
            </div>
          <div className='flex flex-col' style={{ backgroundColor: '#161a1e' , width:'650px'}}>
            {view === 'main' && <p></p>}
            {view === 'history' && (
              <>
               
                {showHistory && (
                  <div className="flex gap-2 history-box" style={{ paddingLeft:'2px',height: '100%', width: '645px' }}>
                    {/* Render your table here */}
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Date</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Type</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Palm</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Total</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Price</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Makers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>2023-01-01</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Type 1</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Palm 1</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Total 1</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Price 1</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Makers 1</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>2023-01-02</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Type 2</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Palm 2</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Total 2</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Price 2</td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>Makers 2</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className='flex gap-2'>
          {/* Button Box : Basic Button Design */}
          <button className={`text-sm rounded-[6px] w-[75px] h-[29px] px-4 py-1 text-white ${true ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#1e98f4]' : 'bg-[#161a1e] opacity-80'}`}>
            Hello1
          </button>
          <button className={`text-sm rounded-[6px] text-white w-[75px] h-[29px] px-4 py-1 ${false ? 'bg-[#f6465d]' : 'bg-[#161a1e] opacity-80'}`}>
            Hello2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;



