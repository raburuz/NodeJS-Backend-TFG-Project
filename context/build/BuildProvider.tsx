import { FC, useReducer } from 'react';
import { Components } from '@mui/material';
import { Website } from '../../interfaces';
import { BuildContext } from './BuildContext';
import { BuildReducer } from './BuildReducer';
import { initialValue } from './initialValue';

interface Props {
  children: JSX.Element;
}

const BUILD_INITIAL_STATE: Website = initialValue;

export const BuildProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(BuildReducer, BUILD_INITIAL_STATE);

  const addComponent = (components: Components) => {
    dispatch({
      type: 'Build - Add New Component',
      components,
    });
  };
  const changeColorPage = (backgroundColor: string) => {
    dispatch({
      type: 'Build - Change Color Page',
      backgroundColor,
    });
  };
  return (
    <BuildContext.Provider value={{ ...state, addComponent,changeColorPage  }}>
      {children}
    </BuildContext.Provider>
  );
};
