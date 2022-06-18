import { Website } from '../../interfaces/components';
import { v4 as uuidv4 } from 'uuid';
import { Component } from '../../interfaces/components';

export const initialValue: Website = {
  page: {
    backgroundColor: '#f9f9f9',
    width: 'md',
  },
  components: [
    {
      type: 'text',
      label: 'Mi Página Estatica No Code',
      id: uuidv4(),
      tag: 'h1',
      order: 0,
      sx: {},
    },
    {
      type: 'text',
      label: 'Lorem ipsum dolor sit amet, ',
      id: uuidv4(),
      tag: 'h2',
      order: 1,
      sx: {},
    },
    {
      type: 'text',
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      id: uuidv4(),
      tag: 'p',
      order: 2,
      sx: {},
    },
    {
      type: 'text',
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      id: uuidv4(),
      tag: 'p',
      order: 3,
      sx: {},
    },
    {
      type: 'text',
      label: 'Lorem ipsum dolor sit amet, ',
      id: uuidv4(),
      tag: 'h3',
      order: 4,
      sx: {},
    },
    {
      type: 'text',
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      id: uuidv4(),
      tag: 'p',
      order: 5,
      sx: {},
    },
    {
      type: 'text',
      label: 'Lorem ipsum dolor sit amet.',
      id: uuidv4(),
      tag: 'h2',
      order: 6,
      sx: {},
    },
    {
      type: 'text',
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      id: uuidv4(),
      tag: 'p',
      order: 7,
      sx: {},
    },

    {
      type: 'text',
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      id: uuidv4(),
      tag: 'p',
      order: 8,
      sx: {},
    },
  ],
  active: {  
    type:'',
    label:'',
    id:'',
    order:'',
    sx:{},
    

},
};
