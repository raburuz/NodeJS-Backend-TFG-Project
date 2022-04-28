export interface Website {
  id?: string;
  subdomain: string;
  uid?: string;
  templateId: string;
  page: Page;
  components: Component[];
}

export interface Page {
  backgroundColor: string;
  width: number;
}

export interface Component {
  id: string;
  type: ContentType;
  order: number;
  label: string | string[];

  //optional propertys
  size?: number;
  color?: string;
  width?: number;
  height?: number;
  lineSpacing?: number;
  letterSpacing?: number;
  alignment?: TextAlign;
  appearance?: Appearance;
  margin?: PaddingAndMargin;
  padding?: PaddingAndMargin;
  weight?: Weight;
  backgroundColor?: string;
  border?: number;
  style?: BorderStyle | ListStyle;
  image?: Image;
  button?: Button;
}

export interface Button {
  url?: string;
  borderRadius?: number;
}

export interface Image {
  shape: ShapeImage;
  alt: string;
  url?: string;
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
  NORMAL = 'initial',
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
