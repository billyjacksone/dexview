
// import React, { useState } from 'react';

// interface MoreButtonProps {
//   elements: { text: string; icon?: string; link: string }[];
// }

// const MoreButton: React.FC<MoreButtonProps> = ({ elements }) => {
//   const remainingElements = elements.slice(9);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleButtonClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleDropdownItemClick = (link: string) => {
//     // Redirect to the specified link
//     window.location.href = link;
//   };

//   return (
//     <div className="more-button">
//       <button onClick={handleButtonClick}>More</button>
//       {isOpen && (
//         <div className="dropdown">
//           {remainingElements.map((item, index) => (
//             <div
//               key={index}
//               className="dropdown-item"
//               onClick={() => handleDropdownItemClick(item.link)}
//             >
//               {item.text}
//             </div>
//           ))}
//         </div>
//       )}
//       <style jsx>{`
//         .more-button {
//           position: relative;
//         }
      
//         .dropdown {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           background-color: #4c4c4c;
//           min-width: 120px; /* Adjusted the width */
//           border: 1px solid #ccc;
//           z-index: 1;
//           border-radius: 8px; /* Added rounded edges */
//           overflow: hidden; /* Ensure the rounded edges are visible */
//         }
      
//         .dropdown-item {
//           padding: 12px;
//           text-decoration: none;
//           display: block;
//           cursor: pointer;
//           transition: background-color 0.3s; /* Smooth transition on hover */
//         }

//         button:hover {
//           background-color: #4c4c4c; /* Darker shade on hover */
//         }
      
      
//         .dropdown-item:hover {
//           background-color: #ddd;
//         }
      
//         button {
//           background-color: #333333;
//           color: white;
//           padding: 8px 12px; /* Adjusted padding */
//           border: none;
//           cursor: pointer;
//           border-radius: 8px; /* Added rounded edges */
//         }
//       `}</style>
//     </div>
//   );
// };
// export default MoreButton;

import React, { useState } from 'react';

const MoreButton: React.FC<{ elements: { text: string; link: string; icon?: string }[] }> = ({ elements }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (link: string) => {
    // Redirect to the specified link
    window.location.href = link;
  };

  const remainingElements = elements.slice(10);

  return (
    <div className="more-button">
      <button onClick={handleButtonClick}>
        More
        <span className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}></span>
      </button>
      {isDropdownOpen && (
        <div className="dropdown">
          {remainingElements.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleDropdownItemClick(item.link)}
            >
              {item.icon && <img src={item.icon} alt="icon" className="icon" />}
              <span className="text">{item.text}</span>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .more-button {
          position: relative;
          display: inline-block;
          margin-top: 5px; /* Adjust the space above the dropdown */
        }

        button {
          background-color: #333333;
          color: white;
          padding: 4px 12px;
          border: none;
          cursor: pointer;
          border-radius: 8px;
          transition: background-color 0.3s;
          position: relative;
        }

        button:hover {
          background-color: #4c4c4c;
        }

        .arrow {
          position: absolute;
          top: 55%;
          right: 0px; /* Adjusted the right position for more space */
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 5px 0;
          border-color: white transparent transparent;
          transition: transform 0.3s;
        }
        

        .up {
          transform: translateY(-50%) rotateX(180deg);
        }

        .dropdown {
          position: absolute;
          top: 110%;
          right: 0%;
          background-color: #333333;
          min-width: 200px; /* Adjust the width of the dropdown */
          border: 1px solid #ccc;
          z-index: 1;
          border-radius: 8px;
          overflow: hidden;
        }

        .dropdown-item {
          padding: 12px;
          text-decoration: none;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .dropdown-item:hover {
          background-color: #4c4c4c;
        }

        .icon {
          max-width: 20px;
          max-height: 20px;
          margin-right: 10px;
        }

        .text {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default MoreButton;
