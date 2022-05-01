import { check } from 'express-validator';
import { validateRequest } from '../../validateRequest';
import { isJWTvalidate } from '../custom/jwtCustomValidator';
import { isUserRole } from '../custom/roleCustomValidator';
import { isOwnerAccount } from './custom/userCustomValidators';
import { userExistsInDatabase } from './custom/userCustomValidators';

export const userDeleteValidators = [
  check('x_token', 'Something was wrong')
    .trim()
    .not()
    .isEmpty()
    .custom(isJWTvalidate),
  check('id', 'Something was wrong')
    .trim()
    .not()
    .isEmpty()
    .isMongoId()
    .custom(userExistsInDatabase)
    .custom(isOwnerAccount),
  check('role', 'Something was wrong')
    .trim()
    .not()
    .isEmpty()
    .custom(isUserRole),

  validateRequest,
];
