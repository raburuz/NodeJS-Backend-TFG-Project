import { Router, Request, Response } from 'express';
import { revalidateToken } from '../controllers/token.api.controller';
import { tokenValidators } from '../middlewares/validators/token/tokenValidators';

const router = Router();

router.post('/revalidate', tokenValidators, revalidateToken);

router.get('*', function (req: Request, res: Response) {
  return res.status(404).json({
    ok: false,
    msg: 'Not found',
  });
});

module.exports = router;
