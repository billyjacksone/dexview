import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '@/lib/contexts';
import Trending from '../components/Trending2';

interface TrendingItem {
  rank: number;
  name: string;
}

const Navigation = () => {
  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([]);
  const { setTrendingElements } = useAppContext();

  const getTokens = async () => {
    try {
      const response = await axios.get('http://localhost:8000/coins/platformname');
      const data = response.data.data.trendingList;

      // Extract names and create a simplified structure
      const fetchedTrendingItems = data.map((item: any, index: number) => ({
        rank: index + 1,
        symbol: item.symbol,
      }));

      // Set the fetched trending elements in the state
      setTrendingItems(fetchedTrendingItems);

      // Set the trending elements in the context
      setTrendingElements(fetchedTrendingItems);
    } catch (error) {
      console.error('Error fetching trending items:', error);
    }
  };

  useEffect(() => {
    // Fetch the trending items when the component mounts
    getTokens();
  }, [setTrendingElements]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingInlineStart: 'var(--chakra-space-2)',
          paddingInlineEnd: 'var(--chakra-space-2)',
          background: 'rgb(22, 26, 30)',
          fontSize: 'var(--chakra-fontSizes-xs)',
          height: '48px',
        }}
      >
        {/* Pass the fetched trendingItems as a prop to the Trending component */}
        <Trending trendingElements={trendingItems} />
      </div>
    </>
  );
};

export default Navigation;




// import React, { useEffect, useState } from 'react';
// import { useAppContext } from '@/lib/contexts';
// import Trending from '../components/Trending2';

// const Navigation = () => {
//   const { setTrendingElements } = useAppContext();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTrendingElements = async () => {
//       try {
//         // Replace 'API_ENDPOINT' with your actual API endpoint
//         const response = await fetch('https://api.coinmarketcap.com/data-api/v3/cryptocurrency/spotlight?dataType=9&limit=30');
//         const data = await response.json();

//         // Extract names, icons, and links from the API response
//         const trendingElements = data.data.trendingList.map((element, index) => ({
//           rank: index + 1,
//           name: element.name,
//           icon: element.logo,
//           link: `https://example.com/${element.slug}`, // Replace 'example.com' with the actual link structure
//         }));

//         // Set the trending elements in the context
//         setTrendingElements(trendingElements);
//       } catch (error) {
//         console.error('Error fetching trending elements:', error);
//       } finally {
//         // Set loading to false once the data is fetched (success or error)
//         setLoading(false);
//       }
//     };

//     // Call the function to fetch trending elements
//     fetchTrendingElements();
//   }, [setTrendingElements]);

//   return (
//     <>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           paddingInlineStart: 'var(--chakra-space-2)',
//           paddingInlineEnd: 'var(--chakra-space-2)',
//           background: 'rgb(22, 26, 30)',
//           fontSize: 'var(--chakra-fontSizes-xs)',
//           height: '48px',
//         }}
//       >
//         {/* Show a loading message while data is being fetched */}
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             {TrendingElements.map((element) => (
//               <a
//                 key={element.rank}
//                 href={element.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ marginRight: '10px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
//               >
//                 <span style={{ color: 'white', marginRight: '5px' }}>{element.rank}.</span>
//                 <img src={element.icon} alt={element.name} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
//                 <span style={{ color: 'white' }}>{element.name}</span>
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navigation;
