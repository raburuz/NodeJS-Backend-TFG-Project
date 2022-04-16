import { Request, Response } from 'express';
import { signJWT } from '../helpers';
import { Website } from '../interfaces';
import { WebsiteModel } from '../models';
export const createWebsite = async (req: Request, res: Response) => {
  const data: Website = req.body;
  const sanitazeData: Website = {
    templateId: data.templateId,
    page: data.page,
    components: {
      texts: data.components.texts,
      buttons: data.components.buttons,
      images: data.components.images,
      lists: data.components.lists,
    },
  };

  const id = 'Test';
  const token = await signJWT(id);
  const website = new WebsiteModel(sanitazeData);

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
