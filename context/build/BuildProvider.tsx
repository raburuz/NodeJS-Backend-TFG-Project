import { FC, useReducer } from 'react';
import { BuildState, ContentType, TypoComponent } from '../../interfaces';
import { BuildContext } from './BuildContext';
import { BuildReducer } from './BuildReducer';

interface Props {
  children: JSX.Element;
}

const BUILD_INITIAL_STATE: BuildState = {
  page: {
    backgroundColor: '#f9f9f9',
  },
  components: [
    { type: ContentType.TEXT, id: '321321321312sa', label: 'hola' },
    { type: ContentType.TEXT, id: 'dadsa', label: 'noneee' },
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
