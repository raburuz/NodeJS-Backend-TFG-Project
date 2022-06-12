import { createContext } from 'react';
import { Website } from '../../interfaces';
import { Components } from '../../interfaces/components';

interface BuildProps extends Website {
  state: Website;
  addComponent: (component: Components) => void;
  changeColorPage: (backgroundColor: string) => void;
}

export const BuildContext = createContext({} as BuildProps);
