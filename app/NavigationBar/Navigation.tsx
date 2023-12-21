// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAppContext } from '@/lib/contexts';
// import Trending from '../components/Trending2';

// interface TrendingItem {
//   rank: number;
//   name: string;
// }

// const Navigation = () => {
//   const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([]);
//   const { setTrendingElements } = useAppContext();

//   const getTokens = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/coins/platformname');
//       const data = response.data.data.trendingList;

//       // Extract names and create a simplified structure
//       const fetchedTrendingItems = data.map((item: any, index: number) => ({
//         rank: index + 1,
//         symbol: item.symbol,
//       }));

//       // Set the fetched trending elements in the state
//       setTrendingItems(fetchedTrendingItems);

//       // Set the trending elements in the context
//       setTrendingElements(fetchedTrendingItems);
//     } catch (error) {
//       console.error('Error fetching trending items:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch the trending items when the component mounts
//     getTokens();
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
//         {/* Pass the fetched trendingItems as a prop to the Trending component */}
//         <Trending trendingElements={trendingItems} />
//       </div>
//     </>
//   );
// };

// export default Navigation;






import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextProvider } from '@/lib/contexts';
import Image from 'next/image';
import Trending from '../components/Trending2';

const sampleTrendingElements = [
  { rank: 1, name: 'AOA', Icon: () => <Image src="/aoa.svg" width={10} height={10} alt="aoa" /> },
  { rank: 2, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 3, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 4, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 5, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 6, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 7, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 8, name: 'AOA', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 9, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 10, name: 'AOA', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 11, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 12, name: 'AOA', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  { rank: 13, name: 'IGRAIL', Icon: () => <Image src="/aoa.svg" width={20} height={20} alt="aoa" /> },
  
];

interface TrendingItems {
  name: string;
}

const Navigation = () => {

  const [getname, setnames] = useState<TrendingItems[]>([]);
  const getTokens = async () => {
    try {
      const res: TrendingItems[] = await axios.get('http://localhost:8000/coins/polymain');
      setnames(res.data.data.trendingList);
    } catch (error) {
      console.log(error);
    }
  };

  const { setTrendingElements } = useAppContext();

  useEffect(() => {
    setTrendingElements(sampleTrendingElements);
  }, []);

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
        <Trending />
      </div>
    </>
  );
};

export default Navigation;
