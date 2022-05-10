import { BuildState } from '../../interfaces';
import { TypoComponent } from '../../interfaces/components';

type Action =
  | {
      type: 'Build - Add New Component';
      component: TypoComponent;
    }
  | {
      type: 'Build - Update One Component';
      backgroundColor: string;
    }
  | {
      type: 'Build - Change Color Page';
      backgroundColor: string;
    };

export const BuildReducer = (state: BuildState, action: Action) => {
  switch (action.type) {
    case 'Build - Add New Component':
      return {
        ...state,
        components: [...state.components, action.component],
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
