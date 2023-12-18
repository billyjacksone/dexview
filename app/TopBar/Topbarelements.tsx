// // HomePage.tsx
// 'use client'
// import React, { useState } from 'react';
// import MoreButton from '../components/MoreButton';

// interface ListItemProps {
//   item: { icon?: string; text: string; link: string };
// }

// const ListItem: React.FC<ListItemProps> = ({ item }) => {
//   const handleClick = () => {
//     // Redirect to the specified link
//     window.location.href = item.link;
//   };

//   return (
//     <td className="table-cell">
//       <div
//         className="flex items-center element-box"
//         onClick={handleClick}
//       >
//         {item.icon && <img src={item.icon} alt="icon" className="w-4 h-4 mr-2" />}
//         <p>{item.text}</p>
//       </div>
//       <style jsx>{`
//         .element-box {
//           border: 1px solid #4c4c4c;
//           padding: 8px;
//           cursor: pointer;
//         }

//         .element-box:hover {
//           background-color: #f0f0f0; /* Add a background color on hover if needed */
//         }
//       `}</style>
//     </td>
//   );
// };

// const HomePage: React.FC = () => {
//   const initialElements = [
//     { text: 'AllDEXes' },
//     { icon: "/pancakeswap.webp", text: 'PancakeSwap', link: '/eth/dex/ethuniswapv3' },
//     { icon: "/uniswap.webp", text: 'UniswapV3', link: '/redirect/uniswap' },
//     { icon: "/uniswap.webp", text: 'Uniswap', link: '/redirect/uniswap' },
//     { icon: "/uniswap.webp", text: 'Sushiswap', link: '/redirect/uniswap' },
//     { icon: "/uniswap.webp", text: 'Pancakeswap', link: '/redirect/uniswap' },
//     { icon: "/uniswap.webp", text: 'Shibaswap', link: '/redirect/uniswap' },
//     { icon: "/uniswap.webp", text: 'Defiswap', link: '/redirect/uniswap' },
//     { icon: "/uniswap.webp", text: 'Kyberswap', link: '/redirect/uniswap' },
//     { icon: "/uniswap.webp", text: 'Fraxswap', link: '/redirect/uniswap' },
//     { icon: "/uniswap.webp", text: 'Radioshack', link: '/redirect/uniswap' },
//     // ... (other elements with links)
//   ];

//   const [elements, setElements] = useState(initialElements);
//   const [showMore, setShowMore] = useState(false);

//   // Function to handle click on "More" button
//   const hasMoreThan7Elements = () => elements.length > 7;

//   const handleMoreClick = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className="container">
//       <table className="custom-table">
//         <tbody>
//           <tr className="table-row">
//             {elements.slice(0, 9).map((item, index) => (
//               <td key={index} className="table-cell">
//                 <ListItem item={item} />
//               </td>
//             ))}
//             {hasMoreThan7Elements() && (
//               <td className="table-cell">
//                 <MoreButton
//                   elements={elements.slice(9)}
//                   handleClick={handleMoreClick}
//                 />
//               </td>
//             )}
//           </tr>
//         </tbody>
//       </table>
//       <style jsx>{`
//         .container {
//           background: rgb(22, 26, 30);
//           padding-top: 0px;
//           padding-bottom: 0px;
//           padding-left: 10px;
//           padding-right: var(--chakra-space-2);
//           border: 1px solid #363636;
//         }

//         .table-row {
//           display: flex;
//         }

//         .table-cell {
//           margin-right: 8px; /* Adjust the spacing between cells as needed */
//         }

//         .custom-table {
//           width: 100%;
//           border-collapse: collapse;
//         }

//         .table-row {
//           border-bottom: 1px solid var(--chakra-colors-whiteAlpha-100);
//         }

//         .table-cell {
//           padding: 8px;
//           border-left: 1px solid #363636; /* Add a border between elements */
//           box-sizing: border-box;
//         }

//         .more-button {
//           border: none;
//           background: #fffff;
//           cursor: pointer;
//           color: #fff;
//         }

//         .table-cell:first-child {
//           border-left: none; /* Remove the left border for the first element */
//         }

//         img {
//           vertical-align: middle;
//         }

//         p {
//           margin: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;

'use client'
import React, { useState } from 'react';
import MoreButton from '../components/MoreButton';

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
        {item.icon && <img src={item.icon} alt="icon" className="icon" />}
        <p>{item.text}</p>
      </div>
      <style jsx>{`
        .element-box {
          border: 1px solid #3c3c3c;
          padding: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: center;
        }

        .element-box:hover {
          background-color: #f0f0f0;
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
    { text: 'All DEXes' },
    { icon: "/pancakeswap.webp", text: 'PancakeSwap', link: '/eth/dex/ethuniswapv3' },
    { icon: "/uniswap.webp", text: 'UniswapV3', link: '/eth/dex/ethuniswap' },
    { icon: "/uniswap.webp", text: 'Uniswap', link: '' },
    { icon: "/uniswap.webp", text: 'Sushiswap', link: '/redirect/uniswap' },
    // { icon: "/uniswap.webp", text: 'Pancakeswap', link: '/redirect/uniswap' },
    // { icon: "/uniswap.webp", text: 'Shibaswap', link: '/redirect/uniswap' },
    // { icon: "/uniswap.webp", text: 'Defiswap', link: '/redirect/uniswap' },
    // { icon: "/uniswap.webp", text: 'Kyberswap', link: '/redirect/uniswap' },
    // { icon: "/uniswap.webp", text: 'Fraxswap', link: '/redirect/uniswap' },
    // { icon: "/uniswap.webp", text: 'Radioshack', link: '/redirect/uniswap' },
    // ... (other elements with links)
  ];

  const [elements, setElements] = useState(initialElements);
  const [showMore, setShowMore] = useState(false);

  // Function to handle click on "More" button
  const hasMoreThan7Elements = () => elements.length > 7;

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container">
      <table className="custom-table">
        <tbody>
          <tr className="table-row">
            {elements.map((item, index) => (
              <ListItem key={index} item={item} />
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
          padding: 10px;
          border: 1px solid #3c3c3c;
        }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
        }

        .table-row {
          display: flex;
        }

        .table-cell {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;


