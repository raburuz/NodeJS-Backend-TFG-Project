import { CustomValidator } from 'express-validator';
import { verifyJWT } from '../../../helpers';

export const isJWTvalidate: CustomValidator = async (
  x_token,
  { req }
): Promise<boolean> => {
  const jwtIsCorrect = await verifyJWT(x_token);

  if (!jwtIsCorrect) {
    throw new Error('Something was wrong');
  }
  req.currentUserId = jwtIsCorrect.id;

  return true;
};
