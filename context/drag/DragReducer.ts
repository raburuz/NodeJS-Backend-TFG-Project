import { DragState } from './DragProvider';

type Action =
  | { type: 'Drag - Start Move Element'; element: Node }
  | { type: 'Drag - Finish Move Element' };

export const DragReducer = (state: DragState, action: Action) => {
  switch (action.type) {
    case 'Drag - Start Move Element':
      return { ...state, isDragging: true, element: action.element };

    case 'Drag - Finish Move Element':
      return { ...state, isDragging: false };

    default:
      return state;
  }
};
