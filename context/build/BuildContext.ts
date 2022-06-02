import { createContext } from 'react';
import { Website } from '../../interfaces';
import { Components } from '../../interfaces/components';

interface BuildProps extends Website {
  addComponent: (component: Components) => void;
}

export const BuildContext = createContext({} as BuildProps);
