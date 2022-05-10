import { StyleHTMLAttributes } from 'react';

export interface BuildState {
  page: Page;
  components: TypoComponent[];
}

export interface Page {
  backgroundColor: string;
}

export interface TypoComponent {
  id: string;
  type: ContentType.TEXT;
  label: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  p?: boolean;

  sx?: StyleHTMLAttributes<HTMLStyleElement>;
}

export interface ListComponent {
  type: ContentType.LIST;
  id: string;
  items: string[];
}

export enum ContentType {
  TEXT = 'text',
  BUTTON = 'button',
  IMAGE = 'image',
  LIST = 'list',
}
