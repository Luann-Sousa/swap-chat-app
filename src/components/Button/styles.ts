import styled from 'styled-components/native';

export const WrapperButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.blueLight};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;
export const TitleButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_robot_semi_bold};
  color: ${({ theme }) => theme.colors.white};
`;
