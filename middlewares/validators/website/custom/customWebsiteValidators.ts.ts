import { Request, Response } from 'express';
import { CustomValidator } from 'express-validator';
import { Website } from '../../../../interfaces';
import { WebsiteModel } from '../../../../models';

/**
 * This function is called from website controller
 * Looking for if website SUBDOMAIN exist in database
 * @param req Request
 * @returns Promise type Record<String> | Website
 */
export const websiteExistInDatabase = async (
  req: Request
): Promise<Response<any, Record<string, any>> | Website> => {
  const subdomain = req.subdomains.at(-1);
  const website = await WebsiteModel.findOne<Website>({ subdomain });

  if (!website) {
    throw new Error(`This site can't be found`);
  }
  return website;
};

/**
 * Looking for if website SUBDOMAIN exist in database
 * @param subdomain
 * @returns Promise <boolean>
 */
export const subdomainNameIsRegistered: CustomValidator = async (
  subdomain
): Promise<boolean> => {
  const subdomainExist = await WebsiteModel.findOne({ subdomain });
  if (subdomainExist) {
    throw new Error(`This website name is already registered`);
  }
  return true;
};
/**
 * Looking for if website ID exist in database
 * @param mongoId id
 * @param req Request
 * @returns Promise type Record<String> | Website
 */
export const websiteIdExistInDatabase: CustomValidator = async (
  mongoId,
  { req }
): Promise<boolean> => {
  const website: Website | null = await WebsiteModel.findById<Website>(mongoId);
  if (!website) {
    throw new Error(`This site can't be found`);
  }
  req.website = website;
  return true;
};

/**
 * Look if Website subdomain  ===
 * Looking for if website ID exist in database
 * @param subdomain id
 * @param req Request
 * @returns Promise type Record<String> | Website
 */
export const isOwnerSubdomain: CustomValidator = async (
  subdomain,
  { req }
): Promise<boolean> => {
  const { subdomain: pageSubdomain } = req.website;
  const isOwnerSub = subdomain === pageSubdomain;
  const isSubdomainRegisterInDatabase =
    (await WebsiteModel.findOne({ subdomain })) ?? false;

  if (!isOwnerSub && isSubdomainRegisterInDatabase) {
    throw new Error(`This site can't be found`);
  }

  return true;
};

export const isOwnerWebsite: CustomValidator = async (
  uid,
  { req }
): Promise<boolean> => {
  const websiteOwner = req.currentUserId;
  const isWebsiteOwner = websiteOwner === uid;

  if (!isWebsiteOwner) {
    throw new Error('Something was wrong');
  }

  return true;
};
