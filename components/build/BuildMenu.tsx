import { useContext, useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext, BuildContext } from '../../context';
import {
  TypoComponent,
  ListComponent,
  ButtonComponent,
  ImageComponent,
} from '../../interfaces/components';
import Link from 'next/link';
import html2canvas from 'html2canvas';

export const BuildMenu = () => {
  const { addComponent } = useContext(BuildContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { userData } = useContext(AuthContext);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  function click(){
    const objetivo:any = document.querySelector('#containerDrag');
    html2canvas(objetivo,{
      allowTaint:true,
      useCORS:true
    }).then(function(canvas){
      let enlace = document.createElement('a');
          enlace.download = userData.user?.username + "- Puzzle.png";
          enlace.href = canvas.toDataURL();
          enlace.click();
    })
  }
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
    // url: '',
  };

  const image: ImageComponent = {
    id: uuidv4(),
    type: 'image',
    alt:'',
    order: 3123,
    // urlLink:'#',
    url: '',
 
  };

  const addNewComponet = (component: any) => {
    addComponent(component);
  };

  return (
    <>
      <Box sx={{ position: 'fixed', right: 20, top: 20, background:'white' }}>
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
          <Button onClick={click}>Save</Button>
          <Link href={'/'}><Button>Back home</Button></Link>
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
        <MenuItem onClick={() => addNewComponet(image)}>Imagen</MenuItem>
      </Menu>
    </>
  );
};
