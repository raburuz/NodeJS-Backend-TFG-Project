import { StyleHTMLAttributes } from 'react';

export interface Website {
  page: Page;
  components:
    | TypoComponent[]
    | ListComponent[]
    | ButtonComponent[]
    | ImageComponent[];
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
  id: string;
  items: string[];
}

export interface ButtonComponent extends Component {
  id: string;
  url: string;
}

export interface ImageComponent extends Component {
  id: string;
  url: string;
  alt: string;
}

export type ContentType = 'text' | 'button' | 'image' | 'list';

export type TextTags = 'h1' | 'h2' | 'h3' | 'p';
