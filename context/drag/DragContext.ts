import { createContext } from 'react';

interface ContextProps {
  //state
  isDragging: boolean;
  element: null | Node;
  enterElement: null | Node;
  //functions
  startMoveElement: (element: Node) => void;
  finishMoveElement: () => void;
  onDragEnterElement: (enterElement: Node) => void;
  onDragLeaveElement: () => void;
}

export const DragContext = createContext({} as ContextProps);
