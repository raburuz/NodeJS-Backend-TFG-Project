import { FC, useReducer } from 'react';
import { Components } from '@mui/material';
import { Website } from '../../interfaces';
import { BuildContext } from './BuildContext';
import { BuildReducer } from './BuildReducer';

interface Props {
  children: JSX.Element;
}

const BUILD_INITIAL_STATE: Website = {
  page: {
    backgroundColor: '#f9f9f9',
    width: 'md',
  },
  components: [
    {
      type: 'list',
      id: '3',
      order: 1,
      items: ['211212', 'lista', 'soy', 'yo'],
    },
    { type: 'list', id: '4', order: 2, items: ['99999', 'lista', 'soy', 'yo'] },
    { type: 'list', id: '5', order: 3, items: ['55555', 'lista', 'soy', 'yo'] },
    { type: 'list', id: '79', order: 4, items: ['000', 'lista', 'soy', 'yo'] },
  ],
};

export const BuildProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(BuildReducer, BUILD_INITIAL_STATE);

  const addComponent = (components: Components) => {
    dispatch({
      type: 'Build - Add New Component',
      components,
    });
  };

  return (
    <BuildContext.Provider value={{ ...state, addComponent }}>
      {children}
    </BuildContext.Provider>
  );
};
