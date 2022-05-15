import { check } from 'express-validator';
import { TypeTemplate } from '../../../interfaces';
import { isJWTvalidate } from '../custom/jwtCustomValidator';
import { isAdminRole, isUserCurrentRole } from '../custom/roleCustomValidator';
import { templateIsRegisteredInDatabase } from './custom/templateCustomValidators';
const types: string[] = Object.values(TypeTemplate);

export const templateUpdateValidators = [
  check('x_token', 'Something was wrong')
    .trim()
    .not()
    .isEmpty()
    .custom(isJWTvalidate),
  check('role', 'Role is required')
    .trim()
    .notEmpty()
    .custom(isAdminRole)
    .custom(isUserCurrentRole),
  check('id', 'Id is required')
    .trim()
    .not()
    .isEmpty()
    .custom(templateIsRegisteredInDatabase),
  check('img', 'Image is required').trim().notEmpty(),
  check('isPremium', 'Say if is premium or not template ')
    .trim()
    .notEmpty()
    .isBoolean(),
  check('type', 'Type of template is required')
    .trim()
    .notEmpty()
    .isIn(types)
    .withMessage('Incorrect type'),
];
