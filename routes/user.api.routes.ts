import { Router, Request, Response } from 'express';
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
  userDeleteValidators,
} from '../middlewares';

const router = Router();

router.get('/login', loginUserValidators, loginUser);
router.post('/register', registerUserValidators, registerUser);
router.put('/:id', userUpdateValidators, updateUser);
router.put('/:id/delete', userDeleteValidators, deleteUser);

router.get('*', function (req: Request, res: Response) {
  return res.status(404).json({
    ok: false,
    msg: 'Not found',
  });
});

module.exports = router;
