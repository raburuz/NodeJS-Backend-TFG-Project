import bcrypt from 'bcryptjs';
import { UserData } from '../interfaces';
import { UserModel } from '../models';

const saltRounds: number = 10;

export const hashPasswordWithBcrypt = (password: string): string => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const checkIfPasswordIsCorrectWithHash = async (
  hashPassword: string,
  plainTextPassword: string
): Promise<boolean> => {
  const isCorrectPassword = bcrypt.compareSync(plainTextPassword, hashPassword);
  return isCorrectPassword;
};
