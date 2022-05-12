import { FC, useReducer } from 'react';
import { Website, ContentType, TypoComponent } from '../../interfaces';
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
    { type: 'text', id: '1', label: '1', tag: 'h1', order: 0 },
    { type: 'text', id: '2', label: '2', tag: 'h2', order: 1 },
    { type: 'text', id: '3', label: '3', tag: 'h3', order: 2 },
    { type: 'text', id: '4', label: '4', tag: 'p', order: 3 },
    { type: 'text', id: '5', label: '5', tag: 'p', order: 4 },
    { type: 'text', id: '6', label: '6', tag: 'p', order: 5 },
  ],
};

export const BuildProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(BuildReducer, BUILD_INITIAL_STATE);

  const addComponent = (component: TypoComponent) => {
    dispatch({
      type: 'Build - Add New Component',
      component,
    });
  };

  return (
    <BuildContext.Provider value={{ ...state, addComponent }}>
      {children}
    </BuildContext.Provider>
  );
};
