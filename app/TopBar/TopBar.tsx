// import React from 'react';

// interface ColumnElement {
//   icon: JSX.Element | string;
//   text: string;
// }

// interface TopBarProps {
//   columnElements: ColumnElement[][];
//   barHeight?: string;
// }

// const TopBar: React.FC<TopBarProps> = ({ columnElements = [], barHeight = '30px' }) => {
//   const renderIcon = (icon: JSX.Element | string) => {
//     if (typeof icon === 'string') {
//       return <img src={icon} alt="Icon" style={{ width: '20px', marginRight: '5px' }} />;
//     }
//     return icon;
//   };

//   return (
//     <div className="css-bacq1k" style={{ 
//       background: 'rgb(22, 26, 30)', 
//       height: barHeight, 
//       paddingTop: '0px', 
//       paddingBottom: '10px', 
//       paddingLeft: '0px', 
//       paddingRight: 'var(--chakra-space-2)', 
//       display: 'flex',
//       alignItems: 'center',
//       color: 'white',
//       marginTop: '20px' 
//     }}>
//       {/* Create columns */}
//       {columnElements.map((column, columnIndex) => (
//         <div key={columnIndex} style={{ 
//           display: 'flex',
//           alignItems: 'center',
//           listStyleType: 'none',
//           fontSize: 'var(--chakra-fontSizes-sm)',
//           margin: '0 10px' 
//         }}>
//           {column.map((item, index) => (
//             <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
//               {renderIcon(item.icon)}
//               <span style={{ marginLeft: '5px' }}>{item.text}</span>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TopBar;


 




