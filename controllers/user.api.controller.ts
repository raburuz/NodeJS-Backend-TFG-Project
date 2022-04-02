import { Request, Response } from 'express';
import { hashPasswordWithBcrypt, signJWT } from '../helpers';
import { UserData } from '../interfaces';
import { UserModel } from '../models';

/**
 * Login User without Google
 * @param req
 * @param res
 *
 */

export const loginUserWithoutGoogle = async (req: Request, res: Response) => {
  const { username, email, id, role }: UserData = req.user;
  const user = {
    username,
    email,
    role,
    id,
  };
  try {
    const token = await signJWT(id!);
    res.status(200).json({
      ok: true,
      msg: 'Logging Success',
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
};

/**
 * Register User without Google
 * @param req
 * @param res
 * @returns
 */
export const registerUserWithoutGoogle = async (
  req: Request,
  res: Response
) => {
  const { password, ...userData }: UserData = req.body;
  const hashPassword = hashPasswordWithBcrypt(password);
  const user = new UserModel({ ...userData, password: hashPassword });
  try {
    user.save();
    const token = await signJWT(user.id!);
    return res.status(201).json({
      ok: true,
      msg: ' Successfully registered ',
      user: {
        id: user.id,
        username: user.id,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
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
