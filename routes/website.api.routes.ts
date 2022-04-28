import { Router, Request, Response } from 'express';
import {
  createWebsite,
  getDataWebsite,
  editDataWebsite,
} from '../controllers/website.api.controller';
import { websiteCreateValidator, websiteEditValidator } from '../middlewares';

const router = Router();

router.post('/', websiteCreateValidator, createWebsite);
router.get('/', getDataWebsite);
router.put('/:id', websiteEditValidator, editDataWebsite);

router.get('*', function (req: Request, res: Response) {
  res.status(404).send('Error 404');
});

module.exports = router;
