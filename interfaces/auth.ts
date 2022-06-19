export interface User {
  id?: string;
  email: string;
  username: string;
  role?: string;
  img?:string;
}

export interface LoginInterface {
  username?: string;
  email?: string;
  password: string;
  acceptPolicy?: string;
  img?:string;
}
export interface SettingsUserInterface {
  username?: string;
  email?: string;
  password?: string;
  img?:string;
}
export interface Auth {
  user: User | null;
  isLoggedIn?: boolean;
}
