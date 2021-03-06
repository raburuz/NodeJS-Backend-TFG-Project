import { UserData, Website } from './interfaces';
import { Template } from './interfaces/template';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: number | string;
      DOMAIN: string;
      MONGO_CONNECTION: string;
      JWT_PRIVATE_KEY: Secret;
    }
  }
  declare namespace Express {
    interface Request {
      currentUserId?: string;
      user?: UserData;
      website?: Website;
      template?: Template;
    }
  }
}
