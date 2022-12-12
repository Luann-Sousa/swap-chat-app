import styled from 'styled-components/native';

export const WrapperButton = styled.TouchableOpacity`
  width: 180px;
  height: 26px;

  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.border};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TitleButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_robot_bold};
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  text-transform: uppercase;
`;
