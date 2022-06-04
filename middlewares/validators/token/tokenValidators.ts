import { check } from 'express-validator';
import { validateRequest } from '../../validateRequest';
import { isJWTvalidate } from '../custom/jwtCustomValidator';
import { isUserDeleted } from '../custom/deleteUserValidator';

export const tokenValidators = [
  check('x_token', 'Something was wrong')
    .trim()
    .not()
    .isEmpty()
    .custom(isJWTvalidate)
    .custom(isUserDeleted),

  validateRequest,
];
