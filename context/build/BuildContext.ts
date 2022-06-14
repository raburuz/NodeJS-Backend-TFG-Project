import { createContext } from 'react';
import { Website } from '../../interfaces';
import { Components } from '../../interfaces/components';

interface BuildProps extends Website {
  state: {};
  addComponent: (component: Components) => void;
  activeComponent: (activeComponent: object) => void;
  changeColorPage: (backgroundColor: string) => void;
}

export const BuildContext = createContext({} as BuildProps);
