'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TradingView from '@/app/components/Graph';
import Sidebar from '@/app/SideBar/SideBar';
import Navigation from '@/app/NavigationBar/ethnavtrending';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/connectbutton';

interface DataItem {
  totalSupply: number;
  priceUsd: number;
  address: string;
  volume24h: string;
  priceChange24h: string;
}
interface ValueItem{
  id: number;
  type: string;
  totalQuote: string;
  priceUsd: string;
  totalUsd: string;
  txn:string;
  time: string;
  // address: string;
}

const Page = ({ params }: { params: { name: string } }) => {
  const [buys, setBuys] = useState<ValueItem[]>([]);
  const [sells, setSells] = useState<ValueItem[]>([]);
  const [token, setToken] = useState<DataItem | null>(null);
  const [value, setValue] = useState<ValueItem[]>([]);
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [view, setView] = useState('main'); // 'main' or 'history'
  const [showHistory, setShowHistory] = useState(false);
  const [showyourtxs, setshowyourtxs] = useState(false);
  const [showbuyers, setShowbuyers] = useState(false);
  const [showsellers, setShowsellers] =  useState(false);
  const [setwallet, Showsetwallet] = useState(false);
  const [box2Visible, setBox2Visible] = useState(false);
  const [box3Visible, setBox3Visible] = useState(false);
  const router = useRouter();

  const getToken = async () => {
    try {
      const res = await axios.get<{
        data1: {
          data: DataItem; // Assuming DataItem is the type of your actual data
        };
        data2: {
          data: {
            transactions: ValueItem[]; // Replace with the actual type of your transactions
          };
        };
      }>(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/coins/${params.name}`);
  
      const data = res.data.data1.data;
      const item = res.data.data2.data.transactions;
  
      console.log('API Response:', data);
      setToken(data);
      setValue(item);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(null);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    // Filter buys and sells based on txn
    const buyTransactions = value.filter((item) => item.type === 'buy');
    const sellTransactions = value.filter((item) => item.type === 'sell');

    setBuys(buyTransactions);
    setSells(sellTransactions);
  }, [value]);

  const calculateTotal = (transactions: ValueItem[]) => {
    return transactions.reduce((total, transaction) => {
      return total + parseFloat(transaction.totalUsd);
    }, 0);
  };

  const totalBought = calculateTotal(buys);
  const totalSold = calculateTotal(sells);

  const handleButtonClick = (button: string) => {
    setActiveButton(null);
    setView('main'); 
    setShowHistory(false); 

    setBox2Visible(button === 'Hello2');
    setBox3Visible(button === 'Hello3');
};


  const handleHistoryClick = () => {
    setView('history');
    setShowHistory(true);
    setshowyourtxs(false);  
    setShowbuyers(false);  
    setShowsellers(false); 
    setActiveButton(null);
  };

  const handleTxsClick = () => {
    setView('yourtxs');
    setshowyourtxs(true);
    setShowHistory(false);  
    setShowbuyers(false); 
    setShowsellers(false);  
    setActiveButton(null);
  }

  const HandlebuyersClick = () => {
    setView('buyers');
    setShowbuyers(true);
    setShowHistory(false);   
    setshowyourtxs(false); 
    setShowsellers(false);  
    setActiveButton(null); 
  }

  const HandlesellerClick = () => {
    setView('sellers');
    setShowsellers(true);
    setShowbuyers(false);
    setShowHistory(false);   
    setshowyourtxs(false);   
    setActiveButton(null); 

  }

  const handleBackClick = () => {
    setView('main'); 
    setShowHistory(false); 
    setShowbuyers(false);
    setshowyourtxs(false);  
  };

  const formatEpochTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
    return formattedDate;
  };

  const handleWalletClick = () => {
    console.log('handleWalletClick Called!!');
    setView('wallet');
    Showsetwallet(true);  
  };

  const handleButton2Click = () => {
    handleButtonClick('Hello2');
  };

  const handleButton3Click = () => {
    handleButtonClick('Hello3');
  };

  return (
    <div style={{ display: 'flex', overflow: 'hidden', flex: '1', flexDirection: 'column' }}>
      <Navigation />
      <div className='flex gap-2 w-fit flex-start' style={{ display: 'flex', paddingTop: '8px' }}>
        <Sidebar />
        <div className="flex flex-col gap-1" style={{ display: 'flex' }}>
          <div className="flex flex-col p-2 text-sm" style={{ backgroundColor: '#161a1e', display: 'flex', height: '100px', width: '300px' }}>
            {loading ? (
              <span>Loading...</span>
            ) : error ? (
              <span>Error: {error.message}</span>
            ) : (
              <>
                <div>
                  <span>Total Supply: {token?.totalSupply} </span>
                  <br />
                  <span>
                    Price:
                    <br />
                    <span style={{ color: token?.priceUsd ? 'green' : 'black' }}>
                      ${token?.priceUsd}
                    </span>
                  </span>
                  <br />
                  <span>Market Cap: </span>
                </div>
              </>
            )}
          </div>
          <div className='flex flex-col text-sm p-2' style={{ backgroundColor: '#161a1e', width: '300px', marginInlineEnd:'10px' }}>
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
                className={`text-xs rounded-[6px] px-4 py-1 text-white ${activeButton === '24H' ? 'bg-[#f6465d] ' : 'bg-[#161a1e] opacity-80'}`}
              >
                24H
              </button>
              <button
                onClick={() => handleButtonClick('RUG-CHECK')}
                className={`text-xs rounded-[6px] px-4 py-1 text-white ${activeButton === 'RUG-CHECK' ? 'bg-[#f6465d] ' : 'bg-[#161a1e] opacity-80'}`}
              >
                RUG_CHECK
              </button>
              <button
                onClick={() => handleButtonClick('TOKENOMICS')}
                className={`text-xs rounded-[6px] px-4 py-1 text-white ${activeButton === 'TOKENOMICS' ? 'bg-[#f6465d] ' : 'bg-[#161a1e] opacity-80'}`}
              >
                TOKENOMICS
              </button>
              
            </div>
            <div style={{ width: '290px', padding: '8px', gap: '4px',  backgroundColor: '#0f1215'}}>
              <span style={{ fontSize: '14px', color: '#FFFFFFCC' }}>
                24h Volume: ${token?.volume24h && parseFloat(token.volume24h).toFixed(1)}
              </span><br />
              <div style={{ height: '1px', backgroundColor: '#0f1215', margin: '8px 0' }}></div>
              <span style={{ fontSize: '14px', color: '#FFFFFFCC' }}>
                24h Change: {token?.priceChange24h && parseFloat(token.priceChange24h).toFixed(1)}
              </span>
              <div style={{ height: '1px', backgroundColor: '#0f1215', margin: '8px 0' }}></div>
              <span style={{ fontSize: '14px', color: '#FFFFFFCC' }}>
                24H Transaction: 
              </span>
              <div style={{ height: '1px', backgroundColor: '#0f1215', margin: '8px 0' }}></div>
              <span style={{ fontSize: '14px', color: '#FFFFFFCC' }}>
                ATH From Listing: 
              </span>
              <div style={{ height: '1px', backgroundColor: '#0f1215', margin: '8px 0' }}></div>
              <span style={{ fontSize: '14px', color: '#FFFFFFCC' }}>
                Holders:
              </span>
            </div>

          </div>
          
          <div className='flex text-sm p-2 flex-col' style={{ backgroundColor: '#161a1e', width: '300px', height: '100px', color: 'white'}}>
          <span>
            Pair: {token?.address && `${token.address.substring(0, 3)}...${token.address.slice(-3)}`}
          </span> 
          <span>
            {params.name}: {token?.address && `${token.address.substring(0, 3)}...${token.address.slice(-3)}`}
          </span>
            Box4
          </div>
        </div>
        <div className='flex flex-col gap-3' style={{ backgroundColor: '#161a1e' }}>
          <div className='p-2 ' style={{ backgroundColor: '#161a1e', height: '0px', width: '700px', display:'flex' }}>
          
          <img src="/ethereum.webp" alt="Icon" style={{ marginRight: '8px', height: '30px', width: '30px' }} /> 
          
           <span>{params.name}</span> <br />
           <span style={{ color: token?.priceUsd ? 'green' : 'black' }}>
               ${token?.priceUsd}
           </span>
          </div>
            
            <br />
            <div className='p-2 ' style={{ backgroundColor: '#161a1e', height: '550px', width: '900px' }}>
            <TradingView
              symbol={
                (() => {
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
                })() || "MIL:1CAT"
              }
            /> 
          </div>
          <div className='flex gap-2 p-2 py-9 ' style={{height: '100px', width:'650px'}}>
              <button
                onClick={handleHistoryClick}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${showHistory ? 'bg-[#f6465d] ' : 'bg-[#161a1e] opacity-80'}`}
              >
                History
              </button>
              <button
                onClick={handleTxsClick}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${showyourtxs ? 'bg-[#f6465d] ' : 'bg-[#161a1e]'}`}
              >
                Your TXs
              </button>
              <button
                onClick={HandlebuyersClick}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${showbuyers ? 'bg-[#f6465d] ' : 'bg-[#161a1e] opacity-80'}`}
              >
                Buyers
              </button>
              <button
                onClick={HandlesellerClick}
                className={`text-sm rounded-[6px] px-4 py-1 text-white ${showsellers ? 'bg-[#f6465d] ' : 'bg-[#161a1e] opacity-80'}`}
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
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder }}>{formatEpochTimestamp(parseInt(item.time, 10))}</td>
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

      {view === 'buyers' && (
              <>
                {showbuyers && (
                  <div className="flex gap-2 history-box" style={{ paddingLeft: '5px', height: '100%', width: '695px', overflow:'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', overflow: 'auto' }}>
                      <thead>
                        <tr>
                          <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>WALLET</th>
                          <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>TOTAL BOUGHT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {buys.map((item) => (
                          <tr key={item.txn}>
                            <td style={{ ...tableCellStyle, ...tableCellWithBorder , color: 'blue'}}>{item.txn}</td>
                            <td style={{ ...tableCellStyle, ...tableCellWithBorder , color: 'green'}}>${parseFloat(item.totalUsd).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder, fontWeight: 'bold' }}>Total</td>
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder, fontWeight: 'bold' }}>{totalBought}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                )}
              </>
            )}

    {view === 'sellers' && (
            <>
              {showsellers && (
                <div className="flex gap-2 history-box" style={{ paddingLeft: '5px', height: '100%', width: '695px', overflow:'auto', overscrollBehavior:'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>WALLET</th>
                        <th style={{ ...tableHeaderStyle, borderRight: '1px solid graystone500', background: '#1A1C21' }}>TOTAL SOLD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sells.map((item) => (
                        <tr key={item.txn}>
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder, color: 'blue' }}>{item.txn}</td>
                          <td style={{ ...tableCellStyle, ...tableCellWithBorder, color:' red' }}>${parseFloat(item.totalUsd).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td style={{ ...tableCellStyle, ...tableCellWithBorder, fontWeight: 'bold' }}>Total</td>
                        <td style={{ ...tableCellStyle, ...tableCellWithBorder, fontWeight: 'bold' }}>{totalSold}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              )}
            </>
          )}
          </div>
        </div>

        <div className="flex  p-2 text-sm" style={{ backgroundColor: '#161a1e', display: 'flex', height: '100px', width: '300px' }}>
        
        <button
          onClick={handleWalletClick}
          className={`text-sm rounded-[6px] w-[75px] h-[29px] px-4 py-1 text-white ${setwallet ? 'bg-[#f6465d] ' : 'bg-[#161a1e] opacity-80'}`}
        >
          Wallet
        </button>
        <button
          onClick={handleButton2Click}
          className={`text-sm rounded-[6px] w-[75px] h-[29px] px-4 py-1 text-white ${activeButton === 'Hello2' ? 'bg-[#f6465d] ' : 'bg-[#161a1e] opacity-80'}`}
        >
          Starred
        </button>
        <button
          onClick={handleButton3Click}
          className={`text-sm rounded-[6px] w-[75px] h-[29px] px-4 py-1 text-white ${activeButton === 'Hello3' ? 'bg-[#f6465d] ' : 'bg-[#161a1e] opacity-80'}`}
        >
          History
        </button>

      </div>
      {/* <div className="" style={{ backgroundColor: '#ffffff', height: '500px', width: '300px' }}>
            {
              view === 'wallet' && (
                <>
                {
                  setwallet && (
                    <div className='flex gap-2 text-sm' style={{height: '100px', width: '300px'}}>
                        <h1>Om om</h1>
                    </div>
                  )
                }
                </>
              )
            }
      </div> */}
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












              

             
              
              





 