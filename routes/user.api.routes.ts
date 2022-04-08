import { Router, Request, Response } from 'express';

const router = Router();

import {
  loginUser,
  registerUser,
  updateUser,
  deleteUser,
} from '../controllers/user.api.controller';
import {
  registerUserValidators,
  loginUserValidators,
  userUpdateValidators,
} from '../middlewares';

router.get('/login', loginUserValidators, loginUser);
router.put('/:id', userUpdateValidators, updateUser);
router.post('/register', registerUserValidators, registerUser);
router.delete('/', deleteUser);

router.get('*', function (req: Request, res: Response) {
  res.status(404).send('Error 404');
});

module.exports = router;
