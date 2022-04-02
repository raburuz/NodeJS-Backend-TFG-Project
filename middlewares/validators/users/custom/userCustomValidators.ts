import { CustomValidator } from 'express-validator';
import { UserData } from '../../../../interfaces/user';
import { UserModel } from '../../../../models';
import { checkIfPasswordIsCorrectWithHash } from '../../../../helpers/bcrypt';

export const usernameExistInDatabase: CustomValidator = async (
  username
): Promise<boolean> => {
  const user: UserData | null = await UserModel.findOne<UserData>({
    username,
  });
  if (user) {
    throw new Error('This username is already being used');
  }
  return true;
};

export const emailExistInDatabase: CustomValidator = async (
  email
): Promise<boolean> => {
  const user: UserData | null = await UserModel.findOne<UserData>({
    email,
  });
  if (user) {
    throw new Error('This email address is already being used');
  }
  return true;
};

export const emailIsRegisteredInDatabase: CustomValidator = async (
  email,
  { req }
): Promise<boolean> => {
  const user: UserData | null = await UserModel.findOne<UserData>({
    email,
  });
  if (!user) {
    throw new Error('User or Password is invalid');
  }
  req.user = user;
  return true;
};

export const usernameIsRegisteredInDatabase: CustomValidator = async (
  username,
  { req }
): Promise<boolean> => {
  const user: UserData | null = await UserModel.findOne<UserData>({
    username,
  });
  if (!user) {
    throw new Error('User or Password is invalid');
  }

  req.user = user;

  return true;
};

export const isCorrectPassword: CustomValidator = async (
  password,
  { req }
): Promise<boolean> => {
  const user: UserData = req.user;
  const isCorrect = await checkIfPasswordIsCorrectWithHash(
    user.password,
    password
  );
  if (!isCorrect) {
    throw new Error('User or Password is invalid');
  }
  return true;
};
