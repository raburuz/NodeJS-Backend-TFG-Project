import { check } from 'express-validator';
import { validateRequest } from '../../validateRequest';
import { isCorrectPassword } from './custom/userCustomValidators';
import {
  usernameIsRegisteredInDatabase,
  emailIsRegisteredInDatabase,
} from './custom/userCustomValidators';

export const loginUserValidators = [
  check('username', 'Username is required')
    .trim()
    .optional()
    .isLength({ min: 3, max: 254 })
    .withMessage('Username is invalid')
    .custom(usernameIsRegisteredInDatabase),
  check('email', 'Email is required')
    .trim()
    .optional()
    .isLength({ min: 8, max: 254 })
    .normalizeEmail()
    .isEmail()
    .withMessage('Email is invalid')
    .custom(emailIsRegisteredInDatabase),
  check('password', 'Password is required')
    .trim()
    .not()
    .isEmpty()
    .custom(isCorrectPassword),
  validateRequest,
];
