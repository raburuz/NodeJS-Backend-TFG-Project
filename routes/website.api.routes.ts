import { Router, Request, Response } from 'express';
import {
  createWebsite,
  getDataWebsite,
  editDataWebsite,
  deleteWebsite,
} from '../controllers/website.api.controller';
import {
  websiteCreateValidator,
  websiteEditValidator,
  websiteDeleteValidator,
} from '../middlewares';

const router = Router();

router.post('/', websiteCreateValidator, createWebsite);
router.get('/', getDataWebsite);
router.put('/:id', websiteEditValidator, editDataWebsite);
router.put('/:id/delete', websiteDeleteValidator, deleteWebsite);
router.get('*', function (req: Request, res: Response) {
  return res.status(404).json({
    ok: false,
    msg: 'Not found',
  });
});

module.exports = router;
