// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import Navigation from '@/components/Navigation'
// import { AppContextProvider } from '@/lib/contexts'
// import SideBar from '@/components/SideBar'
// import Table from '@/components/Table'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//   //   <html lang="en">
//   //   <body className={inter.className}>
//   //     <AppContextProvider>
//   //       <div >
//   //         <Navigation />
//   //         <div className='flex flex-row '>
//   //           <SideBar />
//   //         <div >
//   //           <Table/>
//   //         </div>
//   //           {/* <Table /> */}
//   //         </div>
//   //         <div className='flex w-full'>{children}</div>
//   //       </div>
//   //     </AppContextProvider>
//   //   </body>
//   // </html>
//   <html lang="en">
//       <body className={inter.className}>
//         <AppContextProvider>
//           <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//             <Navigation />
//             <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
//               <SideBar style={{ flex: '0 0 auto', width: '200px', background: '#f0f0f0', padding: '20px' }} />
//               <div style={{ flex: 1, padding: '20px' }}>
//                 <Table style={{ width: '100%' }} />
//               </div>
//             </div>
//             <div style={{ flex: '0 0 auto', width: '100%', borderTop: '1px solid #ddd', padding: '20px' }}>
//               {children}
//             </div>
//           </div>
//         </AppContextProvider>
//       </body>
//     </html>
//   )
// }

// components/RootLayout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { AppContextProvider } from '@/lib/contexts';
import SideBar from '@/components/SideBar2';
import Table from '@/components/Table2';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={inter.className}>
         <AppContextProvider>
           <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
             <Navigation />
             <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
               <SideBar style={{ flex: '0 0 auto', width: '200px', background: '#f0f0f0', padding: '20px' }} />
               <div style={{ flex: 1, padding: '20px' }}>
                 <Table style={{ width: '100%' }} />
               </div>
             </div>
             <div style={{ flex: '0 0 auto', width: '100%', borderTop: '1px solid #ddd', padding: '20px' }}>
               {children}
             </div>
           </div>
         </AppContextProvider>
       </body>
     </html>
  );
}

