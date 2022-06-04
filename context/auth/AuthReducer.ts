import { User } from '../../interfaces';
export { initialUser } from './initialState';

type Action =
  | {
      type: 'Login - Auth Login User';
      user: User;
    }
  | {
      type: 'Update - Auth Update User';
      user: User;
    }
  | {
      type: 'Logout - Auth Logout User';
    };
export const AuthReducer = (state: User, action: Action) => {
  switch (action.type) {
    case 'Login - Auth Login User':
      return {
        ...state,
        ...action.user,
        isLoggedIn: true,
      };
    case 'Update - Auth Update User':
      return {
        ...state,
        ...action.user,
        isLoggedIn: true,
      };
    case 'Logout - Auth Logout User':
      return {
        email: '',
        username: '',
        role: '',
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
