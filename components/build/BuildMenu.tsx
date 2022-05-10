import { useContext, useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { v4 as uuidv4 } from 'uuid';
import { BuildContext } from '../../context';
import { ContentType } from '../../interfaces';
import { TypoComponent } from '../../interfaces/components';

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

  const addNewComponet = () => {
    const component: TypoComponent = {
      id: uuidv4(),
      type: ContentType.TEXT,
      label: 'Write something nice',
      p: true,
    };

    addComponent(component);
  };

  return (
    <>
      <Box sx={{ position: 'absolute', right: 20, top: 20 }}>
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
        <MenuItem onClick={addNewComponet}>Text</MenuItem>
        <MenuItem onClick={handleClose}>List</MenuItem>
        <MenuItem onClick={handleClose}>Image</MenuItem>
        <MenuItem onClick={handleClose}>Button</MenuItem>
      </Menu>
    </>
  );
};
