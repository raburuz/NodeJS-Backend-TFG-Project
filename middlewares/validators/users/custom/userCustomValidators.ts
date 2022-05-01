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
  req.currentUserId = user.id;
  return true;
};

export const usernameIsRegisteredInDatabase: CustomValidator = async (
  username,
  { req }
): Promise<boolean> => {
  const query = {
    username,
  };

  const user: UserData | null = await UserModel.findOne<UserData>(query);
  if (!user) {
    throw new Error('User or Password is invalid');
  }

  req.user = user;
  req.currentUserId = user.id;

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

export const userExistsInDatabase: CustomValidator = async (
  mongoId,
  { req }
): Promise<boolean> => {
  const user: UserData | null = await UserModel.findById<UserData>(mongoId);

  if (!user) {
    throw new Error('Something was wrong');
  }

  req.user = user;
  return true;
};

export const isOwnEmailAddress: CustomValidator = async (
  email,
  { req }
): Promise<boolean> => {
  const { email: currentEmail } = req.user;
  const isOwnEmail = email === currentEmail;
  const isEmailRegisterInDatabase =
    (await UserModel.findOne({ email }).lean()) ?? false;

  if (!isOwnEmail && isEmailRegisterInDatabase) {
    throw new Error('Email address is already registered');
  }

  return true;
};

export const isOwnerAccount: CustomValidator = async (
  id,
  { req }
): Promise<boolean> => {
  const currentUserId = req.currentUserId;
  const isOwnerAccount = currentUserId === id;

  if (!isOwnerAccount) {
    throw new Error('Something was wrong');
  }

  return true;
};
