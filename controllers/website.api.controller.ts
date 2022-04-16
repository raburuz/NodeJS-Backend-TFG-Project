import { Request, Response } from 'express';
import { signJWT } from '../helpers';
import { Website } from '../interfaces';
import { WebsiteModel } from '../models';
export const createWebsite = async (req: Request, res: Response) => {
  const data: Website = req.body;

  const id = 'Test';
  const token = await signJWT(id);
  const website = new WebsiteModel(data);

  try {
    website.save();
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }

  return res.status(200).json({
    ok: true,
    msg: 'Website was created successfully',
    website,
    token,
  });
};
