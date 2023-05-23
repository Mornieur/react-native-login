import { ReactNode, ChangeEvent } from 'react';

export interface IThemeInput {
  backgroundColor: string;
  maxHeight: number;
  maxWidth: number;
  text?: string;
  color?: string;
}

export interface IThemeInputView extends IThemeInput {
  placeholder: string;
}

export interface IThemeTitle {
  color: string;
}
