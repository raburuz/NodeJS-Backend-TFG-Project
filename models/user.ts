import mongoose from 'mongoose';
import { Role, UserData } from '../interfaces';

const { Schema } = mongoose;

const User = new Schema<UserData>({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: String,
    enum: Role,
    default: Role.NORMAL_USER_ROLE,
    required: [true, 'Role is required'],
  },
  isValidate: {
    type: Boolean,
    default: false,
    required: [true, 'Validate Attribute is required'],
  },
  acceptPolicy: {
    type: Date,
    required: [true, 'Policy Attribute is required'],
  },
  img: String,
  isDeleted: { type: Boolean },
});

export const UserModel = mongoose.model('User', User);
