export interface User {
  id?: string;
  email: string;
  username: string;
  role?: string;
  isLoggedIn?: boolean;
}

export interface LoginInterface {
  username?: string;
  email?: string;
  password: string;
}
