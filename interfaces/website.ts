export interface Website {
  id?: string;
  templateId: string;
  page: Page;
  components: {
    texts?: Text[];
    buttons?: Button[];
    images?: Image[];
    lists?: List[];
  };
}

export interface Page {
  backgroundColor: string;
  margin: PaddingAndMargin;
  padding: PaddingAndMargin;
  width: number;
}
export interface Text {
  type: ContentType.TEXT;
  order: number;
  label: string;
  size: number;
  color: string;
  width: number;
  lineSpacing: number;
  letterSpacing: number;
  alignment: TextAlign;
  appearance: Appearance;
  margin: PaddingAndMargin;
  weight: Weight;
}

export interface Button {
  type: ContentType.BUTTON;
  order: number;
  label: string;
  backgroundColor: string;
  color: string;
  width: number;
  height: number;
  borderRadius: number;
  border: number;
  style: BorderStyle;
  appearance: string;
}
export interface Image {
  type: ContentType.IMAGE;
  order: string;
  width: number;
  shape: ShapeImage;
  borderRadius: number;
  alignment: string;
  padding: PaddingAndMargin;
  margin: PaddingAndMargin;
  alt: string;
  url?: string;
}
export interface List {
  type: ContentType.LIST;
  order: number;
  style: ListStyle;
  margin: PaddingAndMargin;
  width: number;
  color: string;
  size: number;
  weight: string;
  appearance: string;
  lineSpacing: number;
  letterSpacing: number;
  text: string[];
}

export interface PaddingAndMargin {
  horizontal: number;
  vertical: number;
}

export enum ListStyle {
  NUMBERED = 'decimal',
  BULLETED = 'disc',
}
export enum Weight {
  NORMAL = 'normal',
  BOLD = 'bold',
}
export enum Appearance {
  NORMAL = '',
  CAPITALIZE = 'capitalize',
  UPPERCASE = 'uppercase',
  LOWERCASE = 'lowercase',
}
export enum TextAlign {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
  JUSTIFY = 'justify',
}

export enum BorderStyle {
  SOLID = 'solid',
  OUTLINE = 'outline',
}

export enum ContentType {
  TEXT = 'text',
  BUTTON = 'button',
  IMAGE = 'image',
  LIST = 'list',
}
export enum ShapeImage {
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
}
