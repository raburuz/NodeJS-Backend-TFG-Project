import { CustomValidator } from 'express-validator';
import { UserModel } from '../../../models/user';
export const isUserDeleted: CustomValidator = async (
  _,
  { req, path }
): Promise<boolean> => {
  const errors = {
    email: 'User or Password is invalid',
    username: 'User or Password is invalid',
    x_token: 'Something was wrong',
  };
  const id = req.currentUserId;
  const user = await UserModel.findById(id);
  const error = errors[path as keyof typeof errors];
  if (user?.isDeleted) {
    throw new Error(error);
  }

  return true;
};
