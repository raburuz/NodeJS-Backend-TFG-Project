import jwt, { SignOptions } from 'jsonwebtoken';
import { Jwt } from '../interfaces';

const privateKey: string = process.env.PRIVATE_KEY_JWT || '';
const options: SignOptions = {
  expiresIn: '1d',
};

export const signJWT = (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload: {} = {
      id,
    };

    jwt.sign(payload, privateKey as string, options, (error, token) => {
      if (error) {
        reject('Something was wrong, the system cannot create token');
      } else {
        resolve(token as string);
      }
    });
  });
};

export const verifyJWT = (token: string): Promise<jwt.JwtPayload> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, privateKey as string, function (error, decoded) {
      if (error) {
        reject('Something was wrong');
      } else {
        resolve(decoded as jwt.JwtPayload);
      }
    });
  });
};
