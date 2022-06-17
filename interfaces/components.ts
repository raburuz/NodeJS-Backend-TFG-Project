import { StyleHTMLAttributes } from 'react';
export type Components = TypoComponent | ListComponent | ButtonComponent;

export interface Website {
  page: Page;
  components:
    | TypoComponent[]
    | ListComponent[]
    | ButtonComponent[]
    | ImageComponent[];
  active: any
}

export interface Page {
  backgroundColor: string;
  width: string;
  sx?: StyleHTMLAttributes<HTMLStyleElement>;
}

export interface Component {
  id: string;
  type: ContentType;
  order: number;
  sx?: StyleHTMLAttributes<HTMLStyleElement>;
}

export interface TypoComponent extends Component {
  label: string;
  tag: TextTags;
}

export interface ListComponent extends Component {
  items: string[];
}

export interface ButtonComponent extends Component {
  // url: string;
  label: string;
}

export interface ImageComponent extends Component {
  url: string;
  alt: string;
}

export type ContentType = 'text' | 'button' | 'image' | 'list';

export type TextTags = 'h1' | 'h2' | 'h3' | 'p';
