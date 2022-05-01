import { Request, Response } from 'express';
import { isValidDomain, signJWT } from '../helpers';
import { Website } from '../interfaces';
import { websiteExistInDatabase } from '../middlewares/validators/website/custom/customWebsiteValidators.ts';
import { WebsiteModel } from '../models';

export const createWebsite = async (req: Request, res: Response) => {
  const data: Website = req.body;
  data.uid = req.currentUserId;
  const token = await signJWT(data.uid!);
  const website = new WebsiteModel({ ...data, isDelete: false });

  try {
    isValidDomain(req, false);
    website.save();
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong',
    });
  }
  return res.status(201).json({
    ok: true,
    msg: 'Website was created successfully',
    website,
    token,
  });
};
/**
 *  Get data from from subdomain
 * @param req
 * @param res
 */
export const getDataWebsite = async (req: Request, res: Response) => {
  try {
    isValidDomain(req, true);
    const website = await websiteExistInDatabase(req);

    return res.status(200).json({
      ok: true,
      msg: 'Site found',
      website,
    });
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: `You don’t have permission to access on this server`,
    });
  }
};

export const editDataWebsite = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { uid, isDeleted, ...website } = req.body;

  try {
    isValidDomain(req, false);
    const token = await signJWT(uid);
    const websiteUpdate = await WebsiteModel.findByIdAndUpdate(
      id,
      {
        ...website,
      },
      { new: true }
    );

    return res.status(200).json({
      ok: true,
      msg: 'Site found',
      websiteUpdate,
      token,
    });
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: `You don’t have permission to access on this server`,
    });
  }
};

export const deleteWebsite = async (req: Request, res: Response) => {
  const { id } = req.params;
  const uid = req.currentUserId;

  isValidDomain(req, false);

  try {
    const token = await signJWT(uid!);
    const website = await WebsiteModel.findByIdAndUpdate(id, {
      isDeleted: true,
    });
    if (website?.isDeleted) {
      return res.status(400).json({
        ok: false,
        msg: 'This user is already deleted ',
      });
    }
    return res.status(200).json({
      ok: true,
      msg: 'This website was deleted',
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Something was wrong',
    });
  }
};
