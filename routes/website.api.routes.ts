import { Router, Request, Response } from 'express';
import {
  createWebsite,
  getDataWebsite,
} from '../controllers/website.api.controller';
import { websiteCreateValidator } from '../middlewares';

const router = Router();

router.post('/', websiteCreateValidator, createWebsite);

router.get('/', getDataWebsite);

router.get('*', function (req: Request, res: Response) {
  res.status(404).send('Error 404');
});

module.exports = router;
