import { createContext } from 'react';
import { Auth, User } from '../../interfaces';

interface AuthProps {
  userData: Auth;
  updateUser: (user: User) => void;
  loginUser: (user:User) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthProps);
