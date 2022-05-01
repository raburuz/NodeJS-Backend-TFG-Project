import mongoose from 'mongoose';
import { Template, TypeTemplate } from '../interfaces';

const { Schema } = mongoose;

const Template = new Schema<Template>({
  img: {
    type: String,
    required: [true, 'Image is required'],
  },
  isPremium: { type: Boolean, required: true },
  type: {
    type: String,
    enum: TypeTemplate,
    default: TypeTemplate.PROFILE,
    required: true,
  },
  isDeleted: { type: Boolean },
});

export const TemplateModel = mongoose.model('Template', Template);
