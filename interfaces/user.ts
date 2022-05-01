export interface UserData {
  id?: string;
  username: string;
  email: string;
  password: string;
  role: Role;
  isValidate: boolean;
  acceptPolicy: Date;
  img?: string;
  isDeleted: boolean;
}

export interface UpdateUser {
  role: Role.NORMAL_USER_ROLE | Role.PREMIUM_USER_ROLE;
  email?: string;
  password?: string;
  newPassword?: string;
  img?: string;
}

export interface Jwt {
  id: string;
  iat: string;
  exp: string;
}

export enum Role {
  ADMIN_ROLE = 'ADMIN_ROLE',
  PREMIUM_USER_ROLE = 'PREMIUM_USER_ROLE',
  NORMAL_USER_ROLE = 'NORMAL_USER_ROLE',
}
