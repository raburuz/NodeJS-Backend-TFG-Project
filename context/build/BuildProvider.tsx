import { FC, useReducer } from 'react';
import { Components } from '@mui/material';
import { TypoComponent, Website } from '../../interfaces';
import { BuildContext } from './BuildContext';
import { BuildReducer } from './BuildReducer';
import { initialValue } from './initialValue';
import {Component} from '../../interfaces'


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
  const activeComponent = (activeComponent: object) => {
 
    dispatch({
      type: 'Build - Active Component',
      activeComponent,
    });
  };
  const updateActiveComponent = (components: Component) => {
    dispatch({
      type: 'Build - Update Active Component',
      components,
    });
  };
  const deletedComponent = (id: string) => {
    dispatch({
      type: 'Build - Deleted Component',
      id,
    });
  };

  
  const updateLabelText = (label: string,id:string) => {
    dispatch({
      type: 'Build - Update Label Text',
      id,
      label,
    });
  };
  const addUrlImage = (url: string,id:string) => {
    dispatch({
      type: 'Build - Add Url Image',
      id,
      url,
    });
  };
  const changeColorPage = (backgroundColor: string) => {
    dispatch({
      type: 'Build - Change Color Page',
      backgroundColor,
    });
  };

  const changeTextElement = (components: TypoComponent) => {
    dispatch({
      type: 'Build - Change text element',
      components,
    });
  };

  return (

    <BuildContext.Provider value={{ ...state, addComponent,changeColorPage,activeComponent,updateActiveComponent ,deletedComponent,addUrlImage,updateLabelText}}>


      {children}
    </BuildContext.Provider>
  );
};
