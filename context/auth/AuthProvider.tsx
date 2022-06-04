import { FC, useReducer } from 'react';
import { User } from '../../interfaces';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { initialUser } from './initialState';

interface Props {
  children: JSX.Element;
}

export const AUTH_INITIAL_STATE: User = initialUser;

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE);

  const login = (user: User) => {
    dispatch({
      type: 'Login - Auth Login User',
      user,
    });
  };

  const updateUser = (user: User) => {
    const { email, username } = user;
    dispatch({
      type: 'Update - Auth Update User',
      user: {
        email,
        username,
      },
    });
  };

  const logout = () => {
    dispatch({
      type: 'Logout - Auth Logout User',
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
