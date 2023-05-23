import { ReactNode, ChangeEvent } from 'react';

export interface IThemeButton {
  backgroundColor: string;
  maxHeight: number;
  maxWidth: number;
  text?: string;
  color?: string;
  children?: ReactNode;
}
