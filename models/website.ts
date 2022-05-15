import mongoose from 'mongoose';
import {
  Website,
  ListStyle,
  Weight,
  Appearance,
  TextAlign,
  BorderStyle,
  ContentType,
  ShapeImage,
} from '../interfaces';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const Website = new Schema<Website>({
  templateId: { type: String, required: true },
  subdomain: { type: String, required: true, unique: true, lowercase: true },
  uid: { type: ObjectId, required: true, ref: 'Users' },
  page: {
    backgroundColor: { type: String, default: '#ffffff', required: true },
    width: { type: Number, min: 0, max: 100, default: 0, required: true },
  },
  components: [
    {
      id: { type: String, required: true },
      type: { type: String, enum: ContentType, required: true },
      order: { type: Number, required: true },
      label: { type: String },

      size: { type: Number, min: 0.5, max: 7, default: 1 },
      color: { type: String, default: '#ffffff' },
      width: { type: Number, min: 0, max: 100, default: 100 },
      height: { type: Number, min: 0, max: 100, default: 100 },
      lineSpacing: { type: Number, min: 0.75, max: 2.5, default: 1 },
      letterSpacing: { type: Number, min: -0.5, max: 1.5, default: 0 },
      alignment: { type: String, enum: TextAlign, default: TextAlign.LEFT },
      appearance: {
        type: String,
        enum: Appearance,
        default: Appearance.NORMAL,
      },
      margin: {
        horizontal: { type: Number, default: 5 },
        vertical: { type: Number, default: 5 },
      },
      padding: {
        horizontal: { type: Number, default: 5 },
        vertical: { type: Number, default: 5 },
      },
      weight: {
        type: String,
        enum: Weight,
        default: Weight.NORMAL,
      },
      backgroundColor: { type: String, default: '#ffffff' },
      border: { type: Number, min: 1, max: 5, default: 1, required: true },
      style: {
        type: String,
        enum: { ...BorderStyle, ...ListStyle },
      },

      button: {
        borderRadius: {
          type: Number,
          min: 0,
          max: 2,
          default: 0,
        },
        url: { type: String },
      },

      image: {
        shape: {
          type: String,
          enum: ShapeImage,
          default: ShapeImage.RECTANGLE,
          required: true,
        },
        alt: { type: String },
        url: { type: String },
      },
    },
  ],
  isDeleted: {
    type: Boolean,
  },
});

export const WebsiteModel = mongoose.model('Website', Website);
