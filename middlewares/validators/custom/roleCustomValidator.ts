import { CustomValidator } from 'express-validator';
import { Role, UserData } from '../../../interfaces';
import { UserModel } from '../../../models/user';

export const isUserRole: CustomValidator = (role): boolean => {
  const userRoles = [Role.NORMAL_USER_ROLE, Role.PREMIUM_USER_ROLE];
  const isUserRoleInclude = userRoles.includes(role);
  if (!isUserRoleInclude) {
    throw new Error('Something was wrong');
  }

  return true;
};

export const isAdminRole: CustomValidator = (role): boolean => {
  if (role !== Role.ADMIN_ROLE) {
    throw new Error('Something was wrong');
  }

  return true;
};

export const isUserCurrentRole: CustomValidator = async (
  role,
  { req }
): Promise<boolean> => {
  const id = req.currentUserId;

  const user: UserData | null = await UserModel.findById(id);
  if (role !== user?.role) {
    throw new Error('You don’t have permission');
  }

  return true;
};
