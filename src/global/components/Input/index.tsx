import * as S from './styles';
import { IThemeInputView } from './types';
import { FC } from 'react';

export const Input: FC<IThemeInputView> = ({
  maxHeight,
  maxWidth,
  placeholder,
  backgroundColor,
  text,
  color,
}) => {
  return (
    <>
      <S.InputTitle color={color}>{text}:</S.InputTitle>
      <S.GlobalInput
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        backgroundColor={backgroundColor}
        placeholder={placeholder}
      />
    </>
  );
};
