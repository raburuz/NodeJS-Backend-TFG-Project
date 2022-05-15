import { check } from 'express-validator';
import { TypeTemplate } from '../../../interfaces';
import { isJWTvalidate } from '../custom/jwtCustomValidator';
import { isAdminRole, isUserCurrentRole } from '../custom/roleCustomValidator';
import { validateRequest } from '../../validateDomain';
const types: string[] = Object.values(TypeTemplate);

export const templateAddValidators = [
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
  check('img', 'Image is required').trim().notEmpty(),
  check('isPremium', 'Say if is premium or not template ')
    .trim()
    .notEmpty()
    .isBoolean(),
  check('type', 'Type of template is required')
    .trim()
    .notEmpty()
    .isIn(types)
    .withMessage('Type is invalid'),
  validateRequest,
];
