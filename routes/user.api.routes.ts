import { Router, Request, Response } from 'express';

const router = Router();

import {
  getUser,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user.api.controller';

router.get('/', getUser);
router.put('/:id', putUser);
router.post('/', postUser);
router.delete('/', deleteUser);

router.get('*', function (req: Request, res: Response) {
  res.status(404).send('Error 404');
});

module.exports = router;
