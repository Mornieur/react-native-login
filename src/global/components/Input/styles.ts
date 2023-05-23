import styled from 'styled-components/native';
import { IThemeInput, IThemeTitle } from './types';

export const Container = styled.View`
  width: 100%;
  display: flex;
`;

export const GlobalInput = styled.TextInput<IThemeInput>`
  width: 100%;
  height: 100%;
  max-width: ${({ maxWidth }: any) => maxWidth && `${maxWidth}px`};
  max-height: ${({ maxHeight }: any) => maxHeight && `${maxHeight}px`};
  background-color: ${({ backgroundColor }: any) => backgroundColor};
  border-radius: 10px;
  padding: 5px;
`;

export const InputTitle = styled.Text<IThemeTitle>`
  color: ${({ color }: any) => color};
  font-size: 22px;
  font-weight: 600;
  width: 100%;
  margin-left: 5px;
`;
