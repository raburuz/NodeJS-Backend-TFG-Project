import { FC, useReducer } from 'react';
import { DragContext } from './DragContext';
import { DragReducer } from './DragReducer';

export interface DragState {
  isDragging: boolean;
  element: Node | null;
  enterElement: Node | null;
}

interface Props {
  children: JSX.Element;
}

const DRAG_INITIAL_STATE: DragState = {
  isDragging: false,
  element: null,
  enterElement: null,
};

export const DragProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(DragReducer, DRAG_INITIAL_STATE);

  const startMoveElement = (element: Node) => {
    dispatch({ type: 'Drag - Start Move Element', element });
  };

  const finishMoveElement = () => {
    dispatch({
      type: 'Drag - Finish Move Element',
    });
  };

  const onDragEnterElement = (enterElement: Node) => {
    dispatch({
      type: 'Drag - OnDragEnter Element',
      enterElement,
    });
  };
  const onDragLeaveElement = () => {
    dispatch({
      type: 'Drag - OnDragLeave Element',
    });
  };

  return (
    <DragContext.Provider
      value={{
        ...state,
        startMoveElement,
        finishMoveElement,
        onDragEnterElement,
        onDragLeaveElement,
      }}
    >
      {children}
    </DragContext.Provider>
  );
};
