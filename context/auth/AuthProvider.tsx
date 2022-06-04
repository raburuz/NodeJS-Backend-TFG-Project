import { FC, useReducer, useEffect } from 'react';
import { Auth, User } from '../../interfaces';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { initialUser } from './initialState';
import { LoginInterface } from '../../interfaces/auth';
import { loginApi, revalidateToken } from '../../apis/authApi';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface Props {
  children: JSX.Element;
}

export const AUTH_INITIAL_STATE: Auth = initialUser;

export const AuthProvider: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [userData, dispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE);
  useEffect(() => {
    checkToken();
  }, []);

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

  const loginUser = (user: User) => {
    dispatch({
      type: '[Auth] - Auth Login User',
      user,
    });
  };

  const updateUser = (user: User) => {
    const { email, username } = user;
    dispatch({
      type: '[Auth] - Auth Update User',
      user: {
        email,
        username,
      },
    });
  };

  const logout = () => {
    Cookies.remove('x_token');
    router.reload();
  };

  return (
    <AuthContext.Provider value={{ userData, login, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
