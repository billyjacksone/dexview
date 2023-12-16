import React, { useState } from 'react';
import MoreButton from '@/components/MoreButton'; // Import your MoreButton component

interface ListItemProps {
  item: { icon?: string; text: string };
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <td className="table-cell">
      <div className="flex items-center">
        {item.icon && <img src={item.icon} alt="icon" className="w-6 h-6 mr-2" />}
        <p>{item.text}</p>
      </div>
    </td>
  );
};

const HomePage: React.FC = () => {
  const initialElements = [
    { text: 'All DEXes' },
    { icon: "/safepal.svg", text: 'Element C' },
    { icon: "/mail.svg", text: 'Mail' },
    { icon: "/mail.svg", text: 'Mail' },
    { icon: "/mail.svg", text: 'Mail' },
    { icon: "/mail.svg", text: 'Mail' },
    { icon: "/safepal.svg", text: 'Element C' },
    { icon: "/safepal.svg", text: 'Element C' },
        { icon: "/mail.svg", text: 'Mail' },
        { icon: "/mail.svg", text: 'Mail' },
        { icon: "/safepal.svg", text: 'Element C' },
        { icon: "/mail.svg", text: 'Mail' },
        { icon: "/safepal.svg", text: 'Element C' },
        { icon: "/mail.svg", text: 'Mail' },
        { icon: "/safepal.svg", text: 'Element C' },
        { icon: "/mail.svg", text: 'Mail' },
        { icon: "/safepal.svg", text: 'Element C' },
        { icon: "/mail.svg", text: 'Mail' },
        { icon: "/safepal.svg", text: 'Element C' },
        { icon: "/mail.svg", text: 'Mail' },
        { icon: "/safepal.svg", text: 'Element C' },
        { icon: "/mail.svg", text: 'Mail' },
        { icon: "/safepal.svg", text: 'Element C' },
  ];

  const [elements, setElements] = useState(initialElements);
  const [showMore, setShowMore] = useState(false);

  // Function to check if there are more than 7 elements
  const hasMoreThan7Elements = () => elements.length > 7;

  // Function to handle click on "More" button
  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container">
      <table className="custom-table">
        <tbody>
          <tr className="table-row">
            {elements.slice(0, 7).map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
            {hasMoreThan7Elements() && (
              <td className="table-cell">
                <MoreButton
                  elements={elements.slice(7)}
                  handleClick={handleMoreClick}
                />
              </td>
            )}
          </tr>
          {showMore && hasMoreThan7Elements() && (
            <tr className="table-row">
              <td className="table-cell" colSpan={8}>
                <MoreButton
                  elements={elements.slice(7)}
                  handleClick={handleMoreClick}
                />
              </td>
            </tr>
          )}
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
          background: transparent;
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
