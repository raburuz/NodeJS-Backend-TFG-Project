import { Request, Response } from 'express';
import { isValidDomain, signJWT } from '../helpers';
import { Template } from '../interfaces';
import { TemplateModel } from '../models';

/**
 * Add template to list
 * @param req
 * @param res
 *
 */
export const addTemplate = async (req: Request, res: Response) => {
  const templateData = req.body;
  const id = req.currentUserId;
  const {
    role,
    ...rest
  }: {
    role: string;
    rest: Template;
  } = templateData;
  const template = new TemplateModel({ ...rest, isDeleted: false });

  try {
    const token = await signJWT(id!);

    template.save();
    res.status(200).json({
      ok: true,
      msg: 'Has been added successfully',
      template,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
};

/**
 * Get templates list (public)
 * @param req
 * @param res
 *
 */
export const getTemplates = async (req: Request, res: Response) => {
  try {
    isValidDomain(req, false);
    const template = await TemplateModel.find({ isDeleted: false }).exec();

    res.status(200).json({
      ok: true,
      msg: 'List of templates found',
      template,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
};

/**
 * Get templates by type (public)
 * @param req
 * @param res
 *
 */
export const getTemplatesByType = async (req: Request, res: Response) => {
  const { type } = req.params;
  try {
    isValidDomain(req, false);
    const template = await TemplateModel.find({ type, isDeleted: false });

    res.status(200).json({
      ok: true,
      msg: 'Templates found',
      template,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
};

/**
 * Get one template from list
 * @param req
 * @param res
 *
 */
export const getTemplateById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const template = await TemplateModel.findById(id, { isDeleted: false });

    if (template?.isDeleted) {
      return res.status(400).json({
        ok: false,
        msg: 'This template is already deleted ',
      });
    }

    res.status(200).json({
      ok: true,
      msg: 'Template found',
      template,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
};

/**
 * Update template from list
 * @param req
 * @param res
 *
 */
export const updateTemplate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { role, isDeleted, ...templateData } = req.body;

  try {
    const token = await signJWT(id!);
    const template = await TemplateModel.findByIdAndUpdate<Template>(id, {
      ...templateData,
    });

    if (template?.isDeleted) {
      return res.status(400).json({
        ok: false,
        msg: 'This Template was already deleted',
      });
    }
    res.status(200).json({
      ok: true,
      msg: 'Has been update successfully',
      template,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
};

/**
 * Delete template from list
 * @param req
 * @param res
 *
 */
export const deleteTemplate = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const token = await signJWT(id!);
    const template = await TemplateModel.findByIdAndUpdate(id, {
      isDeleted: true,
    });

    if (template?.isDeleted) {
      return res.status(400).json({
        ok: false,
        msg: 'This Template was already deleted',
      });
    }
    res.status(200).json({
      ok: true,
      msg: 'Has been deleted successfully',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
};
