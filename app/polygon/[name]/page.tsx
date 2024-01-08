


'use client'
// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TradingView from '@/app/components/Graph';
import Sidebar from '@/app/SideBar/SideBar';
import Navigation from '@/app/NavigationBar/ethnavtrending';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';

interface DataItem {
  totalSupply: number;
  priceUsd: number;
}
interface ValueItem{
  type: string;
  totalQuote: string;
  priceUsd: string;
  totalUsd: string;
  txn:string;
}

const Page = ({ params }: { params: { name: string } }) => {
  const [token, setToken] = useState<DataItem | null>(null);
  const [value, setValue] = useState<ValueItem[]>([]);
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState('main'); // 'main' or 'history'
  const [showHistory, setShowHistory] = useState(false);
  const [showyourtxs, setshowyourtxs] = useState(true);
  const router = useRouter();

  const getToken = async () => {
    try {
      const res = await axios.get<DataItem>(`http://localhost:8000/coins/${params.name}`);
      const data = res.data.data1.data;
      const item = res.data.data2.data.transactions;
  
      console.log('API Response:', data);
      setToken(data);
      setValue(item);
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

  const handleTxsClick = () => {
    setView('yourtxs');
    setshowyourtxs(true);
  }

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
          <div className='p-2' style={{ backgroundColor: '#161a1e', height: '550px', width: '700px' }}>
            Name:
            <TradingView
              symbol={(() => {
                if (params.name === 'JUNGI') {
                  return "QUICKSWAP:JUGNIWMATIC_330C4E";
                }
                if (params.name === 'LK') {
                  return "PANCAKESWAP:LKKUSDT_D6A980";
                }
                if (params.name === 'GFR') {
                  return "PANCAKESWAP:BABYGROKXWBNB_18D2BB";
                }
                if (params.name === 'DAI') {
                  return "SUSHISWAPPOLYGON:DAIUSDC_CD578F";
                }


              })() || "MIL:1CAT"} /> 
          </div>
          <div className='flex gap-2 p-2 py-9 ' style={{height: '100px', width:'650px'}}>
              <button
                onClick={handleHistoryClick}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${showHistory ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#1e98f4]' : 'bg-[#161a1e] opacity-80'}`}
              >
                History
              </button>
              <button
                onClick={handleTxsClick}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${showyourtxs ? 'bg-[#f6465d] outline outline-2 outline-offset-2 outline-[#4649f6]' : 'bg-[#161a1e] opacity-80'}`}
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
          <div className='flex flex-col' style={{ backgroundColor: '#161a1e' , width:'650px', maxHeight: '400px'}}>
            {view === 'main' && <p></p>}
            {view === 'history' && (
              <>
               
                {showHistory && (
                  <div className="flex gap-2 history-box" style={{ paddingLeft:'5px',height: '100%', width: '695px', overflowY: 'auto' }}>
                    {/* Render your table here */}
                    <table style={{ width: '100%', borderCollapse: 'collapse', overflowY: 'auto'}}>
                    <thead>
                      <tr>
                        <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Date</th>
                        <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Token</th>
                        <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>{params.name}</th>
                        <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Total</th>
                        <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Price</th>
                        <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Makers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {value.map((item, index) => (
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
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{item.type}</td>
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder,  color: item.type === 'sell' ? 'red' : 'green' }}>{capitalizeFirstLetter(item.type)}</td>
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder,  color: item.type === 'sell' ? 'red' : 'green' }}>{item.priceUsd}</td>
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder,  color: item.type === 'sell' ? 'red' : 'green' }}>{item.totalUsd}</td>
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder,  color: item.type === 'sell' ? 'red' : 'green' }}>{parseFloat(item.priceUsd).toFixed(6)}</td>
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>
                            {item.txn.length > 7 ? `${item.txn.substring(0, 4)}...${item.txn.substring(item.txn.length - 3)}` : item.txn}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                )}
              </>
            )}

            {view === 'yourtxs' && (
              <>
                {showyourtxs &&(
                  <div className="flex gap-2 history-box" style={{ paddingLeft:'5px',height: '100%', width: '695px' }}>
                  {/* Render your table here */}
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Date</th>
                      <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Type</th>
                      {/* <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>{params.name}</th> */}
                      <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Total</th>
                      <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Price</th>
                      <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>Makers</th>
                    </tr>
                  </thead>
                  <tbody>
                  <span>Connect wallet to see your transactions</span><br />
                  <br />
                  <Button />
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


const tableHeaderStyle: React.CSSProperties = {
  background: 'rgb(22, 26, 30)',
  padding: '8px',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  borderRight: '1px solid graystone500',
  border: '1px solid #363636',
  fontSize: '14px'
};

const tableCellStyle: React.CSSProperties = {
  padding: '8px',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  borderBottom: '1px solid graystone500',
  borderRight: '1px solid graystone500',
  fontSize: '12px'
};

const tableCellWithBorder: React.CSSProperties = {
  borderRight: '1px solid graystone500',
  border: '1px solid #363636'
};

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


export default Page;












              

             
              
              