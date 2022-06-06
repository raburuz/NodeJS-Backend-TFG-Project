import { check } from 'express-validator';
import { Role } from '../../../interfaces';
import { validateRequest } from '../../validateRequest';
import {
  emailExistInDatabase,
  usernameExistInDatabase,
} from './custom/userCustomValidators';

const roles: string[] = Object.values(Role);

export const registerUserValidators = [
  check('username', 'Username is required')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 3, max: 254 })
    .withMessage('Username must be greater than 3 and less than 254 characters')
    .custom(usernameExistInDatabase),
  check('email', 'Email is required')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 8, max: 254 })
    .normalizeEmail()
    .isEmail()
    .withMessage('Email is invalid')
    .custom(emailExistInDatabase),
  check('password', 'Password is required')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .withMessage('Password must be greater than 8'),

  check('acceptPolicy', 'Accept Policy is required').not().isEmpty().isDate(),
  validateRequest,
];
