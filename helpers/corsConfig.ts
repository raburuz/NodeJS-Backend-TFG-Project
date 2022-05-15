const whitelistDomains = [`http://localhost:3000`];

export const corsConfig = {
  origin: (origin: string | undefined, callback: any) => {
    if (whitelistDomains.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by cors'));
    }
  },
};
