import { useContext, useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { v4 as uuidv4 } from 'uuid';
import { BuildContext } from '../../context';
import {
  TypoComponent,
  ListComponent,
  ButtonComponent,
} from '../../interfaces/components';

export const BuildMenu = () => {
  const { addComponent } = useContext(BuildContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const typography: TypoComponent = {
    id: uuidv4(),
    type: 'text',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    tag: 'p',
    order: 12331,
  };
  const list: ListComponent = {
    id: uuidv4(),
    type: 'list',
    order: 2313,
    items: ['item-1', 'item-2', 'item-3'],
  };
  const button: ButtonComponent = {
    id: uuidv4(),
    type: 'button',
    order: 132421,
    label: 'Button',
    url: 'http://localhost:3000/',
  };

  const addNewComponet = (component: any) => {
    addComponent(component);
  };

  return (
    <>
      <Box sx={{ position: 'fixed', right: 20, top: 20 }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Add
          </Button>
          <Button>Save</Button>
          <Button>Settings</Button>
        </ButtonGroup>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => addNewComponet(typography)}>Text</MenuItem>
        <MenuItem onClick={() => addNewComponet(list)}>List</MenuItem>
        <MenuItem onClick={() => addNewComponet(button)}>Button</MenuItem>
        <MenuItem onClick={handleClose}>Imagen</MenuItem>
      </Menu>
    </>
  );
};
