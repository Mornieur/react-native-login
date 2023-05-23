import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #000000;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextView = styled.Text`
  font-size: 30px;
  margin-bottom: 32px;
  font-weight: 600;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const InputContainer = styled.View`
  max-width: 300px;
  max-height: 300px;
  height: 100%;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
`;
