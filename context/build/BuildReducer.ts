import { Components } from '@mui/material';

type Action =
  | {
      type: 'Build - Add New Component';
      components: Components;
    }
  | {
      type: 'Build - Update One Component';
      backgroundColor: string;
    }
  | {
      type: 'Build - Change Color Page';
      backgroundColor: string;
    };

export const BuildReducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'Build - Add New Component':
      return {
        ...state,
        components: [...state.components, action.components],
      };
    case 'Build - Update One Component':
      return {
        ...state,
      };
    case 'Build - Change Color Page':
      return {
        ...state,
        page: { backgroundColor: action.backgroundColor },
      };

    default:
      return state;
  }
};
