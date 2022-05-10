import { createContext } from 'react';
import { BuildState } from '../../interfaces';
import { TypoComponent } from '../../interfaces/components';

interface BuildProps extends BuildState {
  addComponent: (component: TypoComponent) => void;
}

export const BuildContext = createContext({} as BuildProps);
