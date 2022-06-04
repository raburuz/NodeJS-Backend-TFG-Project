import { createContext } from 'react';
import { User } from '../../interfaces';

interface AuthProps {
  user: User;
  login: (user: User) => void;
  updateUser: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthProps);
