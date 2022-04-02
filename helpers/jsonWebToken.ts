import jwt, { SignOptions } from 'jsonwebtoken';

const privateKey: string = process.env.PRIVATE_KEY_JWT || '';
const options: SignOptions = {
  expiresIn: '1d',
};

export const signJWT = (id: string) => {
  return new Promise((resolve, reject) => {
    const payload: {} = {
      id,
    };

    jwt.sign(payload, privateKey as string, options, (error, token) => {
      if (error) {
        console.log(error);
        reject('Something was wrong, the system cant create JWT');
      } else {
        console.log(token);
        resolve(token);
      }
    });
  });
};
