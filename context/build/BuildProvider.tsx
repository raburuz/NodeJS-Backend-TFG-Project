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
    { type: ContentType.TEXT, id: '1', label: '1' },
    { type: ContentType.TEXT, id: '2', label: '2' },
    { type: ContentType.TEXT, id: '3', label: '3' },
    { type: ContentType.TEXT, id: '4', label: '4' },
    { type: ContentType.TEXT, id: '5', label: '5' },
    { type: ContentType.TEXT, id: '6', label: '6' },
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
