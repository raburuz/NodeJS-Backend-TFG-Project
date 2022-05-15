import { Request, Response } from 'express';

/**
 * This function is called from website controller
 * Is Valid subdomain to do it one petition to database
 * @param req Request
 * @param isSubdomain
 * @returns void | error Status
 */
export const isValidDomain = (
  req: Request,
  isSubdomain: boolean = false
): void | Response => {
  const host = `${req.protocol}://${req.hostname}`;
  const isValidDomain = isSpecificDomain(host, isSubdomain);
  if (!isValidDomain) {
    throw new Error(`You don’t have permission to access on this server`);
  }
};

/**
 * Master Regex Pattern
 * This is the principal function if you want know if the peticion come from subdomain or not
 * @param host full hostname
 * @param isSubdomain
 * @returns boolean
 */
export const isSpecificDomain = (
  host: string,
  isSubdomain: boolean
): boolean => {
  let regex: RegExp;
  isSubdomain
    ? (regex = new RegExp(`http(s)?://(.+.)?${process.env.DOMAIN}(:d{1,5})?$`))
    : (regex = new RegExp(`http(s)?://${process.env.DOMAIN}(:d{1,5})?$`));

  return regex.test(host);
};
