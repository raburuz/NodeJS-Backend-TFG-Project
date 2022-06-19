import { Request, Response } from 'express';
import { signJWT } from '../helpers/jsonWebToken';
import { UserData } from '../interfaces/user';
import { UserModel } from '../models/user';

export const revalidateToken = async (req: Request, res: Response) => {
  const currentUser = req.currentUserId;

  try {
    const user: UserData | null = await UserModel.findById<UserData>(
      currentUser
    );
    if (user) {
      const { id, email, username, img,role } = user;
      const token = await signJWT(id!);

      return res.status(200).json({
        ok: true,
        msg: 'Logging Success',
        user: {
          id,
          email,
          username,
          role,
          img,
        },
        token,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
};
