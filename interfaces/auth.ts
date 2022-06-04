export interface User {
  id?: string;
  email: string;
  username: string;
  role?: string;
}

export interface LoginInterface {
  username?: string;
  email?: string;
  password: string;
}

export interface Auth {
  user: User | null;
  isLoggedIn?: boolean;
}
