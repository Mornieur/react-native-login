import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { IThemeButton } from './types';

export const GlobalButton = styled(TouchableOpacity)<IThemeButton>`
  width: 100%;
  height: 100%;
  max-width: ${({ maxWidth }: any) => maxWidth && `${maxWidth}px`};
  max-height: ${({ maxHeight }: any) => maxHeight && `${maxHeight}px`};
  background-color: ${({ backgroundColor }: any) => backgroundColor};
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ButtonChildren = styled.Text<IThemeButton>`
  color: ${({ color }: any) => color};
  display: flex;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;
