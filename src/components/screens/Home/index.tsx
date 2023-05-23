import React from 'react';
import * as S from './styles';
import { Input } from '../../../global/components/Input';
import { Button } from '../../../global/components/Button';

export function Home() {
  return (
    <S.Container>
      <S.TextView>Exemplo Mobile</S.TextView>
      <S.InputContainer>
        <Input
          maxWidth={300}
          maxHeight={50}
          backgroundColor="white"
          placeholder="digite seu email:"
          text="login"
          color="white"
        />
        <Input
          maxWidth={300}
          maxHeight={50}
          backgroundColor="white"
          placeholder="digite sua senha:"
          text="senha"
          color="white"
        />
      </S.InputContainer>
      <Button
        maxHeight={50}
        maxWidth={150}
        backgroundColor="#2a4999"
        color="#fff"
      >
        Entrar
      </Button>
    </S.Container>
  );
}
