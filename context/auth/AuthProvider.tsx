import { FC, useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';

import { Auth, User } from '../../interfaces';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { initialUser } from './initialState';

interface Props {
  children: JSX.Element;
}

export const AUTH_INITIAL_STATE: Auth = initialUser;

export const AuthProvider: FC<Props> = ({ children }) => {
  const [userData, dispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE);
  const { data, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'authenticated') {
      Cookies.set('x_token', data.token as string);
      loginUser(data.user as User);
      
    }
  }, [status, data]);

  /*
  const checkToken = async () => {
    const data = await revalidateToken();
    const { user, token } = data;
    Cookies.set('x_token', token);
    loginUser(user);
  };

  const login = async (data: LoginInterface): Promise<boolean> => {
    const userResponse = await loginApi(data);
    if (userResponse.ok) {
      const { token, user } = userResponse;
      Cookies.set('x_token', token);
      loginUser(user);
      return true;
    }
    return false;
  };
*/
  const loginUser = (user: User) => {
    dispatch({
      type: '[Auth] - Auth Login User',
      user,
    });
  };

  const updateUser = (user: User) => {
   
    dispatch({
      type: '[Auth] - Auth Update User',
      user,
    });
  };

  const logout = () => {
    Cookies.remove('x_token');
    signOut();
  };

  return (
    <AuthContext.Provider value={{ userData, updateUser, logout ,loginUser}}>
      {children}
    </AuthContext.Provider>
  );
};
