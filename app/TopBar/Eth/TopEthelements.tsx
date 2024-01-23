'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MoreButton from '@/app/components/MoreButton'; // Import the MoreButton component

interface ListItemProps {
  item: { icon?: string; text: string; link: string };
  
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const handleClick = () => {
    // Redirect to the specified link
    window.location.href = item.link;
  };

  return (
    <td className="table-cell">
      <div className="element-box" onClick={handleClick}>
        {item.icon && (
          <div className="icon">
            <Image src={item.icon} alt="icon" width={20} height={20} />
          </div>
        )}
        <p>{item.text}</p>
      </div>
      <style jsx>{`
        .element-box {
          padding: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          position: relative;
        }

        .element-box.clicked::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 5px;
          background-color: #fffff;
        }

        .element-box:hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 5px;
          background-color: #161616;
        }

        .icon {
          max-width: 20px;
          max-height: 20px;
          margin-right: 10px;
        }

        p {
          margin: 0px;
          font-size: 14px;
        }
      `}</style>
    </td>
  );
};

const HomePage: React.FC = () => {
  const initialElements = [
    { text: 'All DEXes' , link: '#'},
    { icon: "/uniswap.webp", text: 'UniswapV3', link: '/eth/dex/ethuniswapv3' },
    { icon: "/uniswap.webp", text: 'Uniswap', link: '/eth/dex/ethuniswap' },
    { icon: "/sushiswap.webp", text: 'Sushiswap', link: '/eth/dex/ethsushiswap' },
    { icon: "/pancakeswap.webp", text: 'PancakeSwap', link: '/eth/dex/ethpan' },
    { icon: "/shibaswap.webp", text: 'Shibaswap', link: '/eth/dex/ethshiba' },
    { icon: "/defiswap.webp", text: 'Defiswap', link: '/eth/dex/ethdefi' },
    { icon: "/kyberswap.webp", text: 'Kyberswap', link: '/eth/dex/ethkyber' },
    { icon: "/fraxswap.webp", text: 'Fraxswap', link: '/eth/dex/ethfrax' },
    { icon: "/radioshack.webp", text: 'Radioshack', link: '/eth/dex/ethradio' },
    // ... (other elements with links)
  ];

  const [elements, setElements] = useState(initialElements);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllElements, setShowAllElements] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayElements = isMobile ? (showAllElements ? elements : elements.slice(0, 2)) : elements;

  return (
    <div className="outer-box">
      <table className="custom-table">
        <tbody>
          <tr className="table-row">
            {displayElements.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
            {isMobile && elements.length > 3 && (
              <td className="table-cell">
                <MoreButton elements={elements.slice(3)}  />
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        .outer-box {
          background: rgb(22, 26, 30);
          padding: 2px;
          border: 1px solid #3c3c3c;
          display: flex;
          flex-direction: column;
        }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
        }

        .table-row {
          display: flex;
          flex-wrap: wrap;
        }

        .table-cell {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
