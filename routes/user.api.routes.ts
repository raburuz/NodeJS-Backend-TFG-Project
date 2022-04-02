import { Router, Request, Response } from 'express';

const router = Router();

import {
  loginUserWithoutGoogle,
  registerUserWithoutGoogle,
  putUser,
  deleteUser,
} from '../controllers/user.api.controller';
import {
  registerUserWithoutGoogleValidators,
  loginUserWithoutGoogleValidators,
} from '../middlewares';

router.get('/login', loginUserWithoutGoogleValidators, loginUserWithoutGoogle);
router.put('/:id', putUser);
router.post(
  '/register',
  registerUserWithoutGoogleValidators,
  registerUserWithoutGoogle
);
router.delete('/', deleteUser);

router.get('*', function (req: Request, res: Response) {
  res.status(404).send('Error 404');
});

module.exports = router;
