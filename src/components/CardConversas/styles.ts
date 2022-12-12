import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  /* border: 1px solid ${({ theme }) => theme.colors.header}; */
  height: 89px;

  padding: 14px;

  flex-direction: row;
  align-items: center;
`;

export const WrapperAvatar = styled.View`
  /* background-color: #fff; */
  /* width: 80px; */
  border: 3px solid #2fa8ff;
  width: 60px;
  height: 60px;

  border-radius: 30px;
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
export const WrapperConversa = styled.View`
  /* background-color: red; */
  width: 100%;
  margin-left: 10px;
  margin-top: -10px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_robot_bold};
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
`;
export const Messeger = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_robot_bold};
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
`;
