declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PRIVATE_KEY_JWT: Secret;
      NODE_ENV: 'development' | 'production';
      PORT: number | string;
      MONGO_CONNECTION: string;
    }
  }
}

declare namespace Express {
  export interface Request {
    user?: UserData;
  }
}
