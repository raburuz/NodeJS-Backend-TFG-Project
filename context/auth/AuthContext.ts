import { createContext } from 'react';
import { Auth, User } from '../../interfaces';
import { LoginInterface } from '../../interfaces/auth';

interface AuthProps {
  userData: Auth;
  login: (user: LoginInterface) => Promise<boolean>;
  updateUser: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthProps);
