import * as S from './styles';
import { FC } from 'react';
import { IThemeButton } from './types';

export const Button: FC<IThemeButton> = ({
  maxHeight,
  maxWidth,
  backgroundColor,
  children,
  color,
}) => {
  return (
    <>
      <S.GlobalButton
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        backgroundColor={backgroundColor}
        color={color}
      >
        <S.ButtonChildren color={color}>{children}</S.ButtonChildren>
      </S.GlobalButton>
    </>
  );
};
