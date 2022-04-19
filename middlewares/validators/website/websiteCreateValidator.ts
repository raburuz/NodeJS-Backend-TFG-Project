import { check } from 'express-validator';
import { validateRequest } from '../../validateRequest';
import { isJWTvalidate } from '../custom/jwtCustomValidator';

import {
  Appearance,
  BorderStyle,
  ListStyle,
  TextAlign,
  ShapeImage,
  Weight,
} from '../../../interfaces';
import { userExistsInDatabase } from '../users/custom/userCustomValidators';
import { subdomainNameIsRegistered } from './custom/customWebsiteValidators.ts';

const Appearances: string[] = Object.values(Appearance);
const alignments: string[] = Object.values(TextAlign);
const weights: string[] = Object.values(Weight);
const styles: string[] = Object.values({ ...BorderStyle, ...ListStyle });
const shapes: string[] = Object.values(ShapeImage);

const pageValidators = [
  check('page.backgroundColor', 'Page *background color* is required')
    .trim()
    .notEmpty()
    .isLength({ min: 7, max: 7 }),
  check('page.width', 'Page *width* is required')
    .trim()
    .notEmpty()
    .isInt({ min: 0, max: 100 }),
];

const componentValidator = [
  check('components.*.order', 'Components *order* property is required')
    .trim()
    .optional()
    .isNumeric(),
  check('components.*.type', 'Components *type* property is required')
    .trim()
    .optional(),
  check('components.*.label', 'Components *label* property is required')
    .trim()
    .optional(),

  check('components.*.size', 'Components *size* property is required')
    .trim()
    .optional()
    .isFloat({
      min: 0.5,
      max: 7,
    }),
  check('components.*.color', 'Components *color* property is required')
    .trim()
    .optional()
    .isLength({ min: 7, max: 7 }),
  check('components.*.width', 'Components *width* property is required')
    .trim()
    .optional()
    .isInt({ min: 0, max: 100 }),
  check('components.*.height', 'Components *height* property is required')
    .trim()
    .optional()
    .isInt({ min: 0, max: 100 }),
  check(
    'components.*.lineSpacing',
    'Components *line spacing* property is required'
  )
    .trim()
    .optional()
    .isFloat({
      min: 0.75,
      max: 2.5,
    }),
  check(
    'components.*.letterSpacing',
    'Components *letter spacing* property is required'
  )
    .trim()
    .optional()
    .isFloat({
      min: -0.5,
      max: 1.5,
    }),
  check(
    'components.*.alignment',
    'Components *appearance* property is required'
  )
    .trim()
    .optional()
    .isIn(alignments),
  check(
    'components.*.appearance',
    'Components *appearance* property is required'
  )
    .trim()
    .optional()
    .isIn(Appearances),

  check(
    'components.*.margin.horizontal',
    'Components *margin horizontal* property is required'
  )
    .trim()
    .optional()
    .isInt({ min: 0, max: 100 }),
  check(
    'components.*.margin.vertical',
    'Components *margin vertical* property is required'
  )
    .trim()
    .optional()
    .isInt({ min: 0, max: 100 }),
  check(
    'components.*.padding.horizontal',
    'Components *padding horizontal* property is required'
  )
    .trim()
    .optional()
    .isInt({ min: 0, max: 100 }),
  check(
    'components.*.padding.vertical',
    'Components *padding vertical* property is required'
  )
    .trim()
    .optional()
    .isInt({ min: 0, max: 100 }),
  check('components.*.weight', 'Components *weight* property is required')
    .trim()
    .optional()
    .isIn(weights),
  check(
    'components.*.backgroundColor',
    'Components *background color* property is required'
  )
    .trim()
    .optional()
    .isLength({ min: 7, max: 7 }),
  check('components.*.border', 'Component *border* property is required')
    .trim()
    .optional()
    .isLength({ min: 1, max: 5 }),
  check('components.*.style', 'Components *style* property is required')
    .trim()
    .optional()
    .isIn(styles),
  check('components.*.image.shape', 'Components *shape* property is required')
    .trim()
    .optional()
    .isIn(shapes),
  check('components.*.image.url', 'Components Image *url* property is required')
    .trim()
    .optional()
    .isURL(),
  check('components.*.image.alt', 'Components Image *al* property is required')
    .trim()
    .optional(),
  check(
    'components.*.button.url',
    'Components Button *url* property is required'
  )
    .trim()
    .optional()
    .isURL(),
  check(
    'components.*.button.borderRadius',
    'Components button *border radius* property is required'
  )
    .trim()
    .optional()
    .isFloat({
      min: 0,
      max: 2,
    }),
];

export const websiteCreateValidator = [
  check('templateId', 'Template is required').trim().not().isEmpty(),
  check('subdomain', 'Website name is required')
    .trim()
    .not()
    .isEmpty()
    .custom(subdomainNameIsRegistered),
  check('uid', 'User Id is required')
    .trim()
    .isMongoId()
    .not()
    .isEmpty()
    .custom(userExistsInDatabase),
  check('x_token', 'Something was wrong')
    .trim()
    .not()
    .isEmpty()
    .custom(isJWTvalidate),
  ...pageValidators,
  ...componentValidator,
  validateRequest,
];
