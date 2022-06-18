import { User, Auth } from '../../interfaces';

type Action =
  | {
      type: '[Auth] - Auth Login User';
      user: User;
    }
  | {
      type: '[Auth] - Auth Update User';
      user: User;
    };
export const AuthReducer = (state: Auth, action: Action) => {
  switch (action.type) {
    case '[Auth] - Auth Login User':
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case '[Auth] - Auth Update User':
      return { 
        
        ...state,
        user: action.user,
        isLoggedIn: true
      
      }
        
      

    default:
      return state;
  }
};
