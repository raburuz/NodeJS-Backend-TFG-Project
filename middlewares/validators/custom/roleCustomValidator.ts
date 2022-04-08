import { CustomValidator } from 'express-validator';
import { Role } from '../../../interfaces';

export const isUserRole: CustomValidator = (role): boolean => {
  const userRoles = [Role.NORMAL_USER_ROLE, Role.PREMIUM_USER_ROLE];
  const isUserRoleInclude = userRoles.includes(role);
  if (!isUserRoleInclude) {
    throw new Error('Something was wrong');
  }

  return true;
};
