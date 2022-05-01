import { check } from 'express-validator';
import { validateRequest } from '../../validateRequest';
import { isJWTvalidate } from '../custom/jwtCustomValidator';
import { isOwnerWebsite } from './custom/customWebsiteValidators.ts';

import {
  isOwnerSubdomain,
  websiteIdExistInDatabase,
} from './custom/customWebsiteValidators.ts';

export const websiteDeleteValidator = [
  check('x_token', 'Something was wrong')
    .trim()
    .not()
    .isEmpty()
    .custom(isJWTvalidate),
  check('id', `This site can't be found`)
    .trim()
    .not()
    .isEmpty()
    .isMongoId()
    .custom(websiteIdExistInDatabase),
  check('uid', `This site can't be found`)
    .trim()
    .not()
    .isEmpty()
    .custom(isOwnerWebsite),
  validateRequest,
];
