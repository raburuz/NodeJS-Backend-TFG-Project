import { Request, Response } from 'express';
import { hashPasswordWithBcrypt } from '../helpers/bcrypt';
import { UserData } from '../interfaces';
import { UserModel } from '../models';

export const getUser = (req: Request, res: Response) => {
  const query = req.query;
  res.json({
    msg: 'get API',
    query,
  });
};

/**
 * Register User
 */
export const postUser = (req: Request, res: Response) => {
  const { password, ...userData }: UserData = req.body;
  const hashPassword = hashPasswordWithBcrypt(password);
  const user = new UserModel({ ...userData, password: hashPassword });
  try {
    user.save();
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
  return res.json({
    ok: true,
    msg: ' Successfully registered ',
    id: user.id,
  });
};

export const putUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: 'put API',
    id,
  });
};

export const deleteUser = (req: Request, res: Response) => {
  res.json({
    msg: 'delete API',
  });
};
