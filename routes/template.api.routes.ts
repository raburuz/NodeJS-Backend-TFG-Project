import { Router, Request, Response } from 'express';
import {
  addTemplate,
  getTemplateById,
  getTemplatesByType,
  getTemplates,
  updateTemplate,
  deleteTemplate,
} from '../controllers/template.api.controller';
import {
  templateAddValidators,
  templateGetByIdValidators,
  templateGetByTypeValidators,
  templateUpdateValidators,
} from '../middlewares';

const router = Router();

router.post('/', templateAddValidators, addTemplate);
router.get('/list', getTemplates);
router.get('/list/:type', templateGetByTypeValidators, getTemplatesByType);
router.get('/:id', templateGetByIdValidators, getTemplateById);
router.put('/:id/edit', templateUpdateValidators, updateTemplate);
router.put('/:id/delete', deleteTemplate);

router.get('*', function (req: Request, res: Response) {
  return res.status(404).json({
    ok: false,
    msg: 'Not found',
  });
});

module.exports = router;
