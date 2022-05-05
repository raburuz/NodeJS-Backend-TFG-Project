import MenuList from '@mui/material/MenuList';
import { FC } from 'react';
import { Box } from '@mui/material';

interface Props {
  children: JSX.Element;
}

export const CustomMenuLayout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <MenuList
        dense
        sx={{
          width: 240,
          height: 240,
        }}
      >
        {children}
      </MenuList>
    </Box>
  );
};
