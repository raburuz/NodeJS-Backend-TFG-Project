import { Request, Response } from 'express';
import { CustomValidator } from 'express-validator';
import { Website } from '../../../../interfaces';
import { WebsiteModel } from '../../../../models';

/**
 * This function is called from website controller
 * @param req
 * @param res
 * @returns
 */
export const isValidSubdomain = (
  req: Request,
  res: Response
): void | Response => {
  const host = `${req.protocol}://${req.hostname}`;
  const regex = new RegExp(`http(s)?://(.+.)?${process.env.DOMAIN}(:d{1,5})?$`);
  const isValidSubdomain = regex.test(host);
  if (!isValidSubdomain) {
    return res.status(404).json({
      ok: false,
      msg: `This site can't be found`,
    });
  }
};

/**
 * This function is called from website controller
 * @param req
 * @param res
 * @returns
 */
export const websiteExistInDatabase = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>> | Website> => {
  const subdomain = req.subdomains.at(-1);
  const website = await WebsiteModel.findOne<Website>({ subdomain });
  if (!website) {
    throw new Error(`This site can't be found`);
  }
  return website;
};

export const subdomainNameIsRegistered: CustomValidator = async (
  subdomain
): Promise<boolean> => {
  const subdomainExist = await WebsiteModel.findOne({ subdomain });
  if (subdomainExist) {
    throw new Error(`This website name is already registered`);
  }
  return true;
};
