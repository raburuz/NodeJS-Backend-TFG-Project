import { CustomValidator } from 'express-validator';
import { verifyJWT } from '../../../helpers';

export const isJWTvalidate: CustomValidator = async (
  x_token
): Promise<boolean> => {
  const jwtIsCorrect: string = await verifyJWT(x_token);

  if (!jwtIsCorrect) {
    throw new Error('Something was wrong');
  }

  return true;
};
