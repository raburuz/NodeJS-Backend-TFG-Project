import { DragState } from './DragProvider';

type Action =
  | { type: 'Drag - Start Move Element'; element: Node }
  | { type: 'Drag - Finish Move Element' }
  | { type: 'Drag - OnDragEnter Element'; enterElement: Node }
  | { type: 'Drag - OnDragLeave Element' };

export const DragReducer = (state: DragState, action: Action) => {
  switch (action.type) {
    case 'Drag - Start Move Element':
      return { ...state, isDragging: true, element: action.element };

    case 'Drag - Finish Move Element':
      return { ...state, isDragging: false, element: null, enterElement: null };

    case 'Drag - OnDragEnter Element':
      return { ...state, enterElement: action.enterElement };

    case 'Drag - OnDragLeave Element':
      return { ...state, enterElement: null };

    default:
      return state;
  }
};
