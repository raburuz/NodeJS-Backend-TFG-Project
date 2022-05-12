import { createContext } from 'react';
import { Website } from '../../interfaces';
import { TypoComponent } from '../../interfaces/components';

interface BuildProps extends Website {
  addComponent: (component: TypoComponent) => void;
}

export const BuildContext = createContext({} as BuildProps);
