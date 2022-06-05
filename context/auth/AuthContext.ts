import { createContext } from 'react';
import { Auth, User } from '../../interfaces';
import { LoginInterface } from '../../interfaces/auth';

interface AuthProps {
  userData: Auth;
  updateUser: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthProps);
