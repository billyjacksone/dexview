// HomePage.tsx
import React, { useState } from 'react';
import MoreButton from '@/app/components/MoreButton';

interface ListItemProps {
  item: { icon?: string; text: string };
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <td className="table-cell">
      <div className="flex items-center">
        {item.icon && <img src={item.icon} alt="icon" className="w-4 h-4 mr-2" />}
        <p>{item.text}</p>
      </div>
    </td>
  );
};

const HomePage: React.FC = () => {
  const initialElements = [
    { text: 'All DEXes' },
    { icon: "/pancakeswap.webp", text: 'PancakeSwap' },
    { icon: "/uniswap.webp", text: 'Uniswap' },
    { icon: "/uniswap.webp", text: 'UniswapV3' },
    { icon: "/apeswap.webp", text: 'ApeSwap' },
    { icon: "/sushiswap.webp", text: 'SushiSwap' },
    { icon: "/pancakeswap.webp", text: 'PancakeSwapV3' },
    { icon: "/biswap.webp", text: 'BisSwap' },
    { icon: "/safepal.svg", text: 'SushiSwap' },
    { icon: "/safepal.svg", text: 'KyberSwap' },
    { icon: "/safepal.svg", text: 'PancakeSwap' },
    { icon: "/safepal.svg", text: 'Uniswap' },
    { icon: "/safepal.svg", text: 'hyhyhy' },
  ];

  const [elements, setElements] = useState(initialElements);
  const [showMore, setShowMore] = useState(false);

  // Function to handle click on "More" button

  const hasMoreThan7Elements = () => elements.length > 7;

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    // <div className="container">
    //   <table className="custom-table">
    //     <tbody>
    //       <tr className="table-row">
    //         {elements.slice(0, 7).map((item, index) => (
    //           <ListItem key={index} item={item} />
    //         ))}
    //         {hasMoreThan7Elements() && (
    //           <td className="table-cell">
    //             <MoreButton
    //               elements={elements.slice(7)} // Pass the remaining elements
    //               handleClick={handleMoreClick}
    //             />
    //           </td>
    //         )}
    //       </tr>
    //       {showMore && hasMoreThan7Elements() && (
    //         <tr className="table-row">
    //           <td className="table-cell" colSpan={8}>
    //             <MoreButton
    //               elements={elements.slice(7)} // Pass the remaining elements
    //               handleClick={handleMoreClick}
    //             />
    //           </td>
    //         </tr>
    //       )}
    //     </tbody>
    //   </table>
    <div className="container">
      <table className="custom-table">
        <tbody>
          <tr className="table-row">
            {elements.slice(0,9).map((item, index) => (
              <td key={index} className="table-cell">
                <ListItem item={item} />
              </td>
            ))}
            {hasMoreThan7Elements() && (
              <td className="table-cell">
                <MoreButton
                  elements={elements.slice(9)}
                  handleClick={handleMoreClick}
                />
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        .container {
          background: rgb(22, 26, 30);
          padding-top: 0px;
          padding-bottom: 0px;
          padding-left: 10px;
          padding-right: var(--chakra-space-2);
          border: 1px solid #363636;
        }

        .table-row {
          display: flex;
        }
      
        .table-cell {
          margin-right: 8px; // Adjust the spacing between cells as needed
        }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
        }

        .table-row {
          border-bottom: 1px solid var(--chakra-colors-whiteAlpha-100);
        }

        .table-cell {
          padding: 8px;
          border left: 1px solid #363636; /* Add a border between elements */
          box-sizing: border-box;
        }

        .more-button {
          border: none;
          background: #fffff;
          cursor: pointer;
          color: #fff;
        }

        .table-cell:first-child {
          border-left: none; /* Remove the left border for the first element */
        }

        img {
          vertical-align: middle;
        }

        p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
