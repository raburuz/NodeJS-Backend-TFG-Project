import { Request, Response } from 'express';
import { hashPasswordWithBcrypt, signJWT } from '../helpers';
import { Role, UpdateUser, UserData } from '../interfaces';
import { UserModel } from '../models';
import { WebsiteModel } from '../models/website';

/**
 * Login User
 * @param req
 * @param res
 *
 */

export const loginUser = async (req: Request, res: Response) => {
  const { username, email, id, role,img }: UserData = req.user!;
  console.log(req.user)
  const user = {
    id,
    username,
    email,
    role,
    img,
  };
  try {
    const token = await signJWT(id!);

    return res.status(200).json({
      ok: true,
      msg: 'Logging Success',
      user,
      img,
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
 * Register User
 * @param req
 * @param res
 * @returns
 */
export const registerUser = async (req: Request, res: Response) => {
  const { password, img ,...userData  }: UserData = req.body;
  console.log(img)
  const hashPassword = hashPasswordWithBcrypt(password);
  const role: Role = Role.NORMAL_USER_ROLE;
  const user = new UserModel({
    ...userData,
    password: hashPassword,
    role,
    img,
    isValidate: false,
    isDeleted: false,
  });
  try {
    user.save();
    const token = await signJWT(user.id!);
    return res.status(201).json({
      ok: true,
      msg: ' Has been registered Successfully ',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        img:user.img
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

/**
 * Route to Config User / self  {email, password}
 * @param req
 * @param res
 * @returns
 */
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(req.body);
  const {
    password,
    newPassword,
    role,
    img,
    isDeleted,
    ...newUserData
  }: UpdateUser = req.body;
  type Update = Omit<UpdateUser, 'role'>;

  const newUser: Update = newUserData;

  if (newPassword) {
    newUser.password = hashPasswordWithBcrypt(newPassword as string);
  }

  try {
    const user: UserData | null = await UserModel.findByIdAndUpdate<UserData>(
      id,
      {
        ...newUser,
      },
      { new: true }
    );

    const token = await signJWT(id);

    return res.status(200).json({
      ok: true,
      msg: ' Successfully Updated ',
      user: {
        id: user?.id,
        username: user?.username,
        email: user?.email,
        role: user?.role,
        img: user?.img
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

/**
 * Route to delete User /self {email, password} -> delete website
 * @param req
 * @param res
 * @returns
 */
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Promise.all([
      WebsiteModel.updateMany({ uid: id }, { isDeleted: true }),
      UserModel.findByIdAndUpdate(id, { isDeleted: true }),
    ]);

    return res.status(200).json({
      ok: true,
      msg: ' Successfully Deleted ',
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Sorry something was wrong, please contact with Admin',
    });
  }
};
