export interface UserData {
  id?: string;
  username: string;
  email: string;
  password: string;
  role: Role;
  isGoogle: boolean;
  isValidate: boolean;
  acceptPolicy: Date;
  img?: string;
}

export enum Role {
  ADMIN_ROLE = 'ADMIN_ROLE',
  PREMIUM_USER_ROLE = 'PREMIUM_USER_ROLE',
  NORMAL_USER_ROLE = 'NORMAL_USER_ROLE',
}
