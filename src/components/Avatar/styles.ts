import styled from 'styled-components/native';

export const Container = styled.View``;

export const WrapperHeader = styled.View`
  margin-right: 10px;
  position: relative;
`;

export const Box = styled.View`
  border: 3px solid #2fa8ff;
  width: 60px;
  height: 60px;

  border-radius: 30px;
`;

export const WrapperHeaderIcon = styled.View`
  margin-top: 10px;
  width: 100px;
  height: 60px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonIconPencil = styled.TouchableOpacity`
  width: 28px;
  height: 28px;

  margin-left: 40px;
`;

export const ButtonOnline = styled.TouchableOpacity`
  width: 15px;
  height: 15px;

  border-radius: 7px;

  background-color: #7df420;
  position: absolute;
  margin-left: 42px;
  margin-top: 40px;
`;
