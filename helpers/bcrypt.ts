import bcrypt from 'bcryptjs';
import { UserData } from '../interfaces';
import { UserModel } from '../models';

const saltRounds: number = 10;

export const hashPasswordWithBcrypt = (password: string): string => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const checkIfPasswordIsCorrect = async (
  userId: string,
  plainTextPassword: string
): Promise<boolean> => {
  const user = await UserModel.findById<UserData>(userId);
  const password = user?.password ?? '';
  const isCorrectPassword = bcrypt.compareSync(plainTextPassword, password);
  return isCorrectPassword;
};
