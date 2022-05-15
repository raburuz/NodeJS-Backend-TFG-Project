import { check } from 'express-validator';
import { TypeTemplate } from '../../../interfaces';

const types: string[] = Object.values(TypeTemplate);
export const templateGetByTypeValidators = [
  check('type', 'Type is required')
    .trim()
    .notEmpty()
    .isIn(types)
    .withMessage('Incorrect type'),
];
