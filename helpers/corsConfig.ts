const whitelistDomains = [
  `http://${process.env.DOMAIN}`,
  `https://${process.env.DOMAIN}`,
  `https://*.${process.env.DOMAIN}`,
  `https://www.${process.env.DOMAIN}`,
  `https://www.*.${process.env.DOMAIN}`,
];

export const corsConfig = {
  origin: (origin: string | undefined, callback: any) => {
    if (whitelistDomains.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by cors'));
    }
  },
};
