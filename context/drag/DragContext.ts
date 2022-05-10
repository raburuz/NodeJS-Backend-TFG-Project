import { createContext } from 'react';

interface ContextProps {
  isDragging: boolean;
  element: null | Node;
  //functions
  startMoveElement: (element: Node) => void;
  finishMoveElement: () => void;
}

export const DragContext = createContext({} as ContextProps);
