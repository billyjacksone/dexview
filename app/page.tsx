import Table from '@/app/components/Table';

export default function Home() {
  return (
    <div style={{ flex: '1', overflow: 'scrool', paddingTop: '50 %', paddingLeft: '0px'}}>
      <Table />
      {/* <p>Hey</p> */}
    </div>
  )
}

// pages/index.tsx
// import React from 'react';
// import Table from '@/app/components/Table';
// import Link from 'next/link';

// const HomePage: React.FC = () => {
//   return (
//     <div>
//       <Sidebar />
//       <div>
//         <h1>Home Page</h1>
//         <Link href="/eth">
//           <p>Go to Ethereum Page</p>
//         </Link>
//         {/* Display content based on the current route */}
//         <Table />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
