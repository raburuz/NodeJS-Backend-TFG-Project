import mongoose from 'mongoose';
import { ContentType, ShapeImage } from '../interfaces/website';
import {
  Website,
  ListStyle,
  Weight,
  Appearance,
  TextAlign,
  BorderStyle,
} from '../interfaces/website';

const { Schema } = mongoose;

const Website = new Schema<Website>({
  templateId: { type: String, required: true },
  page: {
    backgroundColor: { type: String, default: '#ffffff', required: true },
    margin: {
      horizontal: { type: Number, default: 5, required: true },
      vertical: { type: Number, default: 5, required: true },
    },
    padding: {
      horizontal: { type: Number, default: 5, required: true },
      vertical: { type: Number, default: 5, required: true },
    },
    width: { type: Number, min: 0, max: 100, default: 0, required: true },
  },
  components: {
    texts: [
      {
        order: { type: Number, required: true },
        label: { type: String },
        size: { type: Number, min: 0.5, max: 7, default: 1, required: true },
        color: { type: String, default: '#ffffff', required: true },
        weight: {
          type: String,
          enum: Weight,
          default: Weight.NORMAL,
          required: true,
        },
        width: { type: Number, min: 0, max: 100, default: 20, required: true },
        lineSpacing: {
          type: Number,
          min: 0.75,
          max: 2.5,
          default: 1,
          required: true,
        },
        letterSpacing: {
          type: Number,
          min: -0.5,
          max: 1.5,
          default: 0,
          required: true,
        },
        alignment: {
          type: String,
          enum: TextAlign,
          default: TextAlign.LEFT,
          required: true,
        },
        appearance: {
          type: String,
          enum: Appearance,
          default: Appearance.NORMAL,
          required: true,
        },
        margin: {
          horizontal: { type: Number, default: 5, required: true },
          vertical: { type: Number, default: 5, required: true },
        },
        type: { type: String, default: ContentType.TEXT, required: true },
      },
    ],
    buttons: [
      {
        order: { type: Number, required: true },
        label: { type: String },
        backgroundColor: { type: String, default: '#ffffff', required: true },
        color: { type: String, default: '#ffffff', required: true },
        width: { type: Number, min: 0, max: 100, default: 100, required: true },
        height: {
          type: Number,
          min: 0,
          max: 100,
          default: 100,
          required: true,
        },
        borderRadius: {
          type: Number,
          min: 0,
          max: 2,
          default: 0,
          required: true,
        },
        border: { type: Number, min: 1, max: 5, default: 1, required: true },
        style: {
          type: String,
          enum: BorderStyle,
          default: BorderStyle.SOLID,
          required: true,
        },
        appearance: {
          type: String,
          enum: Appearance,
          default: Appearance.NORMAL,
          required: true,
        },
        type: { type: String, default: ContentType.BUTTON, required: true },
      },
    ],
    images: [
      {
        order: { type: Number, required: true },
        width: { type: Number, min: 0, max: 100, default: 100, required: true },
        shape: {
          type: Number,
          enum: ShapeImage,
          default: ShapeImage.RECTANGLE,
          required: true,
        },
        borderRadius: {
          type: Number,
          min: 0,
          max: 3,
          default: 0,
          required: true,
        },
        alignment: { type: String, required: true },
        padding: {
          horizontal: { type: Number, default: 5, required: true },
          vertical: { type: Number, default: 5, required: true },
        },
        margin: {
          horizontal: { type: Number, default: 5 },
          vertical: { type: Number, default: 5 },
        },
        alt: { type: String },
        url: { type: String },
        type: { type: String, default: ContentType.IMAGE, required: true },
      },
    ],
    lists: [
      {
        order: Number,
        width: { type: Number, min: 0, max: 100, default: 100, required: true },
        style: {
          type: String,
          enum: ListStyle,
          default: ListStyle.BULLETED,
          required: true,
        },
        margin: {
          horizontal: { type: Number, default: 5, required: true },
          vertical: { type: Number, default: 5, required: true },
        },
        color: { type: String, default: '#ffffff', required: true },
        size: { type: Number, min: 0.5, max: 7, default: 1, required: true },
        weight: {
          type: String,
          enum: Weight,
          default: Weight.NORMAL,
          required: true,
        },
        appearance: {
          type: String,
          enum: Appearance,
          default: Appearance.NORMAL,
          required: true,
        },
        lineSpacing: {
          type: Number,
          min: 0.75,
          max: 2.5,
          default: 1,
          required: true,
        },
        letterSpacing: {
          type: Number,
          min: -0.5,
          max: 1.5,
          default: 0,
          required: true,
        },
        type: { type: String, default: ContentType.LIST, required: true },
        text: [],
      },
    ],
  },
});

export const WebsiteModel = mongoose.model('Website', Website);
