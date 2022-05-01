import { check } from 'express-validator';
import { isJWTvalidate } from '../custom/jwtCustomValidator';
import { templateIsRegisteredInDatabase } from './custom/templateCustomValidators';

export const templateGetByIdValidators = [
  check('x_token', 'Something was wrong')
    .trim()
    .not()
    .isEmpty()
    .custom(isJWTvalidate),
  check('id', 'Id is required')
    .trim()
    .notEmpty()
    .isMongoId()
    .custom(templateIsRegisteredInDatabase),
];
