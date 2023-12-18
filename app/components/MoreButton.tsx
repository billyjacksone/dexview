// import React from 'react';
// import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

// interface MoreButtonProps {
//   elements: { text: string; icon?: string }[];
//   handleClick: () => void; // Add a click handler prop
// }

// const MoreButton: React.FC<MoreButtonProps> = ({ elements, handleClick }) => {
//   const remainingElements = elements.slice(9); // Get remaining elements after the first 7

//   return (
//     <Menu>
//       <MenuButton as={Button} rightIcon={<span>&#8964;</span>} onClick={handleClick}>
//         More
//       </MenuButton>
//       <MenuList>
//         {elements.map((item, index) => (
//           <MenuItem key={index}>{item.text}</MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// };

// export default MoreButton;

// MoreButton.tsx

import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, Flex, Box, Image, Text } from '@chakra-ui/react';

interface MoreButtonProps {
  elements: { text: string; icon?: string }[];
  handleClick: () => void;
}

const MoreButton: React.FC<MoreButtonProps> = ({ elements, handleClick }) => {
  const remainingElements = elements.slice(9); // Get remaining elements after the first 7

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<span>&#8964;</span>} onClick={handleClick}>
        More
      </MenuButton>
      <MenuList>
        <Flex direction="column" p="2">
          {elements.map((item, index) => (
            <MenuItem key={index}>
              <Flex align="center">
                {item.icon && <Image src={item.icon} alt="icon" boxSize="4" />}
                <Text ml="2">{item.text}</Text>
              </Flex>
            </MenuItem>
          ))}
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default MoreButton;


