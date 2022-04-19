import { Request, Response } from 'express';
import { signJWT } from '../helpers';
import { Website } from '../interfaces';
import {
  isValidSubdomain,
  websiteExistInDatabase,
} from '../middlewares/validators/website/custom/customWebsiteValidators.ts';
import { WebsiteModel } from '../models';

export const createWebsite = async (req: Request, res: Response) => {
  const data: Website = req.body;
  data.uid = req.currentUserId;
  const token = await signJWT(data.uid!);
  const website = new WebsiteModel(data);

  try {
    website.save();
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
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
  isValidSubdomain(req, res);
  try {
    const website = await websiteExistInDatabase(req, res);
    return res.status(200).json({
      ok: true,
      msg: 'Site found',
      website,
    });
  } catch (error) {
    return res.status(404).json({
      ok: false,
      msg: `This site can't be found`,
    });
  }
};
