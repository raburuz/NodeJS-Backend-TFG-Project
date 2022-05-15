export interface Template {
  img: string;
  isPremium: boolean;
  type: TypeTemplate;
  isDeleted?: boolean;
}

export enum TypeTemplate {
  PROFILE = 'profile',
  LANDING = 'landing',
  FORM = 'form',
  PORTFOLIO = 'portfolio',
  SECTIONED = 'Sectioned',
}
